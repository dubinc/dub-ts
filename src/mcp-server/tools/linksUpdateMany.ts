/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { linksUpdateMany } from "../../funcs/linksUpdateMany.js";
import * as operations from "../../models/operations/index.js";
import { formatResult, ToolDefinition } from "../tools.js";

const args = {
  request: operations.BulkUpdateLinksRequestBody$inboundSchema.optional(),
};

export const tool$linksUpdateMany: ToolDefinition<typeof args> = {
  name: "links-update-many",
  description: `Bulk update links

Bulk update up to 100 links with the same data for the authenticated workspace.`,
  args,
  tool: async (client, args, ctx) => {
    const [result, apiCall] = await linksUpdateMany(
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
