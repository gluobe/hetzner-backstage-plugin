/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class FirewallsService {
    /**
     * Get all Firewalls
     * Returns all [Firewalls](#firewalls).
     *
     * Use the provided URI parameters to modify the result.
     *
     * @param sort Sort resources by field and direction. Can be used multiple times. For more
     * information, see "[Sorting](#sorting)".
     *
     * @param name Filter resources by their name. The response will only contain the resources
     * matching exactly the specified name.
     *
     * @param labelSelector Filter resources by labels. The response will only contain resources matching the
     * label selector. For more information, see "[Label Selector](#label-selector)".
     *
     * @param page Page number to return. For more information, see "[Pagination](#pagination)".
     * @param perPage Maximum number of entries returned per page. For more information, see "[Pagination](#pagination)".
     * @returns any The `firewalls` key contains the [Firewalls](#firewalls).
     * @throws ApiError
     */
    public static getFirewalls(
        sort?: 'id' | 'id:asc' | 'id:desc' | 'name' | 'name:asc' | 'name:desc' | 'created' | 'created:asc' | 'created:desc',
        name?: string,
        labelSelector?: string,
        page: number = 1,
        perPage: number = 25,
    ): CancelablePromise<{
        firewalls: Array<{
            /**
             * ID of the Firewall.
             */
            id: number;
            /**
             * Name of the [Firewall](#firewalls).
             *
             * Limited to a maximum of 128 characters.
             *
             * Must be unique per Project.
             *
             */
            name: string;
            /**
             * User-defined labels (`key/value` pairs) for the Resource.
             * For more information, see "[Labels](#labels)".
             *
             */
            labels?: Record<string, string>;
            /**
             * Point in time when the Resource was created (in ISO-8601 format).
             */
            created: string;
            rules: Array<{
                /**
                 * Description of the rule.
                 */
                description?: string | null;
                /**
                 * Traffic direction in which the rule should be applied to.
                 *
                 * Use `source_ips` for direction `in` and `destination_ips` for direction `out` to specify IPs.
                 *
                 */
                direction: 'in' | 'out';
                /**
                 * List of permitted IPv4/IPv6 addresses for incoming traffic.
                 *
                 * The `direction` must be set to `in`.
                 *
                 * IPs must be provided in [CIDR block notation](https://wikipedia.org/wiki/CIDR). You can specify 100 CIDR
                 * blocks at most.
                 *
                 * The CIDR blocks may refer to networks (with empty host bits) or single hosts.
                 * For example, a network could be defined with `10.0.1.0/24` or `2001:db8:ff00:42::/64`,
                 * and a single host with `10.0.1.1/32` or `2001:db8:ff00:42::8329/128`.
                 *
                 * Use `0.0.0.0/0` to allow any IPv4 addresses and `::/0` to allow any IPv6 addresses.
                 *
                 */
                source_ips: Array<string>;
                /**
                 * List of permitted IPv4/IPv6 addresses for outgoing traffic.
                 *
                 * The `direction` must be set to `out`.
                 *
                 * IPs must be in [CIDR block notation](https://wikipedia.org/wiki/CIDR). You can specify 100 CIDR
                 * blocks at most.
                 *
                 * The CIDR blocks may refer to networks (with empty host bits) or single hosts.
                 * For example, a network could be defined with `10.0.1.0/24` or `2001:db8:ff00:42::/64`,
                 * and a single host with `10.0.1.1/32` or `2001:db8:ff00:42::8329/128`.
                 *
                 * Use `0.0.0.0/0` to allow any IPv4 addresses and `::/0` to allow any IPv6 addresses.
                 *
                 */
                destination_ips: Array<string>;
                /**
                 * Network protocol to apply the rule for.
                 */
                protocol: 'tcp' | 'udp' | 'icmp' | 'esp' | 'gre';
                /**
                 * Port or port range to apply the rule for.
                 *
                 * Only applicable for protocols `tcp` and `udp`.
                 *
                 * A port range can be specified by separating lower and upper bounds with a dash. `1024-5000` will include
                 * all ports starting from 1024 up to port 5000.
                 *
                 */
                port: string | null;
            }>;
            applied_to: Array<{
                /**
                 * The type of resource to apply.
                 */
                type: 'server' | 'label_selector';
                /**
                 * [Server](#servers) the [Firewall](#firewalls) is applied to.
                 *
                 * Only set for `type` `server`, otherwise `null`.
                 *
                 */
                server?: {
                    /**
                     * ID of the Server.
                     */
                    id: number;
                };
                /**
                 * [Label Selector](#label-selector) the [Firewall](#firewalls) is applied to.
                 *
                 * Only set for `type` `label_selector`, otherwise `null`.
                 *
                 */
                label_selector?: {
                    /**
                     * Label selector
                     */
                    selector: string;
                };
                /**
                 * Resources applied to via this [Label Selector](#label-selector).
                 *
                 */
                applied_to_resources?: Array<{
                    /**
                     * Type of resource.
                     */
                    type?: 'server';
                    /**
                     * [Server](#servers) the [Firewall](#firewalls) is applied to.
                     *
                     * Only set for `type` `server`, otherwise `null`.
                     *
                     */
                    server?: {
                        /**
                         * ID of the Server.
                         */
                        id: number;
                    };
                }>;
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
    }> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/firewalls',
            query: {
                'sort': sort,
                'name': name,
                'label_selector': labelSelector,
                'page': page,
                'per_page': perPage,
            },
        });
    }
    /**
     * Create a Firewall
     * Create a [Firewall](#firewalls).
     *
     * #### Error Codes specific to this Call
     *
     * | Code                          | Description                                                                 |
     * |------------------------------ |-----------------------------------------------------------------------------|
     * | `server_already_added`        | [Server](#servers) applied more than once                                   |
     * | `incompatible_network_type`   | The resources network type is not supported by [Firewalls](#firewalls)      |
     * | `firewall_resource_not_found` | The resource the [Firewall](#firewalls) should be attached to was not found |
     *
     * @param requestBody
     * @returns any The `firewall` key contains the created [Firewall](#firewalls).
     * @throws ApiError
     */
    public static postFirewalls(
        requestBody?: {
            /**
             * Name of the [Firewall](#firewalls).
             *
             * Limited to a maximum of 128 characters.
             *
             * Must be unique per Project.
             *
             */
            name: string;
            /**
             * User-defined labels (`key/value` pairs) for the Resource.
             * For more information, see "[Labels](#labels)".
             *
             */
            labels?: Record<string, string>;
            /**
             * Array of rules.
             *
             * Rules are limited to 50 entries per [Firewall](#firewalls) and [500 effective rules](https://docs.hetzner.com/cloud/firewalls/overview#limits).
             *
             */
            rules?: Array<{
                /**
                 * Description of the rule.
                 */
                description?: string | null;
                /**
                 * Traffic direction in which the rule should be applied to.
                 *
                 * Use `source_ips` for direction `in` and `destination_ips` for direction `out` to specify IPs.
                 *
                 */
                direction: 'in' | 'out';
                /**
                 * List of permitted IPv4/IPv6 addresses for incoming traffic.
                 *
                 * The `direction` must be set to `in`.
                 *
                 * IPs must be provided in [CIDR block notation](https://wikipedia.org/wiki/CIDR). You can specify 100 CIDR
                 * blocks at most.
                 *
                 * The CIDR blocks may refer to networks (with empty host bits) or single hosts.
                 * For example, a network could be defined with `10.0.1.0/24` or `2001:db8:ff00:42::/64`,
                 * and a single host with `10.0.1.1/32` or `2001:db8:ff00:42::8329/128`.
                 *
                 * Use `0.0.0.0/0` to allow any IPv4 addresses and `::/0` to allow any IPv6 addresses.
                 *
                 */
                source_ips?: Array<string>;
                /**
                 * List of permitted IPv4/IPv6 addresses for outgoing traffic.
                 *
                 * The `direction` must be set to `out`.
                 *
                 * IPs must be in [CIDR block notation](https://wikipedia.org/wiki/CIDR). You can specify 100 CIDR
                 * blocks at most.
                 *
                 * The CIDR blocks may refer to networks (with empty host bits) or single hosts.
                 * For example, a network could be defined with `10.0.1.0/24` or `2001:db8:ff00:42::/64`,
                 * and a single host with `10.0.1.1/32` or `2001:db8:ff00:42::8329/128`.
                 *
                 * Use `0.0.0.0/0` to allow any IPv4 addresses and `::/0` to allow any IPv6 addresses.
                 *
                 */
                destination_ips?: Array<string>;
                /**
                 * Network protocol to apply the rule for.
                 */
                protocol: 'tcp' | 'udp' | 'icmp' | 'esp' | 'gre';
                /**
                 * Port or port range to apply the rule for.
                 *
                 * Only applicable for protocols `tcp` and `udp`.
                 *
                 * A port range can be specified by separating lower and upper bounds with a dash. `1024-5000` will include
                 * all ports starting from 1024 up to port 5000.
                 *
                 */
                port?: string;
            }>;
            /**
             * Resources to apply the [Firewall](#firewalls) to.
             *
             * Resources added directly are taking precedence over those added via a [Label Selector](#label-selector).
             *
             */
            apply_to?: Array<{
                /**
                 * Type of the resource.
                 */
                type: 'server' | 'label_selector';
                /**
                 * [Server](#servers) the [Firewall](#firewalls) is applied to.
                 *
                 * Only set for `type` `server`, otherwise `null`.
                 *
                 */
                server?: {
                    /**
                     * ID of the [Server](#servers).
                     */
                    id: number;
                };
                /**
                 * [Label Selector](#label-selector) the [Firewall](#firewalls) is applied to.
                 *
                 * Only set for `type` `label_selector`, otherwise `null`.
                 *
                 */
                label_selector?: {
                    /**
                     * The selector.
                     */
                    selector: string;
                };
            }>;
        },
    ): CancelablePromise<{
        firewall?: {
            /**
             * ID of the Firewall.
             */
            id: number;
            /**
             * Name of the [Firewall](#firewalls).
             *
             * Limited to a maximum of 128 characters.
             *
             * Must be unique per Project.
             *
             */
            name: string;
            /**
             * User-defined labels (`key/value` pairs) for the Resource.
             * For more information, see "[Labels](#labels)".
             *
             */
            labels?: Record<string, string>;
            /**
             * Point in time when the Resource was created (in ISO-8601 format).
             */
            created: string;
            rules: Array<{
                /**
                 * Description of the rule.
                 */
                description?: string | null;
                /**
                 * Traffic direction in which the rule should be applied to.
                 *
                 * Use `source_ips` for direction `in` and `destination_ips` for direction `out` to specify IPs.
                 *
                 */
                direction: 'in' | 'out';
                /**
                 * List of permitted IPv4/IPv6 addresses for incoming traffic.
                 *
                 * The `direction` must be set to `in`.
                 *
                 * IPs must be provided in [CIDR block notation](https://wikipedia.org/wiki/CIDR). You can specify 100 CIDR
                 * blocks at most.
                 *
                 * The CIDR blocks may refer to networks (with empty host bits) or single hosts.
                 * For example, a network could be defined with `10.0.1.0/24` or `2001:db8:ff00:42::/64`,
                 * and a single host with `10.0.1.1/32` or `2001:db8:ff00:42::8329/128`.
                 *
                 * Use `0.0.0.0/0` to allow any IPv4 addresses and `::/0` to allow any IPv6 addresses.
                 *
                 */
                source_ips: Array<string>;
                /**
                 * List of permitted IPv4/IPv6 addresses for outgoing traffic.
                 *
                 * The `direction` must be set to `out`.
                 *
                 * IPs must be in [CIDR block notation](https://wikipedia.org/wiki/CIDR). You can specify 100 CIDR
                 * blocks at most.
                 *
                 * The CIDR blocks may refer to networks (with empty host bits) or single hosts.
                 * For example, a network could be defined with `10.0.1.0/24` or `2001:db8:ff00:42::/64`,
                 * and a single host with `10.0.1.1/32` or `2001:db8:ff00:42::8329/128`.
                 *
                 * Use `0.0.0.0/0` to allow any IPv4 addresses and `::/0` to allow any IPv6 addresses.
                 *
                 */
                destination_ips: Array<string>;
                /**
                 * Network protocol to apply the rule for.
                 */
                protocol: 'tcp' | 'udp' | 'icmp' | 'esp' | 'gre';
                /**
                 * Port or port range to apply the rule for.
                 *
                 * Only applicable for protocols `tcp` and `udp`.
                 *
                 * A port range can be specified by separating lower and upper bounds with a dash. `1024-5000` will include
                 * all ports starting from 1024 up to port 5000.
                 *
                 */
                port: string | null;
            }>;
            applied_to: Array<{
                /**
                 * The type of resource to apply.
                 */
                type: 'server' | 'label_selector';
                /**
                 * [Server](#servers) the [Firewall](#firewalls) is applied to.
                 *
                 * Only set for `type` `server`, otherwise `null`.
                 *
                 */
                server?: {
                    /**
                     * ID of the Server.
                     */
                    id: number;
                };
                /**
                 * [Label Selector](#label-selector) the [Firewall](#firewalls) is applied to.
                 *
                 * Only set for `type` `label_selector`, otherwise `null`.
                 *
                 */
                label_selector?: {
                    /**
                     * Label selector
                     */
                    selector: string;
                };
                /**
                 * Resources applied to via this [Label Selector](#label-selector).
                 *
                 */
                applied_to_resources?: Array<{
                    /**
                     * Type of resource.
                     */
                    type?: 'server';
                    /**
                     * [Server](#servers) the [Firewall](#firewalls) is applied to.
                     *
                     * Only set for `type` `server`, otherwise `null`.
                     *
                     */
                    server?: {
                        /**
                         * ID of the Server.
                         */
                        id: number;
                    };
                }>;
            }>;
        };
        actions?: Array<{
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
    }> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/firewalls',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * Get a Firewall
     * Returns a single [Firewall](#firewalls).
     * @param id ID of the Firewall.
     * @returns any The `firewall` key contains the [Firewall](#firewalls).
     * @throws ApiError
     */
    public static getFirewalls1(
        id: number,
    ): CancelablePromise<{
        firewall: {
            /**
             * ID of the Firewall.
             */
            id: number;
            /**
             * Name of the [Firewall](#firewalls).
             *
             * Limited to a maximum of 128 characters.
             *
             * Must be unique per Project.
             *
             */
            name: string;
            /**
             * User-defined labels (`key/value` pairs) for the Resource.
             * For more information, see "[Labels](#labels)".
             *
             */
            labels?: Record<string, string>;
            /**
             * Point in time when the Resource was created (in ISO-8601 format).
             */
            created: string;
            rules: Array<{
                /**
                 * Description of the rule.
                 */
                description?: string | null;
                /**
                 * Traffic direction in which the rule should be applied to.
                 *
                 * Use `source_ips` for direction `in` and `destination_ips` for direction `out` to specify IPs.
                 *
                 */
                direction: 'in' | 'out';
                /**
                 * List of permitted IPv4/IPv6 addresses for incoming traffic.
                 *
                 * The `direction` must be set to `in`.
                 *
                 * IPs must be provided in [CIDR block notation](https://wikipedia.org/wiki/CIDR). You can specify 100 CIDR
                 * blocks at most.
                 *
                 * The CIDR blocks may refer to networks (with empty host bits) or single hosts.
                 * For example, a network could be defined with `10.0.1.0/24` or `2001:db8:ff00:42::/64`,
                 * and a single host with `10.0.1.1/32` or `2001:db8:ff00:42::8329/128`.
                 *
                 * Use `0.0.0.0/0` to allow any IPv4 addresses and `::/0` to allow any IPv6 addresses.
                 *
                 */
                source_ips: Array<string>;
                /**
                 * List of permitted IPv4/IPv6 addresses for outgoing traffic.
                 *
                 * The `direction` must be set to `out`.
                 *
                 * IPs must be in [CIDR block notation](https://wikipedia.org/wiki/CIDR). You can specify 100 CIDR
                 * blocks at most.
                 *
                 * The CIDR blocks may refer to networks (with empty host bits) or single hosts.
                 * For example, a network could be defined with `10.0.1.0/24` or `2001:db8:ff00:42::/64`,
                 * and a single host with `10.0.1.1/32` or `2001:db8:ff00:42::8329/128`.
                 *
                 * Use `0.0.0.0/0` to allow any IPv4 addresses and `::/0` to allow any IPv6 addresses.
                 *
                 */
                destination_ips: Array<string>;
                /**
                 * Network protocol to apply the rule for.
                 */
                protocol: 'tcp' | 'udp' | 'icmp' | 'esp' | 'gre';
                /**
                 * Port or port range to apply the rule for.
                 *
                 * Only applicable for protocols `tcp` and `udp`.
                 *
                 * A port range can be specified by separating lower and upper bounds with a dash. `1024-5000` will include
                 * all ports starting from 1024 up to port 5000.
                 *
                 */
                port: string | null;
            }>;
            applied_to: Array<{
                /**
                 * The type of resource to apply.
                 */
                type: 'server' | 'label_selector';
                /**
                 * [Server](#servers) the [Firewall](#firewalls) is applied to.
                 *
                 * Only set for `type` `server`, otherwise `null`.
                 *
                 */
                server?: {
                    /**
                     * ID of the Server.
                     */
                    id: number;
                };
                /**
                 * [Label Selector](#label-selector) the [Firewall](#firewalls) is applied to.
                 *
                 * Only set for `type` `label_selector`, otherwise `null`.
                 *
                 */
                label_selector?: {
                    /**
                     * Label selector
                     */
                    selector: string;
                };
                /**
                 * Resources applied to via this [Label Selector](#label-selector).
                 *
                 */
                applied_to_resources?: Array<{
                    /**
                     * Type of resource.
                     */
                    type?: 'server';
                    /**
                     * [Server](#servers) the [Firewall](#firewalls) is applied to.
                     *
                     * Only set for `type` `server`, otherwise `null`.
                     *
                     */
                    server?: {
                        /**
                         * ID of the Server.
                         */
                        id: number;
                    };
                }>;
            }>;
        };
    }> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/firewalls/{id}',
            path: {
                'id': id,
            },
        });
    }
    /**
     * Update a Firewall
     * Update a [Firewall](#firewalls).
     *
     * In case of a parallel running change on the [Firewall](#firewalls) a `conflict` error will be returned.
     *
     * @param id ID of the Firewall.
     * @param requestBody
     * @returns any The `firewall` key contains the updated [Firewall](#firewalls).
     * @throws ApiError
     */
    public static putFirewalls(
        id: number,
        requestBody?: {
            /**
             * Name of the [Firewall](#firewalls).
             *
             * Limited to a maximum of 128 characters.
             *
             * Must be unique per Project.
             *
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
        },
    ): CancelablePromise<{
        firewall: {
            /**
             * ID of the Firewall.
             */
            id: number;
            /**
             * Name of the [Firewall](#firewalls).
             *
             * Limited to a maximum of 128 characters.
             *
             * Must be unique per Project.
             *
             */
            name: string;
            /**
             * User-defined labels (`key/value` pairs) for the Resource.
             * For more information, see "[Labels](#labels)".
             *
             */
            labels?: Record<string, string>;
            /**
             * Point in time when the Resource was created (in ISO-8601 format).
             */
            created: string;
            rules: Array<{
                /**
                 * Description of the rule.
                 */
                description?: string | null;
                /**
                 * Traffic direction in which the rule should be applied to.
                 *
                 * Use `source_ips` for direction `in` and `destination_ips` for direction `out` to specify IPs.
                 *
                 */
                direction: 'in' | 'out';
                /**
                 * List of permitted IPv4/IPv6 addresses for incoming traffic.
                 *
                 * The `direction` must be set to `in`.
                 *
                 * IPs must be provided in [CIDR block notation](https://wikipedia.org/wiki/CIDR). You can specify 100 CIDR
                 * blocks at most.
                 *
                 * The CIDR blocks may refer to networks (with empty host bits) or single hosts.
                 * For example, a network could be defined with `10.0.1.0/24` or `2001:db8:ff00:42::/64`,
                 * and a single host with `10.0.1.1/32` or `2001:db8:ff00:42::8329/128`.
                 *
                 * Use `0.0.0.0/0` to allow any IPv4 addresses and `::/0` to allow any IPv6 addresses.
                 *
                 */
                source_ips: Array<string>;
                /**
                 * List of permitted IPv4/IPv6 addresses for outgoing traffic.
                 *
                 * The `direction` must be set to `out`.
                 *
                 * IPs must be in [CIDR block notation](https://wikipedia.org/wiki/CIDR). You can specify 100 CIDR
                 * blocks at most.
                 *
                 * The CIDR blocks may refer to networks (with empty host bits) or single hosts.
                 * For example, a network could be defined with `10.0.1.0/24` or `2001:db8:ff00:42::/64`,
                 * and a single host with `10.0.1.1/32` or `2001:db8:ff00:42::8329/128`.
                 *
                 * Use `0.0.0.0/0` to allow any IPv4 addresses and `::/0` to allow any IPv6 addresses.
                 *
                 */
                destination_ips: Array<string>;
                /**
                 * Network protocol to apply the rule for.
                 */
                protocol: 'tcp' | 'udp' | 'icmp' | 'esp' | 'gre';
                /**
                 * Port or port range to apply the rule for.
                 *
                 * Only applicable for protocols `tcp` and `udp`.
                 *
                 * A port range can be specified by separating lower and upper bounds with a dash. `1024-5000` will include
                 * all ports starting from 1024 up to port 5000.
                 *
                 */
                port: string | null;
            }>;
            applied_to: Array<{
                /**
                 * The type of resource to apply.
                 */
                type: 'server' | 'label_selector';
                /**
                 * [Server](#servers) the [Firewall](#firewalls) is applied to.
                 *
                 * Only set for `type` `server`, otherwise `null`.
                 *
                 */
                server?: {
                    /**
                     * ID of the Server.
                     */
                    id: number;
                };
                /**
                 * [Label Selector](#label-selector) the [Firewall](#firewalls) is applied to.
                 *
                 * Only set for `type` `label_selector`, otherwise `null`.
                 *
                 */
                label_selector?: {
                    /**
                     * Label selector
                     */
                    selector: string;
                };
                /**
                 * Resources applied to via this [Label Selector](#label-selector).
                 *
                 */
                applied_to_resources?: Array<{
                    /**
                     * Type of resource.
                     */
                    type?: 'server';
                    /**
                     * [Server](#servers) the [Firewall](#firewalls) is applied to.
                     *
                     * Only set for `type` `server`, otherwise `null`.
                     *
                     */
                    server?: {
                        /**
                         * ID of the Server.
                         */
                        id: number;
                    };
                }>;
            }>;
        };
    }> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/firewalls/{id}',
            path: {
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * Delete a Firewall
     * Deletes the [Firewall](#firewalls).
     *
     * #### Error Codes specific to this Call
     *
     * | Code                 | Description                                        |
     * |--------------------- |----------------------------------------------------|
     * | `resource_in_use`    | [Firewall](#firewalls) still applied to a resource |
     *
     * @param id ID of the Firewall.
     * @returns void
     * @throws ApiError
     */
    public static deleteFirewalls(
        id: number,
    ): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/firewalls/{id}',
            path: {
                'id': id,
            },
        });
    }
}
