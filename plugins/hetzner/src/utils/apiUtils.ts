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
export const fetchResources = async (
  baseUrl: string | undefined,
  identityApi: IdentityApi
): Promise<Resource[]> => {
  if (!baseUrl) {
    throw new Error('Base URL is not defined');
  }

  const apiUrl = `${baseUrl}/api/hetzner/resources`;

  const { token } = await identityApi.getCredentials();

  const headers = {
    Authorization: `Bearer ${token}`,
    'Content-Type': 'application/json',
  };

  const response = await fetch(apiUrl, { headers });
  if (!response.ok) {
    throw new Error(`HTTP error - status: ${response.status}`);
  }

  const data = await response.json();
  return data || [];
};

export const fetchHetznerOverview = async (
  identityApi: IdentityApi,
  apiUrl: string
): Promise<{
  totalServers: number;
  totalVolumes: number;
  totalPrimaryIps: number;
}> => {
  const { token } = await identityApi.getCredentials();

  const headers = {
    Authorization: `Bearer ${token}`,
    'Content-Type': 'application/json',
  };

  const response = await fetch(apiUrl, { headers });
  if (!response.ok) {
    throw new Error(`HTTP error - status: ${response.status}`);
  }

  return response.json();
};
