/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class PrimaryIpActionsService {
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
    public static getPrimaryIpsActions(
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
            url: '/primary_ips/actions',
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
    public static getPrimaryIpsActions1(
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
            url: '/primary_ips/actions/{id}',
            path: {
                'id': id,
            },
        });
    }
    /**
     * Assign a Primary IP to a resource
     * Assign a [Primary IP](#primary-ips) to a resource.
     *
     * A [Server](#servers) can only have one [Primary IP](#primary-ips) of type `ipv4` and one of type `ipv6` assigned. If you need more IPs use [Floating IPs](#floating-ips).
     *
     * A [Server](#servers) must be powered off (status `off`) in order for this operation to succeed.
     *
     * #### Error Codes specific to this Call
     *
     * | Code                          | Description                                                                      |
     * |------------------------------ |--------------------------------------------------------------------------------- |
     * | `server_not_stopped`          | The [Server](#servers) is running, but needs to be powered off                   |
     * | `primary_ip_already_assigned` | [Primary IP](#primary-ips) is already assigned to a different [Server](#servers) |
     * | `server_has_ipv4`             | The [Server](#servers) already has an IPv4 address                               |
     * | `server_has_ipv6`             | The [Server](#servers) already has an IPv6 address                               |
     *
     * @param id ID of the Primary IP.
     * @param requestBody
     * @returns any Response for assigning a [Primary IP](#primary-ips).
     *
     * Contains an [Action](#actions) of type `assign_primary_ip`.
     *
     * @throws ApiError
     */
    public static postPrimaryIpsActionsAssign(
        id: number,
        requestBody?: {
            /**
             * Type of resource assigning the Primary IP to
             */
            assignee_type: 'server';
            /**
             * ID of a resource of type `assignee_type`
             */
            assignee_id: number;
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
            url: '/primary_ips/{id}/actions/assign',
            path: {
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * Change reverse DNS records for a Primary IP
     * Change the reverse DNS records for this [Primary IP](#primary-ips).
     *
     * Allows to modify the PTR records set for the IP address.
     *
     * @param id ID of the Primary IP.
     * @param requestBody The `ip` attributes specifies for which IP address the record is set. For IPv4 addresses this must be the exact address of the [Primary IP](#primary-ips). For IPv6 addresses this must be a single address within the `/64` subnet of the [Primary IP](#primary-ips).
     *
     * The `dns_ptr` attribute specifies the hostname used for the IP address.
     *
     * For IPv6 [Floating IPs](#floating-ips) up to 100 entries can be created.
     *
     * @returns any Response for changing a [Primary IPs](#primary-ips) DNS pointer.
     *
     * Contains an [Action](#actions) of type `change_dns_ptr`.
     *
     * @throws ApiError
     */
    public static postPrimaryIpsActionsChangeDnsPtr(
        id: number,
        requestBody?: {
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
            url: '/primary_ips/{id}/actions/change_dns_ptr',
            path: {
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * Change Primary IP Protection
     * Changes the protection configuration of a [Primary IP](#primary-ips).
     *
     * A [Primary IPs](#primary-ips) deletion protection can only be enabled if its `auto_delete` property is set to `false`.
     *
     * @param id ID of the Primary IP.
     * @param requestBody
     * @returns any Response for changing a [Primary IPs](#primary-ips) protection settings.
     *
     * Contains an [Action](#actions) of type `change_protection`.
     *
     * @throws ApiError
     */
    public static postPrimaryIpsActionsChangeProtection(
        id: number,
        requestBody?: {
            /**
             * Prevent the Resource from being deleted.
             */
            delete: boolean;
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
            url: '/primary_ips/{id}/actions/change_protection',
            path: {
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * Unassign a Primary IP from a resource
     * Unassign a [Primary IP](#primary-ips) from a resource.
     *
     * A [Server](#servers) must be powered off (status `off`) in order for this operation to succeed.
     *
     * A [Server](#server) requires at least one network interface (public or private) to be powered on.
     *
     * #### Error Codes specific to this Call
     *
     * | Code                              | Description                                                   |
     * |---------------------------------- |-------------------------------------------------------------- |
     * | `server_not_stopped`              | The [Server](#server) is running, but needs to be powered off |
     * | `server_is_load_balancer_target`  | The [Server](#server) IPv4 address is a loadbalancer target   |
     *
     * @param id ID of the Primary IP.
     * @returns any Response for unassigning a [Primary IP](#primary-ips).
     *
     * Contains an [Action](#actions) of type `unassign_primary_ip`.
     *
     * @throws ApiError
     */
    public static postPrimaryIpsActionsUnassign(
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
            method: 'POST',
            url: '/primary_ips/{id}/actions/unassign',
            path: {
                'id': id,
            },
        });
    }
}
