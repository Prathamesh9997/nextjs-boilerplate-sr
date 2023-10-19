#!/usr/bin/env node

/* eslint-disable @typescript-eslint/no-var-requires */
const { execSync } = require("child_process");

const runCommand = (command) => {
  try {
    execSync(`${command}`, { stdio: "inherit" });
  } catch (e) {
    console.error(`Failed to execute ${command}`, e);
    return false;
  }
  return true;
};

const repoName = process.argv[2];
const gitCheckoutCommand = `git clone --depth 1 https://github.com/Prathamesh9997/nextjs-boilerplate-sr ${repoName}`;
const installDepsCommand = `cd ${repoName} && npm install`;

console.log(`Cloning the repository with name ${repoName}`);
const checkedOut = runCommand(gitCheckoutCommand);
if (!checkedOut) process.exit({ code: -1 });

console.log(`Installing dependecies for ${repoName}`);
const insalledDeps = runCommand(installDepsCommand);
if (!insalledDeps) process.exit({ code: -1 });

console.log(
  `Congratulations! You are ready. Follow the below commands to start.`
);
console.log(`cd ${repoName} && npm start`);
