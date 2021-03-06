import { useEffect, useState } from "react";
import * as api from "../../services/api";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload, faFilePdf } from "@fortawesome/free-solid-svg-icons";
import styled from "@emotion/styled/macro";
import Button from "../../shared/Button";
import { useNavigate } from "react-router-dom";
import { useAppSelector } from "../../hooks";
import { pdf } from "./formSlice";
import Loading from "../../shared/Loading";

const DownloadLinkContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const DownloadLink = styled.a`
  display: inline-flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-decoration: none;

  padding: 1em;
  border-radius: 50%;
  aspect-ratio: 1;
  background: #0073bb;

  svg {
    margin: 0.25em;
    font-size: 2em;
  }
`;

export const staticFields = {
  From: "Home",
  To: "Work, school, shopping or other necessary activities",
  From_2: "Work, school, shopping or other necessary activities",
  To_2: "Home",
  From_3: "Work, school, shopping or other necessary activities",
  To_3: "Work, school, shopping or other necessary activities",
};

const labelMap: Record<keyof PdfPayload, string> = {
  name: "NAME",
  phone: "TELEPHONE",
  street: "STREET ADDRESS",
  cityStateZip: "CITY, STATE, ZIP CODE",
  email: "E-MAIL",
};

export interface FormPayload {
  name: string;
  phone: string;
  street: string;
  city: string;
  state: string;
  zip: string;
  email: string;
}

export interface PdfPayload {
  name: string;
  phone: string;
  street: string;
  cityStateZip: string;
  email: string;
}

export default function Download() {
  const navigate = useNavigate();
  const formData = useAppSelector(pdf);
  const [pdfResultUrl, setPdfResultUrl] = useState<string | undefined>();
  const [downloaded, setDownloaded] = useState(false);

  useEffect(() => {
    load();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  async function load() {
    if (!formData) throw new Error("formData not defined");

    // Load everything in parallel
    const [
      existingPdfBytes,
      { PDFDocument, rgb },
      { default: fontkit },
      cedarvilleFontBytes,
      latoFontBytes,
    ] = await Promise.all([
      api.getForm(),
      import("pdf-lib"),
      import("@pdf-lib/fontkit"),
      fetch("/CedarvilleCursive-Regular.ttf").then((res) => res.arrayBuffer()),
      fetch("/Lato-Regular.ttf").then((res) => res.arrayBuffer()),
    ]);

    // Load a PDFDocument from the existing PDF bytes
    const pdfDoc = await PDFDocument.load(existingPdfBytes);

    pdfDoc.registerFontkit(fontkit);
    const cedarvilleFont = await pdfDoc.embedFont(cedarvilleFontBytes);
    const latoFont = await pdfDoc.embedFont(latoFontBytes);

    const form = pdfDoc.getForm();

    /**
     * Below is workaround for https://github.com/Hopding/pdf-lib/issues/1152
     */
    const rawUpdateFieldAppearances = form.updateFieldAppearances.bind(form);
    form.updateFieldAppearances = () => rawUpdateFieldAppearances(latoFont);
    // (End workaround)

    Object.entries(staticFields).forEach(([fieldName, value]) => {
      const field = form.getTextField(fieldName);

      field.setFontSize(8);
      field.setText(value);
    });

    Object.entries(labelMap).forEach(([key, fieldName]) => {
      const field = form.getTextField(fieldName);

      field.setText(formData[key as keyof FormPayload]);
    });

    form.flatten();

    // Get the first page of the document
    const pages = pdfDoc.getPages();
    const firstPage = pages[0];

    // Get the width and height of the first page
    const { width, height } = firstPage.getSize();

    // Draw a string of text diagonally across the first page
    firstPage.drawText(formData.name, {
      x: width / 2 + 25,
      y: height / 2 - 97,
      size: 15,
      font: cedarvilleFont,
      color: rgb(0, 0.15, 1),
    });

    // Serialize the PDFDocument to bytes (a Uint8Array)
    const pdfBytes = await pdfDoc.save();

    const blob = new Blob([pdfBytes.buffer]);

    setPdfResultUrl(URL.createObjectURL(blob));
  }

  function go() {
    if (!downloaded) return;

    navigate("../mail");
  }

  if (!pdfResultUrl) return <Loading />;

  if (!formData) throw new Error("formData not defined");

  return (
    <div>
      <h3>Step 3: Download</h3>

      <p>
        Click the button below to download your completed form. In the next
        step, you will be attaching it to an email to send.
      </p>

      <DownloadLinkContainer>
        <DownloadLink
          href={pdfResultUrl}
          download={`BikeTrailApp-${new Date().getFullYear()}-${formData.name
            .slice(0, 25)
            .replaceAll(" ", "")}.pdf`}
          type="application/octet-stream"
          target="_blank"
          onClick={() => setDownloaded(true)}
        >
          <div>
            <FontAwesomeIcon icon={faFilePdf} />
            <FontAwesomeIcon icon={faDownload} />
          </div>
          <div>Download!</div>
        </DownloadLink>
      </DownloadLinkContainer>

      <br />

      <Button fullWidth disabled={!downloaded} onClick={go}>
        Continue
      </Button>
    </div>
  );
}
