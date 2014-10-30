/**
 * @author Wojtek
 */

// chrome.app.runtime.onLaunched.addListener(function(){
//
//
// chrome.app.window.create('window.html', {
// 'bounds': {
// 'width': 1200,
// 'height': 500
// }
// });
// });}

chrome.runtime.onInstalled.addListener(function() {
	var context = "selection";
	var title = "smafo";
	var id = chrome.contextMenus.create({
		"title" : title,
		"contexts" : [context],
		"id" : "context" + context
	});
});


chrome.contextMenus.onClicked.addListener(onClickHandler);

function onClickHandler(info, tab) {
	console.log(" onclick %s", info.selectionText);
	var selectedText = info.selectionText;
	
	// chrome.tabs.query({active: true}, function(tabs){
    // chrome.tabs.sendMessage(tabs[0].id, {action: "open_dialog_box"}, function(response) {});  
// });

	
	chrome.tabs.query({
		active : true,
		currentWindow : true
	}, function(tabs) {
		chrome.tabs.sendMessage(tabs[0].id, {
			text : selectedText
		}, function() {});
	}); 

};
