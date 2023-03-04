# Week 2 — Distributed Tracing

## span

A span is a unit of work in a distributed system that tells what happened when. It is a logical unit of work that is performed by a service. A span is defined by a start time, a duration, and a set of tags. A span may also have a parent span, which is a span that is a direct ancestor of the current span. A span may also have a set of child spans, which are spans that are direct descendants of the current span. A span may also have a set of logs, which are key-value pairs that are associated with the span.

### Instrument AWS X-Ray for Flask

```sh
export AWS_REGION="ca-central-1"
gp env AWS_REGION="ca-central-1"
```

Set the env var in your backend-flask for [docker-compose.yml](../docker-compose.yml)

```yml
      AWS_DEFAULT_REGION: "${AWS_DEFAULT_REGION}"
      AWS_ACCESS_KEY_ID: "${AWS_ACCESS_KEY_ID}"
      AWS_SECRET_ACCESS_KEY: "${AWS_SECRET_ACCESS_KEY}"
```

passing AWS_REGION doesn't seems to get picked up by boto3 so will pass default region instead

## SDK

SDK stands for Software Development Kit. It is a set of tools that help developers build applications for a specific platform or programming language. SDKs typically include a library of functions and resources that developers can use to create applications. It also includes documentation and sample code that developers can use to learn how to use the library.

## opentelemetry

OpenTelemetry is a collection of tools, APIs, and SDKs. You can use it to instrument, generate, collect, and export telemetry data (metrics, logs, and traces) for analysis in order to understand your software's performance and behavior.

```bash
aws xray create-group --group-name "Cruddur" --filter-expression "services(\"backend-flask\")"
```
