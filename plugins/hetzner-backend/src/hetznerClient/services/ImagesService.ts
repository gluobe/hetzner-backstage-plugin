/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class ImagesService {
    /**
     * Get all Images
     * Returns all Image objects. You can select specific Image types only and sort the results by using URI parameters.
     * @param sort Sort resources by field and direction. Can be used multiple times. For more
     * information, see "[Sorting](#sorting)".
     *
     * @param type Filter resources by type. Can be used multiple times. The response will only
     * contain the resources with the specified type.
     *
     * @param status Filter resources by status. Can be used multiple times. The response will only
     * contain the resources with the specified status.
     *
     * @param boundTo Can be used multiple times. Server ID linked to the Image. Only available for Images of type `backup`
     * @param includeDeprecated Can be used multiple times.
     * @param name Filter resources by their name. The response will only contain the resources
     * matching exactly the specified name.
     *
     * @param labelSelector Filter resources by labels. The response will only contain resources matching the
     * label selector. For more information, see "[Label Selector](#label-selector)".
     *
     * @param architecture Filter resources by cpu architecture. The response will only contain the resources
     * with the specified cpu architecture.
     *
     * @param page Page number to return. For more information, see "[Pagination](#pagination)".
     * @param perPage Maximum number of entries returned per page. For more information, see "[Pagination](#pagination)".
     * @returns any The `images` key in the reply contains an array of Image objects with this structure
     * @throws ApiError
     */
    public static getImages(
        sort?: 'id' | 'id:asc' | 'id:desc' | 'name' | 'name:asc' | 'name:desc' | 'created' | 'created:asc' | 'created:desc',
        type?: 'system' | 'app' | 'snapshot' | 'backup',
        status?: 'available' | 'creating' | 'unavailable',
        boundTo?: string,
        includeDeprecated?: boolean,
        name?: string,
        labelSelector?: string,
        architecture?: 'x86' | 'arm',
        page: number = 1,
        perPage: number = 25,
    ): CancelablePromise<{
        images: Array<{
            /**
             * ID of the Image.
             */
            id: number;
            /**
             * Type of the Image.
             */
            type: 'system' | 'app' | 'snapshot' | 'backup';
            /**
             * Whether the Image can be used or if it's still being created or unavailable
             */
            status: 'available' | 'creating' | 'unavailable';
            /**
             * Unique identifier of the Image. This value is only set for system Images.
             */
            name: string | null;
            /**
             * Description of the Image
             */
            description: string;
            /**
             * Size of the Image file in our storage in GB. For snapshot Images this is the value relevant for calculating costs for the Image.
             */
            image_size: number | null;
            /**
             * Size of the disk contained in the Image in GB
             */
            disk_size: number;
            /**
             * Point in time when the Resource was created (in ISO-8601 format).
             */
            created: string;
            /**
             * Information about the Server the Image was created from
             */
            created_from: {
                /**
                 * ID of the Server the Image was created from
                 */
                id: number;
                /**
                 * Server name at the time the Image was created
                 */
                name: string;
            } | null;
            /**
             * ID of Server the Image is bound to. Only set for Images of type `backup`.
             */
            bound_to: number | null;
            /**
             * Flavor of operating system contained in the Image
             */
            os_flavor: 'ubuntu' | 'centos' | 'debian' | 'fedora' | 'rocky' | 'alma' | 'unknown';
            /**
             * Operating system version
             */
            os_version: string | null;
            /**
             * Indicates that rapid deploy of the Image is available
             */
            rapid_deploy?: boolean;
            /**
             * Protection configuration for the Resource.
             */
            protection: {
                /**
                 * Prevent the Resource from being deleted.
                 */
                delete: boolean;
            };
            /**
             * Point in time when the Image is considered to be deprecated (in ISO-8601 format)
             */
            deprecated: string | null;
            /**
             * Point in time where the Image was deleted (in ISO-8601 format)
             */
            deleted: string | null;
            /**
             * User-defined labels (`key/value` pairs) for the Resource.
             * For more information, see "[Labels](#labels)".
             *
             */
            labels: Record<string, string>;
            /**
             * CPU architecture compatible with the Image.
             *
             */
            architecture: 'x86' | 'arm';
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
            url: '/images',
            query: {
                'sort': sort,
                'type': type,
                'status': status,
                'bound_to': boundTo,
                'include_deprecated': includeDeprecated,
                'name': name,
                'label_selector': labelSelector,
                'architecture': architecture,
                'page': page,
                'per_page': perPage,
            },
        });
    }
    /**
     * Get an Image
     * Returns a specific Image object.
     * @param id ID of the Image.
     * @returns any The `image` key in the reply contains an Image object with this structure
     * @throws ApiError
     */
    public static getImages1(
        id: number,
    ): CancelablePromise<{
        image?: {
            /**
             * ID of the Image.
             */
            id: number;
            /**
             * Type of the Image.
             */
            type: 'system' | 'app' | 'snapshot' | 'backup';
            /**
             * Whether the Image can be used or if it's still being created or unavailable
             */
            status: 'available' | 'creating' | 'unavailable';
            /**
             * Unique identifier of the Image. This value is only set for system Images.
             */
            name: string | null;
            /**
             * Description of the Image
             */
            description: string;
            /**
             * Size of the Image file in our storage in GB. For snapshot Images this is the value relevant for calculating costs for the Image.
             */
            image_size: number | null;
            /**
             * Size of the disk contained in the Image in GB
             */
            disk_size: number;
            /**
             * Point in time when the Resource was created (in ISO-8601 format).
             */
            created: string;
            /**
             * Information about the Server the Image was created from
             */
            created_from: {
                /**
                 * ID of the Server the Image was created from
                 */
                id: number;
                /**
                 * Server name at the time the Image was created
                 */
                name: string;
            } | null;
            /**
             * ID of Server the Image is bound to. Only set for Images of type `backup`.
             */
            bound_to: number | null;
            /**
             * Flavor of operating system contained in the Image
             */
            os_flavor: 'ubuntu' | 'centos' | 'debian' | 'fedora' | 'rocky' | 'alma' | 'unknown';
            /**
             * Operating system version
             */
            os_version: string | null;
            /**
             * Indicates that rapid deploy of the Image is available
             */
            rapid_deploy?: boolean;
            /**
             * Protection configuration for the Resource.
             */
            protection: {
                /**
                 * Prevent the Resource from being deleted.
                 */
                delete: boolean;
            };
            /**
             * Point in time when the Image is considered to be deprecated (in ISO-8601 format)
             */
            deprecated: string | null;
            /**
             * Point in time where the Image was deleted (in ISO-8601 format)
             */
            deleted: string | null;
            /**
             * User-defined labels (`key/value` pairs) for the Resource.
             * For more information, see "[Labels](#labels)".
             *
             */
            labels: Record<string, string>;
            /**
             * CPU architecture compatible with the Image.
             *
             */
            architecture: 'x86' | 'arm';
        };
    }> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/images/{id}',
            path: {
                'id': id,
            },
        });
    }
    /**
     * Update an Image
     * Updates the Image. You may change the description, convert a Backup Image to a Snapshot Image or change the Image labels. Only Images of type `snapshot` and `backup` can be updated.
     *
     * @param id ID of the Image.
     * @param requestBody
     * @returns any The image key in the reply contains the modified Image object
     * @throws ApiError
     */
    public static putImages(
        id: number,
        requestBody?: {
            /**
             * New description of Image
             */
            description?: string;
            /**
             * Destination Image type to convert to
             */
            type?: 'snapshot';
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
        image?: {
            /**
             * ID of the Image.
             */
            id: number;
            /**
             * Type of the Image.
             */
            type: 'system' | 'app' | 'snapshot' | 'backup';
            /**
             * Whether the Image can be used or if it's still being created or unavailable
             */
            status: 'available' | 'creating' | 'unavailable';
            /**
             * Unique identifier of the Image. This value is only set for system Images.
             */
            name: string | null;
            /**
             * Description of the Image
             */
            description: string;
            /**
             * Size of the Image file in our storage in GB. For snapshot Images this is the value relevant for calculating costs for the Image.
             */
            image_size: number | null;
            /**
             * Size of the disk contained in the Image in GB
             */
            disk_size: number;
            /**
             * Point in time when the Resource was created (in ISO-8601 format).
             */
            created: string;
            /**
             * Information about the Server the Image was created from
             */
            created_from: {
                /**
                 * ID of the Server the Image was created from
                 */
                id: number;
                /**
                 * Server name at the time the Image was created
                 */
                name: string;
            } | null;
            /**
             * ID of Server the Image is bound to. Only set for Images of type `backup`.
             */
            bound_to: number | null;
            /**
             * Flavor of operating system contained in the Image
             */
            os_flavor: 'ubuntu' | 'centos' | 'debian' | 'fedora' | 'rocky' | 'alma' | 'unknown';
            /**
             * Operating system version
             */
            os_version: string | null;
            /**
             * Indicates that rapid deploy of the Image is available
             */
            rapid_deploy?: boolean;
            /**
             * Protection configuration for the Resource.
             */
            protection: {
                /**
                 * Prevent the Resource from being deleted.
                 */
                delete: boolean;
            };
            /**
             * Point in time when the Image is considered to be deprecated (in ISO-8601 format)
             */
            deprecated: string | null;
            /**
             * Point in time where the Image was deleted (in ISO-8601 format)
             */
            deleted: string | null;
            /**
             * User-defined labels (`key/value` pairs) for the Resource.
             * For more information, see "[Labels](#labels)".
             *
             */
            labels: Record<string, string>;
            /**
             * CPU architecture compatible with the Image.
             *
             */
            architecture: 'x86' | 'arm';
        };
    }> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/images/{id}',
            path: {
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * Delete an Image
     * Deletes an Image. Only Images of type `snapshot` and `backup` can be deleted.
     * @param id ID of the Image.
     * @returns void
     * @throws ApiError
     */
    public static deleteImages(
        id: number,
    ): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/images/{id}',
            path: {
                'id': id,
            },
        });
    }
}
