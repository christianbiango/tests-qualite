import express from "express";
import "dotenv/config";
import cors from "cors";
import OpenAIApi from "openai";

const app = express();
const PORT = 3002;
app.use(cors({ credentials: true, origin: true }));

const openai = new OpenAIApi({ apiKey: process.env.OPENAI_API_KEY });

app.get("/api/kee-alive", (req, res) => {
  res.status(200).send("Server is running");
});

app.post("/api/test-ai", async (req, res) => {
  const { text } = req.query;
  console.log(req.body);
  try {
    const response = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: text,
      temperature: 1,
      max_tokens: 2048,
      top_p: 1,
      frequency_penalty: 0,
      presence_penalty: 0,
    });

    const message = response.choices[0].message.content;

    return res.status(200).json({ message });
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .send("Une erreur est survenue lors de la communication avec OpenAI.");
  }
  return res.status(200).json({ ok: "ok" });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
