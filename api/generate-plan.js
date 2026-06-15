import Anthropic from "@anthropic-ai/sdk";

const anthropic = new Anthropic();

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Only POST requests are allowed" });
  }

  const { tasks, availability } = req.body;

  if (!tasks || tasks.length === 0) {
    return res.status(400).json({ error: "No tasks provided" });
  }

  const prompt = `
You are a helpful study planner for students.

Create a simple weekly study plan based on these tasks:
${JSON.stringify(tasks, null, 2)}

Here is when the student is available to study each day:
${JSON.stringify(availability || {}, null, 2)}

Rules:
Keep the language simple.
Prioritize tasks with earlier due dates.
Spend more time on harder tasks.
Only schedule study time during the hours the student is available.
Do not include completed tasks.
Return a clear day-by-day study plan.
`;

  try {
    const message = await anthropic.messages.create({
      model: "claude-haiku-4-5",
      max_tokens: 2000,
      messages: [{ role: "user", content: prompt }],
    });

    const plan =
      message.content
        .filter((block) => block.type === "text")
        .map((block) => block.text)
        .join("\n") || "Could not generate a study plan.";

    res.status(200).json({ plan });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Could not generate a study plan." });
  }
}
