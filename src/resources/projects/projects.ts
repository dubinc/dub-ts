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
  retrieve(params: ProjectRetrieveParams, options?: Core.RequestOptions): Core.APIPromise<ProjectDetails> {
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

export interface Project {
  /**
   * The unique ID of the project.
   */
  id?: string;

  /**
   * The date and time when the billing cycle starts for the project.
   */
  billingCycleStart?: number | null;

  /**
   * The date and time when the project was created.
   */
  createdAt?: string;

  /**
   * The logo of the project.
   */
  logo?: string | null;

  /**
   * The name of the project.
   */
  name?: string;

  /**
   * The plan of the project.
   */
  plan?: string;

  /**
   * The slug of the project.
   */
  slug?: string;

  /**
   * The Stripe ID of the project.
   */
  stripeId?: string | null;

  /**
   * The usage of the project.
   */
  usage?: number;

  /**
   * The usage limit of the project.
   */
  usageLimit?: number;
}

export interface ProjectDetails extends Project {
  /**
   * The domains of the project.
   */
  domains?: Array<ProjectDetails.Domain>;

  /**
   * The role of the authenticated user in the project.
   */
  users?: Array<ProjectDetails.User>;
}

export namespace ProjectDetails {
  /**
   * The domains of the project.
   */
  export interface Domain {
    /**
     * The domain of the project.
     */
    slug?: string;
  }

  /**
   * The role of the authenticated user in the project.
   */
  export interface User {
    /**
     * The role of the authenticated user in the project.
     */
    role?: string;
  }
}

export type ProjectListResponse = Array<Project>;

export interface ProjectRetrieveParams {
  /**
   * The slug for the project to retrieve. E.g. for `app.dub.co/acme`, the
   * projectSlug is `acme`.
   */
  projectSlug?: string;
}

export namespace Projects {
  export import Project = ProjectsAPI.Project;
  export import ProjectDetails = ProjectsAPI.ProjectDetails;
  export import ProjectListResponse = ProjectsAPI.ProjectListResponse;
  export import ProjectRetrieveParams = ProjectsAPI.ProjectRetrieveParams;
  export import Tags = TagsAPI.Tags;
  export import Tag = TagsAPI.Tag;
}
