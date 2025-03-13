#!/usr/bin/env node

const { execSync } = require('child_process');

const args = process.argv.slice(2);

if (args.length < 2) {
	console.error("Usage: npx repeat-cli-command '<command>' --times=<number>");
	process.exit(1);
}

const command = args[0]; // First argument is the command
const timesArg = args.find((arg) => arg.startsWith('--times='));
const times = timesArg ? parseInt(timesArg.split('=')[1], 10) : 1;

if (isNaN(times) || times < 1) {
	console.error('Invalid times value. Please provide a positive integer.');
	process.exit(1);
}

for (let i = 0; i < times; i++) {
	console.log(`\n[Attempt ${i + 1}/${times}] Running: ${command}`);
	try {
		execSync(command, { stdio: 'inherit' });
	} catch (error) {
		console.error(`Error executing command on attempt ${i + 1}. Continuing...`);
	}
}
