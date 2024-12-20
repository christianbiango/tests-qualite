const env = require("dotenv/config");
const { OpenAIApi } = require("openai");

const callAi = async (messages) => {
  const openai = new OpenAIApi({ apiKey: env.OPENAI_API_KEY });

  if (!messages) {
    throw new Error("Les messages ne peuvent pas être vides.");
  }

  try {
    const response = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages,
      temperature: 1,
      max_tokens: 2048,
      top_p: 1,
      frequency_penalty: 0,
      presence_penalty: 0,
    });

    return response.choices[0].message.content;
  } catch (error) {
    console.error("Erreur lors de la communication avec OpenAI :", error);
    throw error; // Propagation de l'erreur pour une gestion plus flexible
  }
};

module.exports = callAi;
