#! /usr/bin/env node
const {execSync} = require('child_process');
const os = require('os');
const fs = require('fs');


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
const prepareInstall = `cd ${startupName} && npm install `;

const deleteGitLinux = `cd ${startupName} && rm -fr .git`;
const deleteBinLinux = `cd ${startupName} && rm -fr bin`;
const deleteKnownBugsLinux = `cd ${startupName} && rm KnownBugs.txt`;

const deleteGitWindows = `cd ${startupName} && rmdir /s /q .git`;
const deleteBinWindows = `cd ${startupName} && rmdir /s /q bin`;
const deleteKnownBugsWindows = `cd ${startupName} && del KnownBugs.txt`;

const newRepoCommand = `cd ${startupName} && git init`;

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

function getCurrentFilenames() {
	console.log("\nCurrent filenames:");
	fs.readdirSync(__dirname).forEach(file => {
	  console.log(file);
	});
	console.log("\n");
  }
 
 //Delete bin
fs.rmdir("bin", () => 
{
console.log("Cleaning Bin!");
//getCurrentFilenames();
});

//Delete .git
fs.rmdir(".git", () => 
{
console.log("Cleaning Git!");
//getCurrentFilenames();
});

//Delete extensions
fs.rmdir("extensions", () => 
{
console.log("Cleaning Extensions!");
//getCurrentFilenames();
});

//Delete KnownBugs.txt
fs.unlink(__dirname+ '/KnownBugs.txt', function (err) 
{            
	if(error) {console.error(err);process.exit(-1);}                                                          
	console.log("Cleaned Known");                           
});  

//Delete KnownBugs.txt
fs.unlink(__dirname+ '/KnownBugs.txt', function (err) 
{            
	if(error) {console.error(err);process.exit(-1);}                                                          
	console.log("Cleaned Known");                           
});  

const newRepo = run(newRepoCommand);
if(!newRepo){console.log("Git init failed"); process.exit(-1);}
	
/*if(os.type() === 'Linux')
{
	const deletedGit = run(deleteGitLinux);
	if(!deletedGit){console.log("Git delete failed"); process.exit(-1);}
	
	const deletedBin = run(deleteBinLinux);
	if(!deletedBin){console.log("Bin delete failed"); process.exit(-1);}
	
	const newRepo = run(newRepoCommand);
	if(!newRepo){console.log("Git init failed"); process.exit(-1);}
	
	const deleteBugsFile = run(deleteKnownBugsLinux);
	if(!newRepo){console.log("Delete Known failed"); process.exit(-1);}
	
}
else if(os.type() === 'Windows_NT')
{
	const deletedGit = run(deleteGitWindows);
	if(!deletedGit){console.log("Git delete failed"); process.exit(-1);}
	
	const deletedBin = run(deleteBinWindows);
	if(!deletedBin){console.log("Bin delete failed"); process.exit(-1);}
	
	const newRepo = run(newRepoCommand);
	if(!newRepo){console.log("Git init failed"); process.exit(-1);}
	
	const deleteBugsFile = run(deleteKnownBugsWindows);
	if(!newRepo){console.log("Delete Known failed"); process.exit(-1);}

}*/
console.log(`Success!\n\n\n\tcd ${startupName} && run npm start\n`);


