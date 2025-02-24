/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { metatagsGet } from "../../funcs/metatagsGet.js";
import * as operations from "../../models/operations/index.js";
import { formatResult, ToolDefinition } from "../tools.js";

const args = {
  request: operations.GetMetatagsRequest$inboundSchema,
};

export const tool$metatagsGet: ToolDefinition<typeof args> = {
  name: "metatags_get",
  description: `Retrieve the metatags for a URL

Retrieve the metatags for a URL.`,
  args,
  tool: async (client, args, ctx) => {
    const [result, apiCall] = await metatagsGet(
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
