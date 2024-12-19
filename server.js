import express from "express";
import "dotenv/config";
import cors from "cors";

const app = express();
const PORT = 3002;
app.use(cors({ credentials: true, origin: true }));

app.get("/api/kee-alive", (req, res) => {
  res.status(200).send("Server is running");
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
