import type { CancelablePromise } from '../core/CancelablePromise';
export declare class LoadBalancerTypesService {
    /**
     * Get all Load Balancer Types
     * Gets all Load Balancer type objects.
     * @param name Filter resources by their name. The response will only contain the resources
     * matching exactly the specified name.
     *
     * @param page Page number to return. For more information, see "[Pagination](#pagination)".
     * @param perPage Maximum number of entries returned per page. For more information, see "[Pagination](#pagination)".
     * @returns any The `load_balancer_types` key in the reply contains an array of Load Balancer type objects with this structure
     * @throws ApiError
     */
    static getLoadBalancerTypes(name?: string, page?: number, perPage?: number): CancelablePromise<{
        load_balancer_types: Array<{
            /**
             * ID of the Load Balancer type
             */
            id: number;
            /**
             * Unique identifier of the Load Balancer type
             */
            name: string;
            /**
             * Description of the Load Balancer type
             */
            description: string;
            /**
             * Number of maximum simultaneous open connections
             */
            max_connections: number;
            /**
             * Number of services a Load Balancer of this type can have
             */
            max_services: number;
            /**
             * Number of targets a single Load Balancer can have
             */
            max_targets: number;
            /**
             * Number of SSL Certificates that can be assigned to a single Load Balancer
             */
            max_assigned_certificates: number;
            /**
             * Point in time when the Load Balancer type is deprecated (in ISO-8601 format)
             */
            deprecated: string | null;
            /**
             * Price per [Location](#locations).
             */
            prices: Array<{
                /**
                 * Name of the [Location](#locations) the price is for.
                 */
                location: string;
                /**
                 * Hourly price in this [Location](#locations).
                 */
                price_hourly: {
                    /**
                     * Price without VAT.
                     */
                    net: string;
                    /**
                     * Price with VAT added.
                     */
                    gross: string;
                };
                /**
                 * Monthly price in this [Location](#locations).
                 */
                price_monthly: {
                    /**
                     * Price without VAT.
                     */
                    net: string;
                    /**
                     * Price with VAT added.
                     */
                    gross: string;
                };
                /**
                 * Free traffic per month in bytes in this [Location](#locations).
                 */
                included_traffic: number;
                /**
                 * Additional traffic price per TB in this [Location](#locations).
                 */
                price_per_tb_traffic: {
                    /**
                     * Price without VAT.
                     */
                    net: string;
                    /**
                     * Price with VAT added.
                     */
                    gross: string;
                };
            }>;
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
     * Get a Load Balancer Type
     * Gets a specific Load Balancer type object.
     * @param id ID of the Load Balancer Type.
     * @returns any The `load_balancer_type` key in the reply contains a Load Balancer type object with this structure
     * @throws ApiError
     */
    static getLoadBalancerTypes1(id: number): CancelablePromise<{
        load_balancer_type?: {
            /**
             * ID of the Load Balancer type
             */
            id: number;
            /**
             * Unique identifier of the Load Balancer type
             */
            name: string;
            /**
             * Description of the Load Balancer type
             */
            description: string;
            /**
             * Number of maximum simultaneous open connections
             */
            max_connections: number;
            /**
             * Number of services a Load Balancer of this type can have
             */
            max_services: number;
            /**
             * Number of targets a single Load Balancer can have
             */
            max_targets: number;
            /**
             * Number of SSL Certificates that can be assigned to a single Load Balancer
             */
            max_assigned_certificates: number;
            /**
             * Point in time when the Load Balancer type is deprecated (in ISO-8601 format)
             */
            deprecated: string | null;
            /**
             * Price per [Location](#locations).
             */
            prices: Array<{
                /**
                 * Name of the [Location](#locations) the price is for.
                 */
                location: string;
                /**
                 * Hourly price in this [Location](#locations).
                 */
                price_hourly: {
                    /**
                     * Price without VAT.
                     */
                    net: string;
                    /**
                     * Price with VAT added.
                     */
                    gross: string;
                };
                /**
                 * Monthly price in this [Location](#locations).
                 */
                price_monthly: {
                    /**
                     * Price without VAT.
                     */
                    net: string;
                    /**
                     * Price with VAT added.
                     */
                    gross: string;
                };
                /**
                 * Free traffic per month in bytes in this [Location](#locations).
                 */
                included_traffic: number;
                /**
                 * Additional traffic price per TB in this [Location](#locations).
                 */
                price_per_tb_traffic: {
                    /**
                     * Price without VAT.
                     */
                    net: string;
                    /**
                     * Price with VAT added.
                     */
                    gross: string;
                };
            }>;
        };
    }>;
}
