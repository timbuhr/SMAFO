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

	smafoWindowContainer = document.createElement('div');
	smafoWindowContainer.className = 'smafoContainer';
	smafoWindowContainer.id = 'SmafoContainer';
	
	//utilitySpan is just to retrieve the x and y offset for the div
	var $span= $("<span/>");
	
	var range = window.getSelection().getRangeAt(0);
  	newRange = document.createRange();
  	newRange.setStart(window.getSelection().focusNode, range.endOffset);
  	newRange.insertNode($span[0]);
  	
  	var x = $span.offset().left;
  	var y = $span.offset().top;
  	$span.remove();
  	
  	$("body").append(smafoWindowContainer);
  	var divStyle = 'left:'+x+'px;'+'top:'+y+'px;';
  	$('#SmafoContainer').attr('style',divStyle);
  	$('#SmafoContainer').attr('tabIndex','0');
  	$("#SmafoContainer").focus();
  	
  	titleArea = document.createElement('div');
  	titleArea.id = 'titleArea';
  	$("#titleArea").text('Hello SmaF O:');
  	text = '<p> Smafo <p/>;';
  	$("#titleArea").append(text);
  	
  	$("#SmafoContainer").append(titleArea);
  	
  	$("#SmafoContainer").focusout(function() {
  		$("#SmafoContainer").remove();
    });
    
    
}