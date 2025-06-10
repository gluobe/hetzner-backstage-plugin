import type { CancelablePromise } from '../core/CancelablePromise';
export declare class CertificatesService {
    /**
     * Get all Certificates
     * Returns all Certificate objects.
     * @param sort Sort resources by field and direction. Can be used multiple times. For more
     * information, see "[Sorting](#sorting)".
     *
     * @param name Filter resources by their name. The response will only contain the resources
     * matching exactly the specified name.
     *
     * @param labelSelector Filter resources by labels. The response will only contain resources matching the
     * label selector. For more information, see "[Label Selector](#label-selector)".
     *
     * @param type Filter resources by type. Can be used multiple times. The response will only
     * contain the resources with the specified type.
     *
     * @param page Page number to return. For more information, see "[Pagination](#pagination)".
     * @param perPage Maximum number of entries returned per page. For more information, see "[Pagination](#pagination)".
     * @returns any The `certificates` key contains an array of Certificate objects
     * @throws ApiError
     */
    static getCertificates(sort?: 'id' | 'id:asc' | 'id:desc' | 'name' | 'name:asc' | 'name:desc' | 'created' | 'created:asc' | 'created:desc', name?: string, labelSelector?: string, type?: 'uploaded' | 'managed', page?: number, perPage?: number): CancelablePromise<{
        certificates: Array<{
            /**
             * ID of the Certificate.
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
             * Type of the Certificate.
             */
            type?: 'uploaded' | 'managed';
            /**
             * Certificate and chain in PEM format, in order so that each record directly certifies the one preceding
             */
            certificate: string | null;
            /**
             * Point in time when the Resource was created (in ISO-8601 format).
             */
            created: string;
            /**
             * Point in time when the Certificate becomes valid (in ISO-8601 format)
             */
            not_valid_before: string | null;
            /**
             * Point in time when the Certificate stops being valid (in ISO-8601 format).
             *
             */
            not_valid_after: string | null;
            /**
             * Domains and subdomains covered by the Certificate
             */
            domain_names: Array<string>;
            /**
             * SHA256 fingerprint of the Certificate
             */
            fingerprint: string | null;
            /**
             * Current status of a type `managed` Certificate, always *null* for type `uploaded` Certificates
             */
            status?: {
                /**
                 * Status of the issuance process of the Certificate
                 */
                issuance?: 'pending' | 'completed' | 'failed';
                /**
                 * Status of the renewal process of the Certificate.
                 */
                renewal?: 'scheduled' | 'pending' | 'failed' | 'unavailable';
                /**
                 * If issuance or renewal reports `failed`, this property contains information about what happened
                 */
                error?: {
                    code?: string;
                    message?: string;
                } | null;
            } | null;
            /**
             * Resources currently using the Certificate
             */
            used_by: Array<{
                /**
                 * ID of resource referenced
                 */
                id: number;
                /**
                 * Type of resource referenced
                 */
                type: string;
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
    }>;
    /**
     * Create a Certificate
     * Creates a new Certificate.
     *
     * The default type **uploaded** allows for uploading your existing `certificate` and `private_key` in PEM format. You have to monitor its expiration date and handle renewal yourself.
     *
     * In contrast, type **managed** requests a new Certificate from *Let's Encrypt* for the specified `domain_names`. Only domains managed by *Hetzner DNS* are supported. We handle renewal and timely alert the project owner via email if problems occur.
     *
     * For type `managed` Certificates the `action` key of the response contains the Action that allows for tracking the issuance process. For type `uploaded` Certificates the `action` is always null.
     *
     * @param requestBody
     * @returns any The `certificate` key contains the Certificate that was just created. For type `managed` Certificates the `action` key contains the Action that allows for tracking the issuance process. For type `uploaded` Certificates the `action` is always null.
     * @throws ApiError
     */
    static postCertificates(requestBody?: {
        /**
         * Name of the Certificate
         */
        name: string;
        /**
         * User-defined labels (`key/value` pairs) for the Resource.
         * For more information, see "[Labels](#labels)".
         *
         */
        labels?: Record<string, string>;
        /**
         * Choose between uploading a Certificate in PEM format or requesting a managed *Let's Encrypt* Certificate.
         */
        type?: 'uploaded' | 'managed';
        /**
         * Certificate and chain in PEM format, in order so that each record directly certifies the one preceding. Required for type `uploaded` Certificates.
         */
        certificate?: string;
        /**
         * Certificate key in PEM format. Required for type `uploaded` Certificates.
         */
        private_key?: string;
        /**
         * Domains and subdomains that should be contained in the Certificate issued by *Let's Encrypt*. Required for type `managed` Certificates.
         */
        domain_names?: Array<string>;
    }): CancelablePromise<{
        certificate: {
            /**
             * ID of the Certificate.
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
             * Type of the Certificate.
             */
            type?: 'uploaded' | 'managed';
            /**
             * Certificate and chain in PEM format, in order so that each record directly certifies the one preceding
             */
            certificate: string | null;
            /**
             * Point in time when the Resource was created (in ISO-8601 format).
             */
            created: string;
            /**
             * Point in time when the Certificate becomes valid (in ISO-8601 format)
             */
            not_valid_before: string | null;
            /**
             * Point in time when the Certificate stops being valid (in ISO-8601 format).
             *
             */
            not_valid_after: string | null;
            /**
             * Domains and subdomains covered by the Certificate
             */
            domain_names: Array<string>;
            /**
             * SHA256 fingerprint of the Certificate
             */
            fingerprint: string | null;
            /**
             * Current status of a type `managed` Certificate, always *null* for type `uploaded` Certificates
             */
            status?: {
                /**
                 * Status of the issuance process of the Certificate
                 */
                issuance?: 'pending' | 'completed' | 'failed';
                /**
                 * Status of the renewal process of the Certificate.
                 */
                renewal?: 'scheduled' | 'pending' | 'failed' | 'unavailable';
                /**
                 * If issuance or renewal reports `failed`, this property contains information about what happened
                 */
                error?: {
                    code?: string;
                    message?: string;
                } | null;
            } | null;
            /**
             * Resources currently using the Certificate
             */
            used_by: Array<{
                /**
                 * ID of resource referenced
                 */
                id: number;
                /**
                 * Type of resource referenced
                 */
                type: string;
            }>;
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
        } | null;
    }>;
    /**
     * Get a Certificate
     * Gets a specific Certificate object.
     * @param id ID of the Certificate.
     * @returns any The `certificate` key contains a Certificate object
     * @throws ApiError
     */
    static getCertificates1(id: number): CancelablePromise<{
        certificate: {
            /**
             * ID of the Certificate.
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
             * Type of the Certificate.
             */
            type?: 'uploaded' | 'managed';
            /**
             * Certificate and chain in PEM format, in order so that each record directly certifies the one preceding
             */
            certificate: string | null;
            /**
             * Point in time when the Resource was created (in ISO-8601 format).
             */
            created: string;
            /**
             * Point in time when the Certificate becomes valid (in ISO-8601 format)
             */
            not_valid_before: string | null;
            /**
             * Point in time when the Certificate stops being valid (in ISO-8601 format).
             *
             */
            not_valid_after: string | null;
            /**
             * Domains and subdomains covered by the Certificate
             */
            domain_names: Array<string>;
            /**
             * SHA256 fingerprint of the Certificate
             */
            fingerprint: string | null;
            /**
             * Current status of a type `managed` Certificate, always *null* for type `uploaded` Certificates
             */
            status?: {
                /**
                 * Status of the issuance process of the Certificate
                 */
                issuance?: 'pending' | 'completed' | 'failed';
                /**
                 * Status of the renewal process of the Certificate.
                 */
                renewal?: 'scheduled' | 'pending' | 'failed' | 'unavailable';
                /**
                 * If issuance or renewal reports `failed`, this property contains information about what happened
                 */
                error?: {
                    code?: string;
                    message?: string;
                } | null;
            } | null;
            /**
             * Resources currently using the Certificate
             */
            used_by: Array<{
                /**
                 * ID of resource referenced
                 */
                id: number;
                /**
                 * Type of resource referenced
                 */
                type: string;
            }>;
        };
    }>;
    /**
     * Update a Certificate
     * Updates the Certificate properties.
     *
     * Note: if the Certificate object changes during the request, the response will be a “conflict” error.
     *
     * @param id ID of the Certificate.
     * @param requestBody
     * @returns any The `certificate` key contains the Certificate that was just updated
     * @throws ApiError
     */
    static putCertificates(id: number, requestBody?: {
        /**
         * New Certificate name
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
        certificate: {
            /**
             * ID of the Certificate.
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
             * Type of the Certificate.
             */
            type?: 'uploaded' | 'managed';
            /**
             * Certificate and chain in PEM format, in order so that each record directly certifies the one preceding
             */
            certificate: string | null;
            /**
             * Point in time when the Resource was created (in ISO-8601 format).
             */
            created: string;
            /**
             * Point in time when the Certificate becomes valid (in ISO-8601 format)
             */
            not_valid_before: string | null;
            /**
             * Point in time when the Certificate stops being valid (in ISO-8601 format).
             *
             */
            not_valid_after: string | null;
            /**
             * Domains and subdomains covered by the Certificate
             */
            domain_names: Array<string>;
            /**
             * SHA256 fingerprint of the Certificate
             */
            fingerprint: string | null;
            /**
             * Current status of a type `managed` Certificate, always *null* for type `uploaded` Certificates
             */
            status?: {
                /**
                 * Status of the issuance process of the Certificate
                 */
                issuance?: 'pending' | 'completed' | 'failed';
                /**
                 * Status of the renewal process of the Certificate.
                 */
                renewal?: 'scheduled' | 'pending' | 'failed' | 'unavailable';
                /**
                 * If issuance or renewal reports `failed`, this property contains information about what happened
                 */
                error?: {
                    code?: string;
                    message?: string;
                } | null;
            } | null;
            /**
             * Resources currently using the Certificate
             */
            used_by: Array<{
                /**
                 * ID of resource referenced
                 */
                id: number;
                /**
                 * Type of resource referenced
                 */
                type: string;
            }>;
        };
    }>;
    /**
     * Delete a Certificate
     * Deletes a Certificate.
     * @param id ID of the Certificate.
     * @returns void
     * @throws ApiError
     */
    static deleteCertificates(id: number): CancelablePromise<void>;
}
