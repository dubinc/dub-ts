/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { foldersList } from "../../funcs/foldersList.js";
import * as operations from "../../models/operations/index.js";
import { formatResult, ToolDefinition } from "../tools.js";

const args = {
  request: operations.ListFoldersRequest$inboundSchema.optional(),
};

export const tool$foldersList: ToolDefinition<typeof args> = {
  name: "folders_list",
  description: `Retrieve a list of folders

Retrieve a list of folders for the authenticated workspace.`,
  args,
  tool: async (client, args, ctx) => {
    const [result, apiCall] = await foldersList(
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
