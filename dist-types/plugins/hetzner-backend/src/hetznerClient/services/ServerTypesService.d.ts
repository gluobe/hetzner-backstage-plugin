import type { CancelablePromise } from '../core/CancelablePromise';
export declare class ServerTypesService {
    /**
     * Get all Server Types
     * Gets all Server type objects.
     * @param name Filter resources by their name. The response will only contain the resources
     * matching exactly the specified name.
     *
     * @param page Page number to return. For more information, see "[Pagination](#pagination)".
     * @param perPage Maximum number of entries returned per page. For more information, see "[Pagination](#pagination)".
     * @returns any The `server_types` key in the reply contains an array of Server type objects with this structure
     * @throws ApiError
     */
    static getServerTypes(name?: string, page?: number, perPage?: number): CancelablePromise<{
        server_types: Array<{
            /**
             * ID of the Server type
             */
            id: number;
            /**
             * Unique identifier of the Server type
             */
            name: string;
            /**
             * Description of the Server type
             */
            description: string;
            /**
             * Number of cpu cores a Server of this type will have
             */
            cores: number;
            /**
             * Memory a Server of this type will have in GB
             */
            memory: number;
            /**
             * Disk size a Server of this type will have in GB
             */
            disk: number;
            /**
             * This field is deprecated. Use the deprecation object instead
             */
            deprecated: boolean;
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
            /**
             * Type of Server boot drive. Local has higher speed. Network has better availability.
             */
            storage_type: 'local' | 'network';
            /**
             * Type of cpu
             */
            cpu_type: 'shared' | 'dedicated';
            /**
             * CPU architecture of the Server Type.
             *
             */
            architecture: 'x86' | 'arm';
            /**
             * Describes if, when and how the resource is deprecated. If this field is
             * set to `null` the resource is not deprecated. If a value is set, it is
             * considered deprecated.
             *
             */
            deprecation?: {
                /**
                 * Date of the deprecated resource removal.
                 *
                 * Once this date is reached, the resource will not be returned
                 * by resource type "list" endpoint, and the resource can not be
                 * used to create new resources. For example, if this is an
                 * image, you can not create new servers with this image after
                 * the mentioned date.
                 *
                 */
                unavailable_after: string;
                /**
                 * Date of the deprecation announcement.
                 *
                 */
                announced: string;
            } | null;
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
     * Get a Server Type
     * Gets a specific Server type object.
     * @param id ID of the Server Type.
     * @returns any The `server_type` key in the reply contains a Server type object with this structure
     * @throws ApiError
     */
    static getServerTypes1(id: number): CancelablePromise<{
        server_type: {
            /**
             * ID of the Server type
             */
            id: number;
            /**
             * Unique identifier of the Server type
             */
            name: string;
            /**
             * Description of the Server type
             */
            description: string;
            /**
             * Number of cpu cores a Server of this type will have
             */
            cores: number;
            /**
             * Memory a Server of this type will have in GB
             */
            memory: number;
            /**
             * Disk size a Server of this type will have in GB
             */
            disk: number;
            /**
             * This field is deprecated. Use the deprecation object instead
             */
            deprecated: boolean;
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
            /**
             * Type of Server boot drive. Local has higher speed. Network has better availability.
             */
            storage_type: 'local' | 'network';
            /**
             * Type of cpu
             */
            cpu_type: 'shared' | 'dedicated';
            /**
             * CPU architecture of the Server Type.
             *
             */
            architecture: 'x86' | 'arm';
            /**
             * Describes if, when and how the resource is deprecated. If this field is
             * set to `null` the resource is not deprecated. If a value is set, it is
             * considered deprecated.
             *
             */
            deprecation?: {
                /**
                 * Date of the deprecated resource removal.
                 *
                 * Once this date is reached, the resource will not be returned
                 * by resource type "list" endpoint, and the resource can not be
                 * used to create new resources. For example, if this is an
                 * image, you can not create new servers with this image after
                 * the mentioned date.
                 *
                 */
                unavailable_after: string;
                /**
                 * Date of the deprecation announcement.
                 *
                 */
                announced: string;
            } | null;
        };
    }>;
}
