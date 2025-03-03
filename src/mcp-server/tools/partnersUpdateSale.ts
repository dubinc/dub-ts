/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { partnersUpdateSale } from "../../funcs/partnersUpdateSale.js";
import * as operations from "../../models/operations/index.js";
import { formatResult, ToolDefinition } from "../tools.js";

const args = {
  request: operations.UpdatePartnerSaleRequestBody$inboundSchema.optional(),
};

export const tool$partnersUpdateSale: ToolDefinition<typeof args> = {
  name: "partners_update-sale",
  description: `Update a sale for a partner.

Update an existing sale amount. This is useful for handling refunds (partial or full) or fraudulent sales.`,
  args,
  tool: async (client, args, ctx) => {
    const [result, apiCall] = await partnersUpdateSale(
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
