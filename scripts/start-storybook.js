#!/usr/bin/env node
const { spawn } = require('child_process');
const args = process.argv.slice(2);
const env = { ...process.env, STORYBOOK_ENABLED: 'true' };
const child = spawn('npx', ['expo', 'start', ...args], { stdio: 'inherit', shell: true, env });
child.on('exit', code => process.exit(code));
