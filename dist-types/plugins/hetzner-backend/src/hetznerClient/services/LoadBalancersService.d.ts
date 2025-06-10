import type { CancelablePromise } from '../core/CancelablePromise';
export declare class LoadBalancersService {
    /**
     * Get all Load Balancers
     * Gets all existing Load Balancers that you have available.
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
     * @returns any The `load_balancers` key contains a list of Load Balancers
     * @throws ApiError
     */
    static getLoadBalancers(sort?: 'id' | 'id:asc' | 'id:desc' | 'name' | 'name:asc' | 'name:desc' | 'created' | 'created:asc' | 'created:desc', name?: string, labelSelector?: string, page?: number, perPage?: number): CancelablePromise<{
        load_balancers: Array<{
            /**
             * ID of the Load Balancer.
             */
            id: number;
            /**
             * Name of the Resource. Must be unique per Project.
             */
            name: string;
            /**
             * Public network information
             */
            public_net: {
                /**
                 * Public Interface enabled or not
                 */
                enabled: boolean;
                /**
                 * IP address (v4)
                 */
                ipv4: {
                    /**
                     * IP address (v4) of this Load Balancer
                     */
                    ip?: string | null;
                    /**
                     * Reverse DNS PTR entry for the IPv4 address of this Load Balancer
                     */
                    dns_ptr?: string | null;
                };
                /**
                 * IP address (v6)
                 */
                ipv6: {
                    /**
                     * IP address (v6) of this Load Balancer
                     */
                    ip?: string | null;
                    /**
                     * Reverse DNS PTR entry for the IPv6 address of this Load Balancer
                     */
                    dns_ptr?: string | null;
                };
            };
            /**
             * Private networks information
             */
            private_net: Array<{
                /**
                 * ID of the Network
                 */
                network?: number;
                /**
                 * IP address (v4) of this Load Balancer in this Network
                 */
                ip?: string;
            }>;
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
            load_balancer_type: {
                /**
                 * ID of the Load Balancer type
                 */
                id: number;
                /**
                 * Unique identifier of the Load Balancer type
                 */
                name: string;
                /**
                 * Description of the Load Balancer type
                 */
                description: string;
                /**
                 * Number of maximum simultaneous open connections
                 */
                max_connections: number;
                /**
                 * Number of services a Load Balancer of this type can have
                 */
                max_services: number;
                /**
                 * Number of targets a single Load Balancer can have
                 */
                max_targets: number;
                /**
                 * Number of SSL Certificates that can be assigned to a single Load Balancer
                 */
                max_assigned_certificates: number;
                /**
                 * Point in time when the Load Balancer type is deprecated (in ISO-8601 format)
                 */
                deprecated: string | null;
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
            };
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
             * List of services that belong to this Load Balancer
             */
            services: Array<{
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
            }>;
            /**
             * List of targets that belong to this Load Balancer
             */
            targets: Array<{
                /**
                 * Type of the resource
                 */
                type: 'server' | 'label_selector' | 'ip';
                /**
                 * Server where the traffic should be routed to. Only present for target type "server".
                 */
                server?: {
                    /**
                     * ID of the Server
                     */
                    id: number;
                };
                /**
                 * Label selector used to determine targets. Only present for target type "label_selector".
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
                /**
                 * List of health statuses of the services on this target. Only present for target types "server" and "ip".
                 */
                health_status?: Array<{
                    listen_port?: number;
                    status?: 'healthy' | 'unhealthy' | 'unknown';
                }>;
                /**
                 * Use the private network IP instead of the public IP. Only present for target types "server" and "label_selector".
                 */
                use_private_ip?: boolean;
                /**
                 * List of resolved label selector target Servers. Only present for type "label_selector".
                 */
                targets?: Array<{
                    /**
                     * Type of the resource. Here always "server".
                     */
                    type?: string;
                    /**
                     * Server where the traffic should be routed to. Only present for target type "server".
                     */
                    server?: {
                        /**
                         * ID of the Server
                         */
                        id: number;
                    };
                    /**
                     * List of health statuses of the services on this target. Only present for target types "server" and "ip".
                     */
                    health_status?: Array<{
                        listen_port?: number;
                        status?: 'healthy' | 'unhealthy' | 'unknown';
                    }>;
                    /**
                     * Use the private network IP instead of the public IP. Only present for target types "server" and "label_selector".
                     */
                    use_private_ip?: boolean;
                }>;
            }>;
            /**
             * Algorithm of the Load Balancer
             */
            algorithm: {
                /**
                 * Type of the algorithm
                 */
                type: 'round_robin' | 'least_connections';
            };
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
            included_traffic: number;
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
     * Create a Load Balancer
     * Creates a Load Balancer.
     *
     * #### Call specific error codes
     *
     * | Code                                    | Description                                                                                           |
     * |-----------------------------------------|-------------------------------------------------------------------------------------------------------|
     * | `cloud_resource_ip_not_allowed`         | The IP you are trying to add as a target belongs to a Hetzner Cloud resource                          |
     * | `ip_not_owned`                          | The IP is not owned by the owner of the project of the Load Balancer                                  |
     * | `load_balancer_not_attached_to_network` | The Load Balancer is not attached to a network                                                        |
     * | `robot_unavailable`                     | Robot was not available. The caller may retry the operation after a short delay.                      |
     * | `server_not_attached_to_network`        | The server you are trying to add as a target is not attached to the same network as the Load Balancer |
     * | `source_port_already_used`              | The source port you are trying to add is already in use                                               |
     * | `missing_ipv4`                          | The server that you are trying to add as a public target does not have a public IPv4 address          |
     * | `target_already_defined`                | The Load Balancer target you are trying to define is already defined                                  |
     *
     * @param requestBody
     * @returns any The `load_balancer` key contains the Load Balancer that was just created
     * @throws ApiError
     */
    static postLoadBalancers(requestBody?: {
        /**
         * Name of the Load Balancer
         */
        name: string;
        /**
         * ID or name of the Load Balancer type this Load Balancer should be created with
         */
        load_balancer_type: string;
        /**
         * Algorithm of the Load Balancer
         */
        algorithm?: {
            /**
             * Type of the algorithm.
             */
            type: 'round_robin' | 'least_connections';
        };
        /**
         * Array of services
         */
        services?: Array<{
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
        }>;
        /**
         * Array of targets
         */
        targets?: Array<{
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
        }>;
        /**
         * User-defined labels (`key/value` pairs) for the Resource.
         * For more information, see "[Labels](#labels)".
         *
         */
        labels?: Record<string, string>;
        /**
         * Enable or disable the public interface of the Load Balancer
         */
        public_interface?: boolean;
        /**
         * ID of the network the Load Balancer should be attached to on creation
         */
        network?: number;
        /**
         * Name of network zone
         */
        network_zone?: string;
        /**
         * ID or name of Location to create Load Balancer in
         */
        location?: string;
    }): CancelablePromise<{
        load_balancer: {
            /**
             * ID of the Load Balancer.
             */
            id: number;
            /**
             * Name of the Resource. Must be unique per Project.
             */
            name: string;
            /**
             * Public network information
             */
            public_net: {
                /**
                 * Public Interface enabled or not
                 */
                enabled: boolean;
                /**
                 * IP address (v4)
                 */
                ipv4: {
                    /**
                     * IP address (v4) of this Load Balancer
                     */
                    ip?: string | null;
                    /**
                     * Reverse DNS PTR entry for the IPv4 address of this Load Balancer
                     */
                    dns_ptr?: string | null;
                };
                /**
                 * IP address (v6)
                 */
                ipv6: {
                    /**
                     * IP address (v6) of this Load Balancer
                     */
                    ip?: string | null;
                    /**
                     * Reverse DNS PTR entry for the IPv6 address of this Load Balancer
                     */
                    dns_ptr?: string | null;
                };
            };
            /**
             * Private networks information
             */
            private_net: Array<{
                /**
                 * ID of the Network
                 */
                network?: number;
                /**
                 * IP address (v4) of this Load Balancer in this Network
                 */
                ip?: string;
            }>;
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
            load_balancer_type: {
                /**
                 * ID of the Load Balancer type
                 */
                id: number;
                /**
                 * Unique identifier of the Load Balancer type
                 */
                name: string;
                /**
                 * Description of the Load Balancer type
                 */
                description: string;
                /**
                 * Number of maximum simultaneous open connections
                 */
                max_connections: number;
                /**
                 * Number of services a Load Balancer of this type can have
                 */
                max_services: number;
                /**
                 * Number of targets a single Load Balancer can have
                 */
                max_targets: number;
                /**
                 * Number of SSL Certificates that can be assigned to a single Load Balancer
                 */
                max_assigned_certificates: number;
                /**
                 * Point in time when the Load Balancer type is deprecated (in ISO-8601 format)
                 */
                deprecated: string | null;
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
            };
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
             * List of services that belong to this Load Balancer
             */
            services: Array<{
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
            }>;
            /**
             * List of targets that belong to this Load Balancer
             */
            targets: Array<{
                /**
                 * Type of the resource
                 */
                type: 'server' | 'label_selector' | 'ip';
                /**
                 * Server where the traffic should be routed to. Only present for target type "server".
                 */
                server?: {
                    /**
                     * ID of the Server
                     */
                    id: number;
                };
                /**
                 * Label selector used to determine targets. Only present for target type "label_selector".
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
                /**
                 * List of health statuses of the services on this target. Only present for target types "server" and "ip".
                 */
                health_status?: Array<{
                    listen_port?: number;
                    status?: 'healthy' | 'unhealthy' | 'unknown';
                }>;
                /**
                 * Use the private network IP instead of the public IP. Only present for target types "server" and "label_selector".
                 */
                use_private_ip?: boolean;
                /**
                 * List of resolved label selector target Servers. Only present for type "label_selector".
                 */
                targets?: Array<{
                    /**
                     * Type of the resource. Here always "server".
                     */
                    type?: string;
                    /**
                     * Server where the traffic should be routed to. Only present for target type "server".
                     */
                    server?: {
                        /**
                         * ID of the Server
                         */
                        id: number;
                    };
                    /**
                     * List of health statuses of the services on this target. Only present for target types "server" and "ip".
                     */
                    health_status?: Array<{
                        listen_port?: number;
                        status?: 'healthy' | 'unhealthy' | 'unknown';
                    }>;
                    /**
                     * Use the private network IP instead of the public IP. Only present for target types "server" and "label_selector".
                     */
                    use_private_ip?: boolean;
                }>;
            }>;
            /**
             * Algorithm of the Load Balancer
             */
            algorithm: {
                /**
                 * Type of the algorithm
                 */
                type: 'round_robin' | 'least_connections';
            };
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
            included_traffic: number;
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
    }>;
    /**
     * Get a Load Balancer
     * Gets a specific Load Balancer object.
     * @param id ID of the Load Balancer.
     * @returns any The `load_balancer` key contains the Load Balancer
     * @throws ApiError
     */
    static getLoadBalancers1(id: number): CancelablePromise<{
        load_balancer: {
            /**
             * ID of the Load Balancer.
             */
            id: number;
            /**
             * Name of the Resource. Must be unique per Project.
             */
            name: string;
            /**
             * Public network information
             */
            public_net: {
                /**
                 * Public Interface enabled or not
                 */
                enabled: boolean;
                /**
                 * IP address (v4)
                 */
                ipv4: {
                    /**
                     * IP address (v4) of this Load Balancer
                     */
                    ip?: string | null;
                    /**
                     * Reverse DNS PTR entry for the IPv4 address of this Load Balancer
                     */
                    dns_ptr?: string | null;
                };
                /**
                 * IP address (v6)
                 */
                ipv6: {
                    /**
                     * IP address (v6) of this Load Balancer
                     */
                    ip?: string | null;
                    /**
                     * Reverse DNS PTR entry for the IPv6 address of this Load Balancer
                     */
                    dns_ptr?: string | null;
                };
            };
            /**
             * Private networks information
             */
            private_net: Array<{
                /**
                 * ID of the Network
                 */
                network?: number;
                /**
                 * IP address (v4) of this Load Balancer in this Network
                 */
                ip?: string;
            }>;
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
            load_balancer_type: {
                /**
                 * ID of the Load Balancer type
                 */
                id: number;
                /**
                 * Unique identifier of the Load Balancer type
                 */
                name: string;
                /**
                 * Description of the Load Balancer type
                 */
                description: string;
                /**
                 * Number of maximum simultaneous open connections
                 */
                max_connections: number;
                /**
                 * Number of services a Load Balancer of this type can have
                 */
                max_services: number;
                /**
                 * Number of targets a single Load Balancer can have
                 */
                max_targets: number;
                /**
                 * Number of SSL Certificates that can be assigned to a single Load Balancer
                 */
                max_assigned_certificates: number;
                /**
                 * Point in time when the Load Balancer type is deprecated (in ISO-8601 format)
                 */
                deprecated: string | null;
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
            };
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
             * List of services that belong to this Load Balancer
             */
            services: Array<{
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
            }>;
            /**
             * List of targets that belong to this Load Balancer
             */
            targets: Array<{
                /**
                 * Type of the resource
                 */
                type: 'server' | 'label_selector' | 'ip';
                /**
                 * Server where the traffic should be routed to. Only present for target type "server".
                 */
                server?: {
                    /**
                     * ID of the Server
                     */
                    id: number;
                };
                /**
                 * Label selector used to determine targets. Only present for target type "label_selector".
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
                /**
                 * List of health statuses of the services on this target. Only present for target types "server" and "ip".
                 */
                health_status?: Array<{
                    listen_port?: number;
                    status?: 'healthy' | 'unhealthy' | 'unknown';
                }>;
                /**
                 * Use the private network IP instead of the public IP. Only present for target types "server" and "label_selector".
                 */
                use_private_ip?: boolean;
                /**
                 * List of resolved label selector target Servers. Only present for type "label_selector".
                 */
                targets?: Array<{
                    /**
                     * Type of the resource. Here always "server".
                     */
                    type?: string;
                    /**
                     * Server where the traffic should be routed to. Only present for target type "server".
                     */
                    server?: {
                        /**
                         * ID of the Server
                         */
                        id: number;
                    };
                    /**
                     * List of health statuses of the services on this target. Only present for target types "server" and "ip".
                     */
                    health_status?: Array<{
                        listen_port?: number;
                        status?: 'healthy' | 'unhealthy' | 'unknown';
                    }>;
                    /**
                     * Use the private network IP instead of the public IP. Only present for target types "server" and "label_selector".
                     */
                    use_private_ip?: boolean;
                }>;
            }>;
            /**
             * Algorithm of the Load Balancer
             */
            algorithm: {
                /**
                 * Type of the algorithm
                 */
                type: 'round_robin' | 'least_connections';
            };
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
            included_traffic: number;
        };
    }>;
    /**
     * Update a Load Balancer
     * Updates a Load Balancer. You can update a Load Balancer’s name and a Load Balancer’s labels.
     *
     * Note: if the Load Balancer object changes during the request, the response will be a “conflict” error.
     *
     * @param id ID of the Load Balancer.
     * @param requestBody
     * @returns any The `load_balancer` key contains the updated Load Balancer
     * @throws ApiError
     */
    static putLoadBalancers(id: number, requestBody?: {
        /**
         * New Load Balancer name
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
    }): CancelablePromise<{
        load_balancer: {
            /**
             * ID of the Load Balancer.
             */
            id: number;
            /**
             * Name of the Resource. Must be unique per Project.
             */
            name: string;
            /**
             * Public network information
             */
            public_net: {
                /**
                 * Public Interface enabled or not
                 */
                enabled: boolean;
                /**
                 * IP address (v4)
                 */
                ipv4: {
                    /**
                     * IP address (v4) of this Load Balancer
                     */
                    ip?: string | null;
                    /**
                     * Reverse DNS PTR entry for the IPv4 address of this Load Balancer
                     */
                    dns_ptr?: string | null;
                };
                /**
                 * IP address (v6)
                 */
                ipv6: {
                    /**
                     * IP address (v6) of this Load Balancer
                     */
                    ip?: string | null;
                    /**
                     * Reverse DNS PTR entry for the IPv6 address of this Load Balancer
                     */
                    dns_ptr?: string | null;
                };
            };
            /**
             * Private networks information
             */
            private_net: Array<{
                /**
                 * ID of the Network
                 */
                network?: number;
                /**
                 * IP address (v4) of this Load Balancer in this Network
                 */
                ip?: string;
            }>;
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
            load_balancer_type: {
                /**
                 * ID of the Load Balancer type
                 */
                id: number;
                /**
                 * Unique identifier of the Load Balancer type
                 */
                name: string;
                /**
                 * Description of the Load Balancer type
                 */
                description: string;
                /**
                 * Number of maximum simultaneous open connections
                 */
                max_connections: number;
                /**
                 * Number of services a Load Balancer of this type can have
                 */
                max_services: number;
                /**
                 * Number of targets a single Load Balancer can have
                 */
                max_targets: number;
                /**
                 * Number of SSL Certificates that can be assigned to a single Load Balancer
                 */
                max_assigned_certificates: number;
                /**
                 * Point in time when the Load Balancer type is deprecated (in ISO-8601 format)
                 */
                deprecated: string | null;
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
            };
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
             * List of services that belong to this Load Balancer
             */
            services: Array<{
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
            }>;
            /**
             * List of targets that belong to this Load Balancer
             */
            targets: Array<{
                /**
                 * Type of the resource
                 */
                type: 'server' | 'label_selector' | 'ip';
                /**
                 * Server where the traffic should be routed to. Only present for target type "server".
                 */
                server?: {
                    /**
                     * ID of the Server
                     */
                    id: number;
                };
                /**
                 * Label selector used to determine targets. Only present for target type "label_selector".
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
                /**
                 * List of health statuses of the services on this target. Only present for target types "server" and "ip".
                 */
                health_status?: Array<{
                    listen_port?: number;
                    status?: 'healthy' | 'unhealthy' | 'unknown';
                }>;
                /**
                 * Use the private network IP instead of the public IP. Only present for target types "server" and "label_selector".
                 */
                use_private_ip?: boolean;
                /**
                 * List of resolved label selector target Servers. Only present for type "label_selector".
                 */
                targets?: Array<{
                    /**
                     * Type of the resource. Here always "server".
                     */
                    type?: string;
                    /**
                     * Server where the traffic should be routed to. Only present for target type "server".
                     */
                    server?: {
                        /**
                         * ID of the Server
                         */
                        id: number;
                    };
                    /**
                     * List of health statuses of the services on this target. Only present for target types "server" and "ip".
                     */
                    health_status?: Array<{
                        listen_port?: number;
                        status?: 'healthy' | 'unhealthy' | 'unknown';
                    }>;
                    /**
                     * Use the private network IP instead of the public IP. Only present for target types "server" and "label_selector".
                     */
                    use_private_ip?: boolean;
                }>;
            }>;
            /**
             * Algorithm of the Load Balancer
             */
            algorithm: {
                /**
                 * Type of the algorithm
                 */
                type: 'round_robin' | 'least_connections';
            };
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
            included_traffic: number;
        };
    }>;
    /**
     * Delete a Load Balancer
     * Deletes a Load Balancer.
     * @param id ID of the Load Balancer.
     * @returns void
     * @throws ApiError
     */
    static deleteLoadBalancers(id: number): CancelablePromise<void>;
    /**
     * Get Metrics for a LoadBalancer
     * You must specify the type of metric to get: `open_connections`, `connections_per_second`, `requests_per_second` or `bandwidth`. You can also specify more than one type by comma separation, e.g. `requests_per_second,bandwidth`.
     *
     * Depending on the type you will get different time series data:
     *
     * |Type | Timeseries | Unit | Description |
     * |---- |------------|------|-------------|
     * | open_connections | open_connections | number | Open connections |
     * | connections_per_second | connections_per_second | connections/s | Connections per second |
     * | requests_per_second | requests_per_second | requests/s | Requests per second |
     * | bandwidth | bandwidth.in | bytes/s | Ingress bandwidth |
     * || bandwidth.out | bytes/s | Egress bandwidth |
     *
     * Metrics are available for the last 30 days only.
     *
     * If you do not provide the step argument we will automatically adjust it so that 200 samples are returned.
     *
     * We limit the number of samples to a maximum of 500 and will adjust the step parameter accordingly.
     *
     * @param id ID of the Load Balancer.
     * @param type Type of metrics to get
     * @param start Start of period to get Metrics for (in ISO-8601 format)
     * @param end End of period to get Metrics for (in ISO-8601 format)
     * @param step Resolution of results in seconds
     * @returns any The `metrics` key in the reply contains a metrics object with this structure
     * @throws ApiError
     */
    static getLoadBalancersMetrics(id: number, type: 'open_connections' | 'connections_per_second' | 'requests_per_second' | 'bandwidth', start: string, end: string, step?: string): CancelablePromise<{
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
    }>;
}
