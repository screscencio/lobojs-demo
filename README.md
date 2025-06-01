# LoboJS Demo

This demo project shows how to use LoboJS to profile public API endpoints.

## Prerequisites

- Node.js >= 18

## Installation

```bash
npm install
```

## Running the Demo

Profile public APIs (writes to `report/run.json`):

```bash
npm run perf:run
```

Generate report (reads from `report/run.json`, outputs to `report/`):

```bash
npm run perf:report
```

Run full CI pipeline (profile → merge → report → evaluate thresholds from `thresholds.json`):

```bash
npm run perf:ci
```

After running, open `report/index.html` in your browser to view the interactive charts.

## Profiles

The `profiles/` directory contains JavaScript files that use LoboJS’s `profile` API to measure HTTP request durations.

Feel free to modify or add your own endpoints in `profiles/`.