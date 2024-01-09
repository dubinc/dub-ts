// File generated from our OpenAPI spec by Stainless.

export interface Link {
  /**
   * The unique ID of the short link.
   */
  id?: string;

  /**
   * The Android destination URL for the short link for Android device targeting.
   */
  android?: string | null;

  /**
   * Whether the short link is archived.
   */
  archived?: boolean;

  /**
   * The number of clicks on the short link.
   */
  clicks?: number;

  /**
   * The comments for the short link.
   */
  comments?: string | null;

  /**
   * The date and time when the short link was created.
   */
  createdAt?: string;

  /**
   * The description of the short link generated via api.dub.co/metatags. Will be
   * used for Custom Social Media Cards if `proxy` is true.
   */
  description?: string | null;

  /**
   * The domain of the short link.
   */
  domain?: string;

  /**
   * The date and time when the short link will expire in ISO-8601 format. Must be in
   * the future.
   */
  expiresAt?: string | null;

  /**
   * Geo targeting information for the short link in JSON format {[COUNTRY]:
   * "https://example.com" }. Learn more: https://dub.sh/geo
   */
  geo?: Record<string, string> | null;

  /**
   * The image of the short link generated via api.dub.co/metatags. Will be used for
   * Custom Social Media Cards if `proxy` is true.
   */
  image?: string | null;

  /**
   * The iOS destination URL for the short link for iOS device targeting.
   */
  ios?: string | null;

  /**
   * The short link slug. If not provided, a random 7-character slug will be
   * generated.
   */
  key?: string;

  /**
   * The date and time when the short link was last clicked.
   */
  lastClicked?: string | null;

  /**
   * The password required to access the destination URL of the short link.
   */
  password?: string | null;

  /**
   * The project ID of the short link.
   */
  projectId?: string;

  /**
   * Whether the short link uses Custom Social Media Cards feature.
   */
  proxy?: boolean;

  /**
   * Whether the short link's stats are publicly accessible.
   */
  publicStats?: boolean;

  /**
   * Whether the short link uses link cloaking.
   */
  rewrite?: boolean;

  /**
   * The unique id of the tag assigned to the short link.
   */
  tagId?: string | null;

  /**
   * The title of the short link generated via api.dub.co/metatags. Will be used for
   * Custom Social Media Cards if `proxy` is true.
   */
  title?: string | null;

  /**
   * The date and time when the short link was last updated.
   */
  updatedAt?: string;

  /**
   * The destination URL of the short link.
   */
  url?: string;

  /**
   * The user ID of the creator of the short link.
   */
  userId?: string;

  /**
   * The UTM campaign of the short link.
   */
  utm_campaign?: string | null;

  /**
   * The UTM content of the short link.
   */
  utm_content?: string | null;

  /**
   * The UTM medium of the short link.
   */
  utm_medium?: string | null;

  /**
   * The UTM source of the short link.
   */
  utm_source?: string | null;

  /**
   * The UTM term of the short link.
   */
  utm_term?: string | null;
}
