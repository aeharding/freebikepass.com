import { Outlet } from "react-router-dom";
import Wizard from "../features/wizard/Wizard";

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

export default function StepsOutlet() {
  return (
    <>
      <Wizard steps={steps} />

      <Outlet />
    </>
  );
}
