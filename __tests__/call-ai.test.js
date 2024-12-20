const callAi = require("../call-ai");

// Mock de OpenAI pour isoler les tests
jest.mock("openai", () => {
  return {
    OpenAIApi: jest.fn().mockImplementation(() => ({
      chat: {
        completions: {
          create: jest.fn().mockResolvedValue({
            choices: [{ message: { content: "Réponse simulée de l'IA" } }],
          }),
        },
      },
    })),
  };
});

describe("callAi function", () => {
  it("should return a string when provided with valid messages", async () => {
    const messages = [
      {
        role: "system",
        content: "Tu es une IA amicale.",
      },
    ];

    const response = await callAi(messages);
    expect(typeof response).toBe("string");
    expect(response).toBe("Réponse simulée de l'IA");
  });

  it("should throw an error when messages is undefined", async () => {
    await expect(callAi()).rejects.toThrow(
      "Les messages ne peuvent pas être vides."
    );
  });
});
