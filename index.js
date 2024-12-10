const Waline = require('@waline/vercel');
const LLMReviewer = require('waline-plugin-llm-reviewer');

module.exports = Waline({
  plugins: [
    LLMReviewer({
        LLMApiUrl: process.env.LLM_API_URL,
        LLMModel: process.env.LLM_MODEL,
        LLMApiKey: process.env.LLM_API_KEY,
        LLMPrompt: process.env.LLM_PROMPT,
        LLMReason: process.env.LLM_REASON,
    })
  ]
});
