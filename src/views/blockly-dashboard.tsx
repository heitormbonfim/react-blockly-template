import { useEffect, useState } from "react";
import BlocklyWorkspace from "../components/block-workspace";
import toolbox from "../components/tookbox";

export default function BlocklyDashboard() {
  const [generatedXml, setGeneratedXml] = useState<string>("");

  useEffect(() => {
    setGeneratedXml(`<xml xmlns="https://developers.google.com/blockly/xml"></xml>`);
  }, []);

  return (
    <div className="flex h-screen w-screen flex-col text-muted">
      <header className="bg-blue-600 p-4 text-white">
        <h1 className="text-2xl font-bold">Blockly</h1>
      </header>

      <div className="relative flex-1">
        <BlocklyWorkspace
          toolbox={toolbox}
          initialXml='<xml xmlns="https://developers.google.com/blockly/xml"></xml>'
        />
      </div>

      <div className="h-48 border-t-2 border-blue-600 bg-gray-100 p-4">
        <div className="mb-2 flex items-center">
          <span className="mr-4 text-lg font-semibold">Workspace XML:</span>
          <button
            className="rounded bg-blue-600 px-4 py-2 text-white hover:bg-blue-700"
            onClick={() => navigator.clipboard.writeText(generatedXml)}
          >
            Copy XML
          </button>
        </div>
        <pre className="h-32 overflow-auto rounded bg-white p-2 text-sm">{generatedXml}</pre>
      </div>
    </div>
  );
}
