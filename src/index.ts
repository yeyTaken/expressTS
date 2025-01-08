import { consola } from 'consola';
import chalk from 'chalk';

import func from "@func/funcsMap";
import Database from '@database'
import json from '../package.json'

import('@/website/app');
import('@/database/mongo/connect');

var globals = {
  functions: func,
  database: new Database(),
  log: consola,
};

globals.log.box('Simple ExpressTS base');

process.on('SIGINT', () => {
  globals.log.info(chalk.dim("Offline server."));
  process.exit(0);
});

globals.log.info(// "emoji", add emoji
  `${chalk.hex('#4b4eda').underline('ExpressJS')} ${chalk.dim(json.dependencies.express.replace(/[\^~]/g, ''))}`,
  "/",
  `${chalk.hex('#68a063').underline('NodeJS')} ${chalk.dim(process.versions.node)}`
)

console.log();

export { globals };