import { Dub } from "../src"
import * as errors from "../src/models/errors";
import { expect, test, describe, beforeAll, afterAll } from 'vitest'

const token  = "2CrvvRvTZjHxqx2VsDTzmelI";
const workspaceId = "ws_cluau40mx0000dxrfeq9g5ids";

const dub = new Dub({ token,  workspaceId });

describe('Links', () => {
  beforeAll(async () => {
    const links = await dub.links.list({});
    const promises = links.map((link) => dub.links.delete({ linkId: link.id }))
    await Promise.allSettled(promises);
  })

  const url = "https://github.com/dubinc/dub"
  const key = Math.random().toString(36).substring(7);
  const domain = "kiran.localhost"

  // https://dub.co/docs/api-reference/endpoint/create-a-new-link
  test('create link', async () => {
    const link = await dub.links.create({url, domain});

    expect(link).toBeDefined();
    expect(link.url).toBe(url);
    expect(link.key).toBe(key);
    expect(link.workspaceId).toBe(workspaceId);
  });

  // https://dub.co/docs/api-reference/endpoint/retrieve-a-list-of-links
  test('get all links', async () => {
    const links = await dub.links.list({});

    expect(links).toBeDefined();
    expect(links.length).toEqual(1);
    expect(links[0].url).toBe(url);
    expect(links[0].key).toBe(key);
    expect(links[0].domain).toBe(domain);
    expect(links[0].workspaceId).toBe(workspaceId);
  });

  // https://dub.co/docs/api-reference/endpoint/retrieve-a-link
  test('get link info', async () => {
    const link = await dub.links.get({ domain, key });

    expect(link).toBeDefined();
    expect(link.url).toBe(url);
    expect(link.key).toBe(key);
    expect(link.domain).toBe(domain);
    expect(link.workspaceId).toBe(workspaceId);
  });

  // https://dub.co/docs/api-reference/endpoint/edit-a-link
  // test('update link', async () => {
  //   const link = await dub.links.get({ domain, key });

  //   const updatedLink = await dub.links.update({
  //     linkId: link.id,
  //     requestBody: {
  //       comments: "This is a test link",
  //       url: ""
  //     }
  //   });
  // })
})