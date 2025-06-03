/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class NetworkActionsService {
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
    public static getNetworksActions(
        id?: number,
        sort?: 'id' | 'id:asc' | 'id:desc' | 'command' | 'command:asc' | 'command:desc' | 'status' | 'status:asc' | 'status:desc' | 'started' | 'started:asc' | 'started:desc' | 'finished' | 'finished:asc' | 'finished:desc',
        status?: 'running' | 'success' | 'error',
        page: number = 1,
        perPage: number = 25,
    ): CancelablePromise<{
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
    }> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/networks/actions',
            query: {
                'id': id,
                'sort': sort,
                'status': status,
                'page': page,
                'per_page': perPage,
            },
        });
    }
    /**
     * Get an Action
     * Returns a single [Action](#actions).
     * @param id ID of the Action.
     * @returns any Response for getting a single [Action](#actions).
     * @throws ApiError
     */
    public static getNetworksActions1(
        id: number,
    ): CancelablePromise<{
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
    }> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/networks/actions/{id}',
            path: {
                'id': id,
            },
        });
    }
    /**
     * Get all Actions for a Network
     * Lists [Actions](#actions) for a [Network](#networks).
     *
     * Use the provided URI parameters to modify the result.
     *
     * @param id ID of the Network.
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
    public static getNetworksActions2(
        id: number,
        sort?: 'id' | 'id:asc' | 'id:desc' | 'command' | 'command:asc' | 'command:desc' | 'status' | 'status:asc' | 'status:desc' | 'started' | 'started:asc' | 'started:desc' | 'finished' | 'finished:asc' | 'finished:desc',
        status?: 'running' | 'success' | 'error',
        page: number = 1,
        perPage: number = 25,
    ): CancelablePromise<{
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
    }> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/networks/{id}/actions',
            path: {
                'id': id,
            },
            query: {
                'sort': sort,
                'status': status,
                'page': page,
                'per_page': perPage,
            },
        });
    }
    /**
     * Add a route to a Network
     * Adds a route entry to a [Network](#networks).
     *
     * If a change is currently being performed on this [Network](#networks), a error response with code `conflict` will be returned.
     *
     * @param id ID of the Network.
     * @param requestBody
     * @returns any Response for adding a route to a [Network](#networks).
     *
     * The `action` key contains an [Action](#actions) with command `add_route`.
     *
     * @throws ApiError
     */
    public static postNetworksActionsAddRoute(
        id: number,
        requestBody?: {
            /**
             * Destination network or host of the route.
             *
             * Packages addressed for IPs matching the destination IP prefix will be send to the specified gateway.
             *
             * Must be one of
             * * private IPv4 ranges of RFC1918
             * * or `0.0.0.0/0`.
             *
             * Must not overlap with
             * * an existing ip_range in any subnets
             * * or with any destinations in other routes
             * * or with `172.31.1.1`.
             *
             * `172.31.1.1` is being used as a gateway for the public network interface of [Servers](#servers).
             *
             */
            destination: string;
            /**
             * Gateway of the route.
             *
             * Packages addressed for the specified destination will be send to this IP address.
             *
             * Cannot be
             * * the first IP of the networks ip_range,
             * * an IP behind a vSwitch or
             * * `172.31.1.1`.
             *
             * `172.31.1.1` is being used as a gateway for the public network interface of [Servers](#servers).
             *
             */
            gateway: string;
        },
    ): CancelablePromise<{
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
    }> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/networks/{id}/actions/add_route',
            path: {
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * Add a subnet to a Network
     * Adds a new subnet to the [Network](#networks).
     *
     * If the subnet `ip_range` is not provided, the first available `/24` IP range will be used.
     *
     * If a change is currently being performed on this [Network](#networks), a error response with code `conflict` will be returned.
     *
     * @param id ID of the Network.
     * @param requestBody
     * @returns any Response for adding a subnet to a [Network](#networks).
     *
     * The `action` key contains an [Action](#actions) with command `add_subnet`.
     *
     * @throws ApiError
     */
    public static postNetworksActionsAddSubnet(
        id: number,
        requestBody?: {
            /**
             * Type of subnet.
             *
             * - `cloud` - Used to connect cloud [Servers](#servers) and [Load Balancers](#load-balancers).
             * - `server` - Same as the `cloud` type. **Deprecated**, use the `cloud` type instead.
             * - `vswitch` - Used to [connect cloud Servers and Load Balancers with dedicated Servers](https://docs.hetzner.com/cloud/networks/connect-dedi-vswitch).
             *
             */
            type: 'cloud' | 'server' | 'vswitch';
            /**
             * IP range of the subnet.
             *
             * Uses CIDR notation.
             *
             * Must be a subnet of the parent [Networks](#networks) `ip_range`.
             *
             * Must not overlap with any other subnets or with any destinations in routes.
             *
             * Minimum network size is /30. We highly recommend that you pick a larger subnet with a /24 netmask.
             *
             */
            ip_range?: string;
            /**
             * Name of the [Network Zone](#network-zones).
             *
             * The [Location](#locations) contains the `network_zone` it belongs to.
             *
             */
            network_zone: string;
            /**
             * ID of the robot vSwitch.
             *
             * Must be supplied if the subnet is of type `vswitch`.
             *
             */
            vswitch_id?: number;
        },
    ): CancelablePromise<{
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
    }> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/networks/{id}/actions/add_subnet',
            path: {
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * Change IP range of a Network
     * Changes the IP range of a [Network](#networks).
     *
     * The following restrictions apply to changing the IP range:
     * - IP ranges can only be extended and never shrunk.
     * - IPs can only be added to the end of the existing range, therefore only the netmask is allowed to be changed.
     *
     * To update the routes on the connected [Servers](#servers), they need to be rebooted or the routes to be updated manually.
     *
     * For example if the [Network](#networks) has a range of `10.0.0.0/16` to extend it the new range has to start with the IP `10.0.0.0` as well. The netmask `/16` can be changed to a smaller one then `16` therefore increasing the IP range. A valid entry would be `10.0.0.0/15`, `10.0.0.0/14` or `10.0.0.0/13` and so on.
     *
     * If a change is currently being performed on this [Network](#networks), a error response with code `conflict` will be returned.
     *
     * @param id ID of the Network.
     * @param requestBody
     * @returns any Response for changing the [Networks](#networks) IP range.
     *
     * The `action` key contains an [Action](#actions) with command `change_ip_range`.
     *
     * @throws ApiError
     */
    public static postNetworksActionsChangeIpRange(
        id: number,
        requestBody?: {
            /**
             * IP range of the [Network](#networks).
             *
             * Uses CIDR notation.
             *
             * Must span all included subnets. Must be one of the private IPv4 ranges of RFC1918.
             *
             * Minimum network size is /24. We highly recommend that you pick a larger [Network](#networks) with a /16 netmask.
             *
             */
            ip_range: string;
        },
    ): CancelablePromise<{
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
    }> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/networks/{id}/actions/change_ip_range',
            path: {
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * Change Network Protection
     * Changes the protection settings of a [Network](#networks).
     *
     * If a change is currently being performed on this [Network](#networks), a error response with code `conflict` will be returned.
     *
     * @param id ID of the Network.
     * @param requestBody
     * @returns any Response for changing the [Networks](#networks) protection.
     *
     * The `action` key contains an [Action](#actions) with command `change_protection`.
     *
     * @throws ApiError
     */
    public static postNetworksActionsChangeProtection(
        id: number,
        requestBody?: {
            /**
             * Delete protection setting.
             *
             * If true, prevents the [Network](#networks) from being deleted.
             *
             */
            delete?: boolean;
        },
    ): CancelablePromise<{
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
    }> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/networks/{id}/actions/change_protection',
            path: {
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * Delete a route from a Network
     * Delete a route entry from a [Network](#networks).
     *
     * If a change is currently being performed on this [Network](#networks), a error response with code `conflict` will be returned.
     *
     * @param id ID of the Network.
     * @param requestBody
     * @returns any Response for deleting a route from a [Network](#networks).
     *
     * The `action` key contains an [Action](#actions) with command `delete_route`.
     *
     * @throws ApiError
     */
    public static postNetworksActionsDeleteRoute(
        id: number,
        requestBody?: {
            /**
             * Destination network or host of the route.
             *
             * Packages addressed for IPs matching the destination IP prefix will be send to the specified gateway.
             *
             * Must be one of
             * * private IPv4 ranges of RFC1918
             * * or `0.0.0.0/0`.
             *
             * Must not overlap with
             * * an existing ip_range in any subnets
             * * or with any destinations in other routes
             * * or with `172.31.1.1`.
             *
             * `172.31.1.1` is being used as a gateway for the public network interface of [Servers](#servers).
             *
             */
            destination: string;
            /**
             * Gateway of the route.
             *
             * Packages addressed for the specified destination will be send to this IP address.
             *
             * Cannot be
             * * the first IP of the networks ip_range,
             * * an IP behind a vSwitch or
             * * `172.31.1.1`.
             *
             * `172.31.1.1` is being used as a gateway for the public network interface of [Servers](#servers).
             *
             */
            gateway: string;
        },
    ): CancelablePromise<{
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
    }> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/networks/{id}/actions/delete_route',
            path: {
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * Delete a subnet from a Network
     * Deletes a single subnet entry from a [Network](#networks).
     *
     * Subnets containing attached resources can not be deleted, they must be detached beforehand.
     *
     * If a change is currently being performed on this [Network](#networks), a error response with code `conflict` will be returned.
     *
     * @param id ID of the Network.
     * @param requestBody
     * @returns any Response for deleting a subnet from a [Network](#networks).
     *
     * The `action` key contains an [Action](#actions) with command `delete_subnet`.
     *
     * @throws ApiError
     */
    public static postNetworksActionsDeleteSubnet(
        id: number,
        requestBody?: {
            /**
             * IP range in CIDR block notation of the subnet to delete.
             */
            ip_range: string;
        },
    ): CancelablePromise<{
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
    }> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/networks/{id}/actions/delete_subnet',
            path: {
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * Get an Action for a Network
     * Returns a specific [Action](#actions) for a [Network](#networks).
     * @param id ID of the Network.
     * @param actionId ID of the Action.
     * @returns any Response for getting an [Action](#actions).
     * @throws ApiError
     */
    public static getNetworksActions3(
        id: number,
        actionId: number,
    ): CancelablePromise<{
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
    }> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/networks/{id}/actions/{action_id}',
            path: {
                'id': id,
                'action_id': actionId,
            },
        });
    }
}
