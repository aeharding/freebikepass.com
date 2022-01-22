import { Link } from "react-router-dom";
import Button from "../shared/Button";

export default function Done() {
  return (
    <>
      <h3>You're all set!</h3>

      <p>Happy riding! 🚲 If you like this, please share!</p>

      <Link to="/">
        <Button fullWidth>Done</Button>
      </Link>
    </>
  );
}
