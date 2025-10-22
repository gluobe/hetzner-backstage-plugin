# Backstage Hetzner Backend Plugin

This plugin provides integration between Backstage and Hetzner Cloud. It allows you to view Hetzner Cloud resources directly within Backstage.

## Table of Contents

- [Backstage Hetzner Backend Plugin](#backstage-hetzner-backend-plugin)
  - [Table of Contents](#table-of-contents)
  - [Features](#features)
  - [API Specification](#api-specification)
  - [Installation](#installation)
    - [Backend Plugin](#backend-plugin)
    - [Frontend Plugin](#frontend-plugin)
    - [Catalog Backend Module Plugin](#catalog-backend-module-plugin)
  - [Configuration](#configuration)
  - [Development](#development)
    - [Getting Started](#getting-started)
  - [OpenAPI Spec Import and Client Generation](#openapi-spec-import-and-client-generation)
  - [Contributing](#contributing)
  - [License](#license)
    - [Attribution](#attribution)

## Features

This plugin provides the following key functionalities:

- **Data Synchronization**: Fetches and synchronizes Hetzner Cloud resources, such as servers, volumes, and primary IPs, into the Backstage catalog.
- **API Integration**: Acts as a bridge between the Hetzner Cloud API and Backstage, enabling seamless data flow.
- **Support for Catalog Module**: Includes a backend catalog module for importing Hetzner VMs into the Backstage catalog.

## API Specification

- **Hetzner Cloud API Spec:**  
  This plugin imports the official Hetzner Cloud OpenAPI specification to generate its API client.  
  You can find the Hetzner Cloud OpenAPI spec here: [https://docs.hetzner.cloud/spec.json](https://docs.hetzner.cloud/spec.json)

- **Backend Plugin API Spec:**  
  The backend plugin itself is also documented with an OpenAPI specification, available at [`./openapi.yaml`](./openapi.yaml).

## Installation

### Backend Plugin

```bash
# From the Backstage root directory
yarn --cwd packages/backend add @gluo-nv/backstage-plugin-hetzner-backend
```

### Frontend Plugin

This backend plugin requires the corresponding frontend plugin to be installed. Please follow the instructions in the [frontend plugin directory](../hetzner/README.md).

### Catalog Backend Module Plugin

This frontend plugin requires the corresponding catalog backend module plugin to be installed. Please follow the instructions in the [catalog backend module plugin directory](../catalog-backend-module-hetzner/README.md).

## Configuration

Add the following to the `app-config.yaml` to configure the backend plugin:

```yaml
backend:
  hetzner:
    token: ${HCLOUD_TOKEN}
```

You can also add multiple tokes for multiple projects if you like:

```yaml
backend:
  hetzner:
    tokens:
      - ${HCLOUD_PROJECT_X}
      - ${HCLOUD_PROJECT_Y}
      - ${HCLOUD_PROJECT_Z}
```

> **_NOTE:_** The plugin doesn't enforce a limit on the amount of projects you
> add. The more projects you add, the slower the output will become visible in
> Backstage. This is because an API-call has to be done for every project. Another
> important thing to consider is that you won't be able to tell which resources
> belong to which project. This is because the project's name is not sent back in
> the Hetzner Cloud API.

Add the plugin to the backend in `packages/backend/src/index.ts`:

```typescript
backend.add(import('@gluo-nv/backstage-plugin-hetzner-backend'));
```

## Development

### Getting Started

1. Clone the repository
2. Install dependencies:

```bash
yarn install
```

3. Run the plugin in isolation

```bash
yarn start
```

## OpenAPI Spec Import and Client Generation

This plugin uses the Hetzner Cloud API, and the client is generated from the Hetzner OpenAPI specification. Follow these steps to import the OpenAPI spec and generate the client:

1. **Optional: Install the OpenAPI TypeScript Codegen Tool**  
   The tool used for generating the client is [`openapi-typescript-codegen`](https://github.com/ferdikoomen/openapi-typescript-codegen). Install it globally or use `npx` to run it directly.

2. **Download the Hetzner OpenAPI Spec**  
   Run the following command to download the Hetzner OpenAPI specification:

   ```bash
   curl -o hetzner-spec.json https://docs.hetzner.cloud/spec.json
   ```

3. **Generate the Hetzner API Client**  
   Use the `openapi-typescript-codegen` tool to generate the client:

   ```bash
   npx openapi-typescript-codegen --input hetzner-spec.json --output src/hetznerClient
   ```

   This will generate a TypeScript client in the `src/hetznerClient` directory.

4. **Use the Generated Client**  
   The generated client can now be imported and used in the backend plugin. For example:

   ```typescript
   import { ServersService } from './hetznerClient/services/ServersService';

   const servers = await ServersService.getServers();
   console.log(servers);
   ```

## Contributing

We welcome contributions to improve this plugin! If you’d like to contribute, please follow these steps:

1. Fork the repository.
2. Create a new branch for your feature or bug fix.
3. Submit a pull request with a clear description of your changes.

For major changes, please open an issue first to discuss your ideas.

## License

This plugin is licensed under the GNU Affero General Public License v3.0 (AGPL-3.0).

### Attribution

This plugin was created by [Gluo NV](https://gluo.be).  
Any use or distribution must include proper attribution to the original author.
