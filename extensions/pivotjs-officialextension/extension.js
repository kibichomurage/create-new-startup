const vscode = require('vscode');
const fs = require('fs');
const path = require('path');

/**
 * @param {vscode.ExtensionContext} context
 */


function activate(context) {

	let createFolder = vscode.commands.registerCommand('pivotjs-officialextension.createFolder', async function () 
	{
		//Ensure folder already opened
		if(!vscode.workspace.workspaceFolders)
		{
			return vscode.window.showInformationMessage("Create a New Workspace or Folder");
		}
		// Get current folder path
		const currentFolderUri = vscode.workspace.workspaceFolders[0].uri;
		//console.log(currentFolderUri);

		//Ask for folder name
		const fileName = await vscode.window.showInputBox({
			value : "",
			placeHolder: "Enter Page Name. i.e Landing, Home, etc..."
		});
		//console.log(fileName);
		//maybe add error handling
		if(!fileName){return vscode.window.showInformationMessage("Empty file name")};
		//console.log(fileName);
		vscode.window.showInformationMessage(`Creating ${fileName}`);
		//const fileName = "Market";
		const basePath = "frontend/Pages/" + fileName + "Page/";
		
		const fileName0 = basePath + fileName + ".jsx";
		const fileName1 = basePath + "Redux/" + fileName + "Reducer.js";
		const fileName2 = basePath + "Redux/" + fileName + "Endpoints.js";
		const fileName3 = basePath + "/Components/" + "EmptyFile.jsx";

		const filePath0 = currentFolderUri.with({path: path.posix.join(currentFolderUri.path, fileName0)});
		const filePath1 = currentFolderUri.with({path: path.posix.join(currentFolderUri.path, fileName1)});
		const filePath2 = currentFolderUri.with({path: path.posix.join(currentFolderUri.path, fileName2)});
		const filePath3 = currentFolderUri.with({path: path.posix.join(currentFolderUri.path, fileName3)});

		const fileData0 = Buffer.from("//Type pvtAl", 'utf8');
		const fileData1 = Buffer.from("//Type pvtSlice", 'utf8');
		const fileData2 = Buffer.from("//Type pvtApi", 'utf8');
		const fileData3 = Buffer.from("////Type pvtAl", 'utf8');
		//console.log(filePath0)
		try
		{
			await vscode.workspace.fs.writeFile(filePath0, fileData0);
			await vscode.workspace.fs.writeFile(filePath1, fileData1);
			await vscode.workspace.fs.writeFile(filePath2, fileData2);
			await vscode.workspace.fs.writeFile(filePath3, fileData3);
		}
		catch(error)
		{
			return vscode.window.showInformationMessage("Error: Get help at: https://github.com/kibichomurage/create-new-startup/issues");
		}
		
	});

	context.subscriptions.push(createFolder);
}

// This method is called when your extension is deactivated
function deactivate() {}

module.exports = {
	activate,
	deactivate
}
