// File generated from our OpenAPI spec by Stainless.

import Dub from 'dub';
import { Response } from 'node-fetch';

const dub = new Dub({ baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010' });

describe('resource projects', () => {
  test('retrieve', async () => {
    const responsePromise = dub.projects.retrieve('string');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('retrieve: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(dub.projects.retrieve('string', { path: '/_stainless_unknown_path' })).rejects.toThrow(
      Dub.NotFoundError,
    );
  });

  test('list', async () => {
    const responsePromise = dub.projects.list();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('list: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(dub.projects.list({ path: '/_stainless_unknown_path' })).rejects.toThrow(Dub.NotFoundError);
  });
});
