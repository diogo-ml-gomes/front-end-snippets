const vscode = require('vscode'),
	path = require('path'),
	fs = require('fs');

/**
 * @param {vscode.ExtensionContext} context
 */
function activate(context) {
	let extensionPath = path.join(context.extensionPath, 'package.json'),
		packageFile = JSON.parse(fs.readFileSync(extensionPath, 'utf8'));

	// The command has been defined in the package.json file
	// Now provide the implementation of the command with  registerCommand
	// The commandId parameter must match the command field in package.json
	let disposable = vscode.commands.registerCommand('front-end-snippets.fes-version', function () {

		// Display a message box to the user
		vscode.window.showInformationMessage(`Front-end Snippets Version: ${packageFile ? packageFile.version : "ERROR! Can't find extension file"}`);

	});

	context.subscriptions.push(disposable);
}
exports.activate = activate;

// this method is called when your extension is deactivated
function deactivate() {}

module.exports = {
	activate,
	deactivate
}
