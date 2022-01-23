import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Form from "../features/form/Form";
import { agreed } from "../features/form/formSlice";
import { useAppSelector } from "../hooks";

// test data:
// {
//   name: "Test User",
//   phone: "608 111 1111",
//   street: "123 Test St",
//   cityStateZip: "Madison, WI 55555",
//   email: "test@example.com",
// }

export default function Info() {
  const hasAgreed = useAppSelector(agreed);
  const navigate = useNavigate();

  useEffect(() => {
    if (!hasAgreed) navigate("/order", { replace: true });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return <Form />;
}
