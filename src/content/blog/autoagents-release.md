---
title: "AutoAgents: Build Agents in Rust"
description: "How to build production-ready agents in Rust with AutoAgents: providers, tools, and scalable runtimes."
date: 2025-12-24
tag: "Open Source"
readTime: "5 min"
---

AutoAgents is Liquidos’ open-source Rust SDK for building reliable agentic systems. It’s designed for performance, safety, and scalability — and ships with the core building blocks you need to take agents from a demo to a deployable service.

## What “production-ready” looks like

In production, agents need more than prompts. AutoAgents helps you structure agent systems with:

- **Explicit runtimes**: build agents as `DirectAgent` (simple) or actor-based agents for concurrency.
- **Provider flexibility**: choose only the model backend you need (cloud or local) via Cargo features.
- **Tooling boundaries**: attach tools through `autoagents-toolkit` (filesystem, search) and keep execution controlled.
- **Composability**: wire together the Executor → Agent → Tools/Memory/Providers stack and evolve it over time.

## Quick start: build an agent in Rust

1. Create a Rust project:
   - `cargo new my_agent && cd my_agent`
2. Add dependencies:
   - `cargo add autoagents`
   - `cargo add autoagents-derive`
3. Build your agent:
   - Define an agent with `#[agent(...)]` and `AgentHooks`
   - Configure an LLM backend using `LLMBuilder`
   - Run tasks through the `BasicAgent` executor

AutoAgents supports multiple provider backends (for example: `openai`, `anthropic`, `openrouter`, `groq`, `google`, `azure_openai`, `xai`, `deepseek`, `ollama`). Enable only what you use.

## Make it production-ready

Once you have the minimal agent working, the next step is to harden the system around it:

- **Choose the right runtime model**
  - Use `DirectAgent` for simpler request/response flows.
  - Use actor-based agents when you need concurrency, orchestration, or multi-agent workloads.
- **Add tools deliberately**
  - Pull in `autoagents-toolkit` features (filesystem, search) for standard integrations.
  - Prefer explicit tool surfaces over “magic” behavior; treat tools as part of your API contract.
- **Test and iterate using examples**
  - The repo includes examples like `examples/basic` and `examples/coding_agent` for multi-turn and tool-enabled agents.
- **Plan for deployment**
  - Keep configuration externalized (keys, model selection, timeouts).
  - Start with clear boundaries (tools, providers, memory), then grow into richer orchestration as needed.

AutoAgents is available today. Liquidos Platform is coming soon with additional operational layers (enterprise tracing, policy controls, evals, and deployment workflows) for teams running agents in regulated and mission-critical environments.
