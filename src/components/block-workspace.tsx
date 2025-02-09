import { useRef, useContext } from "react";
import { BlocklyWorkspace as BlocklyComponent } from "react-blockly";
import * as Blockly from "blockly";
import { BlocklyContext } from "../contexts/context";
import { javascriptGenerator } from "blockly/javascript";

interface BlocklyWorkspaceProps {
  initialXml?: string;
  toolbox?: Blockly.utils.toolbox.ToolboxDefinition;
}

const BlocklyWorkspace = ({ initialXml, toolbox }: BlocklyWorkspaceProps) => {
  const { setCode, setXml } = useContext(BlocklyContext);
  const isFirstLoad = useRef(true);

  const workspaceDidChange = (workspace: Blockly.WorkspaceSvg) => {
    if (isFirstLoad.current) {
      const savedState = localStorage.getItem("workspaceState");
      if (savedState) {
        const state = JSON.parse(savedState);
        Blockly.serialization.workspaces.load(state, workspace);
      }
      isFirstLoad.current = false;
    }

    const generatedCode = javascriptGenerator.workspaceToCode(workspace);
    setCode(generatedCode);

    const generatedXml = Blockly.Xml.workspaceToDom(workspace);
    const xml = Blockly.Xml.domToPrettyText(generatedXml);
    setXml(xml);

    const state = Blockly.serialization.workspaces.save(workspace);
    localStorage.setItem("workspaceState", JSON.stringify(state));
  };

  return (
    <BlocklyComponent
      toolboxConfiguration={toolbox}
      initialXml={initialXml}
      workspaceConfiguration={{
        grid: {
          spacing: 20,
          length: 3,
          colour: "#0002",
          snap: true,
        },
        zoom: {
          controls: true,
          wheel: true,
          startScale: 1,
          maxScale: 3,
          minScale: 0.3,
          scaleSpeed: 1.1,
        },
        sounds: true,
      }}
      className="h-full w-full"
      onWorkspaceChange={workspaceDidChange}
    />
  );
};

export default BlocklyWorkspace;
