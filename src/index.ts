import {
  createOpenAICompatible,
  type OpenAICompatibleProvider,
} from '@ai-sdk/openai-compatible';

export const BF16_BASE_URL = 'https://api.bf16.ai/v1';

export type Bf16ChatModelId =
  | 'bf16/auto'
  | 'bf16/auto:fast'
  | 'bf16/auto:coding'
  | 'bf16/auto:reasoning'
  | 'bf16/deepseek-v4.1-flash-1017-exl3-2.5bpw'
  | 'deepseek/deepseek-v4.1-flash-uncensored'
  | 'deepseek/deepseek-v4.1-flash-uncensored-fast'
  | 'zai-org/glm-5.3-flash-uncensored'
  | 'zai-org/glm-5.3-uncensored'
  | 'moonshotai/kimi-k3.1-pro-uncensored'
  | (string & {});

export interface Bf16ProviderSettings {
  /** API key for bf16.ai. Defaults to process.env.BF16_API_KEY. */
  apiKey?: string;
  /** Override base URL. Defaults to https://api.bf16.ai/v1. */
  baseURL?: string;
  /** Optional custom HTTP headers sent with every request. */
  headers?: Record<string, string>;
  /** Optional custom fetch implementation. */
  fetch?: typeof fetch;
}

export type Bf16Provider = OpenAICompatibleProvider<
  Bf16ChatModelId,
  never,
  never,
  never
>;

/**
 * Create a bf16.ai provider instance for the Vercel AI SDK.
 */
export function createBf16(options: Bf16ProviderSettings = {}): Bf16Provider {
  const apiKey = options.apiKey ?? process.env.BF16_API_KEY;
  return createOpenAICompatible<Bf16ChatModelId, never, never, never>({
    name: 'bf16',
    baseURL: options.baseURL ?? BF16_BASE_URL,
    apiKey,
    headers: options.headers,
    fetch: options.fetch,
  });
}

/**
 * Default bf16.ai provider instance using process.env.BF16_API_KEY.
 */
export const bf16: Bf16Provider = createBf16();
