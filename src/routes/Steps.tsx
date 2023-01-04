import { Suspense } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import FacebookInAppBrowserWarning from "../FacebookInAppBrowserWarning";
import Wizard from "../features/wizard/Wizard";
import { isFacebookApp } from "../helpers/ua";
import Loading from "../shared/Loading";
import Agree from "./Agree";
import Done from "./Done";
import DownloadRoute from "./Download";
import Info from "./Info";
import Mail from "./Mail";

const steps = [
  {
    route: "agree",
    name: "Qualification",
    mobileName: "Qualify",
  },
  {
    route: "info",
    name: "Provide your info",
    mobileName: "Info",
  },
  {
    route: "download",
    name: "Download your form",
    mobileName: "Download",
  },
  {
    route: "mail",
    name: "Email your form",
    mobileName: "Email",
  },
];

export default function Steps() {
  return (
    <Suspense fallback={<Loading />}>
      <Routes>
        <Route path="done" element={<Done />} />
        <Route path="*" element={<StepsWithWizard />} />
      </Routes>
    </Suspense>
  );
}

function StepsWithWizard() {
  const fb = isFacebookApp();

  return (
    <>
      <Wizard steps={steps} />

      {fb ? (
        <FacebookInAppBrowserWarning />
      ) : (
        <Routes>
          <Route path="" element={<Navigate replace to="agree" />} />

          <Route path="agree" element={<Agree />} />
          <Route path="info" element={<Info />} />
          <Route path="download" element={<DownloadRoute />} />
          <Route path="mail" element={<Mail />} />
        </Routes>
      )}
    </>
  );
}
