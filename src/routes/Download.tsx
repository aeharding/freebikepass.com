import { Navigate } from "react-router-dom";
import Download from "../features/form/Download";
import { form } from "../features/form/formSlice";
import { useAppSelector } from "../hooks";

export default function DownloadRoute() {
  const formData = useAppSelector(form);

  if (!formData) return <Navigate to="/order/info" replace />;

  return <Download />;
}
