/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { linksCreateMany } from "../../funcs/linksCreateMany.js";
import * as operations from "../../models/operations/index.js";
import { formatResult, ToolDefinition } from "../tools.js";

const args = {
  request: z.array(operations.RequestBody$inboundSchema).optional(),
};

export const tool$linksCreateMany: ToolDefinition<typeof args> = {
  name: "links_create-many",
  description: `Bulk create links

Bulk create up to 100 links for the authenticated workspace.`,
  args,
  tool: async (client, args, ctx) => {
    const [result, apiCall] = await linksCreateMany(
      client,
      args.request,
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
