const toolbox = {
  kind: "categoryToolbox",
  contents: [
    {
      kind: "category",
      name: "custom",
      colour: "#FF8C00",
      contents: [{ kind: "block", type: "custom_greeting" }],
    },
    {
      kind: "category",
      name: "Logic",
      colour: "#5C81A6",
      contents: [
        { kind: "block", type: "controls_if" },
        { kind: "block", type: "logic_compare" },
      ],
    },
    {
      kind: "category",
      name: "Loops",
      colour: "#5CA65B",
      contents: [{ kind: "block", type: "controls_whileUntil" }],
    },
    {
      kind: "category",
      name: "Math",
      colour: "#5B67A6",
      contents: [
        { kind: "block", type: "math_number" },
        { kind: "block", type: "math_arithmetic" },
      ],
    },
  ],
};

export default toolbox;
