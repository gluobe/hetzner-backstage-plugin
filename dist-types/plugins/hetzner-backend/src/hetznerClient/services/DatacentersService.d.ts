import type { CancelablePromise } from '../core/CancelablePromise';
export declare class DatacentersService {
    /**
     * Get all Datacenters
     * Returns all [Datacenters](#datacenters).
     * @param name Filter resources by their name. The response will only contain the resources
     * matching exactly the specified name.
     *
     * @param sort Sort resources by field and direction. Can be used multiple times. For more
     * information, see "[Sorting](#sorting)".
     *
     * @param page Page number to return. For more information, see "[Pagination](#pagination)".
     * @param perPage Maximum number of entries returned per page. For more information, see "[Pagination](#pagination)".
     * @returns any Contains the queried [Datacenters](#datacenters).
     * @throws ApiError
     */
    static getDatacenters(name?: string, sort?: 'id' | 'id:asc' | 'id:desc' | 'name' | 'name:asc' | 'name:desc', page?: number, perPage?: number): CancelablePromise<{
        /**
         * List of [Datacenters](#datacenters).
         */
        datacenters: Array<{
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
        }>;
        /**
         * Recommended [Datacenter](#datacenters) for creating new resources.
         */
        recommendation: number;
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
     * Get a Datacenter
     * Returns a single [Datacenter](#datacenters).
     * @param id ID of the Datacenter.
     * @returns any Contains the queried [Datacenter](#datacenters).
     * @throws ApiError
     */
    static getDatacenters1(id: number): CancelablePromise<{
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
    }>;
}
