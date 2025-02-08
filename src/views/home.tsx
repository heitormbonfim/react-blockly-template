import { Link } from "react-router-dom";
import { Button } from "../components/ui/button";

export default function Home() {
  return (
    <div className="flex flex-col gap-4 min-h-screen items-center justify-center">
      <h1 className="text-4xl font-bold">Hello, This is a Blockly Template</h1>
      <Link to="/blockly">
        <Button variant="link">Go to Blockly</Button>
      </Link>
    </div>
  );
}
