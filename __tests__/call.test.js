const callAi = require("../call");

describe("callAi function", () => {
  it("should return a string", async () => {
    const text = "Hello";

    const response = await callAi(text);
    expect(typeof response).toBe("string");
  });
});
