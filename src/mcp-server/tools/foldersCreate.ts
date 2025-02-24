/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { foldersCreate } from "../../funcs/foldersCreate.js";
import * as operations from "../../models/operations/index.js";
import { formatResult, ToolDefinition } from "../tools.js";

const args = {
  request: operations.CreateFolderRequestBody$inboundSchema.optional(),
};

export const tool$foldersCreate: ToolDefinition<typeof args> = {
  name: "folders_create",
  description: `Create a new folder

Create a new folder for the authenticated workspace.`,
  args,
  tool: async (client, args, ctx) => {
    const [result, apiCall] = await foldersCreate(
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
