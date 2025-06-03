/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class VolumesService {
    /**
     * Get all Volumes
     * Gets all existing Volumes that you have available.
     * @param status Filter resources by status. Can be used multiple times. The response will only
     * contain the resources with the specified status.
     *
     * @param sort Sort resources by field and direction. Can be used multiple times. For more
     * information, see "[Sorting](#sorting)".
     *
     * @param name Filter resources by their name. The response will only contain the resources
     * matching exactly the specified name.
     *
     * @param labelSelector Filter resources by labels. The response will only contain resources matching the
     * label selector. For more information, see "[Label Selector](#label-selector)".
     *
     * @param page Page number to return. For more information, see "[Pagination](#pagination)".
     * @param perPage Maximum number of entries returned per page. For more information, see "[Pagination](#pagination)".
     * @returns any The `volumes` key contains a list of volumes
     * @throws ApiError
     */
    public static getVolumes(
        status?: 'available' | 'creating',
        sort?: 'id' | 'id:asc' | 'id:desc' | 'name' | 'name:asc' | 'name:desc' | 'created' | 'created:asc' | 'created:desc',
        name?: string,
        labelSelector?: string,
        page: number = 1,
        perPage: number = 25,
    ): CancelablePromise<{
        volumes: Array<{
            /**
             * ID of the Volume.
             */
            id: number;
            /**
             * Point in time when the Resource was created (in ISO-8601 format).
             */
            created: string;
            /**
             * Name of the Resource. Must be unique per Project.
             */
            name: string;
            /**
             * ID of the Server the Volume is attached to, null if it is not attached at all
             */
            server: number | null;
            /**
             * Location of the Volume. Volume can only be attached to Servers in the same Location.
             */
            location: {
                /**
                 * ID of the Location.
                 */
                id: number;
                /**
                 * Unique identifier of the [Location](#locations).
                 */
                name: string;
                /**
                 * Humand readable description of the [Location](#locations).
                 */
                description: string;
                /**
                 * Country the [Location](#locations) resides in.
                 *
                 * ISO 3166-1 alpha-2 code of the country.
                 *
                 */
                country: string;
                /**
                 * Name of the closest city to the [Location](#locations).
                 *
                 * City name or city name and state in short form. E.g. `Falkenstein` or `Ashburn, VA`.
                 *
                 */
                city: string;
                /**
                 * Latitude of the city closest to the [Location](#locations).
                 */
                latitude: number;
                /**
                 * Longitude of the city closest to the [Location](#locations).
                 */
                longitude: number;
                /**
                 * Name of the Network Zone this [Location](#locations) resides in.
                 */
                network_zone: string;
            };
            /**
             * Size in GB of the Volume
             */
            size: number;
            /**
             * Device path on the file system for the Volume
             */
            linux_device: string;
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
             * User-defined labels (`key/value` pairs) for the Resource.
             * For more information, see "[Labels](#labels)".
             *
             */
            labels: Record<string, string>;
            /**
             * Status of the Volume.
             */
            status: 'available' | 'creating';
            /**
             * Filesystem of the Volume if formatted on creation, null if not formatted on creation
             */
            format: string | null;
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
            url: '/volumes',
            query: {
                'status': status,
                'sort': sort,
                'name': name,
                'label_selector': labelSelector,
                'page': page,
                'per_page': perPage,
            },
        });
    }
    /**
     * Create a Volume
     * Creates a new Volume attached to a Server. If you want to create a Volume that is not attached to a Server, you need to provide the `location` key instead of `server`. This can be either the ID or the name of the Location this Volume will be created in. Note that a Volume can be attached to a Server only in the same Location as the Volume itself.
     *
     * Specifying the Server during Volume creation will automatically attach the Volume to that Server after it has been initialized. In that case, the `next_actions` key in the response is an array which contains a single `attach_volume` action.
     *
     * The minimum Volume size is 10GB and the maximum size is 10TB (10240GB).
     *
     * A volume’s name can consist of alphanumeric characters, dashes, underscores, and dots, but has to start and end with an alphanumeric character. The total length is limited to 64 characters. Volume names must be unique per Project.
     *
     * #### Call specific error codes
     *
     * | Code                                | Description                                         |
     * |-------------------------------------|-----------------------------------------------------|
     * | `no_space_left_in_location`         | There is no volume space left in the given location |
     *
     * @param requestBody
     * @returns any The `volume` key contains the Volume that was just created
     *
     * The `action` key contains the Action tracking Volume creation
     *
     * @throws ApiError
     */
    public static postVolumes(
        requestBody?: {
            /**
             * Size of the Volume in GB
             */
            size: number;
            /**
             * Name of the volume
             */
            name: string;
            /**
             * User-defined labels (`key/value` pairs) for the Resource.
             * For more information, see "[Labels](#labels)".
             *
             */
            labels?: Record<string, string>;
            /**
             * Auto-mount Volume after attach. `server` must be provided.
             */
            automount?: boolean;
            /**
             * Format Volume after creation. One of: `xfs`, `ext4`
             */
            format?: string;
            /**
             * Location to create the Volume in (can be omitted if Server is specified)
             */
            location?: string;
            /**
             * Server to which to attach the Volume once it's created (Volume will be created in the same Location as the server)
             */
            server?: number;
        },
    ): CancelablePromise<{
        volume: {
            /**
             * ID of the Volume.
             */
            id: number;
            /**
             * Point in time when the Resource was created (in ISO-8601 format).
             */
            created: string;
            /**
             * Name of the Resource. Must be unique per Project.
             */
            name: string;
            /**
             * ID of the Server the Volume is attached to, null if it is not attached at all
             */
            server: number | null;
            /**
             * Location of the Volume. Volume can only be attached to Servers in the same Location.
             */
            location: {
                /**
                 * ID of the Location.
                 */
                id: number;
                /**
                 * Unique identifier of the [Location](#locations).
                 */
                name: string;
                /**
                 * Humand readable description of the [Location](#locations).
                 */
                description: string;
                /**
                 * Country the [Location](#locations) resides in.
                 *
                 * ISO 3166-1 alpha-2 code of the country.
                 *
                 */
                country: string;
                /**
                 * Name of the closest city to the [Location](#locations).
                 *
                 * City name or city name and state in short form. E.g. `Falkenstein` or `Ashburn, VA`.
                 *
                 */
                city: string;
                /**
                 * Latitude of the city closest to the [Location](#locations).
                 */
                latitude: number;
                /**
                 * Longitude of the city closest to the [Location](#locations).
                 */
                longitude: number;
                /**
                 * Name of the Network Zone this [Location](#locations) resides in.
                 */
                network_zone: string;
            };
            /**
             * Size in GB of the Volume
             */
            size: number;
            /**
             * Device path on the file system for the Volume
             */
            linux_device: string;
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
             * User-defined labels (`key/value` pairs) for the Resource.
             * For more information, see "[Labels](#labels)".
             *
             */
            labels: Record<string, string>;
            /**
             * Status of the Volume.
             */
            status: 'available' | 'creating';
            /**
             * Filesystem of the Volume if formatted on creation, null if not formatted on creation
             */
            format: string | null;
        };
        action: {
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
        };
        next_actions: Array<{
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
        }>;
    }> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/volumes',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * Get a Volume
     * Gets a specific Volume object.
     * @param id ID of the Volume.
     * @returns any The `volume` key contains the volume
     * @throws ApiError
     */
    public static getVolumes1(
        id: number,
    ): CancelablePromise<{
        volume: {
            /**
             * ID of the Volume.
             */
            id: number;
            /**
             * Point in time when the Resource was created (in ISO-8601 format).
             */
            created: string;
            /**
             * Name of the Resource. Must be unique per Project.
             */
            name: string;
            /**
             * ID of the Server the Volume is attached to, null if it is not attached at all
             */
            server: number | null;
            /**
             * Location of the Volume. Volume can only be attached to Servers in the same Location.
             */
            location: {
                /**
                 * ID of the Location.
                 */
                id: number;
                /**
                 * Unique identifier of the [Location](#locations).
                 */
                name: string;
                /**
                 * Humand readable description of the [Location](#locations).
                 */
                description: string;
                /**
                 * Country the [Location](#locations) resides in.
                 *
                 * ISO 3166-1 alpha-2 code of the country.
                 *
                 */
                country: string;
                /**
                 * Name of the closest city to the [Location](#locations).
                 *
                 * City name or city name and state in short form. E.g. `Falkenstein` or `Ashburn, VA`.
                 *
                 */
                city: string;
                /**
                 * Latitude of the city closest to the [Location](#locations).
                 */
                latitude: number;
                /**
                 * Longitude of the city closest to the [Location](#locations).
                 */
                longitude: number;
                /**
                 * Name of the Network Zone this [Location](#locations) resides in.
                 */
                network_zone: string;
            };
            /**
             * Size in GB of the Volume
             */
            size: number;
            /**
             * Device path on the file system for the Volume
             */
            linux_device: string;
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
             * User-defined labels (`key/value` pairs) for the Resource.
             * For more information, see "[Labels](#labels)".
             *
             */
            labels: Record<string, string>;
            /**
             * Status of the Volume.
             */
            status: 'available' | 'creating';
            /**
             * Filesystem of the Volume if formatted on creation, null if not formatted on creation
             */
            format: string | null;
        };
    }> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/volumes/{id}',
            path: {
                'id': id,
            },
        });
    }
    /**
     * Update a Volume
     * Updates the Volume properties.
     *
     * @param id ID of the Volume.
     * @param requestBody
     * @returns any The `volume` key contains the updated volume
     * @throws ApiError
     */
    public static putVolumes(
        id: number,
        requestBody?: {
            /**
             * New Volume name
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
        volume: {
            /**
             * ID of the Volume.
             */
            id: number;
            /**
             * Point in time when the Resource was created (in ISO-8601 format).
             */
            created: string;
            /**
             * Name of the Resource. Must be unique per Project.
             */
            name: string;
            /**
             * ID of the Server the Volume is attached to, null if it is not attached at all
             */
            server: number | null;
            /**
             * Location of the Volume. Volume can only be attached to Servers in the same Location.
             */
            location: {
                /**
                 * ID of the Location.
                 */
                id: number;
                /**
                 * Unique identifier of the [Location](#locations).
                 */
                name: string;
                /**
                 * Humand readable description of the [Location](#locations).
                 */
                description: string;
                /**
                 * Country the [Location](#locations) resides in.
                 *
                 * ISO 3166-1 alpha-2 code of the country.
                 *
                 */
                country: string;
                /**
                 * Name of the closest city to the [Location](#locations).
                 *
                 * City name or city name and state in short form. E.g. `Falkenstein` or `Ashburn, VA`.
                 *
                 */
                city: string;
                /**
                 * Latitude of the city closest to the [Location](#locations).
                 */
                latitude: number;
                /**
                 * Longitude of the city closest to the [Location](#locations).
                 */
                longitude: number;
                /**
                 * Name of the Network Zone this [Location](#locations) resides in.
                 */
                network_zone: string;
            };
            /**
             * Size in GB of the Volume
             */
            size: number;
            /**
             * Device path on the file system for the Volume
             */
            linux_device: string;
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
             * User-defined labels (`key/value` pairs) for the Resource.
             * For more information, see "[Labels](#labels)".
             *
             */
            labels: Record<string, string>;
            /**
             * Status of the Volume.
             */
            status: 'available' | 'creating';
            /**
             * Filesystem of the Volume if formatted on creation, null if not formatted on creation
             */
            format: string | null;
        };
    }> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/volumes/{id}',
            path: {
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * Delete a Volume
     * Deletes a volume. All Volume data is irreversibly destroyed. The Volume must not be attached to a Server and it must not have delete protection enabled.
     * @param id ID of the Volume.
     * @returns void
     * @throws ApiError
     */
    public static deleteVolumes(
        id: number,
    ): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/volumes/{id}',
            path: {
                'id': id,
            },
        });
    }
}
