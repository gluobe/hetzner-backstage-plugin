/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class FloatingIPsService {
    /**
     * Get all Floating IPs
     * List multiple [Floating IPs](#floating-ips).
     *
     * Use the provided URI parameters to modify the result.
     *
     * @param name Filter resources by their name. The response will only contain the resources
     * matching exactly the specified name.
     *
     * @param labelSelector Filter resources by labels. The response will only contain resources matching the
     * label selector. For more information, see "[Label Selector](#label-selector)".
     *
     * @param sort Sort resources by field and direction. Can be used multiple times. For more
     * information, see "[Sorting](#sorting)".
     *
     * @param page Page number to return. For more information, see "[Pagination](#pagination)".
     * @param perPage Maximum number of entries returned per page. For more information, see "[Pagination](#pagination)".
     * @returns any Response for listing [Floating IPs](#floating-ips).
     * @throws ApiError
     */
    public static getFloatingIps(
        name?: string,
        labelSelector?: string,
        sort?: 'id' | 'id:asc' | 'id:desc' | 'created' | 'created:asc' | 'created:desc',
        page: number = 1,
        perPage: number = 25,
    ): CancelablePromise<{
        floating_ips: Array<{
            /**
             * ID of the Floating IP.
             */
            id: number;
            /**
             * Name of the Resource. Must be unique per Project.
             */
            name: string;
            /**
             * Description of the Resource.
             */
            description: string | null;
            /**
             * IP address.
             */
            ip: string;
            /**
             * Floating IP type
             */
            type: 'ipv4' | 'ipv6';
            /**
             * [Server](#servers) the [Floating IP](#floating-ips) is assigned to.
             *
             * `null` if not assigned.
             *
             */
            server: number | null;
            /**
             * List of reverse DNS entries for the [Floating IP](#floating-ips).
             *
             */
            dns_ptr: Array<{
                /**
                 * Single IPv4 or IPv6 address to create pointer for.
                 *
                 */
                ip: string;
                /**
                 * Domain Name to point to.
                 *
                 * PTR record content used for reverse DNS.
                 *
                 */
                dns_ptr: string;
            }>;
            home_location: {
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
             * Indicates whether the [Floating IP](#floating-ips) is blocked.
             */
            blocked: boolean;
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
            url: '/floating_ips',
            query: {
                'name': name,
                'label_selector': labelSelector,
                'sort': sort,
                'page': page,
                'per_page': perPage,
            },
        });
    }
    /**
     * Create a Floating IP
     * Create a [Floating IP](#floating-ips).
     *
     * Provide the `server` attribute to assign the [Floating IP](#floating-ips) to that server or provide a `home_location` to locate the [Floating IP](#floating-ips) at. Note that the [Floating IP](#floating-ips) can be assigned to a [Server](#servers) in any [Location](#locations) later on. For optimal routing it is advised to use the [Floating IP](#floating-ips) in the same [Location](#locations) it was created in.
     *
     * @param requestBody The `type` argument is required while `home_location` and `server` are mutually exclusive.
     * @returns any Response for creating a [Floating IP](#floating-ips).
     *
     * Contains the created IP.
     *
     * @throws ApiError
     */
    public static postFloatingIps(
        requestBody?: {
            /**
             * Floating IP type
             */
            type: 'ipv4' | 'ipv6';
            /**
             * [Server](#servers) the [Floating IP](#floating-ips) is assigned to.
             *
             * `null` if not assigned.
             *
             */
            server?: number | null;
            /**
             * Home [Location](#locations) for the [Floating IP](#floating-ips).
             *
             * Either the ID or the name of the [Location](#locations).
             *
             * Only optional if no [Server](#servers) is provided. Routing is optimized for this [Locations](#locations).
             *
             */
            home_location?: string;
            /**
             * Description of the Resource.
             */
            description?: string | null;
            /**
             * Name of the Resource. Must be unique per Project.
             */
            name?: string;
            /**
             * User-defined labels (`key/value` pairs) for the Resource.
             * For more information, see "[Labels](#labels)".
             *
             */
            labels?: Record<string, string>;
        },
    ): CancelablePromise<{
        floating_ip: {
            /**
             * ID of the Floating IP.
             */
            id: number;
            /**
             * Name of the Resource. Must be unique per Project.
             */
            name: string;
            /**
             * Description of the Resource.
             */
            description: string | null;
            /**
             * IP address.
             */
            ip: string;
            /**
             * Floating IP type
             */
            type: 'ipv4' | 'ipv6';
            /**
             * [Server](#servers) the [Floating IP](#floating-ips) is assigned to.
             *
             * `null` if not assigned.
             *
             */
            server: number | null;
            /**
             * List of reverse DNS entries for the [Floating IP](#floating-ips).
             *
             */
            dns_ptr: Array<{
                /**
                 * Single IPv4 or IPv6 address to create pointer for.
                 *
                 */
                ip: string;
                /**
                 * Domain Name to point to.
                 *
                 * PTR record content used for reverse DNS.
                 *
                 */
                dns_ptr: string;
            }>;
            home_location: {
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
             * Indicates whether the [Floating IP](#floating-ips) is blocked.
             */
            blocked: boolean;
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
             * Point in time when the Resource was created (in ISO-8601 format).
             */
            created: string;
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
        };
    }> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/floating_ips',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * Get a Floating IP
     * Returns a single [Floating IP](#floating-ips).
     * @param id ID of the Floating IP.
     * @returns any Response for getting a single [Floating IP](#floating-ips).
     * @throws ApiError
     */
    public static getFloatingIps1(
        id: number,
    ): CancelablePromise<{
        floating_ip: {
            /**
             * ID of the Floating IP.
             */
            id: number;
            /**
             * Name of the Resource. Must be unique per Project.
             */
            name: string;
            /**
             * Description of the Resource.
             */
            description: string | null;
            /**
             * IP address.
             */
            ip: string;
            /**
             * Floating IP type
             */
            type: 'ipv4' | 'ipv6';
            /**
             * [Server](#servers) the [Floating IP](#floating-ips) is assigned to.
             *
             * `null` if not assigned.
             *
             */
            server: number | null;
            /**
             * List of reverse DNS entries for the [Floating IP](#floating-ips).
             *
             */
            dns_ptr: Array<{
                /**
                 * Single IPv4 or IPv6 address to create pointer for.
                 *
                 */
                ip: string;
                /**
                 * Domain Name to point to.
                 *
                 * PTR record content used for reverse DNS.
                 *
                 */
                dns_ptr: string;
            }>;
            home_location: {
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
             * Indicates whether the [Floating IP](#floating-ips) is blocked.
             */
            blocked: boolean;
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
             * Point in time when the Resource was created (in ISO-8601 format).
             */
            created: string;
        };
    }> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/floating_ips/{id}',
            path: {
                'id': id,
            },
        });
    }
    /**
     * Update a Floating IP
     * Update a [Floating IP](#floating-ips).
     *
     * @param id ID of the Floating IP.
     * @param requestBody
     * @returns any Response for updating a [Floating IP](#floating-ips).
     *
     * Contains the updated [Floating IP](#floating-ips).
     *
     * @throws ApiError
     */
    public static putFloatingIps(
        id: number,
        requestBody?: {
            /**
             * Description of the Resource.
             */
            description?: string | null;
            /**
             * Name of the Resource. Must be unique per Project.
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
        floating_ip: {
            /**
             * ID of the Floating IP.
             */
            id: number;
            /**
             * Name of the Resource. Must be unique per Project.
             */
            name: string;
            /**
             * Description of the Resource.
             */
            description: string | null;
            /**
             * IP address.
             */
            ip: string;
            /**
             * Floating IP type
             */
            type: 'ipv4' | 'ipv6';
            /**
             * [Server](#servers) the [Floating IP](#floating-ips) is assigned to.
             *
             * `null` if not assigned.
             *
             */
            server: number | null;
            /**
             * List of reverse DNS entries for the [Floating IP](#floating-ips).
             *
             */
            dns_ptr: Array<{
                /**
                 * Single IPv4 or IPv6 address to create pointer for.
                 *
                 */
                ip: string;
                /**
                 * Domain Name to point to.
                 *
                 * PTR record content used for reverse DNS.
                 *
                 */
                dns_ptr: string;
            }>;
            home_location: {
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
             * Indicates whether the [Floating IP](#floating-ips) is blocked.
             */
            blocked: boolean;
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
             * Point in time when the Resource was created (in ISO-8601 format).
             */
            created: string;
        };
    }> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/floating_ips/{id}',
            path: {
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * Delete a Floating IP
     * Deletes a [Floating IP](#floating-ips).
     *
     * If the IP is assigned to a resource it will be unassigned.
     *
     * @param id ID of the Floating IP.
     * @returns void
     * @throws ApiError
     */
    public static deleteFloatingIps(
        id: number,
    ): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/floating_ips/{id}',
            path: {
                'id': id,
            },
        });
    }
}
