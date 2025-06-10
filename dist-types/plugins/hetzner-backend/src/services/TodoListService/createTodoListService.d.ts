import { LoggerService } from '@backstage/backend-plugin-api';
import { catalogServiceRef } from '@backstage/plugin-catalog-node';
import { TodoListService } from './types';
export declare function createTodoListService({ logger, catalog, }: {
    logger: LoggerService;
    catalog: typeof catalogServiceRef.T;
}): Promise<TodoListService>;
