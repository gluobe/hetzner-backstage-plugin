import { IdentityApi } from '@backstage/core-plugin-api';
export interface Resource {
    id: string;
    name: string;
    owner?: string;
    type?: string;
}
/**
 * Fetch resources from the backend API.
 * @param baseUrl The base URL of the backend.
 * @param identityApi The identity API to get the user's credentials.
 * @returns A promise that resolves to an array of resources.
 */
export declare const fetchResources: (baseUrl: string | undefined, identityApi: IdentityApi) => Promise<Resource[]>;
export declare const fetchHetznerOverview: (identityApi: IdentityApi, apiUrl: string) => Promise<{
    totalServers: number;
    totalVolumes: number;
    totalPrimaryIps: number;
}>;
