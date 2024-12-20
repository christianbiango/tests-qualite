const env = require("dotenv/config");
const OpenAIApi = require("openai");

const callAi = async (messages) => {
  const openai = new OpenAIApi({ apiKey: env.OPENAI_API_KEY });
  try {
    const response = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: messages,
      temperature: 1,
      max_tokens: 2048,
      top_p: 1,
      frequency_penalty: 0,
      presence_penalty: 0,
    });

    const message = response.choices[0].message.content;

    return message;
  } catch (error) {
    console.error(error);
    return "Une erreur est survenue lors de la communication avec OpenAI.";
  }
};
module.exports = callAi;
