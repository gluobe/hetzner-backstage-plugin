/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class SshKeysService {
    /**
     * Get all SSH keys
     * Returns all SSH key objects.
     * @param sort Sort resources by field and direction. Can be used multiple times. For more
     * information, see "[Sorting](#sorting)".
     *
     * @param name Filter resources by their name. The response will only contain the resources
     * matching exactly the specified name.
     *
     * @param fingerprint Can be used to filter SSH keys by their fingerprint. The response will only contain the SSH key matching the specified fingerprint.
     * @param labelSelector Filter resources by labels. The response will only contain resources matching the
     * label selector. For more information, see "[Label Selector](#label-selector)".
     *
     * @param page Page number to return. For more information, see "[Pagination](#pagination)".
     * @param perPage Maximum number of entries returned per page. For more information, see "[Pagination](#pagination)".
     * @returns any The `ssh_keys` key in the reply contains an array of SSH key objects with this structure
     * @throws ApiError
     */
    public static getSshKeys(
        sort?: 'id' | 'id:asc' | 'id:desc' | 'name' | 'name:asc' | 'name:desc',
        name?: string,
        fingerprint?: string,
        labelSelector?: string,
        page: number = 1,
        perPage: number = 25,
    ): CancelablePromise<{
        ssh_keys: Array<{
            /**
             * ID of the SSH Key.
             */
            id: number;
            /**
             * Name of the Resource. Must be unique per Project.
             */
            name: string;
            /**
             * MD5 fingerprint of the SSH public key.
             */
            fingerprint: string;
            /**
             * Public key
             */
            public_key: string;
            /**
             * User-defined labels (`key/value` pairs) for the Resource.
             * For more information, see "[Labels](#labels)".
             *
             */
            labels: Record<string, string>;
            /**
             * Point in time when the Resource was created (in ISO-8601 format).
             */
            created: string;
        }>;
        meta: {
            /**
             * See "[Pagination](#pagination)" for more information.
             */
            pagination: {
                /**
                 * Current page number.
                 */
                page: number;
                /**
                 * Maximum number of entries returned per page.
                 */
                per_page: number;
                /**
                 * Page number of the previous page. Can be null if the current page is the first one.
                 */
                previous_page: number | null;
                /**
                 * Page number of the next page. Can be null if the current page is the last one.
                 */
                next_page: number | null;
                /**
                 * Page number of the last page available. Can be null if the current page is the last one.
                 */
                last_page: number | null;
                /**
                 * Total number of entries that exist for this query. Can be null if unknown.
                 */
                total_entries: number | null;
            };
        };
    }> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/ssh_keys',
            query: {
                'sort': sort,
                'name': name,
                'fingerprint': fingerprint,
                'label_selector': labelSelector,
                'page': page,
                'per_page': perPage,
            },
        });
    }
    /**
     * Create an SSH key
     * Creates a new SSH key with the given `name` and `public_key`. Once an SSH key is created, it can be used in other calls such as creating Servers.
     * @param requestBody
     * @returns any The `ssh_key` key in the reply contains the object that was just created
     * @throws ApiError
     */
    public static postSshKeys(
        requestBody?: {
            /**
             * Name of the SSH key
             */
            name: string;
            /**
             * Public key
             */
            public_key: string;
            /**
             * User-defined labels (`key/value` pairs) for the Resource.
             * For more information, see "[Labels](#labels)".
             *
             */
            labels?: Record<string, string>;
        },
    ): CancelablePromise<{
        ssh_key: {
            /**
             * ID of the SSH Key.
             */
            id: number;
            /**
             * Name of the Resource. Must be unique per Project.
             */
            name: string;
            /**
             * MD5 fingerprint of the SSH public key.
             */
            fingerprint: string;
            /**
             * Public key
             */
            public_key: string;
            /**
             * User-defined labels (`key/value` pairs) for the Resource.
             * For more information, see "[Labels](#labels)".
             *
             */
            labels: Record<string, string>;
            /**
             * Point in time when the Resource was created (in ISO-8601 format).
             */
            created: string;
        };
    }> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/ssh_keys',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * Get a SSH key
     * Returns a specific SSH key object.
     * @param id ID of the SSH Key.
     * @returns any The `ssh_key` key in the reply contains an SSH key object with this structure
     * @throws ApiError
     */
    public static getSshKeys1(
        id: number,
    ): CancelablePromise<{
        ssh_key: {
            /**
             * ID of the SSH Key.
             */
            id: number;
            /**
             * Name of the Resource. Must be unique per Project.
             */
            name: string;
            /**
             * MD5 fingerprint of the SSH public key.
             */
            fingerprint: string;
            /**
             * Public key
             */
            public_key: string;
            /**
             * User-defined labels (`key/value` pairs) for the Resource.
             * For more information, see "[Labels](#labels)".
             *
             */
            labels: Record<string, string>;
            /**
             * Point in time when the Resource was created (in ISO-8601 format).
             */
            created: string;
        };
    }> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/ssh_keys/{id}',
            path: {
                'id': id,
            },
        });
    }
    /**
     * Update an SSH key
     * Updates an SSH key. You can update an SSH key name and an SSH key labels.
     *
     * @param id ID of the SSH Key.
     * @param requestBody
     * @returns any The `ssh_key` key in the reply contains the modified SSH key object with the new description
     * @throws ApiError
     */
    public static putSshKeys(
        id: number,
        requestBody?: {
            /**
             * New name Name to set
             */
            name?: string;
            /**
             * User-defined labels (`key/value` pairs) for the Resource.
             *
             * Note that the set of [Labels](#labels) provided in the request will overwrite the
             * existing one.
             *
             * For more information, see "[Labels](#labels)".
             *
             */
            labels?: Record<string, string>;
        },
    ): CancelablePromise<{
        ssh_key: {
            /**
             * ID of the SSH Key.
             */
            id: number;
            /**
             * Name of the Resource. Must be unique per Project.
             */
            name: string;
            /**
             * MD5 fingerprint of the SSH public key.
             */
            fingerprint: string;
            /**
             * Public key
             */
            public_key: string;
            /**
             * User-defined labels (`key/value` pairs) for the Resource.
             * For more information, see "[Labels](#labels)".
             *
             */
            labels: Record<string, string>;
            /**
             * Point in time when the Resource was created (in ISO-8601 format).
             */
            created: string;
        };
    }> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/ssh_keys/{id}',
            path: {
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * Delete an SSH key
     * Deletes an SSH key. It cannot be used anymore.
     * @param id ID of the SSH Key.
     * @returns void
     * @throws ApiError
     */
    public static deleteSshKeys(
        id: number,
    ): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/ssh_keys/{id}',
            path: {
                'id': id,
            },
        });
    }
}
