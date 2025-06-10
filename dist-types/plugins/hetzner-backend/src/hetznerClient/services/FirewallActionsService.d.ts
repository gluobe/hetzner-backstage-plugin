import type { CancelablePromise } from '../core/CancelablePromise';
export declare class FirewallActionsService {
    /**
     * Get all Actions
     * Returns all [Actions](#actions) for [Firewalls](#firewalls).
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
     * @returns any The `actions` key contains a list of [Actions](#actions).
     * @throws ApiError
     */
    static getFirewallsActions(id?: number, sort?: 'id' | 'id:asc' | 'id:desc' | 'command' | 'command:asc' | 'command:desc' | 'status' | 'status:asc' | 'status:desc' | 'started' | 'started:asc' | 'started:desc' | 'finished' | 'finished:asc' | 'finished:desc', status?: 'running' | 'success' | 'error', page?: number, perPage?: number): CancelablePromise<{
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
     * Returns the specific [Action](#actions).
     * @param id ID of the Action.
     * @returns any The `action` key contains the [Action](#actions).
     * @throws ApiError
     */
    static getFirewallsActions1(id: number): CancelablePromise<{
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
     * Get all Actions for a Firewall
     * Returns all [Actions](#actions) for the [Firewall](#firewalls).
     *
     * Use the provided URI parameters to modify the result.
     *
     * @param id ID of the Firewall.
     * @param sort Sort actions by field and direction. Can be used multiple times. For more
     * information, see "[Sorting](#sorting)".
     *
     * @param status Filter the actions by status. Can be used multiple times. The response will only
     * contain actions matching the specified statuses.
     *
     * @param page Page number to return. For more information, see "[Pagination](#pagination)".
     * @param perPage Maximum number of entries returned per page. For more information, see "[Pagination](#pagination)".
     * @returns any The `actions` key contains a list of [Actions](#actions).
     * @throws ApiError
     */
    static getFirewallsActions2(id: number, sort?: 'id' | 'id:asc' | 'id:desc' | 'command' | 'command:asc' | 'command:desc' | 'status' | 'status:asc' | 'status:desc' | 'started' | 'started:asc' | 'started:desc' | 'finished' | 'finished:asc' | 'finished:desc', status?: 'running' | 'success' | 'error', page?: number, perPage?: number): CancelablePromise<{
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
     * Apply to Resources
     * Applies a [Firewall](#firewalls) to multiple resources.
     *
     * Supported resources:
     * - [Servers](#servers) (with a public network interface)
     * - [Label Selectors](#label-selector)
     *
     * A server can be applied to [a maximum of 5 Firewalls](https://docs.hetzner.com/cloud/firewalls/overview#limits).
     *
     * #### Error Codes specific to this Call
     *
     * | Code                          | Description                                                                                     |
     * |-------------------------------|-------------------------------------------------------------------------------------------------|
     * | `firewall_already_applied`    | [Firewall](#firewalls) is already applied to resource                                           |
     * | `incompatible_network_type`   | The network type of the resource is not supported by [Firewalls](#firewalls)                    |
     * | `firewall_resource_not_found` | The resource the [Firewall](#firewalls) should be applied to was not found                      |
     * | `private_net_only_server`     | The [Server](#servers) the [Firewall](#firewalls) should be applied to has no public interface  |
     *
     * @param id ID of the Firewall.
     * @param requestBody
     * @returns any The `actions` key contains multiple [Actions](#actions) with the `apply_firewall` command.
     * @throws ApiError
     */
    static postFirewallsActionsApplyToResources(id: number, requestBody?: {
        /**
         * Resources to apply the [Firewall](#firewalls) to.
         *
         * Extends existing resources.
         *
         */
        apply_to: Array<{
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
    }): CancelablePromise<{
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
    }>;
    /**
     * Remove from Resources
     * Removes a [Firewall](#firewalls) from multiple resources.
     *
     * Supported resources:
     * - [Servers](#servers) (with a public network interface)
     *
     * #### Error Codes specific to this Call
     *
     * | Code                                  | Description                                                                                             |
     * |---------------------------------------|---------------------------------------------------------------------------------------------------------|
     * | `firewall_already_removed`            | [Firewall](#firewalls) is already removed from the resource                                             |
     * | `firewall_resource_not_found`         | The resource the [Firewall](#firewalls) should be removed from was not found                            |
     * | `firewall_managed_by_label_selector`  | [Firewall](#firewall) is applied via a [Label Selector](#label-selector) and cannot be removed manually |
     *
     * @param id ID of the Firewall.
     * @param requestBody
     * @returns any The `actions` key contains multiple [Actions](#actions) with the `remove_firewall` command.
     * @throws ApiError
     */
    static postFirewallsActionsRemoveFromResources(id: number, requestBody?: {
        /**
         * Resources to remove the [Firewall](#firewalls) from.
         */
        remove_from: Array<{
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
    }): CancelablePromise<{
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
    }>;
    /**
     * Set Rules
     * Set the rules of a [Firewall](#firewalls).
     *
     * Overwrites the existing rules with the given ones. Pass an empty array to remove all rules.
     *
     * Rules are limited to 50 entries per [Firewall](#firewalls) and [500 effective rules](https://docs.hetzner.com/cloud/firewalls/overview#limits).
     *
     * @param id ID of the Firewall.
     * @param requestBody
     * @returns any The `action` key contains an [Action](#actions) with the `set_firewall_rules` command and additionally one with the `apply_firewall` command per resource of the [Firewall](#firewalls).
     * @throws ApiError
     */
    static postFirewallsActionsSetRules(id: number, requestBody?: {
        /**
         * Array of rules.
         *
         * Rules are limited to 50 entries per [Firewall](#firewalls) and [500 effective rules](https://docs.hetzner.com/cloud/firewalls/overview#limits).
         *
         * Existing rules will be replaced.
         *
         */
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
    }): CancelablePromise<{
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
    }>;
    /**
     * Get an Action for a Firewall
     * Returns a specific [Action](#actions) for a [Firewall](#firewalls).
     * @param id ID of the Firewall.
     * @param actionId ID of the Action.
     * @returns any The `action` key contains the [Firewall](#firewalls) [Action](#actions).
     * @throws ApiError
     */
    static getFirewallsActions3(id: number, actionId: number): CancelablePromise<{
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
