import test from 'node:test';
import assert from 'node:assert/strict';
import { BF16_BASE_URL, bf16, createBf16 } from '../dist/index.js';

test('exports default bf16 baseURL and provider factory', () => {
  assert.equal(BF16_BASE_URL, 'https://api.bf16.ai/v1');
  assert.equal(typeof bf16, 'function');
  const client = createBf16({ apiKey: 'sk-test-placeholder' });
  const model = client('deepseek/deepseek-v4.1-flash-uncensored-fast');
  assert.equal(model.modelId, 'deepseek/deepseek-v4.1-flash-uncensored-fast');
  assert.equal(model.provider, 'bf16.chat');
});
