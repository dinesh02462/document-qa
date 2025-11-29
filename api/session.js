import OpenAI from "openai";

const openai = new OpenAI({
  apiKey: process.env.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,
});

export default async function handler(req, res) {
  try {
    const session = await openai.chat.sessions.create({
      model: "gpt-4.1-mini",
      workflow_id: process.env.wf_692987ceb27481909eba7d7fe04e614c09ed22b5dcfd4668,
    });

    res.status(200).json(session);
  } catch (error) {
    console.error("Error creating session:", error);
    res.status(500).json({ error: "Failed to create session" });
  }
}
