import AgentForceAgent, { type AgentConfig } from "@lib/agent";

const agentConfig: AgentConfig = {
    name: "WebServerAgent",
    type: "http-server-agent",
    logger: "json"
};

// Create an agent and start a web server (serve is terminal - doesn't return agent)
const agent = new AgentForceAgent(agentConfig)
    .useLLM("ollama", "phi4-mini:latest")
    .debug()
    .serve("0.0.0.0", 3000);
