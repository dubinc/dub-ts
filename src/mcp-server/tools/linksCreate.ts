/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { linksCreate } from "../../funcs/linksCreate.js";
import * as operations from "../../models/operations/index.js";
import { formatResult, ToolDefinition } from "../tools.js";

const args = {
  request: operations.CreateLinkRequestBody$inboundSchema.optional(),
};

export const tool$linksCreate: ToolDefinition<typeof args> = {
  name: "links_create",
  description: `Create a new link

Create a new link for the authenticated workspace.`,
  args,
  tool: async (client, args, ctx) => {
    const [result, apiCall] = await linksCreate(
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
