const {deterministicPartitionKey} = require("./dpk");

console.log(deterministicPartitionKey({ partitionKey: { partitionKey: `{agent: "Agent_1", shift: "Shift_A" }` } }));
