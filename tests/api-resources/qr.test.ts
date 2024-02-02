// File generated from our OpenAPI spec by Stainless.

import Dub from 'dub';

const dub = new Dub({
  token: 'My Token',
  projectSlug: 'dub_project_slug',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource qr', () => {
  test('retrieve: required and optional params', async () => {
    const response = await dub.qr.retrieve({
      url: 'string',
      bgColor: 'string',
      fgColor: 'string',
      includeMargin: true,
      level: 'L',
      size: 0,
    });
  });
});
