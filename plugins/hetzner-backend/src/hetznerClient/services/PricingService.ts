/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class PricingService {
    /**
     * Get all prices
     * Returns prices for all resources available on the platform. VAT and currency of the Project owner are used for calculations.
     *
     * Both net and gross prices are included in the response.
     *
     * @returns any The `pricing` key in the reply contains an pricing object with this structure
     * @throws ApiError
     */
    public static getPricing(): CancelablePromise<{
        pricing: {
            /**
             * Currency the returned prices are expressed in, coded according to [ISO 4217](https://wikipedia.org/wiki/ISO_4217).
             */
            currency: string;
            /**
             * VAT rate used for calculating prices with VAT.
             */
            vat_rate: string;
            /**
             * Price of [Primary IPs](#primary-ips) per type and per [Location](#locations).
             */
            primary_ips: Array<{
                /**
                 * Type of [Primary IP](#primary-ips) the price is for.
                 */
                type: 'ipv4' | 'ipv6';
                /**
                 * Price of the [Primary IP](#primary-ips) type per [Location](#locations).
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
                }>;
            }>;
            /**
             * Price of [Floating IPs](#floating-ips) per type and per [Location](#locations).
             */
            floating_ips: Array<{
                /**
                 * Type of [Floating IP](#floating-ips) the price is for.
                 */
                type: 'ipv4' | 'ipv6';
                /**
                 * Price of the [Floating IP](#floating-ips) type per [Location](#locations).
                 */
                prices: Array<{
                    /**
                     * Name of the [Location](#locations) the price is for.
                     */
                    location: string;
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
                }>;
            }>;
            /**
             * Price of [Images](#images).
             */
            image: {
                /**
                 * Price of [Images](#images) per GB/month.
                 */
                price_per_gb_month: {
                    /**
                     * Price without VAT.
                     */
                    net: string;
                    /**
                     * Price with VAT added.
                     */
                    gross: string;
                };
            };
            /**
             * Price of [Volumes](#volumes).
             */
            volume: {
                /**
                 * Price of [Volumes](#volumes) per GB/month.
                 */
                price_per_gb_month: {
                    /**
                     * Price without VAT.
                     */
                    net: string;
                    /**
                     * Price with VAT added.
                     */
                    gross: string;
                };
            };
            /**
             * Price of [Server](#servers) backups.
             */
            server_backup: {
                /**
                 * Price increase of the [Server](#servers) base price in percentage.
                 */
                percentage: string;
            };
            /**
             * Price of Server per [type](#server-types) and per [Location](#locations).
             */
            server_types: Array<{
                /**
                 * ID of the [Server Types](#server-types) the price is for.
                 */
                id: number;
                /**
                 * Name of the [Server Types](#server-types) the price is for.
                 */
                name: string;
                /**
                 * Price of the [Server Types](#server-types) per [Location](#locations).
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
            }>;
            /**
             * Price of Load Balancer per [type](#load-balancer-types) and per [Location](#locations).
             */
            load_balancer_types: Array<{
                /**
                 * ID of the [Load Balancer Types](#load-balancer-types) the price is for.
                 */
                id: number;
                /**
                 * Name of the [Load Balancer Types](#load-balancer-types) the price is for.
                 */
                name: string;
                /**
                 * Price of the [Load Balancer Types](#load-balancer-types) per [Location](#locations).
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
            }>;
            /**
             * Price of [Floating IPs](#floating-ips).
             *
             * **Deprecated**: This field is deprecated, please refer to the `floating_ips` field instead.
             *
             * See the [Changelog](https://docs.hetzner.cloud/changelog#2024-08-29-field-floating_ip-in-pricing-response-is-now-deprecated) for more details.
             *
             * @deprecated
             */
            floating_ip: {
                /**
                 * Price of one [Floating IP](#floating-ips) per month.
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
            };
        };
    }> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/pricing',
        });
    }
}
