/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class ServersService {
    /**
     * Get all Servers
     * Returns all existing Server objects
     * @param name Filter resources by their name. The response will only contain the resources
     * matching exactly the specified name.
     *
     * @param labelSelector Filter resources by labels. The response will only contain resources matching the
     * label selector. For more information, see "[Label Selector](#label-selector)".
     *
     * @param sort Sort resources by field and direction. Can be used multiple times. For more
     * information, see "[Sorting](#sorting)".
     *
     * @param status Filter resources by status. Can be used multiple times. The response will only
     * contain the resources with the specified status.
     *
     * @param page Page number to return. For more information, see "[Pagination](#pagination)".
     * @param perPage Maximum number of entries returned per page. For more information, see "[Pagination](#pagination)".
     * @returns any A paged array of servers
     * @throws ApiError
     */
    public static getServers(
        name?: string,
        labelSelector?: string,
        sort?: 'id' | 'id:asc' | 'id:desc' | 'name' | 'name:asc' | 'name:desc' | 'created' | 'created:asc' | 'created:desc',
        status?: 'running' | 'initializing' | 'starting' | 'stopping' | 'off' | 'deleting' | 'migrating' | 'rebuilding' | 'unknown',
        page: number = 1,
        perPage: number = 25,
    ): CancelablePromise<{
        servers: Array<{
            /**
             * ID of the Server.
             */
            id: number;
            /**
             * Name of the Server (must be unique per Project and a valid hostname as per RFC 1123)
             */
            name: string;
            /**
             * Status of the Server.
             */
            status: 'running' | 'initializing' | 'starting' | 'stopping' | 'off' | 'deleting' | 'migrating' | 'rebuilding' | 'unknown';
            /**
             * Point in time when the Resource was created (in ISO-8601 format).
             */
            created: string;
            /**
             * Public network information. The Server's IPv4 address can be found in `public_net->ipv4->ip`
             */
            public_net: {
                /**
                 * IP address (v4) and its reverse DNS entry of this Server
                 */
                ipv4: {
                    /**
                     * ID of the Primary IP.
                     */
                    id?: number;
                    /**
                     * IP address (v4) of this Server
                     */
                    ip: string;
                    /**
                     * If the IP is blocked by our anti abuse dept
                     */
                    blocked: boolean;
                    /**
                     * Reverse DNS PTR entry for the IPv4 addresses of this Server
                     */
                    dns_ptr: string;
                } | null;
                /**
                 * IPv6 network assigned to this Server and its reverse DNS entry
                 */
                ipv6: {
                    /**
                     * ID of the Primary IP.
                     */
                    id?: number;
                    /**
                     * IP address (v6) of this Server
                     */
                    ip: string;
                    /**
                     * If the IP is blocked by our anti abuse dept
                     */
                    blocked: boolean;
                    /**
                     * Reverse DNS PTR entries for the IPv6 addresses of this Server
                     */
                    dns_ptr: Array<{
                        /**
                         * Single IPv6 address of this Server for which the reverse DNS entry has been set up
                         */
                        ip: string;
                        /**
                         * DNS pointer for the specific IP address
                         */
                        dns_ptr: string;
                    }> | null;
                } | null;
                /**
                 * IDs of Floating IPs assigned to this Server
                 */
                floating_ips: Array<number>;
                /**
                 * Firewalls applied to the public network interface of this Server
                 */
                firewalls?: Array<{
                    /**
                     * ID of the Firewall.
                     */
                    id?: number;
                    /**
                     * Status of the Firewall on the Server
                     */
                    status?: 'applied' | 'pending';
                }>;
            };
            /**
             * Private networks information
             */
            private_net: Array<{
                /**
                 * The Network ID the server is attached to.
                 */
                network?: number;
                /**
                 * The server IP address on the network.
                 */
                ip?: string;
                /**
                 * Additional IP addresses of the server on the network.
                 */
                alias_ips?: Array<string>;
                /**
                 * The server MAC address on the network.
                 */
                mac_address?: string;
            }>;
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
            /**
             * Datacenter this Resource is located at
             */
            datacenter: {
                /**
                 * ID of the Datacenter.
                 */
                id: number;
                /**
                 * Unique name for the [Datacenter](#datacenters).
                 *
                 * Can be used as a more descriptive identifier.
                 *
                 */
                name: string;
                /**
                 * Descriptive name for the [Datacenter](#datacenters).
                 *
                 * Desired to be easy to understand for humans. Might be changed for cosmetic reasons. Do not use this as an identifier.
                 *
                 */
                description: string;
                /**
                 * [Location](#locations) the [Datacenter](#datacenters) is located at.
                 *
                 */
                location: {
                    /**
                     * ID of the Location.
                     */
                    id: number;
                    /**
                     * Unique identifier of the [Location](#locations).
                     */
                    name: string;
                    /**
                     * Humand readable description of the [Location](#locations).
                     */
                    description: string;
                    /**
                     * Country the [Location](#locations) resides in.
                     *
                     * ISO 3166-1 alpha-2 code of the country.
                     *
                     */
                    country: string;
                    /**
                     * Name of the closest city to the [Location](#locations).
                     *
                     * City name or city name and state in short form. E.g. `Falkenstein` or `Ashburn, VA`.
                     *
                     */
                    city: string;
                    /**
                     * Latitude of the city closest to the [Location](#locations).
                     */
                    latitude: number;
                    /**
                     * Longitude of the city closest to the [Location](#locations).
                     */
                    longitude: number;
                    /**
                     * Name of the Network Zone this [Location](#locations) resides in.
                     */
                    network_zone: string;
                };
                /**
                 * [Server Types](#server-types) supported and available in this [Datacenter](#datacenters).
                 *
                 */
                server_types: {
                    /**
                     * List of [Server Types](#server-types) supported in this [Datacenter](#datacenters).
                     *
                     * These [Server Types](#server-types) are generally available in this Datacenter, but might be
                     * temporarily out of stock.
                     *
                     */
                    supported: Array<number>;
                    /**
                     * [Server Types](#server-types) currently available in this [Datacenter](#datacenters).
                     *
                     * These [Server Types](#server-types) can currently be purchased. Types that are temporarily unavailable
                     * but are supported in this [Datacenter](#datacenters) are listed as `supported`.
                     *
                     */
                    available: Array<number>;
                    /**
                     * [Server Types](#server-types) available to migrate to in this [Datacenter](#datacenters).
                     *
                     * Existing [Servers](#servers) can be migrated to these [Server Types](#server-types).
                     *
                     */
                    available_for_migration: Array<number>;
                };
            };
            /**
             * Image the server is based on.
             */
            image: {
                /**
                 * ID of the Image.
                 */
                id: number;
                /**
                 * Type of the Image.
                 */
                type: 'system' | 'app' | 'snapshot' | 'backup';
                /**
                 * Whether the Image can be used or if it's still being created or unavailable
                 */
                status: 'available' | 'creating' | 'unavailable';
                /**
                 * Unique identifier of the Image. This value is only set for system Images.
                 */
                name: string | null;
                /**
                 * Description of the Image
                 */
                description: string;
                /**
                 * Size of the Image file in our storage in GB. For snapshot Images this is the value relevant for calculating costs for the Image.
                 */
                image_size: number | null;
                /**
                 * Size of the disk contained in the Image in GB
                 */
                disk_size: number;
                /**
                 * Point in time when the Resource was created (in ISO-8601 format).
                 */
                created: string;
                /**
                 * Information about the Server the Image was created from
                 */
                created_from: {
                    /**
                     * ID of the Server the Image was created from
                     */
                    id: number;
                    /**
                     * Server name at the time the Image was created
                     */
                    name: string;
                } | null;
                /**
                 * ID of Server the Image is bound to. Only set for Images of type `backup`.
                 */
                bound_to: number | null;
                /**
                 * Flavor of operating system contained in the Image
                 */
                os_flavor: 'ubuntu' | 'centos' | 'debian' | 'fedora' | 'rocky' | 'alma' | 'unknown';
                /**
                 * Operating system version
                 */
                os_version: string | null;
                /**
                 * Indicates that rapid deploy of the Image is available
                 */
                rapid_deploy?: boolean;
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
                 * Point in time when the Image is considered to be deprecated (in ISO-8601 format)
                 */
                deprecated: string | null;
                /**
                 * Point in time where the Image was deleted (in ISO-8601 format)
                 */
                deleted: string | null;
                /**
                 * User-defined labels (`key/value` pairs) for the Resource.
                 * For more information, see "[Labels](#labels)".
                 *
                 */
                labels: Record<string, string>;
                /**
                 * CPU architecture compatible with the Image.
                 *
                 */
                architecture: 'x86' | 'arm';
            } | null;
            /**
             * ISO Image that is attached to this Server. Null if no ISO is attached.
             */
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
            } | null;
            /**
             * True if rescue mode is enabled. Server will then boot into rescue system on next reboot
             */
            rescue_enabled: boolean;
            /**
             * True if Server has been locked and is not available to user
             */
            locked: boolean;
            /**
             * Time window (UTC) in which the backup will run, or null if the backups are not enabled
             */
            backup_window: string | null;
            /**
             * Outbound Traffic for the current billing period in bytes
             */
            outgoing_traffic: number | null;
            /**
             * Inbound Traffic for the current billing period in bytes
             */
            ingoing_traffic: number | null;
            /**
             * Free Traffic for the current billing period in bytes
             */
            included_traffic: number | null;
            /**
             * Protection configuration for the Server
             */
            protection: {
                /**
                 * If true, prevents the Server from being deleted
                 */
                delete: boolean;
                /**
                 * If true, prevents the Server from being rebuilt
                 */
                rebuild: boolean;
            };
            /**
             * User-defined labels (`key/value` pairs) for the Resource.
             * For more information, see "[Labels](#labels)".
             *
             */
            labels: Record<string, string>;
            /**
             * IDs of Volumes assigned to this Server
             */
            volumes?: Array<number>;
            /**
             * Load Balancer IDs assigned to the server.
             */
            load_balancers?: Array<number>;
            /**
             * Size of the primary Disk
             */
            primary_disk_size: number;
            /**
             * The placement group the server is assigned to.
             */
            placement_group?: {
                /**
                 * ID of the Placement Group.
                 */
                id: number;
                /**
                 * Name of the Resource. Must be unique per Project.
                 */
                name: string;
                /**
                 * User-defined labels (`key/value` pairs) for the Resource.
                 * For more information, see "[Labels](#labels)".
                 *
                 */
                labels: Record<string, string>;
                /**
                 * Type of Placement Group.
                 *
                 */
                type: 'spread';
                /**
                 * Point in time when the Resource was created (in ISO-8601 format).
                 */
                created: string;
                /**
                 * Array of IDs of Servers that are part of this Placement Group
                 */
                servers: Array<number>;
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
            url: '/servers',
            query: {
                'name': name,
                'label_selector': labelSelector,
                'sort': sort,
                'status': status,
                'page': page,
                'per_page': perPage,
            },
        });
    }
    /**
     * Create a Server
     * Creates a new Server. Returns preliminary information about the Server as well as an Action that covers progress of creation.
     * @param requestBody Please note that Server names must be unique per Project and valid hostnames as per RFC 1123 (i.e. may only contain letters, digits, periods, and dashes).
     *
     * For `server_type` you can either use the ID as listed in `/server_types` or its name.
     *
     * For `image` you can either use the ID as listed in `/images` or its name.
     *
     * If you want to create the Server in a Location, you must set `location` to the ID or name as listed in `/locations`. This is the recommended way. You can be even more specific by setting `datacenter` to the ID or name as listed in `/datacenters`. However we only recommend this if you want to assign a specific Primary IP to the Server which is located in the specified Datacenter.
     *
     * Some properties like `start_after_create` or `automount` will trigger Actions after the Server is created. Those Actions are listed in the `next_actions` field in the response.
     *
     * For accessing your Server we strongly recommend to use SSH keys by passing the respective key IDs in `ssh_keys`. If you do not specify any `ssh_keys` we will generate a root password for you and return it in the response.
     *
     * Please note that provided user-data is stored in our systems. While we take measures to protect it we highly recommend that you don’t use it to store passwords or other sensitive information.
     *
     * #### Call specific error codes
     *
     * | Code                             | Description                                                |
     * |----------------------------------|------------------------------------------------------------|
     * | `placement_error`                | An error during the placement occurred                     |
     * | `primary_ip_assigned`            | The specified Primary IP is already assigned to a server   |
     * | `primary_ip_datacenter_mismatch` | The specified Primary IP is in a different datacenter      |
     * | `primary_ip_version_mismatch`    | The specified Primary IP has the wrong IP Version          |
     *
     * @returns any The `server` key in the reply contains a Server object with this structure
     * @throws ApiError
     */
    public static postServers(
        requestBody?: {
            /**
             * Name of the Server to create (must be unique per Project and a valid hostname as per RFC 1123)
             */
            name: string;
            /**
             * ID or name of Location to create Server in (must not be used together with datacenter)
             */
            location?: string;
            /**
             * ID or name of Datacenter to create Server in (must not be used together with location)
             */
            datacenter?: string;
            /**
             * ID or name of the Server type this Server should be created with
             */
            server_type: string;
            /**
             * This automatically triggers a [Power on a Server-Server Action](#server-actions-power-on-a-server) after the creation is finished and is returned in the `next_actions` response object.
             */
            start_after_create?: boolean;
            /**
             * ID or name of the Image the Server is created from
             */
            image: string;
            /**
             * ID of the Placement Group the server should be in
             */
            placement_group?: number;
            /**
             * SSH key IDs (`integer`) or names (`string`) which should be injected into the Server at creation time
             */
            ssh_keys?: Array<string>;
            /**
             * Volume IDs which should be attached to the Server at the creation time. Volumes must be in the same Location.
             */
            volumes?: Array<number>;
            /**
             * Network IDs which should be attached to the Server private network interface at the creation time
             */
            networks?: Array<number>;
            /**
             * Firewalls which should be applied on the Server's public network interface at creation time
             */
            firewalls?: Array<{
                /**
                 * ID of the Firewall
                 */
                firewall: number;
            }>;
            /**
             * Cloud-Init user data to use during Server creation. This field is limited to 32KiB.
             */
            user_data?: string;
            /**
             * User-defined labels (`key/value` pairs) for the Resource.
             * For more information, see "[Labels](#labels)".
             *
             */
            labels?: Record<string, string>;
            /**
             * Auto-mount Volumes after attach
             */
            automount?: boolean;
            /**
             * Public Network options
             */
            public_net?: {
                /**
                 * Attach an IPv4 on the public NIC. If false, no IPv4 address will be attached.
                 */
                enable_ipv4?: boolean;
                /**
                 * Attach an IPv6 on the public NIC. If false, no IPv6 address will be attached.
                 */
                enable_ipv6?: boolean;
                /**
                 * ID of the ipv4 Primary IP to use. If omitted and enable_ipv4 is true, a new ipv4 Primary IP will automatically be created.
                 */
                ipv4?: number | null;
                /**
                 * ID of the ipv6 Primary IP to use. If omitted and enable_ipv6 is true, a new ipv6 Primary IP will automatically be created.
                 */
                ipv6?: number | null;
            };
        },
    ): CancelablePromise<{
        server: {
            /**
             * ID of the Server.
             */
            id: number;
            /**
             * Name of the Server (must be unique per Project and a valid hostname as per RFC 1123)
             */
            name: string;
            /**
             * Status of the Server.
             */
            status: 'running' | 'initializing' | 'starting' | 'stopping' | 'off' | 'deleting' | 'migrating' | 'rebuilding' | 'unknown';
            /**
             * Point in time when the Resource was created (in ISO-8601 format).
             */
            created: string;
            /**
             * Public network information. The Server's IPv4 address can be found in `public_net->ipv4->ip`
             */
            public_net: {
                /**
                 * IP address (v4) and its reverse DNS entry of this Server
                 */
                ipv4: {
                    /**
                     * ID of the Primary IP.
                     */
                    id?: number;
                    /**
                     * IP address (v4) of this Server
                     */
                    ip: string;
                    /**
                     * If the IP is blocked by our anti abuse dept
                     */
                    blocked: boolean;
                    /**
                     * Reverse DNS PTR entry for the IPv4 addresses of this Server
                     */
                    dns_ptr: string;
                } | null;
                /**
                 * IPv6 network assigned to this Server and its reverse DNS entry
                 */
                ipv6: {
                    /**
                     * ID of the Primary IP.
                     */
                    id?: number;
                    /**
                     * IP address (v6) of this Server
                     */
                    ip: string;
                    /**
                     * If the IP is blocked by our anti abuse dept
                     */
                    blocked: boolean;
                    /**
                     * Reverse DNS PTR entries for the IPv6 addresses of this Server
                     */
                    dns_ptr: Array<{
                        /**
                         * Single IPv6 address of this Server for which the reverse DNS entry has been set up
                         */
                        ip: string;
                        /**
                         * DNS pointer for the specific IP address
                         */
                        dns_ptr: string;
                    }> | null;
                } | null;
                /**
                 * IDs of Floating IPs assigned to this Server
                 */
                floating_ips: Array<number>;
                /**
                 * Firewalls applied to the public network interface of this Server
                 */
                firewalls?: Array<{
                    /**
                     * ID of the Firewall.
                     */
                    id?: number;
                    /**
                     * Status of the Firewall on the Server
                     */
                    status?: 'applied' | 'pending';
                }>;
            };
            /**
             * Private networks information
             */
            private_net: Array<{
                /**
                 * The Network ID the server is attached to.
                 */
                network?: number;
                /**
                 * The server IP address on the network.
                 */
                ip?: string;
                /**
                 * Additional IP addresses of the server on the network.
                 */
                alias_ips?: Array<string>;
                /**
                 * The server MAC address on the network.
                 */
                mac_address?: string;
            }>;
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
            /**
             * Datacenter this Resource is located at
             */
            datacenter: {
                /**
                 * ID of the Datacenter.
                 */
                id: number;
                /**
                 * Unique name for the [Datacenter](#datacenters).
                 *
                 * Can be used as a more descriptive identifier.
                 *
                 */
                name: string;
                /**
                 * Descriptive name for the [Datacenter](#datacenters).
                 *
                 * Desired to be easy to understand for humans. Might be changed for cosmetic reasons. Do not use this as an identifier.
                 *
                 */
                description: string;
                /**
                 * [Location](#locations) the [Datacenter](#datacenters) is located at.
                 *
                 */
                location: {
                    /**
                     * ID of the Location.
                     */
                    id: number;
                    /**
                     * Unique identifier of the [Location](#locations).
                     */
                    name: string;
                    /**
                     * Humand readable description of the [Location](#locations).
                     */
                    description: string;
                    /**
                     * Country the [Location](#locations) resides in.
                     *
                     * ISO 3166-1 alpha-2 code of the country.
                     *
                     */
                    country: string;
                    /**
                     * Name of the closest city to the [Location](#locations).
                     *
                     * City name or city name and state in short form. E.g. `Falkenstein` or `Ashburn, VA`.
                     *
                     */
                    city: string;
                    /**
                     * Latitude of the city closest to the [Location](#locations).
                     */
                    latitude: number;
                    /**
                     * Longitude of the city closest to the [Location](#locations).
                     */
                    longitude: number;
                    /**
                     * Name of the Network Zone this [Location](#locations) resides in.
                     */
                    network_zone: string;
                };
                /**
                 * [Server Types](#server-types) supported and available in this [Datacenter](#datacenters).
                 *
                 */
                server_types: {
                    /**
                     * List of [Server Types](#server-types) supported in this [Datacenter](#datacenters).
                     *
                     * These [Server Types](#server-types) are generally available in this Datacenter, but might be
                     * temporarily out of stock.
                     *
                     */
                    supported: Array<number>;
                    /**
                     * [Server Types](#server-types) currently available in this [Datacenter](#datacenters).
                     *
                     * These [Server Types](#server-types) can currently be purchased. Types that are temporarily unavailable
                     * but are supported in this [Datacenter](#datacenters) are listed as `supported`.
                     *
                     */
                    available: Array<number>;
                    /**
                     * [Server Types](#server-types) available to migrate to in this [Datacenter](#datacenters).
                     *
                     * Existing [Servers](#servers) can be migrated to these [Server Types](#server-types).
                     *
                     */
                    available_for_migration: Array<number>;
                };
            };
            /**
             * Image the server is based on.
             */
            image: {
                /**
                 * ID of the Image.
                 */
                id: number;
                /**
                 * Type of the Image.
                 */
                type: 'system' | 'app' | 'snapshot' | 'backup';
                /**
                 * Whether the Image can be used or if it's still being created or unavailable
                 */
                status: 'available' | 'creating' | 'unavailable';
                /**
                 * Unique identifier of the Image. This value is only set for system Images.
                 */
                name: string | null;
                /**
                 * Description of the Image
                 */
                description: string;
                /**
                 * Size of the Image file in our storage in GB. For snapshot Images this is the value relevant for calculating costs for the Image.
                 */
                image_size: number | null;
                /**
                 * Size of the disk contained in the Image in GB
                 */
                disk_size: number;
                /**
                 * Point in time when the Resource was created (in ISO-8601 format).
                 */
                created: string;
                /**
                 * Information about the Server the Image was created from
                 */
                created_from: {
                    /**
                     * ID of the Server the Image was created from
                     */
                    id: number;
                    /**
                     * Server name at the time the Image was created
                     */
                    name: string;
                } | null;
                /**
                 * ID of Server the Image is bound to. Only set for Images of type `backup`.
                 */
                bound_to: number | null;
                /**
                 * Flavor of operating system contained in the Image
                 */
                os_flavor: 'ubuntu' | 'centos' | 'debian' | 'fedora' | 'rocky' | 'alma' | 'unknown';
                /**
                 * Operating system version
                 */
                os_version: string | null;
                /**
                 * Indicates that rapid deploy of the Image is available
                 */
                rapid_deploy?: boolean;
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
                 * Point in time when the Image is considered to be deprecated (in ISO-8601 format)
                 */
                deprecated: string | null;
                /**
                 * Point in time where the Image was deleted (in ISO-8601 format)
                 */
                deleted: string | null;
                /**
                 * User-defined labels (`key/value` pairs) for the Resource.
                 * For more information, see "[Labels](#labels)".
                 *
                 */
                labels: Record<string, string>;
                /**
                 * CPU architecture compatible with the Image.
                 *
                 */
                architecture: 'x86' | 'arm';
            } | null;
            /**
             * ISO Image that is attached to this Server. Null if no ISO is attached.
             */
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
            } | null;
            /**
             * True if rescue mode is enabled. Server will then boot into rescue system on next reboot
             */
            rescue_enabled: boolean;
            /**
             * True if Server has been locked and is not available to user
             */
            locked: boolean;
            /**
             * Time window (UTC) in which the backup will run, or null if the backups are not enabled
             */
            backup_window: string | null;
            /**
             * Outbound Traffic for the current billing period in bytes
             */
            outgoing_traffic: number | null;
            /**
             * Inbound Traffic for the current billing period in bytes
             */
            ingoing_traffic: number | null;
            /**
             * Free Traffic for the current billing period in bytes
             */
            included_traffic: number | null;
            /**
             * Protection configuration for the Server
             */
            protection: {
                /**
                 * If true, prevents the Server from being deleted
                 */
                delete: boolean;
                /**
                 * If true, prevents the Server from being rebuilt
                 */
                rebuild: boolean;
            };
            /**
             * User-defined labels (`key/value` pairs) for the Resource.
             * For more information, see "[Labels](#labels)".
             *
             */
            labels: Record<string, string>;
            /**
             * IDs of Volumes assigned to this Server
             */
            volumes?: Array<number>;
            /**
             * Load Balancer IDs assigned to the server.
             */
            load_balancers?: Array<number>;
            /**
             * Size of the primary Disk
             */
            primary_disk_size: number;
            /**
             * The placement group the server is assigned to.
             */
            placement_group?: {
                /**
                 * ID of the Placement Group.
                 */
                id: number;
                /**
                 * Name of the Resource. Must be unique per Project.
                 */
                name: string;
                /**
                 * User-defined labels (`key/value` pairs) for the Resource.
                 * For more information, see "[Labels](#labels)".
                 *
                 */
                labels: Record<string, string>;
                /**
                 * Type of Placement Group.
                 *
                 */
                type: 'spread';
                /**
                 * Point in time when the Resource was created (in ISO-8601 format).
                 */
                created: string;
                /**
                 * Array of IDs of Servers that are part of this Placement Group
                 */
                servers: Array<number>;
            } | null;
        };
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
        next_actions: Array<{
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
        /**
         * Root password when no SSH keys have been specified
         */
        root_password: string | null;
    }> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/servers',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * Get a Server
     * Returns a specific Server object. The Server must exist inside the Project
     * @param id ID of the Server.
     * @returns any The `server` key in the reply contains a Server object with this structure
     * @throws ApiError
     */
    public static getServers1(
        id: number,
    ): CancelablePromise<{
        server?: {
            /**
             * ID of the Server.
             */
            id: number;
            /**
             * Name of the Server (must be unique per Project and a valid hostname as per RFC 1123)
             */
            name: string;
            /**
             * Status of the Server.
             */
            status: 'running' | 'initializing' | 'starting' | 'stopping' | 'off' | 'deleting' | 'migrating' | 'rebuilding' | 'unknown';
            /**
             * Point in time when the Resource was created (in ISO-8601 format).
             */
            created: string;
            /**
             * Public network information. The Server's IPv4 address can be found in `public_net->ipv4->ip`
             */
            public_net: {
                /**
                 * IP address (v4) and its reverse DNS entry of this Server
                 */
                ipv4: {
                    /**
                     * ID of the Primary IP.
                     */
                    id?: number;
                    /**
                     * IP address (v4) of this Server
                     */
                    ip: string;
                    /**
                     * If the IP is blocked by our anti abuse dept
                     */
                    blocked: boolean;
                    /**
                     * Reverse DNS PTR entry for the IPv4 addresses of this Server
                     */
                    dns_ptr: string;
                } | null;
                /**
                 * IPv6 network assigned to this Server and its reverse DNS entry
                 */
                ipv6: {
                    /**
                     * ID of the Primary IP.
                     */
                    id?: number;
                    /**
                     * IP address (v6) of this Server
                     */
                    ip: string;
                    /**
                     * If the IP is blocked by our anti abuse dept
                     */
                    blocked: boolean;
                    /**
                     * Reverse DNS PTR entries for the IPv6 addresses of this Server
                     */
                    dns_ptr: Array<{
                        /**
                         * Single IPv6 address of this Server for which the reverse DNS entry has been set up
                         */
                        ip: string;
                        /**
                         * DNS pointer for the specific IP address
                         */
                        dns_ptr: string;
                    }> | null;
                } | null;
                /**
                 * IDs of Floating IPs assigned to this Server
                 */
                floating_ips: Array<number>;
                /**
                 * Firewalls applied to the public network interface of this Server
                 */
                firewalls?: Array<{
                    /**
                     * ID of the Firewall.
                     */
                    id?: number;
                    /**
                     * Status of the Firewall on the Server
                     */
                    status?: 'applied' | 'pending';
                }>;
            };
            /**
             * Private networks information
             */
            private_net: Array<{
                /**
                 * The Network ID the server is attached to.
                 */
                network?: number;
                /**
                 * The server IP address on the network.
                 */
                ip?: string;
                /**
                 * Additional IP addresses of the server on the network.
                 */
                alias_ips?: Array<string>;
                /**
                 * The server MAC address on the network.
                 */
                mac_address?: string;
            }>;
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
            /**
             * Datacenter this Resource is located at
             */
            datacenter: {
                /**
                 * ID of the Datacenter.
                 */
                id: number;
                /**
                 * Unique name for the [Datacenter](#datacenters).
                 *
                 * Can be used as a more descriptive identifier.
                 *
                 */
                name: string;
                /**
                 * Descriptive name for the [Datacenter](#datacenters).
                 *
                 * Desired to be easy to understand for humans. Might be changed for cosmetic reasons. Do not use this as an identifier.
                 *
                 */
                description: string;
                /**
                 * [Location](#locations) the [Datacenter](#datacenters) is located at.
                 *
                 */
                location: {
                    /**
                     * ID of the Location.
                     */
                    id: number;
                    /**
                     * Unique identifier of the [Location](#locations).
                     */
                    name: string;
                    /**
                     * Humand readable description of the [Location](#locations).
                     */
                    description: string;
                    /**
                     * Country the [Location](#locations) resides in.
                     *
                     * ISO 3166-1 alpha-2 code of the country.
                     *
                     */
                    country: string;
                    /**
                     * Name of the closest city to the [Location](#locations).
                     *
                     * City name or city name and state in short form. E.g. `Falkenstein` or `Ashburn, VA`.
                     *
                     */
                    city: string;
                    /**
                     * Latitude of the city closest to the [Location](#locations).
                     */
                    latitude: number;
                    /**
                     * Longitude of the city closest to the [Location](#locations).
                     */
                    longitude: number;
                    /**
                     * Name of the Network Zone this [Location](#locations) resides in.
                     */
                    network_zone: string;
                };
                /**
                 * [Server Types](#server-types) supported and available in this [Datacenter](#datacenters).
                 *
                 */
                server_types: {
                    /**
                     * List of [Server Types](#server-types) supported in this [Datacenter](#datacenters).
                     *
                     * These [Server Types](#server-types) are generally available in this Datacenter, but might be
                     * temporarily out of stock.
                     *
                     */
                    supported: Array<number>;
                    /**
                     * [Server Types](#server-types) currently available in this [Datacenter](#datacenters).
                     *
                     * These [Server Types](#server-types) can currently be purchased. Types that are temporarily unavailable
                     * but are supported in this [Datacenter](#datacenters) are listed as `supported`.
                     *
                     */
                    available: Array<number>;
                    /**
                     * [Server Types](#server-types) available to migrate to in this [Datacenter](#datacenters).
                     *
                     * Existing [Servers](#servers) can be migrated to these [Server Types](#server-types).
                     *
                     */
                    available_for_migration: Array<number>;
                };
            };
            /**
             * Image the server is based on.
             */
            image: {
                /**
                 * ID of the Image.
                 */
                id: number;
                /**
                 * Type of the Image.
                 */
                type: 'system' | 'app' | 'snapshot' | 'backup';
                /**
                 * Whether the Image can be used or if it's still being created or unavailable
                 */
                status: 'available' | 'creating' | 'unavailable';
                /**
                 * Unique identifier of the Image. This value is only set for system Images.
                 */
                name: string | null;
                /**
                 * Description of the Image
                 */
                description: string;
                /**
                 * Size of the Image file in our storage in GB. For snapshot Images this is the value relevant for calculating costs for the Image.
                 */
                image_size: number | null;
                /**
                 * Size of the disk contained in the Image in GB
                 */
                disk_size: number;
                /**
                 * Point in time when the Resource was created (in ISO-8601 format).
                 */
                created: string;
                /**
                 * Information about the Server the Image was created from
                 */
                created_from: {
                    /**
                     * ID of the Server the Image was created from
                     */
                    id: number;
                    /**
                     * Server name at the time the Image was created
                     */
                    name: string;
                } | null;
                /**
                 * ID of Server the Image is bound to. Only set for Images of type `backup`.
                 */
                bound_to: number | null;
                /**
                 * Flavor of operating system contained in the Image
                 */
                os_flavor: 'ubuntu' | 'centos' | 'debian' | 'fedora' | 'rocky' | 'alma' | 'unknown';
                /**
                 * Operating system version
                 */
                os_version: string | null;
                /**
                 * Indicates that rapid deploy of the Image is available
                 */
                rapid_deploy?: boolean;
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
                 * Point in time when the Image is considered to be deprecated (in ISO-8601 format)
                 */
                deprecated: string | null;
                /**
                 * Point in time where the Image was deleted (in ISO-8601 format)
                 */
                deleted: string | null;
                /**
                 * User-defined labels (`key/value` pairs) for the Resource.
                 * For more information, see "[Labels](#labels)".
                 *
                 */
                labels: Record<string, string>;
                /**
                 * CPU architecture compatible with the Image.
                 *
                 */
                architecture: 'x86' | 'arm';
            } | null;
            /**
             * ISO Image that is attached to this Server. Null if no ISO is attached.
             */
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
            } | null;
            /**
             * True if rescue mode is enabled. Server will then boot into rescue system on next reboot
             */
            rescue_enabled: boolean;
            /**
             * True if Server has been locked and is not available to user
             */
            locked: boolean;
            /**
             * Time window (UTC) in which the backup will run, or null if the backups are not enabled
             */
            backup_window: string | null;
            /**
             * Outbound Traffic for the current billing period in bytes
             */
            outgoing_traffic: number | null;
            /**
             * Inbound Traffic for the current billing period in bytes
             */
            ingoing_traffic: number | null;
            /**
             * Free Traffic for the current billing period in bytes
             */
            included_traffic: number | null;
            /**
             * Protection configuration for the Server
             */
            protection: {
                /**
                 * If true, prevents the Server from being deleted
                 */
                delete: boolean;
                /**
                 * If true, prevents the Server from being rebuilt
                 */
                rebuild: boolean;
            };
            /**
             * User-defined labels (`key/value` pairs) for the Resource.
             * For more information, see "[Labels](#labels)".
             *
             */
            labels: Record<string, string>;
            /**
             * IDs of Volumes assigned to this Server
             */
            volumes?: Array<number>;
            /**
             * Load Balancer IDs assigned to the server.
             */
            load_balancers?: Array<number>;
            /**
             * Size of the primary Disk
             */
            primary_disk_size: number;
            /**
             * The placement group the server is assigned to.
             */
            placement_group?: {
                /**
                 * ID of the Placement Group.
                 */
                id: number;
                /**
                 * Name of the Resource. Must be unique per Project.
                 */
                name: string;
                /**
                 * User-defined labels (`key/value` pairs) for the Resource.
                 * For more information, see "[Labels](#labels)".
                 *
                 */
                labels: Record<string, string>;
                /**
                 * Type of Placement Group.
                 *
                 */
                type: 'spread';
                /**
                 * Point in time when the Resource was created (in ISO-8601 format).
                 */
                created: string;
                /**
                 * Array of IDs of Servers that are part of this Placement Group
                 */
                servers: Array<number>;
            } | null;
        };
    }> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/servers/{id}',
            path: {
                'id': id,
            },
        });
    }
    /**
     * Update a Server
     * Updates a Server. You can update a Server’s name and a Server’s labels.
     *
     * Please note that Server names must be unique per Project and valid hostnames as per RFC 1123 (i.e. may only contain letters, digits, periods, and dashes).
     *
     * @param id ID of the Server.
     * @param requestBody
     * @returns any The `server` key in the reply contains the updated Server
     * @throws ApiError
     */
    public static putServers(
        id: number,
        requestBody?: {
            /**
             * New name to set
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
        server?: {
            /**
             * ID of the Server.
             */
            id: number;
            /**
             * Name of the Server (must be unique per Project and a valid hostname as per RFC 1123)
             */
            name: string;
            /**
             * Status of the Server.
             */
            status: 'running' | 'initializing' | 'starting' | 'stopping' | 'off' | 'deleting' | 'migrating' | 'rebuilding' | 'unknown';
            /**
             * Point in time when the Resource was created (in ISO-8601 format).
             */
            created: string;
            /**
             * Public network information. The Server's IPv4 address can be found in `public_net->ipv4->ip`
             */
            public_net: {
                /**
                 * IP address (v4) and its reverse DNS entry of this Server
                 */
                ipv4: {
                    /**
                     * ID of the Primary IP.
                     */
                    id?: number;
                    /**
                     * IP address (v4) of this Server
                     */
                    ip: string;
                    /**
                     * If the IP is blocked by our anti abuse dept
                     */
                    blocked: boolean;
                    /**
                     * Reverse DNS PTR entry for the IPv4 addresses of this Server
                     */
                    dns_ptr: string;
                } | null;
                /**
                 * IPv6 network assigned to this Server and its reverse DNS entry
                 */
                ipv6: {
                    /**
                     * ID of the Primary IP.
                     */
                    id?: number;
                    /**
                     * IP address (v6) of this Server
                     */
                    ip: string;
                    /**
                     * If the IP is blocked by our anti abuse dept
                     */
                    blocked: boolean;
                    /**
                     * Reverse DNS PTR entries for the IPv6 addresses of this Server
                     */
                    dns_ptr: Array<{
                        /**
                         * Single IPv6 address of this Server for which the reverse DNS entry has been set up
                         */
                        ip: string;
                        /**
                         * DNS pointer for the specific IP address
                         */
                        dns_ptr: string;
                    }> | null;
                } | null;
                /**
                 * IDs of Floating IPs assigned to this Server
                 */
                floating_ips: Array<number>;
                /**
                 * Firewalls applied to the public network interface of this Server
                 */
                firewalls?: Array<{
                    /**
                     * ID of the Firewall.
                     */
                    id?: number;
                    /**
                     * Status of the Firewall on the Server
                     */
                    status?: 'applied' | 'pending';
                }>;
            };
            /**
             * Private networks information
             */
            private_net: Array<{
                /**
                 * The Network ID the server is attached to.
                 */
                network?: number;
                /**
                 * The server IP address on the network.
                 */
                ip?: string;
                /**
                 * Additional IP addresses of the server on the network.
                 */
                alias_ips?: Array<string>;
                /**
                 * The server MAC address on the network.
                 */
                mac_address?: string;
            }>;
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
            /**
             * Datacenter this Resource is located at
             */
            datacenter: {
                /**
                 * ID of the Datacenter.
                 */
                id: number;
                /**
                 * Unique name for the [Datacenter](#datacenters).
                 *
                 * Can be used as a more descriptive identifier.
                 *
                 */
                name: string;
                /**
                 * Descriptive name for the [Datacenter](#datacenters).
                 *
                 * Desired to be easy to understand for humans. Might be changed for cosmetic reasons. Do not use this as an identifier.
                 *
                 */
                description: string;
                /**
                 * [Location](#locations) the [Datacenter](#datacenters) is located at.
                 *
                 */
                location: {
                    /**
                     * ID of the Location.
                     */
                    id: number;
                    /**
                     * Unique identifier of the [Location](#locations).
                     */
                    name: string;
                    /**
                     * Humand readable description of the [Location](#locations).
                     */
                    description: string;
                    /**
                     * Country the [Location](#locations) resides in.
                     *
                     * ISO 3166-1 alpha-2 code of the country.
                     *
                     */
                    country: string;
                    /**
                     * Name of the closest city to the [Location](#locations).
                     *
                     * City name or city name and state in short form. E.g. `Falkenstein` or `Ashburn, VA`.
                     *
                     */
                    city: string;
                    /**
                     * Latitude of the city closest to the [Location](#locations).
                     */
                    latitude: number;
                    /**
                     * Longitude of the city closest to the [Location](#locations).
                     */
                    longitude: number;
                    /**
                     * Name of the Network Zone this [Location](#locations) resides in.
                     */
                    network_zone: string;
                };
                /**
                 * [Server Types](#server-types) supported and available in this [Datacenter](#datacenters).
                 *
                 */
                server_types: {
                    /**
                     * List of [Server Types](#server-types) supported in this [Datacenter](#datacenters).
                     *
                     * These [Server Types](#server-types) are generally available in this Datacenter, but might be
                     * temporarily out of stock.
                     *
                     */
                    supported: Array<number>;
                    /**
                     * [Server Types](#server-types) currently available in this [Datacenter](#datacenters).
                     *
                     * These [Server Types](#server-types) can currently be purchased. Types that are temporarily unavailable
                     * but are supported in this [Datacenter](#datacenters) are listed as `supported`.
                     *
                     */
                    available: Array<number>;
                    /**
                     * [Server Types](#server-types) available to migrate to in this [Datacenter](#datacenters).
                     *
                     * Existing [Servers](#servers) can be migrated to these [Server Types](#server-types).
                     *
                     */
                    available_for_migration: Array<number>;
                };
            };
            /**
             * Image the server is based on.
             */
            image: {
                /**
                 * ID of the Image.
                 */
                id: number;
                /**
                 * Type of the Image.
                 */
                type: 'system' | 'app' | 'snapshot' | 'backup';
                /**
                 * Whether the Image can be used or if it's still being created or unavailable
                 */
                status: 'available' | 'creating' | 'unavailable';
                /**
                 * Unique identifier of the Image. This value is only set for system Images.
                 */
                name: string | null;
                /**
                 * Description of the Image
                 */
                description: string;
                /**
                 * Size of the Image file in our storage in GB. For snapshot Images this is the value relevant for calculating costs for the Image.
                 */
                image_size: number | null;
                /**
                 * Size of the disk contained in the Image in GB
                 */
                disk_size: number;
                /**
                 * Point in time when the Resource was created (in ISO-8601 format).
                 */
                created: string;
                /**
                 * Information about the Server the Image was created from
                 */
                created_from: {
                    /**
                     * ID of the Server the Image was created from
                     */
                    id: number;
                    /**
                     * Server name at the time the Image was created
                     */
                    name: string;
                } | null;
                /**
                 * ID of Server the Image is bound to. Only set for Images of type `backup`.
                 */
                bound_to: number | null;
                /**
                 * Flavor of operating system contained in the Image
                 */
                os_flavor: 'ubuntu' | 'centos' | 'debian' | 'fedora' | 'rocky' | 'alma' | 'unknown';
                /**
                 * Operating system version
                 */
                os_version: string | null;
                /**
                 * Indicates that rapid deploy of the Image is available
                 */
                rapid_deploy?: boolean;
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
                 * Point in time when the Image is considered to be deprecated (in ISO-8601 format)
                 */
                deprecated: string | null;
                /**
                 * Point in time where the Image was deleted (in ISO-8601 format)
                 */
                deleted: string | null;
                /**
                 * User-defined labels (`key/value` pairs) for the Resource.
                 * For more information, see "[Labels](#labels)".
                 *
                 */
                labels: Record<string, string>;
                /**
                 * CPU architecture compatible with the Image.
                 *
                 */
                architecture: 'x86' | 'arm';
            } | null;
            /**
             * ISO Image that is attached to this Server. Null if no ISO is attached.
             */
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
            } | null;
            /**
             * True if rescue mode is enabled. Server will then boot into rescue system on next reboot
             */
            rescue_enabled: boolean;
            /**
             * True if Server has been locked and is not available to user
             */
            locked: boolean;
            /**
             * Time window (UTC) in which the backup will run, or null if the backups are not enabled
             */
            backup_window: string | null;
            /**
             * Outbound Traffic for the current billing period in bytes
             */
            outgoing_traffic: number | null;
            /**
             * Inbound Traffic for the current billing period in bytes
             */
            ingoing_traffic: number | null;
            /**
             * Free Traffic for the current billing period in bytes
             */
            included_traffic: number | null;
            /**
             * Protection configuration for the Server
             */
            protection: {
                /**
                 * If true, prevents the Server from being deleted
                 */
                delete: boolean;
                /**
                 * If true, prevents the Server from being rebuilt
                 */
                rebuild: boolean;
            };
            /**
             * User-defined labels (`key/value` pairs) for the Resource.
             * For more information, see "[Labels](#labels)".
             *
             */
            labels: Record<string, string>;
            /**
             * IDs of Volumes assigned to this Server
             */
            volumes?: Array<number>;
            /**
             * Load Balancer IDs assigned to the server.
             */
            load_balancers?: Array<number>;
            /**
             * Size of the primary Disk
             */
            primary_disk_size: number;
            /**
             * The placement group the server is assigned to.
             */
            placement_group?: {
                /**
                 * ID of the Placement Group.
                 */
                id: number;
                /**
                 * Name of the Resource. Must be unique per Project.
                 */
                name: string;
                /**
                 * User-defined labels (`key/value` pairs) for the Resource.
                 * For more information, see "[Labels](#labels)".
                 *
                 */
                labels: Record<string, string>;
                /**
                 * Type of Placement Group.
                 *
                 */
                type: 'spread';
                /**
                 * Point in time when the Resource was created (in ISO-8601 format).
                 */
                created: string;
                /**
                 * Array of IDs of Servers that are part of this Placement Group
                 */
                servers: Array<number>;
            } | null;
        };
    }> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/servers/{id}',
            path: {
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * Delete a Server
     * Deletes a Server.
     *
     * This immediately removes the Server from your account, and it is no longer
     * accessible. Any resources attached to the server (like Volumes, Primary IPs,
     * Floating IPs, Firewalls, Placement Groups) are detached while the server is deleted.
     *
     * @param id ID of the Server.
     * @returns any The `action` key in the reply contains an Action object with this structure
     * @throws ApiError
     */
    public static deleteServers(
        id: number,
    ): CancelablePromise<{
        action?: {
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
            method: 'DELETE',
            url: '/servers/{id}',
            path: {
                'id': id,
            },
        });
    }
    /**
     * Get Metrics for a Server
     * Get Metrics for specified Server.
     *
     * You must specify the type of metric to get: cpu, disk or network. You can also specify more than one type by comma separation, e.g. cpu,disk.
     *
     * Depending on the type you will get different time series data
     *
     * | Type    | Timeseries              | Unit      | Description                                          |
     * |---------|-------------------------|-----------|------------------------------------------------------|
     * | cpu     | cpu                     | percent   | Percent CPU usage                                    |
     * | disk    | disk.0.iops.read        | iop/s     | Number of read IO operations per second              |
     * |         | disk.0.iops.write       | iop/s     | Number of write IO operations per second             |
     * |         | disk.0.bandwidth.read   | bytes/s   | Bytes read per second                                |
     * |         | disk.0.bandwidth.write  | bytes/s   | Bytes written per second                             |
     * | network | network.0.pps.in        | packets/s | Public Network interface packets per second received |
     * |         | network.0.pps.out       | packets/s | Public Network interface packets per second sent     |
     * |         | network.0.bandwidth.in  | bytes/s   | Public Network interface bytes/s received            |
     * |         | network.0.bandwidth.out | bytes/s   | Public Network interface bytes/s sent                |
     *
     * Metrics are available for the last 30 days only.
     *
     * If you do not provide the step argument we will automatically adjust it so that a maximum of 200 samples are returned.
     *
     * We limit the number of samples returned to a maximum of 500 and will adjust the step parameter accordingly.
     *
     * @param id ID of the Server.
     * @param type Type of metrics to get
     * @param start Start of period to get Metrics for (in ISO-8601 format)
     * @param end End of period to get Metrics for (in ISO-8601 format)
     * @param step Resolution of results in seconds
     * @returns any The `metrics` key in the reply contains a metrics object with this structure
     * @throws ApiError
     */
    public static getServersMetrics(
        id: number,
        type: 'cpu' | 'disk' | 'network',
        start: string,
        end: string,
        step?: string,
    ): CancelablePromise<{
        metrics: {
            /**
             * Start of period of metrics reported (in ISO-8601 format)
             */
            start: string;
            /**
             * End of period of metrics reported (in ISO-8601 format)
             */
            end: string;
            /**
             * Resolution of results in seconds.
             */
            step: number;
            /**
             * Hash with timeseries information, containing the name of timeseries as key
             */
            time_series: Record<string, {
                /**
                 * Metrics Timestamps with values
                 */
                values: Array<Array<(number | string)>>;
            }>;
        };
    }> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/servers/{id}/metrics',
            path: {
                'id': id,
            },
            query: {
                'type': type,
                'start': start,
                'end': end,
                'step': step,
            },
        });
    }
}
