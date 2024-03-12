// File generated from our OpenAPI spec by Stainless.

import Dub from 'dub';
import { Response } from 'node-fetch';

const dub = new Dub({
  token: 'My Token',
  projectSlug: 'dub_project_slug',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource bulk', () => {
  test('create: only required params', async () => {
    const responsePromise = dub.links.bulk.create({
      projectSlug: 'x',
      body: [{ url: 'https://example.com' }, { url: 'https://example.com' }, { url: 'https://example.com' }],
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('create: required and optional params', async () => {
    const response = await dub.links.bulk.create({
      projectSlug: 'x',
      body: [
        {
          domain: 'string',
          key: 'string',
          prefix: 'string',
          url: 'https://example.com',
          archived: true,
          expiresAt: '2019-12-27T18:11:19.117Z',
          password: 'string',
          proxy: true,
          title: 'string',
          description: 'string',
          image: 'string',
          rewrite: true,
          ios: 'string',
          android: 'string',
          geo: { foo: 'string' },
          publicStats: true,
          tagId: 'string',
          tagIds: 'string',
          comments: 'string',
        },
        {
          domain: 'string',
          key: 'string',
          prefix: 'string',
          url: 'https://example.com',
          archived: true,
          expiresAt: '2019-12-27T18:11:19.117Z',
          password: 'string',
          proxy: true,
          title: 'string',
          description: 'string',
          image: 'string',
          rewrite: true,
          ios: 'string',
          android: 'string',
          geo: { foo: 'string' },
          publicStats: true,
          tagId: 'string',
          tagIds: 'string',
          comments: 'string',
        },
        {
          domain: 'string',
          key: 'string',
          prefix: 'string',
          url: 'https://example.com',
          archived: true,
          expiresAt: '2019-12-27T18:11:19.117Z',
          password: 'string',
          proxy: true,
          title: 'string',
          description: 'string',
          image: 'string',
          rewrite: true,
          ios: 'string',
          android: 'string',
          geo: { foo: 'string' },
          publicStats: true,
          tagId: 'string',
          tagIds: 'string',
          comments: 'string',
        },
      ],
    });
  });
});
