#! /usr/bin/env node
const {execSync} = require('child_process');
const os = require('os');


if(process.argv.length < 3)
{
	console.log("Failed: Please enter a name for your project\n");
	console.log("Usage: npx create-new-startup AmazingStartupName");
	process.exit(-1);
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
const checkout = `git clone https://github.com/kibichomurage/create-new-startup ${startupName}`;
const prepareInstall = `cd ${startupName} && npm install`;

const deleteGitLinux = 'rm -fr .git';
const deleteBinLinux = 'rm -fr bin';

const deleteGitWindows = 'rmdir /s /q .git';
const deleteBinWindows = 'rmdir /s /q bin';

const newRepoCommand = 'git init'

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

console.log("cleaning up");

if(os.type() === 'Linux')
{
	const deletedGit = run(deleteGitLinux);
	if(!deletedGit){console.log("Git delete failed"); process.exit(-1);}
	
	const deletedBin = run(deleteBinLinux);
	if(!deletedBin){console.log("Bin delete failed"); process.exit(-1);}
	
	const newRepo = run(newRepoCommand);
	if(!newRepo){console.log("Git init failed"); process.exit(-1);}
	
}
else if(os.type() === 'Windows_NT')
{
	const deletedGit = run(deleteGitWindows);
	if(!deletedGit){console.log("Git delete failed"); process.exit(-1);}
	
	const deletedBin = run(deleteBinWindows);
	if(!deletedBin){console.log("Bin delete failed"); process.exit(-1);}
	
	const newRepo = run(newRepoCommand);
	if(!newRepo){console.log("Git init failed"); process.exit(-1);}

}
console.log(`Success!\ncd ${startupName} && npm start\n`);


