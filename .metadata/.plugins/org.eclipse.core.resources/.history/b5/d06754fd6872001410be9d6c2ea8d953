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

	closingDiv = document.createElement('div');
	closingDiv.className = 'closing_div';
	closingDiv.id = 'closing_div';
	var bodyHeight = $('body').height();
	console.log("%s",bodyHeight);
	
	$('body').append(closingDiv);
	$('#closing_div').css('height',bodyHeight);
	
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
  	
  	titleArea = document.createElement('div');
  	titleArea.className = 'title_area';
  	titleArea.id = 'title_area';
  	$("#SmafoContainer").append(titleArea);
    
    $('#closing_div').click(function(){
		$("#SmafoContainer").remove();
		$('#closing_div').remove();
	});
}