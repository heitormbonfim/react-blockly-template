import { useContext } from "react";
import BlocklyWorkspace from "../components/block-workspace";
import toolbox from "../components/tookbox";
import { BlocklyContext } from "../contexts/context";
import { Button } from "../components/ui/button";

export default function BlocklyDashboard() {
  const { xml, code } = useContext(BlocklyContext);

  return (
    <div className="flex h-screen w-full flex-col text-muted">
      <header className="bg-card p-2 text-foreground">
        <h1 className="text-2xl font-bold">Blockly</h1>
      </header>

      <div className="relative flex h-full w-full flex-col md:flex-row">
        <div className="max-[60%] h-full w-full">
          <BlocklyWorkspace toolbox={toolbox} initialXml={xml} />
        </div>
        <div className="h-full w-full bg-muted p-4 text-foreground md:max-w-[40%]">
          <div className="mb-8">
            <div className="mb-2 flex items-center">
              <span className="mr-4 text-lg font-semibold">Workspace XML:</span>
              <Button size="sm" onClick={() => navigator.clipboard.writeText(xml)}>
                Copy
              </Button>
            </div>
            <pre className="h-32 overflow-auto rounded bg-white p-2 text-sm text-muted">{xml}</pre>
          </div>

          <div>
            <div className="mb-2 flex items-center">
              <span className="mr-4 text-lg font-semibold">Workspace JavaScript:</span>
              <Button size="sm" onClick={() => navigator.clipboard.writeText(code)}>
                Copy
              </Button>
            </div>
            <pre className="h-32 overflow-auto rounded bg-white p-2 text-sm text-muted">{code}</pre>
          </div>
        </div>
      </div>
    </div>
  );
}
