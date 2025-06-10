import type { CancelablePromise } from '../core/CancelablePromise';
export declare class PrimaryIPsService {
    /**
     * Get all Primary IPs
     * List multiple [Primary IPs](#primary-ips).
     *
     * Use the provided URI parameters to modify the result.
     *
     * @param name Filter resources by their name. The response will only contain the resources
     * matching exactly the specified name.
     *
     * @param labelSelector Filter resources by labels. The response will only contain resources matching the
     * label selector. For more information, see "[Label Selector](#label-selector)".
     *
     * @param ip Filter results by IP address.
     * @param page Page number to return. For more information, see "[Pagination](#pagination)".
     * @param perPage Maximum number of entries returned per page. For more information, see "[Pagination](#pagination)".
     * @param sort Sort resources by field and direction. Can be used multiple times. For more
     * information, see "[Sorting](#sorting)".
     *
     * @returns any Response for listing [Primary IPs](#primary-ips).
     * @throws ApiError
     */
    static getPrimaryIps(name?: string, labelSelector?: string, ip?: string, page?: number, perPage?: number, sort?: 'id' | 'id:asc' | 'id:desc' | 'created' | 'created:asc' | 'created:desc'): CancelablePromise<{
        primary_ips: Array<{
            /**
             * ID of the Primary IP.
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
             * Point in time when the Resource was created (in ISO-8601 format).
             */
            created: string;
            /**
             * Blocked state of the [Primary IP](#primary-ips).
             */
            blocked: boolean;
            /**
             * [Datacenter](#datacenters) the [Primary IP](#primary-ips) is located at.
             */
            datacenter: {
                /**
                 * ID of the Datacenter.
                 */
                id: number;
                /**
                 * Unique name for the [Datacenter](#datacenters).
                 *
                 * Can be used as a more descriptive identifier.
                 *
                 */
                name: string;
                /**
                 * Descriptive name for the [Datacenter](#datacenters).
                 *
                 * Desired to be easy to understand for humans. Might be changed for cosmetic reasons. Do not use this as an identifier.
                 *
                 */
                description: string;
                /**
                 * [Location](#locations) the [Datacenter](#datacenters) is located at.
                 *
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
                 * [Server Types](#server-types) supported and available in this [Datacenter](#datacenters).
                 *
                 */
                server_types: {
                    /**
                     * List of [Server Types](#server-types) supported in this [Datacenter](#datacenters).
                     *
                     * These [Server Types](#server-types) are generally available in this Datacenter, but might be
                     * temporarily out of stock.
                     *
                     */
                    supported: Array<number>;
                    /**
                     * [Server Types](#server-types) currently available in this [Datacenter](#datacenters).
                     *
                     * These [Server Types](#server-types) can currently be purchased. Types that are temporarily unavailable
                     * but are supported in this [Datacenter](#datacenters) are listed as `supported`.
                     *
                     */
                    available: Array<number>;
                    /**
                     * [Server Types](#server-types) available to migrate to in this [Datacenter](#datacenters).
                     *
                     * Existing [Servers](#servers) can be migrated to these [Server Types](#server-types).
                     *
                     */
                    available_for_migration: Array<number>;
                };
            };
            /**
             * IP address.
             */
            ip: string;
            /**
             * List of reverse DNS records.
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
             * [Primary IP](#primary-ips) type.
             */
            type: 'ipv4' | 'ipv6';
            /**
             * Auto deletion state.
             *
             * If enabled the [Primary IP](#primary-ips) will be deleted once the assigned resource gets deleted.
             *
             */
            auto_delete: boolean;
            /**
             * Type of resource the [Primary IP](#primary-ips) can get assigned to.
             *
             */
            assignee_type: 'server';
            /**
             * ID of resource the [Primary IP](#primary-ips) is assigned to.
             *
             * `null` if the [Primary IP](#primary-ips) is not assigned.
             *
             */
            assignee_id: number | null;
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
    }>;
    /**
     * Create a Primary IP
     * Create a new [Primary IP](#primary-ips).
     *
     * Can optionally be assigned to a resource by providing an `assignee_id` and `assignee_type`.
     *
     * If not assigned to a resource the `datacenter` key needs to be provided. This can be either the ID or the name of the [Datacenter](#datacenters) this [Primary IP](#primary-ips) shall be created in.
     *
     * A [Primary IP](#primary-ips) can only be assigned to resource in the same [Datacenter](#datacenters) later on.
     *
     * #### Call specific error codes
     *
     * | Code                          | Description                                                              |
     * |------------------------------ |------------------------------------------------------------------------- |
     * | `server_not_stopped`          | The specified [Server](#servers) is running, but needs to be powered off |
     * | `server_has_ipv4`             | The [Server](#servers) already has an ipv4 address                       |
     * | `server_has_ipv6`             | The [Server](#servers) already has an ipv6 address                       |
     *
     * @param requestBody Request Body for creating a new [Primary IP](#primary-ips).
     *
     * The `datacenter` and `assignee_id`/`assignee_type` attributes are mutually exclusive.
     *
     * @returns any Response for creating a [Primary IP](#primary-ips).
     *
     * Contains the newly created [Primary IP](#primary-ips).
     *
     * @throws ApiError
     */
    static postPrimaryIps(requestBody?: {
        /**
         * Name of the Resource. Must be unique per Project.
         */
        name: string;
        /**
         * User-defined labels (`key/value` pairs) for the Resource.
         * For more information, see "[Labels](#labels)".
         *
         */
        labels?: Record<string, string>;
        /**
         * [Primary IP](#primary-ips) type.
         */
        type: 'ipv4' | 'ipv6';
        /**
         * [Datacenter](#datacenters) ID or name.
         *
         * The  [Primary IP](#primary-ips) will be bound to this [Datacenter](#datacenters). Omit if `assignee_id`/`assignee_type` is provided.
         *
         */
        datacenter?: string;
        /**
         * Type of resource the [Primary IP](#primary-ips) can get assigned to.
         *
         * Currently [Primary IPs](#primary-ips) can only be assigned to [Servers](#servers),
         * therefore this field must be set to `server`.
         *
         */
        assignee_type: 'server';
        /**
         * ID of resource to assign the [Primary IP](#primary-ips) to.
         *
         * Omitted if the [Primary IP](#primary-ips) should not get assigned.
         *
         */
        assignee_id?: number | null;
        /**
         * Auto deletion state.
         *
         * If enabled the [Primary IP](#primary-ips) will be deleted once the assigned resource gets deleted.
         *
         */
        auto_delete?: boolean;
    }): CancelablePromise<{
        primary_ip: {
            /**
             * ID of the Primary IP.
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
             * Point in time when the Resource was created (in ISO-8601 format).
             */
            created: string;
            /**
             * Blocked state of the [Primary IP](#primary-ips).
             */
            blocked: boolean;
            /**
             * [Datacenter](#datacenters) the [Primary IP](#primary-ips) is located at.
             */
            datacenter: {
                /**
                 * ID of the Datacenter.
                 */
                id: number;
                /**
                 * Unique name for the [Datacenter](#datacenters).
                 *
                 * Can be used as a more descriptive identifier.
                 *
                 */
                name: string;
                /**
                 * Descriptive name for the [Datacenter](#datacenters).
                 *
                 * Desired to be easy to understand for humans. Might be changed for cosmetic reasons. Do not use this as an identifier.
                 *
                 */
                description: string;
                /**
                 * [Location](#locations) the [Datacenter](#datacenters) is located at.
                 *
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
                 * [Server Types](#server-types) supported and available in this [Datacenter](#datacenters).
                 *
                 */
                server_types: {
                    /**
                     * List of [Server Types](#server-types) supported in this [Datacenter](#datacenters).
                     *
                     * These [Server Types](#server-types) are generally available in this Datacenter, but might be
                     * temporarily out of stock.
                     *
                     */
                    supported: Array<number>;
                    /**
                     * [Server Types](#server-types) currently available in this [Datacenter](#datacenters).
                     *
                     * These [Server Types](#server-types) can currently be purchased. Types that are temporarily unavailable
                     * but are supported in this [Datacenter](#datacenters) are listed as `supported`.
                     *
                     */
                    available: Array<number>;
                    /**
                     * [Server Types](#server-types) available to migrate to in this [Datacenter](#datacenters).
                     *
                     * Existing [Servers](#servers) can be migrated to these [Server Types](#server-types).
                     *
                     */
                    available_for_migration: Array<number>;
                };
            };
            /**
             * IP address.
             */
            ip: string;
            /**
             * List of reverse DNS records.
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
             * [Primary IP](#primary-ips) type.
             */
            type: 'ipv4' | 'ipv6';
            /**
             * Auto deletion state.
             *
             * If enabled the [Primary IP](#primary-ips) will be deleted once the assigned resource gets deleted.
             *
             */
            auto_delete: boolean;
            /**
             * Type of resource the [Primary IP](#primary-ips) can get assigned to.
             *
             */
            assignee_type: 'server';
            /**
             * ID of resource the [Primary IP](#primary-ips) is assigned to.
             *
             * `null` if the [Primary IP](#primary-ips) is not assigned.
             *
             */
            assignee_id: number | null;
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
    }>;
    /**
     * Get a Primary IP
     * Returns a [Primary IP](#primary-ips).
     * @param id ID of the Primary IP.
     * @returns any The `primary_ip` key contains the [Primary IP](#primary-ips).
     * @throws ApiError
     */
    static getPrimaryIps1(id: number): CancelablePromise<{
        primary_ip: {
            /**
             * ID of the Primary IP.
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
             * Point in time when the Resource was created (in ISO-8601 format).
             */
            created: string;
            /**
             * Blocked state of the [Primary IP](#primary-ips).
             */
            blocked: boolean;
            /**
             * [Datacenter](#datacenters) the [Primary IP](#primary-ips) is located at.
             */
            datacenter: {
                /**
                 * ID of the Datacenter.
                 */
                id: number;
                /**
                 * Unique name for the [Datacenter](#datacenters).
                 *
                 * Can be used as a more descriptive identifier.
                 *
                 */
                name: string;
                /**
                 * Descriptive name for the [Datacenter](#datacenters).
                 *
                 * Desired to be easy to understand for humans. Might be changed for cosmetic reasons. Do not use this as an identifier.
                 *
                 */
                description: string;
                /**
                 * [Location](#locations) the [Datacenter](#datacenters) is located at.
                 *
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
                 * [Server Types](#server-types) supported and available in this [Datacenter](#datacenters).
                 *
                 */
                server_types: {
                    /**
                     * List of [Server Types](#server-types) supported in this [Datacenter](#datacenters).
                     *
                     * These [Server Types](#server-types) are generally available in this Datacenter, but might be
                     * temporarily out of stock.
                     *
                     */
                    supported: Array<number>;
                    /**
                     * [Server Types](#server-types) currently available in this [Datacenter](#datacenters).
                     *
                     * These [Server Types](#server-types) can currently be purchased. Types that are temporarily unavailable
                     * but are supported in this [Datacenter](#datacenters) are listed as `supported`.
                     *
                     */
                    available: Array<number>;
                    /**
                     * [Server Types](#server-types) available to migrate to in this [Datacenter](#datacenters).
                     *
                     * Existing [Servers](#servers) can be migrated to these [Server Types](#server-types).
                     *
                     */
                    available_for_migration: Array<number>;
                };
            };
            /**
             * IP address.
             */
            ip: string;
            /**
             * List of reverse DNS records.
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
             * [Primary IP](#primary-ips) type.
             */
            type: 'ipv4' | 'ipv6';
            /**
             * Auto deletion state.
             *
             * If enabled the [Primary IP](#primary-ips) will be deleted once the assigned resource gets deleted.
             *
             */
            auto_delete: boolean;
            /**
             * Type of resource the [Primary IP](#primary-ips) can get assigned to.
             *
             */
            assignee_type: 'server';
            /**
             * ID of resource the [Primary IP](#primary-ips) is assigned to.
             *
             * `null` if the [Primary IP](#primary-ips) is not assigned.
             *
             */
            assignee_id: number | null;
        };
    }>;
    /**
     * Update a Primary IP
     * Update a [Primary IP](#primary-ips).
     *
     * If another change is concurrently performed on this [Primary IP](#primary-ips), a error response with code `conflict` will be returned.
     *
     * @param id ID of the Primary IP.
     * @param requestBody
     * @returns any The `primary_ip` key contains the updated [Primary IP](#primary-ips).
     * @throws ApiError
     */
    static putPrimaryIps(id: number, requestBody?: {
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
        /**
         * Auto deletion state.
         *
         * If enabled the [Primary IP](#primary-ips) will be deleted once the assigned resource gets deleted.
         *
         */
        auto_delete?: boolean;
    }): CancelablePromise<{
        primary_ip: {
            /**
             * ID of the Primary IP.
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
             * Point in time when the Resource was created (in ISO-8601 format).
             */
            created: string;
            /**
             * Blocked state of the [Primary IP](#primary-ips).
             */
            blocked: boolean;
            /**
             * [Datacenter](#datacenters) the [Primary IP](#primary-ips) is located at.
             */
            datacenter: {
                /**
                 * ID of the Datacenter.
                 */
                id: number;
                /**
                 * Unique name for the [Datacenter](#datacenters).
                 *
                 * Can be used as a more descriptive identifier.
                 *
                 */
                name: string;
                /**
                 * Descriptive name for the [Datacenter](#datacenters).
                 *
                 * Desired to be easy to understand for humans. Might be changed for cosmetic reasons. Do not use this as an identifier.
                 *
                 */
                description: string;
                /**
                 * [Location](#locations) the [Datacenter](#datacenters) is located at.
                 *
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
                 * [Server Types](#server-types) supported and available in this [Datacenter](#datacenters).
                 *
                 */
                server_types: {
                    /**
                     * List of [Server Types](#server-types) supported in this [Datacenter](#datacenters).
                     *
                     * These [Server Types](#server-types) are generally available in this Datacenter, but might be
                     * temporarily out of stock.
                     *
                     */
                    supported: Array<number>;
                    /**
                     * [Server Types](#server-types) currently available in this [Datacenter](#datacenters).
                     *
                     * These [Server Types](#server-types) can currently be purchased. Types that are temporarily unavailable
                     * but are supported in this [Datacenter](#datacenters) are listed as `supported`.
                     *
                     */
                    available: Array<number>;
                    /**
                     * [Server Types](#server-types) available to migrate to in this [Datacenter](#datacenters).
                     *
                     * Existing [Servers](#servers) can be migrated to these [Server Types](#server-types).
                     *
                     */
                    available_for_migration: Array<number>;
                };
            };
            /**
             * IP address.
             */
            ip: string;
            /**
             * List of reverse DNS records.
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
             * [Primary IP](#primary-ips) type.
             */
            type: 'ipv4' | 'ipv6';
            /**
             * Auto deletion state.
             *
             * If enabled the [Primary IP](#primary-ips) will be deleted once the assigned resource gets deleted.
             *
             */
            auto_delete: boolean;
            /**
             * Type of resource the [Primary IP](#primary-ips) can get assigned to.
             *
             */
            assignee_type: 'server';
            /**
             * ID of resource the [Primary IP](#primary-ips) is assigned to.
             *
             * `null` if the [Primary IP](#primary-ips) is not assigned.
             *
             */
            assignee_id: number | null;
        };
    }>;
    /**
     * Delete a Primary IP
     * Deletes a [Primary IP](#primary-ips).
     *
     * If assigned to a [Server](#servers) the [Primary IP](#primary-ips) will be unassigned automatically. The [Server](#servers) must be powered off (status `off`) in order for this operation to succeed.
     *
     * @param id ID of the Primary IP.
     * @returns void
     * @throws ApiError
     */
    static deletePrimaryIps(id: number): CancelablePromise<void>;
}
