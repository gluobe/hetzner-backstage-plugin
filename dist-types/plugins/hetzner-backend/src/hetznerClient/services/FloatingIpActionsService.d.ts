import type { CancelablePromise } from '../core/CancelablePromise';
export declare class FloatingIpActionsService {
    /**
     * Get all Actions
     * Lists multiple [Actions](#actions).
     *
     * Use the provided URI parameters to modify the result.
     *
     * @param id Filter the actions by ID. Can be used multiple times. The response will only contain
     * actions matching the specified IDs.
     *
     * @param sort Sort actions by field and direction. Can be used multiple times. For more
     * information, see "[Sorting](#sorting)".
     *
     * @param status Filter the actions by status. Can be used multiple times. The response will only
     * contain actions matching the specified statuses.
     *
     * @param page Page number to return. For more information, see "[Pagination](#pagination)".
     * @param perPage Maximum number of entries returned per page. For more information, see "[Pagination](#pagination)".
     * @returns any Response for listing [Actions](#actions).
     * @throws ApiError
     */
    static getFloatingIpsActions(id?: number, sort?: 'id' | 'id:asc' | 'id:desc' | 'command' | 'command:asc' | 'command:desc' | 'status' | 'status:asc' | 'status:desc' | 'started' | 'started:asc' | 'started:desc' | 'finished' | 'finished:asc' | 'finished:desc', status?: 'running' | 'success' | 'error', page?: number, perPage?: number): CancelablePromise<{
        actions: Array<{
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
     * Get an Action
     * Returns a single [Action](#actions).
     * @param id ID of the Action.
     * @returns any Response for getting a single [Action](#actions).
     * @throws ApiError
     */
    static getFloatingIpsActions1(id: number): CancelablePromise<{
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
    }>;
    /**
     * Get all Actions for a Floating IP
     * Lists [Actions](#actions) for a [Floating IP](#floating-ips).
     *
     * Use the provided URI parameters to modify the result.
     *
     * @param id ID of the Floating IP.
     * @param sort Sort actions by field and direction. Can be used multiple times. For more
     * information, see "[Sorting](#sorting)".
     *
     * @param status Filter the actions by status. Can be used multiple times. The response will only
     * contain actions matching the specified statuses.
     *
     * @param page Page number to return. For more information, see "[Pagination](#pagination)".
     * @param perPage Maximum number of entries returned per page. For more information, see "[Pagination](#pagination)".
     * @returns any Response for listing [Actions](#actions).
     * @throws ApiError
     */
    static getFloatingIpsActions2(id: number, sort?: 'id' | 'id:asc' | 'id:desc' | 'command' | 'command:asc' | 'command:desc' | 'status' | 'status:asc' | 'status:desc' | 'started' | 'started:asc' | 'started:desc' | 'finished' | 'finished:asc' | 'finished:desc', status?: 'running' | 'success' | 'error', page?: number, perPage?: number): CancelablePromise<{
        actions: Array<{
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
     * Assign a Floating IP to a Server
     * Assigns a [Floating IP](#floating-ips) to a [Server](#servers).
     * @param id ID of the Floating IP.
     * @param requestBody
     * @returns any Response for assigning a [Floating IP](#floating-ips).
     *
     * Contains an [Action](#actions) of type `assign_floating_ip`.
     *
     * @throws ApiError
     */
    static postFloatingIpsActionsAssign(id: number, requestBody?: {
        /**
         * [Server](#servers) the [Floating IP](#floating-ips) is assigned to.
         *
         * `null` if not assigned.
         *
         */
        server: number | null;
    }): CancelablePromise<{
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
    }>;
    /**
     * Change reverse DNS records for a Floating IP
     * Change the reverse DNS records for this [Floating IP](#floating-ips).
     *
     * Allows to modify the PTR records set for the IP address.
     *
     * @param id ID of the Floating IP.
     * @param requestBody The `ip` attributes specifies for which IP address the record is set. For IPv4 addresses this must be the exact address of the [Floating IP](#floating-ips). For IPv6 addresses this must be a single address within the `/64` subnet of the [Floating IP](#floating-ips).
     *
     * The `dns_ptr` attribute specifies the hostname used for the IP address.
     *
     * For IPv6 [Floating IPs](#floating-ips) up to 100 entries can be created.
     *
     * @returns any Response for changing a [Floating IPs](#floating-ips) DNS pointer.
     *
     * Contains an [Action](#actions) of type `change_dns_ptr`.
     *
     * @throws ApiError
     */
    static postFloatingIpsActionsChangeDnsPtr(id: number, requestBody?: {
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
    }): CancelablePromise<{
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
    }>;
    /**
     * Change Floating IP Protection
     * Changes the protection settings configured for the [Floating IP](#floating-ips).
     * @param id ID of the Floating IP.
     * @param requestBody
     * @returns any Response for changing a [Floating IPs](#floating-ips) protection settings.
     *
     * Contains an [Action](#actions) of type `change_protection`.
     *
     * @throws ApiError
     */
    static postFloatingIpsActionsChangeProtection(id: number, requestBody?: {
        /**
         * Prevent the Resource from being deleted.
         */
        delete: boolean;
    }): CancelablePromise<{
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
    }>;
    /**
     * Unassign a Floating IP
     * Unassigns a [Floating IP](#floating-ips).
     *
     * Results in the IP being unreachable. Can be assigned to another resource again.
     *
     * @param id ID of the Floating IP.
     * @returns any Response for unassigning a [Floating IP](#floating-ips).
     *
     * Contains an [Action](#actions) of type `unassign_floating_ip`.
     *
     * @throws ApiError
     */
    static postFloatingIpsActionsUnassign(id: number): CancelablePromise<{
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
    }>;
    /**
     * Get an Action for a Floating IP
     * Returns a specific [Action](#actions) for a [Floating IP](#floating-ips).
     * @param id ID of the Floating IP.
     * @param actionId ID of the Action.
     * @returns any Response for getting an [Action](#actions).
     * @throws ApiError
     */
    static getFloatingIpsActions3(id: number, actionId: number): CancelablePromise<{
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
    }>;
}
