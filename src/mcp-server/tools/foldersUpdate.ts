/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { foldersUpdate } from "../../funcs/foldersUpdate.js";
import * as operations from "../../models/operations/index.js";
import { formatResult, ToolDefinition } from "../tools.js";

const args = {
  id: z.string(),
  requestBody: operations.UpdateFolderRequestBody$inboundSchema.optional(),
};

export const tool$foldersUpdate: ToolDefinition<typeof args> = {
  name: "folders_update",
  description: `Update a folder

Update a folder in the workspace.`,
  args,
  tool: async (client, args, ctx) => {
    const [result, apiCall] = await foldersUpdate(
      client,
      args.id,
      args.requestBody,
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
