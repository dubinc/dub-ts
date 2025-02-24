/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { partnersUpsertLink } from "../../funcs/partnersUpsertLink.js";
import * as operations from "../../models/operations/index.js";
import { formatResult, ToolDefinition } from "../tools.js";

const args = {
  request: operations.UpsertPartnerLinkRequestBody$inboundSchema.optional(),
};

export const tool$partnersUpsertLink: ToolDefinition<typeof args> = {
  name: "partners_upsert-link",
  description: `Upsert a link for a partner

Upsert a link for a partner that is enrolled in your program. If a link with the same URL already exists, return it (or update it if there are any changes). Otherwise, a new link will be created.`,
  args,
  tool: async (client, args, ctx) => {
    const [result, apiCall] = await partnersUpsertLink(
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
