import { useEffect, useState, useCallback } from 'react';
import { Skeleton, Typography } from '@mui/material';
import { InfoCard, Link, Table, TableColumn } from '@backstage/core-components';
import {
  identityApiRef,
  useApi,
  configApiRef,
} from '@backstage/core-plugin-api';
import { fetchResources, Resource } from '../../../utils/apiUtils';

export const ResourceComponent = () => {
  const identityApi = useApi(identityApiRef);
  const configApi = useApi(configApiRef);

  const baseUrl = configApi.getOptionalString('backend.baseUrl');
  const [filteredResources, setFilteredResources] = useState<Resource[]>([]);
  const [loading, setLoading] = useState(true);

  const loadResources = useCallback(async () => {
    try {
      const resources = await fetchResources(baseUrl, identityApi);
      setFilteredResources(resources);
    } finally {
      setLoading(false);
    }
  }, [baseUrl, identityApi]);

  useEffect(() => {
    loadResources();
  }, [loadResources]);

  const columns: TableColumn<Resource>[] = [
    {
      title: 'ID',
      field: 'id',
      render: row => (
        <Link to={`/catalog/default/resource/${row.name}`}>{row.id}</Link>
      ),
    },
    {
      title: 'Name',
      field: 'name',
      render: row => (
        <Link to={`/catalog/default/resource/${row.name}`}>{row.name}</Link>
      ),
    },
    {
      title: 'Type',
      field: 'resource_type',
    },
  ];

  if (loading) {
    return (
      <InfoCard title="Resources">
        <Skeleton variant="rectangular" height={200} />
      </InfoCard>
    );
  }

  if (!loading && filteredResources.length === 0) {
    return (
      <InfoCard title="Resources">
        <Typography sx={{ textAlign: 'center', padding: 2 }}>
          No resources found.
        </Typography>
      </InfoCard>
    );
  }

  return (
    <InfoCard title={`Resources (${filteredResources.length})`}>
      <Table
        options={{ paging: true, pageSize: 10, search: false, sorting: true }}
        columns={columns}
        data={filteredResources}
        filters={[{ column: 'Type', type: 'multiple-select' }]}
        isLoading={loading}
      />
    </InfoCard>
  );
};
