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
		console.log("%s",info.selectionText);
		
		//chrome.windows.create();
	//var sText = info.selectionText;
	//var url = "https://de.wikipedia.org/wiki/-" + encodeURIComponent(sText);

	//window.open("smafo_window.html","resizable");
	
	chrome.windows.create({
		//'id':'SmaFo_window',
		'url':'smafo_window.html',
		'type':'app',
		'width':300,
		'height':500
	});

	// chrome.windows.create("smafo_window.html", {
	// frame : "none",
	// id : "framelessWinID",
	// innerBounds : {
	// 'width' : 360,
	// 'height' : 300,
	// 'left' : 600,
	// 'minWidth' : 220,
	// 'minHeight' : 220
	// },
	// bounds : {
	// 'width' : 1200,
	// 'height' : 500
// 
	// }
	// });
	// openwindow('smafo_window.html');
};

// function openwindow(url){
	  // NewWindow=window.open(url,'newWin','width=300,height=500,left=200,top=200,toolbar=No,location=No,scrollbars=no,status=No,resizable=no,fullscreen=No');  
	  // NewWindow.focus(); 
	  // void(0);  
	  // }
