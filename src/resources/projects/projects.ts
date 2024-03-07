// File generated from our OpenAPI spec by Stainless.

import * as Core from 'dub/core';
import { APIResource } from 'dub/resource';
import * as ProjectsAPI from 'dub/resources/projects/projects';
import * as TagsAPI from 'dub/resources/projects/tags';

export class Projects extends APIResource {
  tags: TagsAPI.Tags = new TagsAPI.Tags(this._client);

  /**
   * Retrieve a project for the authenticated user.
   */
  retrieve(
    params: ProjectRetrieveParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<ProjectRetrieveResponse> {
    const { projectSlug = this._client.projectSlug } = params;
    return this._client.get(`/projects/${projectSlug}`, options);
  }

  /**
   * Retrieve a list of projects for the authenticated user.
   */
  list(options?: Core.RequestOptions): Core.APIPromise<ProjectListResponse> {
    return this._client.get('/projects', options);
  }
}

export interface ProjectRetrieveResponse {
  /**
   * The unique ID of the project.
   */
  id: string;

  /**
   * The date and time when the billing cycle starts for the project.
   */
  billingCycleStart: number;

  /**
   * The date and time when the project was created.
   */
  createdAt: string;

  /**
   * The domains of the project.
   */
  domains: Array<ProjectRetrieveResponse.Domain>;

  /**
   * The domains limit of the project.
   */
  domainsLimit: number;

  /**
   * The links limit of the project.
   */
  linksLimit: number;

  /**
   * The links usage of the project.
   */
  linksUsage: number;

  /**
   * The logo of the project.
   */
  logo: string | null;

  /**
   * The name of the project.
   */
  name: string;

  /**
   * The plan of the project.
   */
  plan: 'free' | 'pro' | 'business' | 'business plus' | 'business extra' | 'business max' | 'enterprise';

  /**
   * The slug of the project.
   */
  slug: string;

  /**
   * The Stripe ID of the project.
   */
  stripeId: string | null;

  /**
   * The tags limit of the project.
   */
  tagsLimit: number;

  /**
   * The usage of the project.
   */
  usage: number;

  /**
   * The usage limit of the project.
   */
  usageLimit: number;

  /**
   * The role of the authenticated user in the project.
   */
  users: Array<ProjectRetrieveResponse.User>;

  /**
   * The users limit of the project.
   */
  usersLimit: number;
}

export namespace ProjectRetrieveResponse {
  export interface Domain {
    /**
     * The domain of the project.
     */
    slug: string;
  }

  export interface User {
    /**
     * The role of the authenticated user in the project.
     */
    role: 'owner' | 'member';
  }
}

export type ProjectListResponse = Array<ProjectListResponse.ProjectListResponseItem>;

export namespace ProjectListResponse {
  export interface ProjectListResponseItem {
    /**
     * The unique ID of the project.
     */
    id: string;

    /**
     * The date and time when the billing cycle starts for the project.
     */
    billingCycleStart: number;

    /**
     * The date and time when the project was created.
     */
    createdAt: string;

    /**
     * The domains of the project.
     */
    domains: Array<ProjectListResponseItem.Domain>;

    /**
     * The domains limit of the project.
     */
    domainsLimit: number;

    /**
     * The links limit of the project.
     */
    linksLimit: number;

    /**
     * The links usage of the project.
     */
    linksUsage: number;

    /**
     * The logo of the project.
     */
    logo: string | null;

    /**
     * The name of the project.
     */
    name: string;

    /**
     * The plan of the project.
     */
    plan: 'free' | 'pro' | 'business' | 'business plus' | 'business extra' | 'business max' | 'enterprise';

    /**
     * The slug of the project.
     */
    slug: string;

    /**
     * The Stripe ID of the project.
     */
    stripeId: string | null;

    /**
     * The tags limit of the project.
     */
    tagsLimit: number;

    /**
     * The usage of the project.
     */
    usage: number;

    /**
     * The usage limit of the project.
     */
    usageLimit: number;

    /**
     * The role of the authenticated user in the project.
     */
    users: Array<ProjectListResponseItem.User>;

    /**
     * The users limit of the project.
     */
    usersLimit: number;
  }

  export namespace ProjectListResponseItem {
    export interface Domain {
      /**
       * The domain of the project.
       */
      slug: string;
    }

    export interface User {
      /**
       * The role of the authenticated user in the project.
       */
      role: 'owner' | 'member';
    }
  }
}

export interface ProjectRetrieveParams {
  /**
   * The slug for the project to retrieve. E.g. for `app.dub.co/acme`, the
   * projectSlug is `acme`.
   */
  projectSlug?: string;
}

export namespace Projects {
  export import ProjectRetrieveResponse = ProjectsAPI.ProjectRetrieveResponse;
  export import ProjectListResponse = ProjectsAPI.ProjectListResponse;
  export import ProjectRetrieveParams = ProjectsAPI.ProjectRetrieveParams;
  export import Tags = TagsAPI.Tags;
}
