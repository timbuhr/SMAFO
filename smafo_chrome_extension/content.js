/**
 * @author Wojtek
 */


chrome.runtime.onMessage.addListener(
  function(msg, sender, sendResponse) {
      showSmafoWindow(msg.text);
  });
  
function showSmafoWindow(selectedText) {

/**************** closing div *********************/
	closingDiv = document.createElement('div');
	closingDiv.className = 'closing_div';
	closingDiv.id = 'closing_div';
	var bodyHeight = $('body').height();	
	$('body').append(closingDiv);
	$('#closing_div').css('height',bodyHeight);
	
	
/***************** main div ***********************/
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
  	
  	 $('#closing_div').click(function(){
		$("#SmafoContainer").remove();
		$('#closing_div').remove();
	});
  	
  	
/**************** definition div *******************/
	var definitionArea = definitionDiv(selectedText);
  	$("#SmafoContainer").append(definitionArea);
  	
  	
/***************** content div *********************/
	smafoContentArea = document.createElement('div');
  	smafoContentArea.className = 'content_area';
  	smafoContentArea.id = 'content_area';
  	$("#SmafoContainer").append(smafoContentArea);
  	
  	createContentItems(smafoContentArea);
  	
/*************** advertisment div ******************/
	
    
}

function definitionDiv (selectedText) {
	definitionArea = document.createElement('div');
  	definitionArea.className = 'title_area';
  	definitionArea.id = 'title_area';
  	
  	title = document.createElement('p');
  	title.textContent = selectedText;
  	$('#title_area').append(title);
}

function advertismentDiv(){
	advertismentDiv = document.createElement('div');
  	advertismentDiv.className = 'advertisment_area';
  	advertismentDiv.id = 'advertisment_area';
  	
  	return advertismentDiv;
}

function createContentItems(contentDiv){
	
}
