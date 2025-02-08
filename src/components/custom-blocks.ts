import * as Blockly from "blockly";
import { javascriptGenerator } from "blockly/javascript";

Blockly.Blocks["custom_greeting"] = {
  init() {
    this.appendDummyInput()
      .appendField("Greet")
      .appendField(new Blockly.FieldTextInput("World"), "NAME");
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour(160);
    this.setTooltip("Prints a greeting message");
  },
};

javascriptGenerator.forBlock["custom_greeting"] = (block: Blockly.Block) => {
  const name = block.getFieldValue("NAME");
  return `console.log('Hello, ${name}!');\n`;
};
