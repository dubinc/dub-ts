/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { domainsDelete } from "../../funcs/domainsDelete.js";
import { formatResult, ToolDefinition } from "../tools.js";

const args = {
  slug: z.string(),
};

export const tool$domainsDelete: ToolDefinition<typeof args> = {
  name: "domains_delete",
  description: `Delete a domain

Delete a domain from a workspace. It cannot be undone. This will also delete all the links associated with the domain.`,
  args,
  tool: async (client, args, ctx) => {
    const [result, apiCall] = await domainsDelete(
      client,
      args.slug,
      { fetchOptions: { signal: ctx.signal } },
    ).$inspect();

    if (!result.ok) {
      return {
        content: [{ type: "text", text: result.error.message }],
        isError: true,
      };
    }

    const value = result.value;

    return formatResult(value, apiCall);
  },
};
