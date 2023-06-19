#! /usr/bin/env node
const {execSync} = require('child_process');
const args = process.argv.slice(2);

if(args.length < 2)
{
	console.log("Failed: Please enter a name for your project\n");
	console.log("Usage: npx create-new-startup AmazingStartupName")
}

const run = command =>
{
	try
	{
		execSync(`${command}`, {stdio: 'inherit'});
	}
	catch(error)
	{
		console.log("Failed: ", error);
		return false;
	}
	return true
};

const startupName = process.argv[2];
const checkout = `git clone --depth 1 https://github.com/kibichomurage/create-new-startup ${startupName}`;
const prepareInstall = `cd ${startupName} && git init && npm install`;

const clonedRepo = run(checkout);
console.log("Cloning starter code from Murage Kibicho's GitHub");
if(!clonedRepo)
{
	process.exit(-1);
}

console.log("Clone Success!\nInstalling NPM dependencies\n");

const dependencies = run(prepareInstall);
if(!dependencies)
{
	process.exit(-1);
}

console.log(`Success!\ncd ${startupName} && npm start\n`);


