import type { CancelablePromise } from '../core/CancelablePromise';
export declare class ServerActionsService {
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
    static getServersActions(id?: number, sort?: 'id' | 'id:asc' | 'id:desc' | 'command' | 'command:asc' | 'command:desc' | 'status' | 'status:asc' | 'status:desc' | 'started' | 'started:asc' | 'started:desc' | 'finished' | 'finished:asc' | 'finished:desc', status?: 'running' | 'success' | 'error', page?: number, perPage?: number): CancelablePromise<{
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
     * Returns a specific Action object.
     * @param id ID of the Action.
     * @returns any The `action` key in the reply has this structure
     * @throws ApiError
     */
    static getServersActions1(id: number): CancelablePromise<{
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
     * Get all Actions for a Server
     * Returns all Action objects for a Server. You can `sort` the results by using the sort URI parameter, and filter them with the `status` parameter.
     * @param id ID of the Server.
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
    static getServersActions2(id: number, sort?: 'id' | 'id:asc' | 'id:desc' | 'command' | 'command:asc' | 'command:desc' | 'status' | 'status:asc' | 'status:desc' | 'started' | 'started:asc' | 'started:desc' | 'finished' | 'finished:asc' | 'finished:desc', status?: 'running' | 'success' | 'error', page?: number, perPage?: number): CancelablePromise<{
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
     * Add a Server to a Placement Group
     * Adds a Server to a Placement Group.
     *
     * Server must be powered off for this command to succeed.
     *
     * #### Call specific error codes
     *
     * | Code                          | Description                                                          |
     * |-------------------------------|----------------------------------------------------------------------|
     * | `server_not_stopped`          | The action requires a stopped server                                 |
     *
     * @param id ID of the Server.
     * @param requestBody
     * @returns any The `action` key in the reply contains an Action object with this structure
     * @throws ApiError
     */
    static postServersActionsAddToPlacementGroup(id: number, requestBody?: {
        /**
         * ID of Placement Group the Server should be added to
         */
        placement_group: number;
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
     * Attach an ISO to a Server
     * Attaches an ISO to a Server. The Server will immediately see it as a new disk. An already attached ISO will automatically be detached before the new ISO is attached.
     *
     * Servers with attached ISOs have a modified boot order: They will try to boot from the ISO first before falling back to hard disk.
     *
     * @param id ID of the Server.
     * @param requestBody
     * @returns any The `action` key in the reply contains an Action object with this structure
     * @throws ApiError
     */
    static postServersActionsAttachIso(id: number, requestBody?: {
        /**
         * ID or name of ISO to attach to the Server as listed in GET `/isos`
         */
        iso: string;
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
     * Attach a Server to a Network
     * Attaches a Server to a network. This will complement the fixed public Server interface by adding an additional ethernet interface to the Server which is connected to the specified network.
     *
     * The Server will get an IP auto assigned from a subnet of type `server` in the same `network_zone`.
     *
     * Using the `alias_ips` attribute you can also define one or more additional IPs to the Servers. Please note that you will have to configure these IPs by hand on your Server since only the primary IP will be given out by DHCP.
     *
     * **Call specific error codes**
     *
     * | Code                             | Description                                                           |
     * |----------------------------------|-----------------------------------------------------------------------|
     * | `server_already_attached`        | The server is already attached to the network                         |
     * | `ip_not_available`               | The provided Network IP is not available                              |
     * | `no_subnet_available`            | No Subnet or IP is available for the Server within the network        |
     * | `networks_overlap`               | The network IP range overlaps with one of the server networks         |
     *
     * @param id ID of the Server.
     * @param requestBody
     * @returns any The `action` key in the reply contains an Action object with this structure
     * @throws ApiError
     */
    static postServersActionsAttachToNetwork(id: number, requestBody?: {
        /**
         * ID of an existing network to attach the Server to
         */
        network: number;
        /**
         * IP to request to be assigned to this Server; if you do not provide this then you will be auto assigned an IP address
         */
        ip?: string;
        /**
         * Additional IPs to be assigned to this Server
         */
        alias_ips?: Array<string>;
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
     * Change alias IPs of a Network
     * Changes the alias IPs of an already attached Network. Note that the existing aliases for the specified Network will be replaced with these provided in the request body. So if you want to add an alias IP, you have to provide the existing ones from the Network plus the new alias IP in the request body.
     * @param id ID of the Server.
     * @param requestBody
     * @returns any The `action` key in the reply contains an Action object with this structure
     * @throws ApiError
     */
    static postServersActionsChangeAliasIps(id: number, requestBody?: {
        /**
         * ID of an existing Network already attached to the Server
         */
        network: number;
        /**
         * New alias IPs to set for this Server
         */
        alias_ips: Array<string>;
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
     * Change reverse DNS entry for this Server
     * Changes the hostname that will appear when getting the hostname belonging to the primary IPs (IPv4 and IPv6) of this Server.
     *
     * Floating IPs assigned to the Server are not affected by this.
     *
     * @param id ID of the Server.
     * @param requestBody Select the IP address for which to change the DNS entry by passing `ip`. It can be either IPv4 or IPv6. The target hostname is set by passing `dns_ptr`.
     * @returns any The `action` key in the reply contains an Action object with this structure
     * @throws ApiError
     */
    static postServersActionsChangeDnsPtr(id: number, requestBody?: {
        /**
         * Primary IP address for which the reverse DNS entry should be set
         */
        ip: string;
        /**
         * Hostname to set as a reverse DNS PTR entry, reset to original value if `null`
         */
        dns_ptr: string | null;
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
     * Change Server Protection
     * Changes the protection configuration of the Server.
     * @param id ID of the Server.
     * @param requestBody
     * @returns any The `action` key in the reply contains an Action object with this structure
     * @throws ApiError
     */
    static postServersActionsChangeProtection(id: number, requestBody?: {
        /**
         * If true, prevents the Server from being deleted (currently delete and rebuild attribute needs to have the same value)
         */
        delete?: boolean;
        /**
         * If true, prevents the Server from being rebuilt (currently delete and rebuild attribute needs to have the same value)
         */
        rebuild?: boolean;
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
     * Change the Type of a Server
     * Changes the type (Cores, RAM and disk sizes) of a Server.
     *
     * Server must be powered off for this command to succeed.
     *
     * This copies the content of its disk, and starts it again.
     *
     * You can only migrate to Server types with the same `storage_type` and equal or bigger disks. Shrinking disks is not possible as it might destroy data.
     *
     * If the disk gets upgraded, the Server type can not be downgraded any more. If you plan to downgrade the Server type, set `upgrade_disk` to `false`.
     *
     * #### Call specific error codes
     *
     * | Code                          | Description                                                          |
     * |-------------------------------|----------------------------------------------------------------------|
     * | `invalid_server_type`         | The server type does not fit for the given server or is deprecated   |
     * | `server_not_stopped`          | The action requires a stopped server                                 |
     *
     * @param id ID of the Server.
     * @param requestBody
     * @returns any The `action` key in the reply contains an Action object with this structure
     * @throws ApiError
     */
    static postServersActionsChangeType(id: number, requestBody?: {
        /**
         * If false, do not upgrade the disk (this allows downgrading the Server type later)
         */
        upgrade_disk: boolean;
        /**
         * ID or name of Server type the Server should migrate to
         */
        server_type: string;
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
     * Create Image from a Server
     * Creates an Image (snapshot) from a Server by copying the contents of its disks. This creates a snapshot of the current state of the disk and copies it into an Image. If the Server is currently running you must make sure that its disk content is consistent. Otherwise, the created Image may not be readable.
     *
     * To make sure disk content is consistent, we recommend to shut down the Server prior to creating an Image.
     *
     * You can either create a `backup` Image that is bound to the Server and therefore will be deleted when the Server is deleted, or you can create a `snapshot` Image which is completely independent of the Server it was created from and will survive Server deletion. Backup Images are only available when the backup option is enabled for the Server. Snapshot Images are billed on a per GB basis.
     *
     * @param id ID of the Server.
     * @param requestBody
     * @returns any The `image` key in the reply contains an the created Image, which is an object with this structure
     *
     * The `action` key in the reply contains an Action object with this structure
     *
     * @throws ApiError
     */
    static postServersActionsCreateImage(id: number, requestBody?: {
        /**
         * Description of the Image, will be auto-generated if not set
         */
        description?: string;
        /**
         * Type of Image to create.
         */
        type?: 'snapshot' | 'backup';
        /**
         * User-defined labels (`key/value` pairs) for the Resource.
         * For more information, see "[Labels](#labels)".
         *
         */
        labels?: Record<string, string>;
    }): CancelablePromise<{
        image?: {
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
        };
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
    }>;
    /**
     * Detach a Server from a Network
     * Detaches a Server from a network. The interface for this network will vanish.
     * @param id ID of the Server.
     * @param requestBody
     * @returns any The `action` key in the reply contains an Action object with this structure
     * @throws ApiError
     */
    static postServersActionsDetachFromNetwork(id: number, requestBody?: {
        /**
         * ID of an existing network to detach the Server from
         */
        network: number;
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
     * Detach an ISO from a Server
     * Detaches an ISO from a Server. In case no ISO Image is attached to the Server, the status of the returned Action is immediately set to `success`
     * @param id ID of the Server.
     * @returns any The `action` key in the reply contains an Action object with this structure
     * @throws ApiError
     */
    static postServersActionsDetachIso(id: number): CancelablePromise<{
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
     * Disable Backups for a Server
     * Disables the automatic backup option and deletes all existing Backups for a Server. No more additional charges for backups will be made.
     *
     * Caution: This immediately removes all existing backups for the Server!
     *
     * @param id ID of the Server.
     * @returns any The `action` key in the reply contains an Action object with this structure
     * @throws ApiError
     */
    static postServersActionsDisableBackup(id: number): CancelablePromise<{
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
     * Disable Rescue Mode for a Server
     * Disables the Hetzner Rescue System for a Server. This makes a Server start from its disks on next reboot.
     *
     * Rescue Mode is automatically disabled when you first boot into it or if you do not use it for 60 minutes.
     *
     * Disabling rescue mode will not reboot your Server — you will have to do this yourself.
     *
     * @param id ID of the Server.
     * @returns any The `action` key in the reply contains an Action object with this structure
     * @throws ApiError
     */
    static postServersActionsDisableRescue(id: number): CancelablePromise<{
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
     * Enable and Configure Backups for a Server
     * Enables and configures the automatic daily backup option for the Server. Enabling automatic backups will increase the price of the Server by 20%. In return, you will get seven slots where Images of type backup can be stored.
     *
     * Backups are automatically created daily.
     *
     * @param id ID of the Server.
     * @returns any The `action` key in the reply contains an Action object with this structure
     * @throws ApiError
     */
    static postServersActionsEnableBackup(id: number): CancelablePromise<{
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
     * Enable Rescue Mode for a Server
     * Enable the Hetzner Rescue System for this Server. The next time a Server with enabled rescue mode boots it will start a special minimal Linux distribution designed for repair and reinstall.
     *
     * In case a Server cannot boot on its own you can use this to access a Server’s disks.
     *
     * Rescue Mode is automatically disabled when you first boot into it or if you do not use it for 60 minutes.
     *
     * Enabling rescue mode will not [reboot](https://docs.hetzner.cloud/#server-actions-soft-reboot-a-server) your Server — you will have to do this yourself.
     *
     * @param id ID of the Server.
     * @param requestBody
     * @returns any The `root_password` key in the reply contains the root password that can be used to access the booted rescue system.
     *
     * The `action` key in the reply contains an Action object with this structure
     *
     * @throws ApiError
     */
    static postServersActionsEnableRescue(id: number, requestBody?: {
        /**
         * Type of rescue system to boot.
         */
        type?: 'linux64';
        /**
         * Array of SSH key IDs which should be injected into the rescue system.
         */
        ssh_keys?: Array<number>;
    }): CancelablePromise<{
        /**
         * Password that will be set for this Server once the Action succeeds
         */
        root_password?: string;
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
    }>;
    /**
     * Power off a Server
     * Cuts power to the Server. This forcefully stops it without giving the Server operating system time to gracefully stop. May lead to data loss, equivalent to pulling the power cord. Power off should only be used when shutdown does not work.
     * @param id ID of the Server.
     * @returns any The `action` key in the reply contains an Action object with this structure
     * @throws ApiError
     */
    static postServersActionsPoweroff(id: number): CancelablePromise<{
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
     * Power on a Server
     * Starts a Server by turning its power on.
     * @param id ID of the Server.
     * @returns any The `action` key in the reply contains an Action object with this structure
     * @throws ApiError
     */
    static postServersActionsPoweron(id: number): CancelablePromise<{
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
     * Soft-reboot a Server
     * Reboots a Server gracefully by sending an ACPI request. The Server operating system must support ACPI and react to the request, otherwise the Server will not reboot.
     * @param id ID of the Server.
     * @returns any The `action` key in the reply contains an Action object with this structure
     * @throws ApiError
     */
    static postServersActionsReboot(id: number): CancelablePromise<{
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
     * Rebuild a Server from an Image
     * Rebuilds a Server overwriting its disk with the content of an Image, thereby **destroying all data** on the target Server
     *
     * The Image can either be one you have created earlier (`backup` or `snapshot` Image) or it can be a completely fresh `system` Image provided by us. You can get a list of all available Images with `GET /images`.
     *
     * Your Server will automatically be powered off before the rebuild command executes.
     *
     * @param id ID of the Server.
     * @param requestBody To select which Image to rebuild from you can either pass an ID or a name as the `image` argument. Passing a name only works for `system` Images since the other Image types do not have a name set.
     * @returns any The `action` key in the reply contains an Action object with this structure
     * @throws ApiError
     */
    static postServersActionsRebuild(id: number, requestBody?: {
        /**
         * ID or name of Image to rebuilt from.
         */
        image: string;
    }): CancelablePromise<{
        /**
         * New root password when not using SSH keys
         */
        root_password?: string | null;
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
    }>;
    /**
     * Remove from Placement Group
     * Removes a Server from a Placement Group.
     *
     * @param id ID of the Server.
     * @returns any The `action` key in the reply contains an Action object with this structure
     * @throws ApiError
     */
    static postServersActionsRemoveFromPlacementGroup(id: number): CancelablePromise<{
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
     * Request Console for a Server
     * Requests credentials for remote access via VNC over websocket to keyboard, monitor, and mouse for a Server. The provided URL is valid for 1 minute, after this period a new url needs to be created to connect to the Server. How long the connection is open after the initial connect is not subject to this timeout.
     * @param id ID of the Server.
     * @returns any The `action` key in the reply contains an Action object with this structure
     * @throws ApiError
     */
    static postServersActionsRequestConsole(id: number): CancelablePromise<{
        /**
         * URL of websocket proxy to use; this includes a token which is valid for a limited time only
         */
        wss_url: string;
        /**
         * VNC password to use for this connection (this password only works in combination with a wss_url with valid token)
         */
        password: string;
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
     * Reset a Server
     * Cuts power to a Server and starts it again. This forcefully stops it without giving the Server operating system time to gracefully stop. This may lead to data loss, it’s equivalent to pulling the power cord and plugging it in again. Reset should only be used when reboot does not work.
     * @param id ID of the Server.
     * @returns any The `action` key in the reply contains an Action object with this structure
     * @throws ApiError
     */
    static postServersActionsReset(id: number): CancelablePromise<{
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
     * Reset root Password of a Server
     * Resets the root password. Only works for Linux systems that are running the qemu guest agent. Server must be powered on (status `running`) in order for this operation to succeed.
     *
     * This will generate a new password for this Server and return it.
     *
     * If this does not succeed you can use the rescue system to netboot the Server and manually change your Server password by hand.
     *
     * @param id ID of the Server.
     * @returns any The `root_password` key in the reply contains the new root password that will be active if the Action succeeds.
     *
     * The `action` key in the reply contains an Action object with this structure:
     *
     * @throws ApiError
     */
    static postServersActionsResetPassword(id: number): CancelablePromise<{
        /**
         * Password that will be set for this Server once the Action succeeds
         */
        root_password?: string;
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
    }>;
    /**
     * Shutdown a Server
     * Shuts down a Server gracefully by sending an ACPI shutdown request. The Server operating system must support ACPI
     * and react to the request, otherwise the Server will not shut down. Please note that the `action` status in this case
     * only reflects whether the action was sent to the server. It does not mean that the server actually shut down
     * successfully. If you need to ensure that the server is off, use the `poweroff` action
     *
     * @param id ID of the Server.
     * @returns any The `action` key in the reply contains an Action object with this structure
     * @throws ApiError
     */
    static postServersActionsShutdown(id: number): CancelablePromise<{
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
     * Get an Action for a Server
     * Returns a specific Action object for a Server.
     * @param id ID of the Server.
     * @param actionId ID of the Action.
     * @returns any The `action` key in the reply has this structure
     * @throws ApiError
     */
    static getServersActions3(id: number, actionId: number): CancelablePromise<{
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
