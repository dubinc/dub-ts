/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { customersCreate } from "../funcs/customersCreate.js";
import { customersDelete } from "../funcs/customersDelete.js";
import { customersGet } from "../funcs/customersGet.js";
import { customersList } from "../funcs/customersList.js";
import { customersUpdate } from "../funcs/customersUpdate.js";
import { ClientSDK, RequestOptions } from "../lib/sdks.js";
import * as operations from "../models/operations/index.js";
import { unwrapAsync } from "../types/fp.js";

export class Customers extends ClientSDK {
  /**
   * Get a list of customers
   *
   * @remarks
   * Get a list of customers for the authenticated workspace.
   */
  async list(
    options?: RequestOptions,
  ): Promise<Array<operations.ResponseBody>> {
    return unwrapAsync(customersList(
      this,
      options,
    ));
  }

  /**
   * Create a customer
   *
   * @remarks
   * Create a customer for the authenticated workspace.
   */
  async create(
    request?: operations.CreateCustomerRequestBody | undefined,
    options?: RequestOptions,
  ): Promise<operations.CreateCustomerResponseBody> {
    return unwrapAsync(customersCreate(
      this,
      request,
      options,
    ));
  }

  /**
   * Get a customer
   *
   * @remarks
   * Get a customer by ID for the authenticated workspace.
   */
  async get(
    request: operations.GetCustomerRequest,
    options?: RequestOptions,
  ): Promise<operations.GetCustomerResponseBody> {
    return unwrapAsync(customersGet(
      this,
      request,
      options,
    ));
  }

  /**
   * Update a customer
   *
   * @remarks
   * Update a customer for the authenticated workspace.
   */
  async update(
    id: string,
    requestBody?: operations.UpdateCustomerRequestBody | undefined,
    options?: RequestOptions,
  ): Promise<operations.UpdateCustomerResponseBody> {
    return unwrapAsync(customersUpdate(
      this,
      id,
      requestBody,
      options,
    ));
  }

  /**
   * Delete a customer
   *
   * @remarks
   * Delete a customer from a workspace.
   */
  async delete(
    id: string,
    options?: RequestOptions,
  ): Promise<operations.DeleteCustomerResponseBody> {
    return unwrapAsync(customersDelete(
      this,
      id,
      options,
    ));
  }
}
