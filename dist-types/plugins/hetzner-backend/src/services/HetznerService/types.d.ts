export interface HetznerService {
    getOverview(): Promise<{
        totalServers: number;
        totalVolumes: number;
        totalPrimaryIps: number;
    }>;
    getServers(): Promise<{
        id: string;
        name: string;
        status: string;
        created: string;
        public_net: {
            ipv4: {
                ip: string | null;
                dns_ptr: string | null;
            };
        };
        datacenter: {
            name: string;
            description: string;
            location: {
                city: string;
                country: string;
            };
        };
        server_type: {
            name: string;
            description: string;
            cores: number;
            memory: number;
            disk: number;
        };
        image: {
            name: string | null;
            description: string | null;
            os_flavor: string | null;
            os_version: string | null;
        };
        outgoing_traffic: number | null;
        ingoing_traffic: number | null;
        included_traffic: number | null;
    }[]>;
    getVolumes(): Promise<{
        id: string;
        name: string;
        size: number;
        status: 'available' | 'creating';
        created: string;
        server: number | null;
    }[]>;
    getPrimaryIps(): Promise<{
        id: string;
        name: string;
        ip: string;
        type: string;
        created: string;
    }[]>;
}
