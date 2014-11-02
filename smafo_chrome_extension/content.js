/**
 * @author Wojtek
 */


chrome.runtime.onMessage.addListener(
  function(msg, sender, sendResponse) {
    // console.log(sender.tab ?
                // "from a content script:" + sender.tab.url :
                // "from the extension");
    // if (request.greeting == "hello")
      // sendResponse({farewell: "goodbye"});
      console.log("%s",msg.text);
      showSmafoWindow();
  });
  
function showSmafoWindow() {

SmafoWindowContainer = document.createElement('div');
	//SmafoWindowContainer.setAttribute('id','SmafoContainer');
	SmafoWindowContainer.id = 'SmafoContainer';
	SmafoWindowContainer.setAttribute('tabIndex','0');
	//SmafoWindowContainer.setAttribute('style', 'margin:-20px 0 0 -20px; position:absolute;cursor:pointer;');
	SmafoWindowContainer.setAttribute('style', 'margin:-20px 0 0 -20px; position:absolute;background: blue;width:25px;height:29px;cursor:pointer;');
	

	var range = window.getSelection().getRangeAt(0);
  	// newRange = document.createRange();
  	// newRange.setStart(window.getSelection().focusNode, range.endOffset);
  	// newRange.insertNode(SmafoWindowContainer);
  	
  	//$("#SmafoContainer").focus();
  	//$("#SmafoContainer").css("background-color","yellow");
  	
  	$("#SmafoContainer").focusout(function() {
  		$("#SmafoContainer").remove();
        console.log("click");
    });
}