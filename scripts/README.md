# Scripts

## `start-local.sh`

Launches the local development server for the website once the app scaffold exists.

Usage:

```bash
./scripts/start-local.sh
```

Behavior:

- exits early if the app has not been scaffolded yet
- installs dependencies if `node_modules` is missing
- starts the dev server with host binding enabled

