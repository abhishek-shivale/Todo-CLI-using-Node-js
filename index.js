#!/usr/bin/env node
import { program } from 'commander';
import list from './commands/list.js'
import add from './commands/add.js'
import markDone from './commands/markDone.js';
import empty from './commands/empty.js';

program
  .command('list')
  .description('List of all Todos')
  .action(list);

program
    .command('add <task>')
    .description('Add a new TODO task')
    .action(add)

program
    .command('mark-done')
    .description('Mark commands done ')
    .option('-t, --tasks <tasks...>', 'The tasks to mark done. If not specified, all tasks will marked done.')
    .action(markDone)

program
    .command('empty')
    .description('Remove all Todos')
    .action(empty)

program.parse(process.argv);