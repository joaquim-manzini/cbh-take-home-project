const { deterministicPartitionKey } = require("./dpk");

describe("deterministicPartitionKey", () => {
  it("Returns the literal '0' when given no input", () => {
    const trivialKey = deterministicPartitionKey();
    expect(trivialKey).toBe("0");
  });

  it("An event with no defined partitionKey should return c1802e6b9670927ebfddb7f67b3824642237361f07db35526c42c555ffd2dbe74156c366e1550ef8c0508a6cc796409a7194a59bba4d300a6182b483d315a862", () => {
    const trivialKey = deterministicPartitionKey({});
    expect(trivialKey).toBe("c1802e6b9670927ebfddb7f67b3824642237361f07db35526c42c555ffd2dbe74156c366e1550ef8c0508a6cc796409a7194a59bba4d300a6182b483d315a862");
  });

  it("An event with this c1802e6b9670927ebfddb7f67b3824642237361f07db35526c42c555ffd2dbe74156c366e1550ef8c0508a6cc796409a7194a59bba4d300a6182b483d315a862 as partitionKey should return itself", () => {
    const trivialKey = deterministicPartitionKey({ partitionKey: "c1802e6b9670927ebfddb7f67b3824642237361f07db35526c42c555ffd2dbe74156c366e1550ef8c0508a6cc796409a7194a59bba4d300a6182b483d315a862" });
    expect(trivialKey).toBe("c1802e6b9670927ebfddb7f67b3824642237361f07db35526c42c555ffd2dbe74156c366e1550ef8c0508a6cc796409a7194a59bba4d300a6182b483d315a862");
  });

  it(`An event with as object {agent: "Agent_1", shift: "Shift_A" } as partitionKey should return "{\"agent\":\"Agent_1\",\"shift\":\"Shift_A\"}"`, () => {
    const trivialKey = deterministicPartitionKey({ partitionKey: { agent: "Agent_1", shift: "Shift_A" } });
    expect(trivialKey).toBe("{\"agent\":\"Agent_1\",\"shift\":\"Shift_A\"}");
  });

  it(`An event with a string "{agent: "Agent_1", shift: "Shift_A" }" as partitionKey should return "{\"agent\":\"Agent_1\",\"shift\":\"Shift_A\"}"`, () => {
    const trivialKey = deterministicPartitionKey({ partitionKey: `{agent: "Agent_1", shift: "Shift_A" }` });
    expect(trivialKey).toBe("{agent: \"Agent_1\", shift: \"Shift_A\" }");
  });

  it(`An event with an escaped string "{\"agent\":\"Agent_1\",\"shift\":\"Shift_A\"}" as partitionKey should return "{\"agent\":\"Agent_1\",\"shift\":\"Shift_A\"}"`, () => {
    const trivialKey = deterministicPartitionKey({ partitionKey: `{\"agent\":\"Agent_1\",\"shift\":\"Shift_A\"}` });
    expect(trivialKey).toBe("{\"agent\":\"Agent_1\",\"shift\":\"Shift_A\"}");
  });

  it(`An event with an object {agent: "Agent_c1802e6b9670927ebfddb7f67b3824642237361f07db35526c42c5c1802e6b9670927ebfddb7f67b3824642237361f07db35526c42c5", 
  shift: "Shift_6e1550ef8c0508a6cc796409a7194a59bba4d300a6182b483d315a8626e1550ef8c0508a6cc796409a7194a59bba4d300a6182b483d315a862" } that gives a string 
  bigger than 256 chars should return "42b83a8dd8d66f6f554347c9593a75c498fa8c27ff405a84dcc5783603beba8778938e318eb78e064bc96572106de97955bbbe6f7a1a98b008083cded27e476f"`, () => {
    const trivialKey = deterministicPartitionKey({ partitionKey: {agent: "Agent_c1802e6b9670927ebfddb7f67b3824642237361f07db35526c42c5c1802e6b9670927ebfddb7f67b3824642237361f07db35526c42c5", shift: "Shift_6e1550ef8c0508a6cc796409a7194a59bba4d300a6182b483d315a8626e1550ef8c0508a6cc796409a7194a59bba4d300a6182b483d315a862" } });
    expect(trivialKey).toBe("42b83a8dd8d66f6f554347c9593a75c498fa8c27ff405a84dcc5783603beba8778938e318eb78e064bc96572106de97955bbbe6f7a1a98b008083cded27e476f");
  });
  
});
