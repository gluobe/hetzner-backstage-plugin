# Backstage Catalog Backend Module for Hetzner

The Hetzner Cloud Catalog Backend Module is a Backstage backend module that connects to the Hetzner backend plugin to automatically discover and import Hetzner Cloud resources into the catalog. It creates entities for servers, volumes, and primary IPs, enabling centralized visibility of your Hetzner infrastructure within Backstage.

## Table of Contents

- [Backstage Catalog Backend Module for Hetzner](#backstage-catalog-backend-module-for-hetzner)
  - [Table of Contents](#table-of-contents)
  - [Features](#features)
  - [Dependencies](#dependencies)
    - [1. Hetzner Backend Plugin](#1-hetzner-backend-plugin)
    - [2. Frontend Plugin (Optional)](#2-frontend-plugin-optional)
    - [Installation](#installation)
    - [Backend Plugin](#backend-plugin)
    - [Frontend Plugin](#frontend-plugin)
    - [Catalog Backend Module Plugin](#catalog-backend-module-plugin)
  - [Configuration](#configuration)
  - [Development](#development)
    - [Getting Started](#getting-started)
  - [Contributing](#contributing)
  - [License](#license)
    - [Attribution](#attribution)

## Features

This backend catalog module provides the following key functionalities for Backstage:

- **Entity Creation for Backstage Catalog**: Automatically discovers and creates entities for Hetzner Cloud resources (such as servers, volumes, and primary IPs) in the Backstage catalog.
- **Resource Synchronization**: Periodically fetches the latest state of Hetzner Cloud resources and keeps the Backstage catalog up to date.
- **Custom Metadata and Annotations**: Enriches catalog entities with Hetzner-specific metadata and annotations for better traceability and management.
- **Extensible Resource Support**: Easily extendable to support additional Hetzner Cloud resource types as needed.

## Dependencies

### 1. Hetzner Backend Plugin

The main Hetzner backend plugin provides the API endpoints and backend logic for Hetzner Cloud integration.  
Repository:  
[Backstage Plugin Hetzner Backend](../hetzner-backend/README.md)

### 2. Frontend Plugin (Optional)

An optional frontend plugin is available for integrating with the backend plugin. The frontend plugin provides a user interface in Backstage to visualize Hetzner Cloud resources. It includes:

- **Hetzner Cloud Page**: An overview of the Hetzner Cloud platform.
- **Hetzner Resource Card**: A card component that displays detailed information about a specific Hetzner Cloud resource directly within the entity page in the Backstage catalog.

The frontend plugin can be found at:

[Backstage Plugin Hetzner](../hetzner/README.md)

Alternatively, you can create your own frontend plugin to suit your specific needs. The backend plugin is designed to support custom frontend implementations, so installing this provided frontend plugin is not mandatory.

However, it is strongly recommended to either install the provided frontend plugin or create your own. Without a frontend plugin, you will not have a user interface in Backstage to visualize Hetzner Cloud resources, which significantly limits the usability of this backend plugin. A frontend plugin is essential for providing insights into your Hetzner Cloud infrastructure and enabling effective management of your resources.

### Installation

### Backend Plugin

This frontend plugin requires the corresponding backend plugin to be installed. Please follow the instructions in the [backend plugin directory](../hetzner-backend/README.md).

### Frontend Plugin

This backend plugin requires the corresponding frontend plugin to be installed. Please follow the instructions in the [frontend plugin directory](../hetzner/README.md).

### Catalog Backend Module Plugin

```bash
# From the Backstage root directory
yarn --cwd packages/backend add @gluo-nv/backstage-plugin-catalog-backend-module-hetzner
```

## Configuration

Add the plugin to the backend in `packages/backend/src/index.ts`:

```typescript
backend.add(import('@gluo-nv/backstage-plugin-catalog-backend-module-hetzner'));
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

## Contributing

We welcome contributions to improve this module! If you’d like to contribute, please follow these steps:

1. Fork the repository.
2. Create a new branch for your feature or bugfix.
3. Submit a pull request with a clear description of your changes.

For major changes, please open an issue first to discuss your ideas.

## License

This plugin is licensed under the GNU Affero General Public License v3.0 (AGPL-3.0).

### Attribution

This plugin was created by [Gluo NV](https://gluo.be).  
Any use or distribution must include proper attribution to the original author.
