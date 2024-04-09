import { Dub } from "../src"
import * as errors from "../src/models/errors";
import { expect, test, describe, beforeAll, afterAll } from 'vitest'

const token  = "tZ6ECyDkA21K9jrMn8EOkajh";
const workspaceId = "ws_clur5mtu10004jb3oqz83lpxo";

const domain = "a.com"
const url = "https://github.com/dubinc/dub"
const key = Math.random().toString(36).substring(7);

const dub = new Dub({ token,  workspaceId });

describe('SDK Methods', () => {
  beforeAll(async () => {
    const links = await dub.links.list({});
    const promises = links.map((link) => dub.links.delete(link.id))
    await Promise.allSettled(promises);
  })


  test('add tags', async () => {
    const link = await dub.links.create({url, key, domain});

    expect(link).toBeDefined();
    expect(link.url).toBe(url);
    expect(link.key).toBe(key);
    expect(link.workspaceId).toBe(workspaceId);
  });


  test('create link', async () => {
    const link = await dub.links.create({url, key, domain});

    expect(link).toBeDefined();
    expect(link.url).toBe(url);
    expect(link.key).toBe(key);
    expect(link.workspaceId).toBe(workspaceId);
  });

  test('get link info', async () => {
    const link = await dub.links.get({ domain, key });

    expect(link).toBeDefined();
    expect(link.url).toBe(url);
    expect(link.key).toBe(key);
    expect(link.domain).toBe(domain);
    expect(link.workspaceId).toBe(workspaceId);
  });

  test('retrieve links', async () => {
    const links = await dub.links.list({});

    expect(links).toBeDefined();
    expect(links.length).toEqual(1);
    expect(links[0].url).toBe(url);
    expect(links[0].key).toBe(key);
    expect(links[0].domain).toBe(domain);
    expect(links[0].workspaceId).toBe(workspaceId);
  });

  test('update link', async () => {
    const link = await dub.links.get({ domain, key });

    const updatedLink = await dub.links.update(link.id, {
      comments: "This is a test link",
      url,
    });

    expect(updatedLink).toBeDefined();
    expect(updatedLink.url).toBe(url);
    expect(updatedLink.key).toBe(key);
    expect(updatedLink.domain).toBe(domain);
    expect(updatedLink.workspaceId).toBe(workspaceId);
    expect(updatedLink.comments).toBe("This is a test link");
  })

  test('number of links', async () => {
    const count = await dub.links.count({});

    expect(count).toBeDefined();
    expect(count).toBe(1);
  })

  test('delete link', async () => {
    const link = await dub.links.get({ domain, key });

    const deletedLink = await dub.links.delete(link.id);

    expect(deletedLink).toBeDefined();
    expect(deletedLink.id).toBe(link.id);

    try {
    // Check if the link is deleted
      await dub.links.get({ domain, key });
    } catch (error) {
      expect(error).toBeInstanceOf(errors.FourHundredAndFour);
    }
  })

  test('bulk create link', async () => {
    const key1 = Math.random().toString(36).substring(7);
    const key2 = Math.random().toString(36).substring(7);

    const links = await dub.links.bulkCreate([{url, domain, key: key1}, {url, domain, key: key2}]);

    expect(links).toBeDefined();
    expect(links.length).toEqual(2);
    expect(links[0].url).toBe(url);
    expect(links[0].key).toBe(key1);
    expect(links[0].domain).toBe(domain);
    expect(links[0].workspaceId).toBe(workspaceId)
    expect(links[1].url).toBe(url);
    expect(links[1].key).toBe(key2);
    expect(links[1].domain).toBe(domain);
    expect(links[1].workspaceId).toBe(workspaceId)
  });
})