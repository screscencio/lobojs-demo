# LoboJS Demo

This demo project shows how to use LoboJS to profile public API endpoints.

## Prerequisites

- Node.js >= 18

## Installation

```bash
npm install
```

## Running the Demo

Profile public APIs (writes timestamped JSON runs into `profile_runs/`):

```bash
npm run perf:run
```

Merge all runs into a single merged history (`report/lobojs-merged.json`):

```bash
npm run perf:merge
```

Generate report (reads merged JSON and outputs HTML + summary under `report/`):

```bash
npm run perf:report
```

Run full CI pipeline (profile → merge → report → evaluate thresholds; `eval` runs last):

```bash
npm run perf:ci
```

After running, open `report/index.html` in your browser to view the interactive charts.

## CI/CD Persistence

In CI/CD pipelines, commit the merged JSON and report outputs to preserve your performance history:

```bash
git add report/lobojs-merged.json report/index.html
git commit -m "ci: update performance history"
```

If you prefer to retain raw per-run snapshots (`profile_runs/`), you can also commit that directory; note that it may grow indefinitely over time.

## Evaluate merged results independently

```bash
npm run perf:evaluate
```

## Profiles

The `profiles/` directory contains JavaScript files that use LoboJS’s `profile` API to measure HTTP request durations.

Feel free to modify or add your own endpoints in `profiles/`.

---

## License

This project is licensed under the MIT License — see the [LICENSE](./LICENSE) file for details.
