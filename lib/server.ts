import pino from 'pino';
import {
    serve,
} from '@lib/server/mod';

import type { ServerConfig, LoggerType } from './types';
export type { ServerConfig };

/**
 * Represents a server instance within the AgentForce framework.
 * This class provides the core functionality for creating and managing servers,
 * including configuration of name and logging.
 *
 * @class AgentForceServer
 */
export default class AgentForceServer {

    private _name: string;
    private logger: LoggerType = "json";
    private _pinoLogger: pino.Logger;

    /**
     * Constructs the AgentForceServer class.
     * @param config - Configuration object for the server
     */
    constructor(config: ServerConfig) {
        this._name = config.name;
        this.logger = config.logger || "json";
        
        // Initialize pino logger based on the logger type
        if (this.logger === "pretty") {
            this._pinoLogger = pino({
                transport: {
                    target: 'pino-pretty',
                    options: {
                        colorize: true
                    }
                }
            });
        } else {
            this._pinoLogger = pino();
        }
    }

    /**
     * Get the name of the server.
     */
    public getName() {
        return this._name;
    }

    /**
     * Get the logger type of the server.
     */
    public getLoggerType() {
        return this.logger;
    }

    /**
     * Get the pino logger instance.
     */
    public getLogger() {
        return this._pinoLogger;
    }

    // Terminal/Non-chainable methods
    serve = serve.bind(this);

}