/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class LoadBalancerActionsService {
    /**
     * Get all Actions
     * Returns all Action objects. You can `sort` the results by using the sort URI parameter, and filter them with the `status` and `id` parameter.
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
     * @returns any The `actions` key contains a list of Actions
     * @throws ApiError
     */
    public static getLoadBalancersActions(
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
            url: '/load_balancers/actions',
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
     * Returns a specific Action object.
     * @param id ID of the Action.
     * @returns any The `action` key in the reply has this structure
     * @throws ApiError
     */
    public static getLoadBalancersActions1(
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
            url: '/load_balancers/actions/{id}',
            path: {
                'id': id,
            },
        });
    }
    /**
     * Get all Actions for a Load Balancer
     * Returns all Action objects for a Load Balancer. You can sort the results by using the `sort` URI parameter, and filter them with the `status` parameter.
     * @param id ID of the Load Balancer.
     * @param sort Sort actions by field and direction. Can be used multiple times. For more
     * information, see "[Sorting](#sorting)".
     *
     * @param status Filter the actions by status. Can be used multiple times. The response will only
     * contain actions matching the specified statuses.
     *
     * @param page Page number to return. For more information, see "[Pagination](#pagination)".
     * @param perPage Maximum number of entries returned per page. For more information, see "[Pagination](#pagination)".
     * @returns any The `actions` key contains a list of Actions
     * @throws ApiError
     */
    public static getLoadBalancersActions2(
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
            url: '/load_balancers/{id}/actions',
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
     * Add Service
     * Adds a service to a Load Balancer.
     *
     * #### Call specific error codes
     *
     * | Code                       | Description                                             |
     * |----------------------------|---------------------------------------------------------|
     * | `source_port_already_used` | The source port you are trying to add is already in use |
     *
     * @param id ID of the Load Balancer.
     * @param requestBody
     * @returns any The `action` key contains the `add_service` Action
     * @throws ApiError
     */
    public static postLoadBalancersActionsAddService(
        id: number,
        requestBody?: {
            /**
             * Protocol of the Load Balancer
             */
            protocol: 'tcp' | 'http' | 'https';
            /**
             * Port the Load Balancer listens on
             */
            listen_port: number;
            /**
             * Port the Load Balancer will balance to
             */
            destination_port: number;
            /**
             * Is Proxyprotocol enabled or not
             */
            proxyprotocol: boolean;
            /**
             * Service health check
             */
            health_check: {
                /**
                 * Type of the health check
                 */
                protocol: 'tcp' | 'http';
                /**
                 * Port the health check will be performed on
                 */
                port: number;
                /**
                 * Time interval in seconds health checks are performed
                 */
                interval: number;
                /**
                 * Time in seconds after an attempt is considered a timeout
                 */
                timeout: number;
                /**
                 * Unsuccessful retries needed until a target is considered unhealthy; an unhealthy target needs the same number of successful retries to become healthy again
                 */
                retries: number;
                /**
                 * Additional configuration for protocol http
                 */
                http?: {
                    /**
                     * Host header to send in the HTTP request. May not contain spaces, percent or backslash symbols. Can be null, in that case no host header is sent.
                     */
                    domain: string | null;
                    /**
                     * HTTP path to use for health checks. May not contain literal spaces, use percent-encoding instead.
                     */
                    path: string;
                    /**
                     * String that must be contained in HTTP response in order to pass the health check
                     */
                    response?: string;
                    /**
                     * List of returned HTTP status codes in order to pass the health check. Supports the wildcards `?` for exactly one character and `*` for multiple ones.
                     */
                    status_codes?: Array<string>;
                    /**
                     * Use HTTPS for health check
                     */
                    tls?: boolean;
                };
            };
            /**
             * Configuration option for protocols http and https
             */
            http?: {
                /**
                 * Name of the cookie used for sticky sessions.
                 */
                cookie_name?: string;
                /**
                 * Lifetime of the cookie used for sticky sessions (in seconds).
                 */
                cookie_lifetime?: number;
                /**
                 * IDs of the Certificates to use for TLS/SSL termination by the Load Balancer; empty for TLS/SSL passthrough or if `protocol` is `http`.
                 */
                certificates?: Array<number>;
                /**
                 * Redirect HTTP requests to HTTPS. Only available if `protocol` is `https`.
                 */
                redirect_http?: boolean;
                /**
                 * Use sticky sessions. Only available if `protocol` is `http` or `https`.
                 */
                sticky_sessions?: boolean;
            };
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
            url: '/load_balancers/{id}/actions/add_service',
            path: {
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * Add Target
     * Adds a target to a Load Balancer.
     *
     * #### Call specific error codes
     *
     * | Code                                    | Description                                                                                           |
     * |-----------------------------------------|-------------------------------------------------------------------------------------------------------|
     * | `cloud_resource_ip_not_allowed`         | The IP you are trying to add as a target belongs to a Hetzner Cloud resource                          |
     * | `ip_not_owned`                          | The IP you are trying to add as a target is not owned by the Project owner                            |
     * | `load_balancer_not_attached_to_network` | The Load Balancer is not attached to a network                                                        |
     * | `robot_unavailable`                     | Robot was not available. The caller may retry the operation after a short delay.                      |
     * | `server_not_attached_to_network`        | The server you are trying to add as a target is not attached to the same network as the Load Balancer |
     * | `missing_ipv4`                          | The server that you are trying to add as a public target does not have a public IPv4 address          |
     * | `target_already_defined`                | The Load Balancer target you are trying to define is already defined                                  |
     *
     * @param id ID of the Load Balancer.
     * @param requestBody
     * @returns any The `action` key contains the `add_target` Action
     * @throws ApiError
     */
    public static postLoadBalancersActionsAddTarget(
        id: number,
        requestBody?: {
            /**
             * Type of the resource
             */
            type: 'server' | 'label_selector' | 'ip';
            /**
             * Configuration for type Server, only valid and required if type is `server`.
             */
            server?: {
                /**
                 * ID of the Server
                 */
                id: number;
            };
            /**
             * Use the private network IP instead of the public IP of the Server, requires the Server and Load Balancer to be in the same network.
             */
            use_private_ip?: boolean;
            /**
             * Configuration for label selector targets, only valid and required if type is `label_selector`.
             */
            label_selector?: {
                /**
                 * Label selector
                 */
                selector: string;
            };
            /**
             * Configuration for an IP target. It is only possible to use the (Public or vSwitch) IPs of Hetzner Online Root Servers belonging to the project owner. IPs belonging to other users are blocked. Additionally IPs belonging to services provided by Hetzner Cloud (Servers, Load Balancers, ...) are blocked as well. Only valid and required if type is `ip`.
             */
            ip?: {
                /**
                 * IP of a server that belongs to the same customer (public IPv4/IPv6) or private IP in a subnet type vswitch.
                 */
                ip: string;
            };
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
            url: '/load_balancers/{id}/actions/add_target',
            path: {
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * Attach a Load Balancer to a Network
     * Attach a Load Balancer to a Network.
     *
     * **Call specific error codes**
     *
     * | Code                             | Description                                                           |
     * |----------------------------------|-----------------------------------------------------------------------|
     * | `load_balancer_already_attached` | The Load Balancer is already attached to a network                    |
     * | `ip_not_available`               | The provided Network IP is not available                              |
     * | `no_subnet_available`            | No Subnet or IP is available for the Load Balancer within the network |
     *
     * @param id ID of the Load Balancer.
     * @param requestBody
     * @returns any The `action` key contains the `attach_to_network` Action
     * @throws ApiError
     */
    public static postLoadBalancersActionsAttachToNetwork(
        id: number,
        requestBody?: {
            /**
             * ID of an existing network to attach the Load Balancer to
             */
            network: number;
            /**
             * IP to request to be assigned to this Load Balancer; if you do not provide this then you will be auto assigned an IP address
             */
            ip?: string;
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
            url: '/load_balancers/{id}/actions/attach_to_network',
            path: {
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * Change Algorithm
     * Change the algorithm that determines to which target new requests are sent.
     * @param id ID of the Load Balancer.
     * @param requestBody
     * @returns any The `action` key contains the `change_algorithm` Action
     * @throws ApiError
     */
    public static postLoadBalancersActionsChangeAlgorithm(
        id: number,
        requestBody?: {
            /**
             * Algorithm of the Load Balancer
             */
            type: 'round_robin' | 'least_connections';
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
            url: '/load_balancers/{id}/actions/change_algorithm',
            path: {
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * Change reverse DNS entry for this Load Balancer
     * Changes the hostname that will appear when getting the hostname belonging to the public IPs (IPv4 and IPv6) of this Load Balancer.
     *
     * Floating IPs assigned to the Server are not affected by this.
     *
     * @param id ID of the Load Balancer.
     * @param requestBody Select the IP address for which to change the DNS entry by passing `ip`. It can be either IPv4 or IPv6. The target hostname is set by passing `dns_ptr`.
     * @returns any The `action` key in the reply contains an Action object with this structure
     * @throws ApiError
     */
    public static postLoadBalancersActionsChangeDnsPtr(
        id: number,
        requestBody?: {
            /**
             * Public IP address for which the reverse DNS entry should be set
             */
            ip: string;
            /**
             * Hostname to set as a reverse DNS PTR entry
             */
            dns_ptr: string | null;
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
            url: '/load_balancers/{id}/actions/change_dns_ptr',
            path: {
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * Change Load Balancer Protection
     * Changes the protection configuration of a Load Balancer.
     * @param id ID of the Load Balancer.
     * @param requestBody
     * @returns any The `action` key contains the `change_protection` Action
     * @throws ApiError
     */
    public static postLoadBalancersActionsChangeProtection(
        id: number,
        requestBody?: {
            /**
             * If true, prevents the Load Balancer from being deleted
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
            url: '/load_balancers/{id}/actions/change_protection',
            path: {
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * Change the Type of a Load Balancer
     * Changes the type (Max Services, Max Targets and Max Connections) of a Load Balancer.
     *
     * **Call specific error codes**
     *
     * | Code                         | Description                                                     |
     * |------------------------------|-----------------------------------------------------------------|
     * | `invalid_load_balancer_type` | The Load Balancer type does not fit for the given Load Balancer |
     *
     * @param id ID of the Load Balancer.
     * @param requestBody
     * @returns any The `action` key contains the `change_load_balancer_type` Action
     * @throws ApiError
     */
    public static postLoadBalancersActionsChangeType(
        id: number,
        requestBody?: {
            /**
             * ID or name of Load Balancer type the Load Balancer should migrate to
             */
            load_balancer_type: string;
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
            url: '/load_balancers/{id}/actions/change_type',
            path: {
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * Delete Service
     * Delete a service of a Load Balancer.
     * @param id ID of the Load Balancer.
     * @param requestBody
     * @returns any The `action` key contains the `delete_service` Action
     * @throws ApiError
     */
    public static postLoadBalancersActionsDeleteService(
        id: number,
        requestBody?: {
            /**
             * The listen port of the service you want to delete
             */
            listen_port: number;
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
            url: '/load_balancers/{id}/actions/delete_service',
            path: {
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * Detach a Load Balancer from a Network
     * Detaches a Load Balancer from a network.
     * @param id ID of the Load Balancer.
     * @param requestBody
     * @returns any The `action` key contains the `detach_from_network` Action
     * @throws ApiError
     */
    public static postLoadBalancersActionsDetachFromNetwork(
        id: number,
        requestBody?: {
            /**
             * ID of an existing network to detach the Load Balancer from
             */
            network: number;
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
            url: '/load_balancers/{id}/actions/detach_from_network',
            path: {
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * Disable the public interface of a Load Balancer
     * Disable the public interface of a Load Balancer. The Load Balancer will be not accessible from the internet via its public IPs.
     *
     * #### Call specific error codes
     *
     * | Code                                      | Description                                                                    |
     * |-------------------------------------------|--------------------------------------------------------------------------------|
     * | `load_balancer_not_attached_to_network`   |  The Load Balancer is not attached to a network                                |
     * | `targets_without_use_private_ip`          | The Load Balancer has targets that use the public IP instead of the private IP |
     *
     * @param id ID of the Load Balancer.
     * @returns any The `action` key contains the `disable_public_interface` Action
     * @throws ApiError
     */
    public static postLoadBalancersActionsDisablePublicInterface(
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
            url: '/load_balancers/{id}/actions/disable_public_interface',
            path: {
                'id': id,
            },
        });
    }
    /**
     * Enable the public interface of a Load Balancer
     * Enable the public interface of a Load Balancer. The Load Balancer will be accessible from the internet via its public IPs.
     * @param id ID of the Load Balancer.
     * @returns any The `action` key contains the `enable_public_interface` Action
     * @throws ApiError
     */
    public static postLoadBalancersActionsEnablePublicInterface(
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
            url: '/load_balancers/{id}/actions/enable_public_interface',
            path: {
                'id': id,
            },
        });
    }
    /**
     * Remove Target
     * Removes a target from a Load Balancer.
     * @param id ID of the Load Balancer.
     * @param requestBody
     * @returns any The `action` key contains the `remove_target` Action
     * @throws ApiError
     */
    public static postLoadBalancersActionsRemoveTarget(
        id: number,
        requestBody?: {
            /**
             * Type of the resource
             */
            type: 'server' | 'label_selector' | 'ip';
            /**
             * Configuration for type Server, required if type is `server`
             */
            server?: {
                /**
                 * ID of the Server
                 */
                id: number;
            };
            /**
             * Configuration for label selector targets, required if type is `label_selector`
             */
            label_selector?: {
                /**
                 * Label selector
                 */
                selector: string;
            };
            /**
             * IP target where the traffic should be routed to. It is only possible to use the (Public or vSwitch) IPs of Hetzner Online Root Servers belonging to the project owner. IPs belonging to other users are blocked. Additionally IPs belonging to services provided by Hetzner Cloud (Servers, Load Balancers, ...) are blocked as well. Only present for target type `ip`.
             */
            ip?: {
                /**
                 * IP of a server that belongs to the same customer (public IPv4/IPv6) or private IP in a subnet type vswitch.
                 */
                ip: string;
            };
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
            url: '/load_balancers/{id}/actions/remove_target',
            path: {
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * Update Service
     * Updates a Load Balancer Service.
     *
     * #### Call specific error codes
     *
     * | Code                       | Description                                             |
     * |----------------------------|---------------------------------------------------------|
     * | `source_port_already_used` | The source port you are trying to add is already in use |
     *
     * @param id ID of the Load Balancer.
     * @param requestBody
     * @returns any The `action` key contains the `update_service` Action
     * @throws ApiError
     */
    public static postLoadBalancersActionsUpdateService(
        id: number,
        requestBody?: {
            /**
             * Protocol of the Load Balancer
             */
            protocol?: 'tcp' | 'http' | 'https';
            /**
             * Port the Load Balancer listens on
             */
            listen_port: number;
            /**
             * Port the Load Balancer will balance to
             */
            destination_port?: number;
            /**
             * Is Proxyprotocol enabled or not
             */
            proxyprotocol?: boolean;
            /**
             * Service health check
             */
            health_check?: {
                /**
                 * Type of the health check
                 */
                protocol?: 'tcp' | 'http';
                /**
                 * Port the health check will be performed on
                 */
                port?: number;
                /**
                 * Time interval in seconds health checks are performed
                 */
                interval?: number;
                /**
                 * Time in seconds after an attempt is considered a timeout
                 */
                timeout?: number;
                /**
                 * Unsuccessful retries needed until a target is considered unhealthy; an unhealthy target needs the same number of successful retries to become healthy again
                 */
                retries?: number;
                /**
                 * Additional configuration for protocol http
                 */
                http?: {
                    /**
                     * Host header to send in the HTTP request. May not contain spaces, percent or backslash symbols. Can be null, in that case no host header is sent.
                     */
                    domain?: string | null;
                    /**
                     * HTTP path to use for health checks. May not contain literal spaces, use percent-encoding instead.
                     */
                    path?: string;
                    /**
                     * String that must be contained in HTTP response in order to pass the health check
                     */
                    response?: string;
                    /**
                     * List of returned HTTP status codes in order to pass the health check. Supports the wildcards `?` for exactly one character and `*` for multiple ones.
                     */
                    status_codes?: Array<string>;
                    /**
                     * Use HTTPS for health check
                     */
                    tls?: boolean;
                };
            };
            /**
             * Configuration option for protocols http and https
             */
            http?: {
                /**
                 * Name of the cookie used for sticky sessions
                 */
                cookie_name?: string;
                /**
                 * Lifetime of the cookie used for sticky sessions (in seconds)
                 */
                cookie_lifetime?: number;
                /**
                 * IDs of the Certificates to use for TLS/SSL termination by the Load Balancer; empty for TLS/SSL passthrough or if `protocol` is "http"
                 */
                certificates?: Array<number>;
                /**
                 * Redirect HTTP requests to HTTPS. Only available if protocol is "https".
                 */
                redirect_http?: boolean;
                /**
                 * Use sticky sessions. Only available if protocol is "http" or "https".
                 */
                sticky_sessions?: boolean;
            };
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
            url: '/load_balancers/{id}/actions/update_service',
            path: {
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * Get an Action for a Load Balancer
     * Returns a specific Action for a Load Balancer.
     * @param id ID of the Load Balancer.
     * @param actionId ID of the Action.
     * @returns any The `action` key contains the Load Balancer Action
     * @throws ApiError
     */
    public static getLoadBalancersActions3(
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
            url: '/load_balancers/{id}/actions/{action_id}',
            path: {
                'id': id,
                'action_id': actionId,
            },
        });
    }
}
