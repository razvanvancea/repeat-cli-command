<h2 align="center">repeat-cli-command tool</h2>

<p align="center">
  repeat-cli-command is a tool that will run any CLI command for an X number of times.
</p>

<p align="center">
  <a href="https://www.npmjs.com/package/repeat-cli-command"><img src="https://img.shields.io/npm/v/repeat-cli-command" alt="npm version"></a>
  <a href="https://www.npmjs.com/package/repeat-cli-command"><img src="https://img.shields.io/npm/dw/repeat-cli-command" alt="weekly downloads"></a>
  <a href="https://github.com/razvanvancea/repeat-cli-command/blob/main/LICENSE"><img src="https://img.shields.io/npm/l/repeat-cli-command" alt="license"></a>
</p>

<br>

## Installation

Install the following package:

```bash
npm install -D repeat-cli-command
```

---

## How to run

```bash
npx repeat-cli-command "<command>" [--times=<number>] [--stop-on-error]
```

### Options

| Option | Description | Default |
|---|---|---|
| `--times=<number>` | Number of times to run the command | `1` |
| `--stop-on-error` | Stop execution on the first failure | `false` |
| `--help`, `-h` | Show help message | - |

### Examples

```bash
# Run Playwright tests 5 times
npx repeat-cli-command "npx playwright test" --times=5

# Run and stop immediately on the first failure
npx repeat-cli-command "npx playwright test" --times=5 --stop-on-error
```

> **Note:** If `--times` is omitted, the command runs once. If any execution fails, the process exits with a non-zero exit code — making it safe to use in CI pipelines.

---

## Contributions

Feel free to open a pull request or drop any feature request or bug in the [issues](https://github.com/razvanvancea/repeat-cli-command/issues).

Please see more details in the [contributing doc](https://github.com/razvanvancea/repeat-cli-command/blob/main/CONTRIBUTING.md).

