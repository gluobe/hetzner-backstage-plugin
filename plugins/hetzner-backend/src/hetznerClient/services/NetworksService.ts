/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class NetworksService {
    /**
     * Get all Networks
     * List multiple [Networks](#networks).
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
     * @returns any Response for listing [Networks](#networks).
     * @throws ApiError
     */
    public static getNetworks(
        sort?: 'id' | 'id:asc' | 'id:desc' | 'name' | 'name:asc' | 'name:desc' | 'created' | 'created:asc' | 'created:desc',
        name?: string,
        labelSelector?: string,
        page: number = 1,
        perPage: number = 25,
    ): CancelablePromise<{
        networks: Array<{
            /**
             * ID of the [Network](#networks).
             */
            id: number;
            /**
             * Name of the [Network](#networks).
             */
            name: string;
            /**
             * IP range of the [Network](#networks).
             *
             * Uses CIDR notation.
             *
             */
            ip_range: string;
            /**
             * List of subnets allocated in this [Network](#networks).
             */
            subnets: Array<{
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
                 */
                ip_range?: string;
                /**
                 * Name of the [Network Zone](#network-zones).
                 *
                 * The [Location](#locations) contains the `network_zone` property it belongs to.
                 *
                 */
                network_zone: string;
                /**
                 * Gateway for [Servers](#servers) attached to this subnet.
                 *
                 * For subnets of type `server` this is always the first IP of the subnets IP range.
                 *
                 */
                gateway: string;
                /**
                 * ID of the robot vSwitch if the subnet is of type `vswitch`.
                 */
                vswitch_id?: number | null;
            }>;
            /**
             * Array of routes set in this [Network](#networks).
             */
            routes: Array<{
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
            }>;
            /**
             * Array of IDs of [Servers](#servers) attached to this [Network](#networks).
             */
            servers: Array<number>;
            /**
             * Array of IDs of [Load Balancers](#load-balancers) attached to this [Network](#networks).
             */
            load_balancers?: Array<number>;
            /**
             * Protection configuration for the Resource.
             */
            protection: {
                /**
                 * Prevent the Resource from being deleted.
                 */
                delete: boolean;
            };
            /**
             * User-defined labels (`key/value` pairs) for the Resource.
             * For more information, see "[Labels](#labels)".
             *
             */
            labels: Record<string, string>;
            /**
             * Point in time when the Resource was created (in ISO-8601 format).
             */
            created: string;
            /**
             * Indicates if the routes from this [Network](#networks) should be exposed to the vSwitch connection.
             */
            expose_routes_to_vswitch: boolean;
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
            url: '/networks',
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
     * Create a Network
     * Creates a [Network](#networks).
     *
     * The provided `ip_range` can only be extended later on, but not reduced.
     *
     * Subnets can be added now or later on using the [add subnet action](#network-actions-add-a-subnet-to-a-network). If you do not specify an `ip_range` for the subnet the first available /24 range will be used.
     *
     * Routes can be added now or later by using the [add route action](#network-actions-add-a-route-to-a-network).
     *
     * @param requestBody
     * @returns any Response for creating a [Network](#networks).
     *
     * Contains the newly created [Network](#networks).
     *
     * @throws ApiError
     */
    public static postNetworks(
        requestBody?: {
            /**
             * Name of the [Network](#networks).
             */
            name: string;
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
            /**
             * User-defined labels (`key/value` pairs) for the Resource.
             * For more information, see "[Labels](#labels)".
             *
             */
            labels?: Record<string, string>;
            /**
             * Array of subnets to allocate.
             */
            subnets?: Array<{
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
                 * The [Location](#locations) contains the `network_zone` property it belongs to.
                 *
                 */
                network_zone: string;
                /**
                 * ID of the robot vSwitch.
                 *
                 * Must only be supplied for subnets of type `vswitch`.
                 *
                 */
                vswitch_id?: number;
            }>;
            /**
             * Array of routes set in this [Network](#networks).
             */
            routes?: Array<{
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
            }>;
            /**
             * Toggle to expose routes to the [Networks](#networks) vSwitch.
             *
             * Indicates if the routes from this [Network](#networks) should be exposed to the vSwitch in this [Network](#networks). Only takes effect if a [vSwitch is setup](https://docs.hetzner.com/cloud/networks/connect-dedi-vswitch) in this [Network](#networks).
             *
             */
            expose_routes_to_vswitch?: boolean;
        },
    ): CancelablePromise<{
        network?: {
            /**
             * ID of the [Network](#networks).
             */
            id: number;
            /**
             * Name of the [Network](#networks).
             */
            name: string;
            /**
             * IP range of the [Network](#networks).
             *
             * Uses CIDR notation.
             *
             */
            ip_range: string;
            /**
             * List of subnets allocated in this [Network](#networks).
             */
            subnets: Array<{
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
                 */
                ip_range?: string;
                /**
                 * Name of the [Network Zone](#network-zones).
                 *
                 * The [Location](#locations) contains the `network_zone` property it belongs to.
                 *
                 */
                network_zone: string;
                /**
                 * Gateway for [Servers](#servers) attached to this subnet.
                 *
                 * For subnets of type `server` this is always the first IP of the subnets IP range.
                 *
                 */
                gateway: string;
                /**
                 * ID of the robot vSwitch if the subnet is of type `vswitch`.
                 */
                vswitch_id?: number | null;
            }>;
            /**
             * Array of routes set in this [Network](#networks).
             */
            routes: Array<{
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
            }>;
            /**
             * Array of IDs of [Servers](#servers) attached to this [Network](#networks).
             */
            servers: Array<number>;
            /**
             * Array of IDs of [Load Balancers](#load-balancers) attached to this [Network](#networks).
             */
            load_balancers?: Array<number>;
            /**
             * Protection configuration for the Resource.
             */
            protection: {
                /**
                 * Prevent the Resource from being deleted.
                 */
                delete: boolean;
            };
            /**
             * User-defined labels (`key/value` pairs) for the Resource.
             * For more information, see "[Labels](#labels)".
             *
             */
            labels: Record<string, string>;
            /**
             * Point in time when the Resource was created (in ISO-8601 format).
             */
            created: string;
            /**
             * Indicates if the routes from this [Network](#networks) should be exposed to the vSwitch connection.
             */
            expose_routes_to_vswitch: boolean;
        };
    }> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/networks',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * Get a Network
     * Get a specific [Network](#networks).
     * @param id ID of the Network.
     * @returns any The `network` key contains the network
     * @throws ApiError
     */
    public static getNetworks1(
        id: number,
    ): CancelablePromise<{
        network?: {
            /**
             * ID of the [Network](#networks).
             */
            id: number;
            /**
             * Name of the [Network](#networks).
             */
            name: string;
            /**
             * IP range of the [Network](#networks).
             *
             * Uses CIDR notation.
             *
             */
            ip_range: string;
            /**
             * List of subnets allocated in this [Network](#networks).
             */
            subnets: Array<{
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
                 */
                ip_range?: string;
                /**
                 * Name of the [Network Zone](#network-zones).
                 *
                 * The [Location](#locations) contains the `network_zone` property it belongs to.
                 *
                 */
                network_zone: string;
                /**
                 * Gateway for [Servers](#servers) attached to this subnet.
                 *
                 * For subnets of type `server` this is always the first IP of the subnets IP range.
                 *
                 */
                gateway: string;
                /**
                 * ID of the robot vSwitch if the subnet is of type `vswitch`.
                 */
                vswitch_id?: number | null;
            }>;
            /**
             * Array of routes set in this [Network](#networks).
             */
            routes: Array<{
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
            }>;
            /**
             * Array of IDs of [Servers](#servers) attached to this [Network](#networks).
             */
            servers: Array<number>;
            /**
             * Array of IDs of [Load Balancers](#load-balancers) attached to this [Network](#networks).
             */
            load_balancers?: Array<number>;
            /**
             * Protection configuration for the Resource.
             */
            protection: {
                /**
                 * Prevent the Resource from being deleted.
                 */
                delete: boolean;
            };
            /**
             * User-defined labels (`key/value` pairs) for the Resource.
             * For more information, see "[Labels](#labels)".
             *
             */
            labels: Record<string, string>;
            /**
             * Point in time when the Resource was created (in ISO-8601 format).
             */
            created: string;
            /**
             * Indicates if the routes from this [Network](#networks) should be exposed to the vSwitch connection.
             */
            expose_routes_to_vswitch: boolean;
        };
    }> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/networks/{id}',
            path: {
                'id': id,
            },
        });
    }
    /**
     * Update a Network
     * Update a [Network](#networks).
     *
     * If a change is currently being performed on this [Network](#networks), a error response with code `conflict` will be returned.
     *
     * @param id ID of the Network.
     * @param requestBody
     * @returns any Response for updating a [Network](#networks).
     *
     * Contains the updated [Network](#networks).
     *
     * @throws ApiError
     */
    public static putNetworks(
        id: number,
        requestBody?: {
            /**
             * New [Network](#networks) name.
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
            /**
             * Toggle to expose routes to the [Networks](#networks) vSwitch.
             *
             * Indicates if the routes from this [Network](#networks) should be exposed to the vSwitch in this [Network](#networks). Only takes effect if a [vSwitch is setup](https://docs.hetzner.com/cloud/networks/connect-dedi-vswitch) in this [Network](#networks).
             *
             */
            expose_routes_to_vswitch?: boolean;
        },
    ): CancelablePromise<{
        network?: {
            /**
             * ID of the [Network](#networks).
             */
            id: number;
            /**
             * Name of the [Network](#networks).
             */
            name: string;
            /**
             * IP range of the [Network](#networks).
             *
             * Uses CIDR notation.
             *
             */
            ip_range: string;
            /**
             * List of subnets allocated in this [Network](#networks).
             */
            subnets: Array<{
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
                 */
                ip_range?: string;
                /**
                 * Name of the [Network Zone](#network-zones).
                 *
                 * The [Location](#locations) contains the `network_zone` property it belongs to.
                 *
                 */
                network_zone: string;
                /**
                 * Gateway for [Servers](#servers) attached to this subnet.
                 *
                 * For subnets of type `server` this is always the first IP of the subnets IP range.
                 *
                 */
                gateway: string;
                /**
                 * ID of the robot vSwitch if the subnet is of type `vswitch`.
                 */
                vswitch_id?: number | null;
            }>;
            /**
             * Array of routes set in this [Network](#networks).
             */
            routes: Array<{
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
            }>;
            /**
             * Array of IDs of [Servers](#servers) attached to this [Network](#networks).
             */
            servers: Array<number>;
            /**
             * Array of IDs of [Load Balancers](#load-balancers) attached to this [Network](#networks).
             */
            load_balancers?: Array<number>;
            /**
             * Protection configuration for the Resource.
             */
            protection: {
                /**
                 * Prevent the Resource from being deleted.
                 */
                delete: boolean;
            };
            /**
             * User-defined labels (`key/value` pairs) for the Resource.
             * For more information, see "[Labels](#labels)".
             *
             */
            labels: Record<string, string>;
            /**
             * Point in time when the Resource was created (in ISO-8601 format).
             */
            created: string;
            /**
             * Indicates if the routes from this [Network](#networks) should be exposed to the vSwitch connection.
             */
            expose_routes_to_vswitch: boolean;
        };
    }> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/networks/{id}',
            path: {
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * Delete a Network
     * Deletes a [Network](#networks).
     *
     * Attached resources will be detached automatically.
     *
     * @param id ID of the Network.
     * @returns void
     * @throws ApiError
     */
    public static deleteNetworks(
        id: number,
    ): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/networks/{id}',
            path: {
                'id': id,
            },
        });
    }
}
