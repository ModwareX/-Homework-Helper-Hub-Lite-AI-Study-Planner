export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Only POST requests are allowed" });
  }

  const { tasks } = req.body;

  if (!tasks || tasks.length === 0) {
    return res.status(400).json({ error: "No tasks provided" });
  }

  const prompt = `
You are a helpful study planner for students.

Create a simple weekly study plan based on these tasks:
${JSON.stringify(tasks, null, 2)}

Rules:
Keep the language simple.
Prioritize tasks with earlier due dates.
Spend more time on harder tasks.
Do not include completed tasks.
Return a clear day-by-day study plan.
`;

  const response = await fetch(
    `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${process.env.GEMINI_API_KEY}`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        contents: [
          {
            parts: [{ text: prompt }],
          },
        ],
      }),
    }
  );

  const data = await response.json();

  const plan =
    data?.candidates?.[0]?.content?.parts?.[0]?.text ||
    "Could not generate a study plan.";

  res.status(200).json({ plan });
}