import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Download, { FormPayload } from "../features/form/Download";
import Form from "../features/form/Form";

// test data:
// {
//   name: "Test User",
//   phone: "608 111 1111",
//   street: "123 Test St",
//   cityStateZip: "Madison, WI 55555",
//   email: "test@example.com",
// }

export default function Order() {
  const navigate = useNavigate();
  const [data, setData] = useState<FormPayload | undefined>();

  useEffect(() => {
    if (!sessionStorage["agreed"]) navigate("/agree", { replace: true });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (!data) return <Form onSubmit={(data) => setData(data)} />;

  return <Download data={data} />;
}
