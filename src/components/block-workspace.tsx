import { BlocklyWorkspace as BlocklyComponent } from "react-blockly";
import * as Blockly from "blockly";

interface BlocklyWorkspaceProps {
  initialXml?: string;
  toolbox?: Blockly.utils.toolbox.ToolboxDefinition;
}

const BlocklyWorkspace = ({ initialXml, toolbox }: BlocklyWorkspaceProps) => {
  const workspaceDidChange = (workspace: Blockly.WorkspaceSvg) => {
    Blockly.Xml.workspaceToDom(workspace);
  };

  return (
    <BlocklyComponent
      toolboxConfiguration={toolbox}
      initialXml={initialXml}
      workspaceConfiguration={{
        grid: {
          spacing: 20,
          length: 3,
          colour: "#ccc",
          snap: true,
        },
      }}
      className="h-full w-full"
      onWorkspaceChange={workspaceDidChange}
    />
  );
};

export default BlocklyWorkspace;
