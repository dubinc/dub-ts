/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { DubCore } from "../core.js";
import { SDKOptions } from "../lib/config.js";
import type { ConsoleLogger } from "./console-logger.js";
import { MCPScope, mcpScopes } from "./scopes.js";
import { createRegisterTool } from "./tools.js";
import { tool$analyticsRetrieve } from "./tools/analyticsRetrieve.js";
import { tool$customersCreate } from "./tools/customersCreate.js";
import { tool$customersDelete } from "./tools/customersDelete.js";
import { tool$customersGet } from "./tools/customersGet.js";
import { tool$customersList } from "./tools/customersList.js";
import { tool$customersUpdate } from "./tools/customersUpdate.js";
import { tool$domainsCreate } from "./tools/domainsCreate.js";
import { tool$domainsDelete } from "./tools/domainsDelete.js";
import { tool$domainsList } from "./tools/domainsList.js";
import { tool$domainsUpdate } from "./tools/domainsUpdate.js";
import { tool$embedTokensCreate } from "./tools/embedTokensCreate.js";
import { tool$eventsList } from "./tools/eventsList.js";
import { tool$foldersCreate } from "./tools/foldersCreate.js";
import { tool$foldersDelete } from "./tools/foldersDelete.js";
import { tool$foldersList } from "./tools/foldersList.js";
import { tool$foldersUpdate } from "./tools/foldersUpdate.js";
import { tool$linksCount } from "./tools/linksCount.js";
import { tool$linksCreate } from "./tools/linksCreate.js";
import { tool$linksCreateMany } from "./tools/linksCreateMany.js";
import { tool$linksDelete } from "./tools/linksDelete.js";
import { tool$linksDeleteMany } from "./tools/linksDeleteMany.js";
import { tool$linksGet } from "./tools/linksGet.js";
import { tool$linksList } from "./tools/linksList.js";
import { tool$linksUpdate } from "./tools/linksUpdate.js";
import { tool$linksUpdateMany } from "./tools/linksUpdateMany.js";
import { tool$linksUpsert } from "./tools/linksUpsert.js";
import { tool$metatagsGet } from "./tools/metatagsGet.js";
import { tool$partnersAnalytics } from "./tools/partnersAnalytics.js";
import { tool$partnersCreate } from "./tools/partnersCreate.js";
import { tool$partnersCreateLink } from "./tools/partnersCreateLink.js";
import { tool$partnersUpsertLink } from "./tools/partnersUpsertLink.js";
import { tool$qrCodesGet } from "./tools/qrCodesGet.js";
import { tool$tagsCreate } from "./tools/tagsCreate.js";
import { tool$tagsDelete } from "./tools/tagsDelete.js";
import { tool$tagsList } from "./tools/tagsList.js";
import { tool$tagsUpdate } from "./tools/tagsUpdate.js";
import { tool$trackLead } from "./tools/trackLead.js";
import { tool$trackSale } from "./tools/trackSale.js";
import { tool$workspacesGet } from "./tools/workspacesGet.js";
import { tool$workspacesUpdate } from "./tools/workspacesUpdate.js";

export function createMCPServer(deps: {
  logger: ConsoleLogger;
  scopes?: MCPScope[] | undefined;
  serverURL?: string | undefined;
  token?: SDKOptions["token"] | undefined;
  serverIdx?: SDKOptions["serverIdx"] | undefined;
}) {
  const server = new McpServer({
    name: "Dub",
    version: "0.56.0",
  });

  const client = new DubCore({
    token: deps.token,
    serverURL: deps.serverURL,
    serverIdx: deps.serverIdx,
  });
  const scopes = new Set(deps.scopes ?? mcpScopes);
  const tool = createRegisterTool(deps.logger, server, client, scopes);

  tool(tool$linksCreate);
  tool(tool$linksList);
  tool(tool$linksCount);
  tool(tool$linksGet);
  tool(tool$linksUpdate);
  tool(tool$linksDelete);
  tool(tool$linksCreateMany);
  tool(tool$linksUpdateMany);
  tool(tool$linksDeleteMany);
  tool(tool$linksUpsert);
  tool(tool$analyticsRetrieve);
  tool(tool$eventsList);
  tool(tool$tagsCreate);
  tool(tool$tagsList);
  tool(tool$tagsUpdate);
  tool(tool$tagsDelete);
  tool(tool$foldersCreate);
  tool(tool$foldersList);
  tool(tool$foldersUpdate);
  tool(tool$foldersDelete);
  tool(tool$domainsCreate);
  tool(tool$domainsList);
  tool(tool$domainsUpdate);
  tool(tool$domainsDelete);
  tool(tool$trackLead);
  tool(tool$trackSale);
  tool(tool$customersList);
  tool(tool$customersCreate);
  tool(tool$customersGet);
  tool(tool$customersUpdate);
  tool(tool$customersDelete);
  tool(tool$partnersCreate);
  tool(tool$partnersCreateLink);
  tool(tool$partnersUpsertLink);
  tool(tool$partnersAnalytics);
  tool(tool$workspacesGet);
  tool(tool$workspacesUpdate);
  tool(tool$embedTokensCreate);
  tool(tool$qrCodesGet);
  tool(tool$metatagsGet);

  return server;
}
