import express, { ErrorRequestHandler } from 'express';
import request from 'supertest';

import { createRouter } from './router';
import { HetznerService } from './services/HetznerService/types';

const mockOverview = {
  totalServers: 5,
  totalVolumes: 8,
  totalPrimaryIps: 1,
};

const mockServers = [
  {
    id: '1',
    name: 'server1',
    status: 'running',
    created: '2025-01-01T00:00:00Z',
    public_net: {
      ipv4: {
        ip: '192.168.1.1',
        dns_ptr: 'server1.example.com',
      },
    },
    datacenter: {
      name: 'fsn1-dc14',
      description: 'Falkenstein Datacenter 14',
      location: {
        city: 'Falkenstein',
        country: 'Germany',
      },
    },
    server_type: {
      name: 'cx11',
      description: 'Cloud Server CX11',
      cores: 1,
      memory: 2,
      disk: 20,
    },
    image: {
      name: 'ubuntu-20.04',
      description: 'Ubuntu 20.04 LTS',
      os_flavor: 'ubuntu',
      os_version: '20.04',
    },
    outgoing_traffic: 1000,
    ingoing_traffic: 500,
    included_traffic: 2000,
  },
  {
    id: '2',
    name: 'server2',
    status: 'stopped',
    created: '2025-01-02T00:00:00Z',
    public_net: {
      ipv4: {
        ip: '192.168.1.2',
        dns_ptr: 'server2.example.com',
      },
    },
    datacenter: {
      name: 'nbg1-dc3',
      description: 'Nuremberg Datacenter 3',
      location: {
        city: 'Nuremberg',
        country: 'Germany',
      },
    },
    server_type: {
      name: 'cx21',
      description: 'Cloud Server CX21',
      cores: 2,
      memory: 4,
      disk: 40,
    },
    image: {
      name: 'debian-11',
      description: 'Debian 11',
      os_flavor: 'debian',
      os_version: '11',
    },
    outgoing_traffic: 2000,
    ingoing_traffic: 1000,
    included_traffic: 3000,
  },
];

const mockVolumes = [
  {
    id: '1',
    name: 'volume1',
    size: 100,
    status: 'available' as const,
    created: '2025-01-01T00:00:00Z',
    server: null,
  },
];

const mockPrimaryIps = [
  {
    id: '1',
    name: 'primary-ip1',
    ip: '192.168.1.1',
    type: 'ipv4',
    created: '2025-01-01T00:00:00Z',
  },
];

const mockErrorHandler: ErrorRequestHandler = (err, _req, res, _next) => {
  res.status(500).json({ error: err.message });
};

describe('createRouter', () => {
  let app: express.Express;

  let hetznerService: jest.Mocked<HetznerService>;
  let logger: jest.Mocked<{
    info: jest.Mock;
    error: jest.Mock;
    warn: jest.Mock;
    debug: jest.Mock;
    child: jest.Mock;
  }>;

  beforeEach(async () => {
    hetznerService = {
      getOverview: jest.fn(),
      getServers: jest.fn(),
      getVolumes: jest.fn(),
      getPrimaryIps: jest.fn(),
    };

    logger = {
      info: jest.fn(),
      error: jest.fn(),
      warn: jest.fn(),
      debug: jest.fn(),
      child: jest.fn().mockReturnValue({} as any),
    };

    const router = await createRouter({
      logger,
      hetznerService,
    });

    app = express();
    app.use(router);
    app.use(mockErrorHandler);
  });

  beforeEach(() => {
    jest.resetAllMocks();
  });

  describe('GET /health', () => {
    it('returns ok', async () => {
      const response = await request(app).get('/health');

      expect(response.status).toEqual(200);
      expect(response.body).toEqual({ status: 'ok' });
      expect(logger.info).toHaveBeenCalledWith('Health check passed');
    });
  });

  describe('GET /overview', () => {
    it('returns an overview of servers, volumes, and primary IPs', async () => {
      hetznerService.getOverview.mockResolvedValue(mockOverview);

      const response = await request(app).get('/overview');

      expect(response.status).toBe(200);
      expect(response.body).toEqual(mockOverview);
      expect(hetznerService.getOverview).toHaveBeenCalledTimes(1);
    });

    it('handles errors when fetching the overview', async () => {
      hetznerService.getOverview.mockRejectedValue(new Error('Test error'));

      const response = await request(app).get('/overview');

      expect(response.status).toBe(500);
      expect(response.body).toEqual({ error: 'Internal Server Error' });
      expect(logger.error).toHaveBeenCalledWith(
        'Error fetching overview: Test error',
      );
    });
  });

  describe('GET /servers', () => {
    it('returns a list of servers', async () => {
      hetznerService.getServers.mockResolvedValue(mockServers);

      const response = await request(app).get('/servers');

      expect(response.status).toBe(200);
      expect(response.body).toEqual(mockServers);
      expect(hetznerService.getServers).toHaveBeenCalledTimes(1);
    });

    it('handles errors when fetching servers', async () => {
      hetznerService.getServers.mockRejectedValue(new Error('Test error'));

      const response = await request(app).get('/servers');

      expect(response.status).toBe(500);
      expect(response.body).toEqual({ error: 'Internal Server Error' });
      expect(logger.error).toHaveBeenCalledWith(
        'Error fetching servers: Test error',
      );
    });
  });

  describe('GET /volumes', () => {
    it('returns a list of volumes', async () => {
      hetznerService.getVolumes.mockResolvedValue(mockVolumes);

      const response = await request(app).get('/volumes');

      expect(response.status).toBe(200);
      expect(response.body).toEqual(mockVolumes);
      expect(hetznerService.getVolumes).toHaveBeenCalledTimes(1);
    });

    it('handles errors when fetching volumes', async () => {
      hetznerService.getVolumes.mockRejectedValue(new Error('Test error'));

      const response = await request(app).get('/volumes');

      expect(response.status).toBe(500);
      expect(response.body).toEqual({ error: 'Internal Server Error' });
      expect(logger.error).toHaveBeenCalledWith(
        'Error fetching volumes: Test error',
      );
    });
  });

  describe('GET /primary_ips', () => {
    it('returns a list of primary IPs', async () => {
      hetznerService.getPrimaryIps.mockResolvedValue(mockPrimaryIps);

      const response = await request(app).get('/primary_ips');

      expect(response.status).toBe(200);
      expect(response.body).toEqual(mockPrimaryIps);
      expect(hetznerService.getPrimaryIps).toHaveBeenCalledTimes(1);
    });

    it('handles errors when fetching primary IPs', async () => {
      hetznerService.getPrimaryIps.mockRejectedValue(new Error('Test error'));

      const response = await request(app).get('/primary_ips');

      expect(response.status).toBe(500);
      expect(response.body).toEqual({ error: 'Internal Server Error' });
      expect(logger.error).toHaveBeenCalledWith(
        'Error fetching primary IPs: Test error',
      );
    });
  });

  describe('GET /openapi.yaml', () => {
    it('serves the OpenAPI spec file', async () => {
      const response = await request(app).get('/openapi.yaml');

      expect(response.status).toBe(200);
      expect(response.header['content-type']).toBe('application/octet-stream');
    });
  });
});
