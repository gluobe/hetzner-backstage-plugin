import type { CancelablePromise } from '../core/CancelablePromise';
export declare class IsOsService {
    /**
     * Get all ISOs
     * Returns all available ISO objects.
     * @param name Filter resources by their name. The response will only contain the resources
     * matching exactly the specified name.
     *
     * @param architecture Filter resources by cpu architecture. The response will only contain the resources
     * with the specified cpu architecture.
     *
     * @param includeArchitectureWildcard Include Images with wildcard architecture (architecture is null). Works only if architecture filter is specified.
     * @param page Page number to return. For more information, see "[Pagination](#pagination)".
     * @param perPage Maximum number of entries returned per page. For more information, see "[Pagination](#pagination)".
     * @returns any The `isos` key in the reply contains an array of iso objects with this structure
     * @throws ApiError
     */
    static getIsos(name?: string, architecture?: 'x86' | 'arm', includeArchitectureWildcard?: boolean, page?: number, perPage?: number): CancelablePromise<{
        isos: Array<{
            /**
             * ID of the ISO.
             */
            id: number;
            /**
             * Unique identifier of the ISO. Only set for public ISOs
             */
            name: string | null;
            /**
             * Description of the ISO
             */
            description: string;
            /**
             * Type of the ISO
             */
            type: 'public' | 'private' | null;
            /**
             * Describes if, when and how the resource is deprecated. If this field is
             * set to `null` the resource is not deprecated. If a value is set, it is
             * considered deprecated.
             *
             */
            deprecation: {
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
            /**
             * CPU architecture compatible with the ISO.
             *
             * Null indicates no restriction on the architecture (wildcard).
             *
             */
            architecture: 'x86' | 'arm' | null;
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
     * Get an ISO
     * Returns a specific ISO object.
     * @param id ID of the ISO.
     * @returns any The `iso` key in the reply contains an array of ISO objects with this structure
     * @throws ApiError
     */
    static getIsos1(id: number): CancelablePromise<{
        iso: {
            /**
             * ID of the ISO.
             */
            id: number;
            /**
             * Unique identifier of the ISO. Only set for public ISOs
             */
            name: string | null;
            /**
             * Description of the ISO
             */
            description: string;
            /**
             * Type of the ISO
             */
            type: 'public' | 'private' | null;
            /**
             * Describes if, when and how the resource is deprecated. If this field is
             * set to `null` the resource is not deprecated. If a value is set, it is
             * considered deprecated.
             *
             */
            deprecation: {
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
            /**
             * CPU architecture compatible with the ISO.
             *
             * Null indicates no restriction on the architecture (wildcard).
             *
             */
            architecture: 'x86' | 'arm' | null;
        };
    }>;
}
