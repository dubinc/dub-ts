/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { partnersAnalytics } from "../../funcs/partnersAnalytics.js";
import * as operations from "../../models/operations/index.js";
import { formatResult, ToolDefinition } from "../tools.js";

const args = {
  request: operations.RetrievePartnerAnalyticsRequest$inboundSchema,
};

export const tool$partnersAnalytics: ToolDefinition<typeof args> = {
  name: "partners-analytics",
  description: `Retrieve analytics for a partner

Retrieve analytics for a partner within a program. The response type vary based on the \`groupBy\` query parameter.`,
  args,
  tool: async (client, args, ctx) => {
    const [result, apiCall] = await partnersAnalytics(
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
