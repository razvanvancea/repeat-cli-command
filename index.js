#!/usr/bin/env node

const { execSync } = require('child_process');

const args = process.argv.slice(2);

if (args.includes('--help') || args.includes('-h')) {
	console.log(`
Usage: npx repeat-cli-command "<command>" [options]

Options:
  --times=<number>    Number of times to run the command (default: 1)
  --stop-on-error     Stop execution on the first failure
  --help, -h          Show this help message

Examples:
  npx repeat-cli-command "npx playwright test" --times=5
  npx repeat-cli-command "npx playwright test" --times=5 --stop-on-error
`);
	process.exit(0);
}

if (args.length < 1 || args[0].startsWith('--')) {
	console.error("Usage: npx repeat-cli-command '<command>' [--times=<number>] [--stop-on-error]");
	process.exit(1);
}

const command = args[0]; // First argument is the command
const timesArg = args.find((arg) => arg.startsWith('--times='));
const times = timesArg ? parseInt(timesArg.split('=')[1], 10) : 1;
const stopOnError = args.includes('--stop-on-error');

if (isNaN(times) || times < 1) {
	console.error('Invalid times value. Please provide a positive integer.');
	process.exit(1);
}

let hasError = false;

for (let i = 0; i < times; i++) {
	console.log(`\n[Attempt ${i + 1}/${times}] Running: ${command}`);
	try {
		execSync(command, { stdio: 'inherit' });
	} catch (error) {
		hasError = true;
		console.error(`Error executing command on attempt ${i + 1}.`);
		if (stopOnError) {
			console.error('Stopping due to --stop-on-error flag.');
			process.exit(1);
		}
	}
}

if (hasError) {
	process.exit(1);
}
