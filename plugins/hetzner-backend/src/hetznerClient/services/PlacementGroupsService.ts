/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class PlacementGroupsService {
    /**
     * Get all PlacementGroups
     * Returns all PlacementGroup objects.
     * @param sort Sort resources by field and direction. Can be used multiple times. For more
     * information, see "[Sorting](#sorting)".
     *
     * @param name Filter resources by their name. The response will only contain the resources
     * matching exactly the specified name.
     *
     * @param labelSelector Filter resources by labels. The response will only contain resources matching the
     * label selector. For more information, see "[Label Selector](#label-selector)".
     *
     * @param type Filter resources by type. Can be used multiple times. The response will only
     * contain the resources with the specified type.
     *
     * @param page Page number to return. For more information, see "[Pagination](#pagination)".
     * @param perPage Maximum number of entries returned per page. For more information, see "[Pagination](#pagination)".
     * @returns any The `placement_groups` key contains an array of PlacementGroup objects
     * @throws ApiError
     */
    public static getPlacementGroups(
        sort?: 'id' | 'id:asc' | 'id:desc' | 'name' | 'name:asc' | 'name:desc' | 'created' | 'created:asc' | 'created:desc',
        name?: string,
        labelSelector?: string,
        type?: 'spread',
        page: number = 1,
        perPage: number = 25,
    ): CancelablePromise<{
        placement_groups: Array<{
            /**
             * ID of the Placement Group.
             */
            id: number;
            /**
             * Name of the Resource. Must be unique per Project.
             */
            name: string;
            /**
             * User-defined labels (`key/value` pairs) for the Resource.
             * For more information, see "[Labels](#labels)".
             *
             */
            labels: Record<string, string>;
            /**
             * Type of Placement Group.
             *
             */
            type: 'spread';
            /**
             * Point in time when the Resource was created (in ISO-8601 format).
             */
            created: string;
            /**
             * Array of IDs of Servers that are part of this Placement Group
             */
            servers: Array<number>;
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
            url: '/placement_groups',
            query: {
                'sort': sort,
                'name': name,
                'label_selector': labelSelector,
                'type': type,
                'page': page,
                'per_page': perPage,
            },
        });
    }
    /**
     * Create a PlacementGroup
     * Creates a new PlacementGroup.
     *
     * @param requestBody
     * @returns any The `PlacementGroup` key contains the PlacementGroup that was just created.
     * @throws ApiError
     */
    public static postPlacementGroups(
        requestBody?: {
            /**
             * Name of the PlacementGroup
             */
            name: string;
            /**
             * User-defined labels (`key/value` pairs) for the Resource.
             * For more information, see "[Labels](#labels)".
             *
             */
            labels?: Record<string, string>;
            /**
             * Define the Placement Group Type.
             */
            type: 'spread';
        },
    ): CancelablePromise<{
        placement_group: {
            /**
             * ID of the Placement Group.
             */
            id: number;
            /**
             * Name of the Resource. Must be unique per Project.
             */
            name: string;
            /**
             * User-defined labels (`key/value` pairs) for the Resource.
             * For more information, see "[Labels](#labels)".
             *
             */
            labels: Record<string, string>;
            /**
             * Type of Placement Group.
             *
             */
            type: 'spread';
            /**
             * Point in time when the Resource was created (in ISO-8601 format).
             */
            created: string;
            /**
             * Array of IDs of Servers that are part of this Placement Group
             */
            servers: Array<number>;
        };
        action?: {
            /**
             * ID of the Action.
             */
            id: number;
            /**
             * Command executed in the Action.
             */
            command: string;
            /**
             * Status of the Action.
             */
            status: 'running' | 'success' | 'error';
            /**
             * Point in time when the Action was started (in ISO-8601 format).
             */
            started: string;
            /**
             * Point in time when the Action was finished (in ISO-8601 format). Only set if the Action is finished otherwise null.
             */
            finished: string | null;
            /**
             * Progress of the Action in percent.
             */
            progress: number;
            /**
             * Resources the Action relates to.
             */
            resources: Array<{
                /**
                 * ID of the Resource.
                 */
                id: number;
                /**
                 * Type of the Resource.
                 */
                type: string;
            }>;
            /**
             * Error message for the Action if an error occurred, otherwise null.
             */
            error: {
                /**
                 * Fixed error code for machines.
                 */
                code: string;
                /**
                 * Error message for humans.
                 */
                message: string;
            } | null;
        } | null;
    }> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/placement_groups',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * Get a PlacementGroup
     * Gets a specific PlacementGroup object.
     * @param id ID of the Placement Group.
     * @returns any The `placement_group` key contains a PlacementGroup object
     * @throws ApiError
     */
    public static getPlacementGroups1(
        id: number,
    ): CancelablePromise<{
        placement_group: {
            /**
             * ID of the Placement Group.
             */
            id: number;
            /**
             * Name of the Resource. Must be unique per Project.
             */
            name: string;
            /**
             * User-defined labels (`key/value` pairs) for the Resource.
             * For more information, see "[Labels](#labels)".
             *
             */
            labels: Record<string, string>;
            /**
             * Type of Placement Group.
             *
             */
            type: 'spread';
            /**
             * Point in time when the Resource was created (in ISO-8601 format).
             */
            created: string;
            /**
             * Array of IDs of Servers that are part of this Placement Group
             */
            servers: Array<number>;
        };
    }> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/placement_groups/{id}',
            path: {
                'id': id,
            },
        });
    }
    /**
     * Update a PlacementGroup
     * Updates the PlacementGroup properties.
     *
     * Note: if the PlacementGroup object changes during the request, the response will be a “conflict” error.
     *
     * @param id ID of the Placement Group.
     * @param requestBody
     * @returns any The `certificate` key contains the PlacementGroup that was just updated
     * @throws ApiError
     */
    public static putPlacementGroups(
        id: number,
        requestBody?: {
            /**
             * New PlacementGroup name
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
        placement_group: {
            /**
             * ID of the Placement Group.
             */
            id: number;
            /**
             * Name of the Resource. Must be unique per Project.
             */
            name: string;
            /**
             * User-defined labels (`key/value` pairs) for the Resource.
             * For more information, see "[Labels](#labels)".
             *
             */
            labels: Record<string, string>;
            /**
             * Type of Placement Group.
             *
             */
            type: 'spread';
            /**
             * Point in time when the Resource was created (in ISO-8601 format).
             */
            created: string;
            /**
             * Array of IDs of Servers that are part of this Placement Group
             */
            servers: Array<number>;
        };
    }> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/placement_groups/{id}',
            path: {
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * Delete a PlacementGroup
     * Deletes a PlacementGroup.
     * @param id ID of the Placement Group.
     * @returns void
     * @throws ApiError
     */
    public static deletePlacementGroups(
        id: number,
    ): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/placement_groups/{id}',
            path: {
                'id': id,
            },
        });
    }
}
