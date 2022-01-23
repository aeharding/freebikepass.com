import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Download, { FormPayload } from "../features/form/Download";

export default function DownloadRoute() {
  const navigate = useNavigate();
  const [data, setData] = useState<FormPayload | undefined>();

  useEffect(() => {
    if (!sessionStorage["form"]) {
      navigate("/order/info", { replace: true });
      return;
    }

    setData(JSON.parse(sessionStorage["form"]));

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (!data) return <></>;

  return <Download data={data} />;
}
