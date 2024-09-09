/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { qrCodesGet } from "../funcs/qrCodesGet.js";
import { ClientSDK, RequestOptions } from "../lib/sdks.js";
import * as operations from "../models/operations/index.js";
import { unwrapAsync } from "../types/fp.js";

export class QRCodes extends ClientSDK {
  /**
   * Retrieve a QR code
   *
   * @remarks
   * Retrieve a QR code for a link.
   */
  async get(
    request: operations.GetQRCodeRequest,
    options?: RequestOptions,
  ): Promise<string> {
    return unwrapAsync(qrCodesGet(
      this,
      request,
      options,
    ));
  }
}
