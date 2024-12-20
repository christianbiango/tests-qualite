const callAi = require("../call-ai");

describe("callAi function", () => {
  it("should return a string", async () => {
    const messages = [
      {
        role: "system",
        content: "Tu es une IA amicale.",
      },
    ];

    const response = await callAi(messages);
    expect(typeof response).toBe("string");
  });
});
