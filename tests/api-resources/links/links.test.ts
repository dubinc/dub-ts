// File generated from our OpenAPI spec by Stainless.

import Dub from 'dub';
import { Response } from 'node-fetch';

const dub = new Dub({
  token: 'My Token',
  projectSlug: 'dub_project_slug',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource links', () => {
  test('create: only required params', async () => {
    const responsePromise = dub.links.create({ projectSlug: 'string', url: 'string' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('create: required and optional params', async () => {
    const response = await dub.links.create({
      projectSlug: 'string',
      url: 'string',
      android: 'string',
      archived: true,
      comments: 'string',
      description: 'string',
      domain: 'string',
      expiresAt: '2019-12-27T18:11:19.117Z',
      geo: { foo: 'https://example.com' },
      image: 'string',
      ios: 'string',
      key: 'string',
      password: 'string',
      proxy: true,
      publicStats: true,
      rewrite: true,
      tagId: 'string',
      title: 'string',
    });
  });

  test('update: only required params', async () => {
    const responsePromise = dub.links.update('string', { projectSlug: 'string' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('update: required and optional params', async () => {
    const response = await dub.links.update('string', {
      projectSlug: 'string',
      android: 'string',
      archived: true,
      comments: 'string',
      description: 'string',
      domain: 'string',
      expiresAt: '2019-12-27T18:11:19.117Z',
      geo: { foo: 'https://example.com' },
      image: 'string',
      ios: 'string',
      key: 'string',
      password: 'string',
      proxy: true,
      publicStats: true,
      rewrite: true,
      tagId: 'string',
      title: 'string',
      url: 'string',
    });
  });

  test('list: only required params', async () => {
    const responsePromise = dub.links.list({ projectSlug: 'string' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('list: required and optional params', async () => {
    const response = await dub.links.list({
      projectSlug: 'string',
      domain: 'string',
      page: 0,
      search: 'string',
      showArchived: true,
      sort: 'createdAt',
      tagId: 'string',
      userId: 'string',
    });
  });

  test('deleteLink: only required params', async () => {
    const responsePromise = dub.links.deleteLink('string', { projectSlug: 'string' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('deleteLink: required and optional params', async () => {
    const response = await dub.links.deleteLink('string', { projectSlug: 'string' });
  });
});
