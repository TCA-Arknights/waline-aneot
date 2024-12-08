const Waline = require('@waline/vercel');
const GPTReviewer = require('waline-plugin-llm-reviewer');

module.exports = Waline({
  plugins: [
    GPTReviewer({
        openaiBaseUrl: process.env.OPENAI_BASE_URL,
        openaiModel: process.env.OPENAI_MODEL,
        openaiApiKey: process.env.OPENAI_API_KEY,
        openaiPrompt: process.env.OPENAI_PROMPT,
    })
  ]
});
