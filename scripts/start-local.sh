#!/usr/bin/env bash

set -euo pipefail

ROOT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"

cd "$ROOT_DIR"

if [[ ! -f package.json ]]; then
  echo "No package.json found in $ROOT_DIR."
  echo "Scaffold the Astro app first, then rerun ./scripts/start-local.sh."
  exit 1
fi

if ! command -v npm >/dev/null 2>&1; then
  echo "npm is required but was not found on PATH."
  exit 1
fi

if [[ ! -d node_modules ]]; then
  echo "Dependencies are not installed. Running npm install..."
  npm install
fi

echo "Starting local dev server..."
exec npm run dev -- --host 0.0.0.0
