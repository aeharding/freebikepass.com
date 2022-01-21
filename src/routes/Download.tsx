import { PDFDocument, StandardFonts, rgb } from "pdf-lib";
import fontkit from "@pdf-lib/fontkit";
import { useEffect, useState } from "react";
import * as api from "../services/api";

const whereabouts: { from: string; to: string }[] = [
  { from: "From", to: "To" },
  { from: "From_2", to: "To_2" },
  { from: "Form_3", to: "To_3" },
];

const labelMap: Record<keyof FormPayload, string> = {
  name: "NAME",
  phone: "TELEPHONE",
  address: "STREET ADDRESS",
  cityStateZip: "CITY, STATE, ZIP CODE",
  email: "E-MAIL",
};

export interface FormPayload {
  name: string;
  phone: string;
  address: string;
  cityStateZip: string;
  email: string;
}

interface DownloadProps {
  payload: FormPayload;
}

export default function Download() {
  const [pdfResultUrl, setPdfResultUrl] = useState<string | undefined>();

  useEffect(() => {
    load();
  }, []);

  async function load() {
    // This should be a Uint8Array or ArrayBuffer
    // This data can be obtained in a number of different ways
    // If your running in a Node environment, you could use fs.readFile()
    // In the browser, you could make a fetch() call and use res.arrayBuffer()
    const existingPdfBytes = await api.getForm();

    // Load a PDFDocument from the existing PDF bytes
    const pdfDoc = await PDFDocument.load(existingPdfBytes);

    // Fetch the Ubuntu font
    const fontUrl = "https://pdf-lib.js.org/assets/ubuntu/Ubuntu-R.ttf";
    const fontBytes = await fetch(fontUrl).then((res) => res.arrayBuffer());

    // Embed the Ubuntu font
    pdfDoc.registerFontkit(fontkit);
    const ubuntuFont = await pdfDoc.embedFont(fontBytes);

    const form = pdfDoc.getForm();

    const f = form.getFields().forEach((f) => console.log(f.getName()));
    // const nameField = form.getTextField(f.getName());
    // console.log(f.getName());

    // nameField.setText("hello, world!");

    // // Get the first page of the document
    // const pages = pdfDoc.getPages();
    // const firstPage = pages[0];

    // // Get the width and height of the first page
    // const { width, height } = firstPage.getSize();

    // // Draw a string of text diagonally across the first page
    // firstPage.drawText("This text was added with JavaScript!", {
    //   x: 5,
    //   y: height / 2 + 300,
    //   size: 50,
    //   font: helveticaFont,
    //   color: rgb(0.95, 0.1, 0.1),
    // });

    form.updateFieldAppearances(ubuntuFont);

    // Serialize the PDFDocument to bytes (a Uint8Array)
    const pdfBytes = await pdfDoc.save();

    const blob = new Blob([pdfBytes.buffer]);

    setPdfResultUrl(URL.createObjectURL(blob));
  }

  if (!pdfResultUrl) return <>Loading...</>;

  return (
    <>
      <a href={pdfResultUrl} download="capcitytrailform.pdf">
        Download!
      </a>
    </>
  );
}
