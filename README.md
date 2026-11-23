# bf16-ai-sdk-provider

Official [Vercel AI SDK](https://ai-sdk.dev) provider for [bf16.ai](https://bf16.ai) — 1M-context uncensored open-weight LLMs (DeepSeek V4.1 Flash, GLM-5.3, GLM-5.3 Flash, Kimi K3.1 Pro) with prompt caching, tool calling, structured outputs, and strict Zero Data Retention (ZDR).

## Install

```bash
npm install bf16-ai-sdk-provider ai
# or install directly from GitHub
npm install github:BF16-AI/bf16-ai-sdk-provider ai
```

## Quick Start

Set your API key from [bf16.ai/dashboard/keys](https://bf16.ai/dashboard/keys):

```bash
export BF16_API_KEY=your-api-key
```

```ts
import { bf16 } from 'bf16-ai-sdk-provider';
import { generateText } from 'ai';

const { text } = await generateText({
  model: bf16('deepseek/deepseek-v4.1-flash-uncensored-fast'),
  prompt: 'Write a concise TypeScript retry helper with exponential backoff.',
});

console.log(text);
```

### Custom Configuration

```ts
import { createBf16 } from 'bf16-ai-sdk-provider';

const customBf16 = createBf16({
  apiKey: process.env.BF16_API_KEY,
  headers: {
    'X-BF16-Max-Price-Per-M-Output': '1.50',
  },
});
```

## Live Models

Query the live public catalog anytime at `GET https://api.bf16.ai/v1/models` or visit [bf16.ai/models](https://bf16.ai/models):

- `deepseek/deepseek-v4.1-flash-uncensored-fast` (1M context, vision, tools, reasoning)
- `deepseek/deepseek-v4.1-flash-uncensored` (1M context, vision, tools, reasoning)
- `bf16/deepseek-v4.1-flash-1017-exl3-2.5bpw` (524K context, vision, tools, reasoning)
- `zai-org/glm-5.3-flash-uncensored` (1M context, vision, tools, reasoning)
- `zai-org/glm-5.3-uncensored` (1M context, tools, reasoning)
- `moonshotai/kimi-k3.1-pro-uncensored` (1M context, vision, tools, reasoning)
- Smart routers: `bf16/auto`, `bf16/auto:fast`, `bf16/auto:coding`, `bf16/auto:reasoning`

## Links

- Website: https://bf16.ai
- Docs: https://bf16.ai/docs
- Pricing: https://bf16.ai/pricing
- Cost Calculator: https://bf16.ai/tools/cost-calculator
