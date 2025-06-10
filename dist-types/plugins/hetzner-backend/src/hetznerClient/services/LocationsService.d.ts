import type { CancelablePromise } from '../core/CancelablePromise';
export declare class LocationsService {
    /**
     * Get all Locations
     * Returns all [Locations](#locations).
     *
     * Use the provided URI parameters to modify the result.
     *
     * @param name Filter resources by their name. The response will only contain the resources
     * matching exactly the specified name.
     *
     * @param sort Sort resources by field and direction. Can be used multiple times. For more
     * information, see "[Sorting](#sorting)".
     *
     * @param page Page number to return. For more information, see "[Pagination](#pagination)".
     * @param perPage Maximum number of entries returned per page. For more information, see "[Pagination](#pagination)".
     * @returns any Response with the [Locations](#locations).
     * @throws ApiError
     */
    static getLocations(name?: string, sort?: 'id' | 'id:asc' | 'id:desc' | 'name' | 'name:asc' | 'name:desc', page?: number, perPage?: number): CancelablePromise<{
        /**
         * List of [Locations](#locations).
         */
        locations: Array<{
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
     * Get a Location
     * Returns a [Location](#locations).
     * @param id ID of the Location.
     * @returns any Response with the [Location](#locations).
     * @throws ApiError
     */
    static getLocations1(id: number): CancelablePromise<{
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
    }>;
}
