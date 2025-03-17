/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { qrCodesGet } from "../../funcs/qrCodesGet.js";
import * as operations from "../../models/operations/index.js";
import { formatResult, ToolDefinition } from "../tools.js";

const args = {
  request: operations.GetQRCodeRequest$inboundSchema,
};

export const tool$qrCodesGet: ToolDefinition<typeof args> = {
  name: "QR-codes-get",
  description: `Retrieve a QR code

Retrieve a QR code for a link.`,
  args,
  tool: async (client, args, ctx) => {
    const [result, apiCall] = await qrCodesGet(
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
