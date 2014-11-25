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
	bodyHeight = $('body').height();	
	$('body').append(closingDiv);
	$('.closing_div').css('height',bodyHeight);
	
	
/***************** main div ***********************/
	smafoWindowContainer = document.createElement('div');
	smafoWindowContainer.className = 'smafoContainer';
	//utilitySpan is just to retrieve the x and y offset for the div
	$span= $("<span/>");
	
	range = window.getSelection().getRangeAt(0);
  	newRange = document.createRange();
  	newRange.setStart(window.getSelection().focusNode, range.endOffset);
  	newRange.insertNode($span[0]);
  	
  	x = $span.offset().left;
  	y = $span.offset().top;
  	$span.remove();
  	
  	$("body").append(smafoWindowContainer);
  	divStyle = 'left:'+x+'px;'+'top:'+y+'px;';
  	$('.smafoContainer').attr('style',divStyle);
  	
  	 $('.closing_div').click(function(){
		$(".smafoContainer").remove();
		$('.closing_div').remove();
	});
  	
  	
/**************** definition div *******************/
	createDefinitionDiv(selectedText);
  	
/***************** content div *********************/
	smafoContentArea = document.createElement('div');
	smafoContentArea.classList.add('smafoTopDiv');
  	smafoContentArea.classList.add('content_area');
  	$(".smafoContainer").append(smafoContentArea);
  	
  	createContentItems();
  	$('.content_area').mCustomScrollbar({
        theme:"dark-thin"
      });
  	
/*************** advertisment div ******************/
	
    createAdvertismentDiv();
}

function createDefinitionDiv (selectedText) {
	definitionArea = document.createElement('div');
  	definitionArea.classList.add('smafoTopDiv');
  	definitionArea.classList.add('definition_area');
  	title = document.createElement('p');
  	title.classList.add('smafoP');
  	
  	definitionAreaText = "<span class='defAreaSpan'><b>Definition</b></span>: "+selectedText;
  	title.innerHTML = definitionAreaText;
  	
  	para1 = document.createElement('p');
  	para1.classList.add('smafoP');
  	para1.innerHTML = 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam';
  	
  	para2 = document.createElement('p');
  	para2.classList.add('smafoP');
  	para2.innerHTML = 'nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam';
  	
  	$(".smafoContainer").append(definitionArea);
  	$('.definition_area').append(title);
  	$('.definition_area').append(para1);
  	$('.definition_area').append(para2);
  	
  	
  	$('.definition_area').mCustomScrollbar({
        theme:"dark-thin"
      });
}

function createContentItems(){
	for (i = 0; i < 10; i++) { 
    	contentItem = document.createElement('div');
    	contentItem.classList.add('smafoItem');
    	$('.content_area').append(contentItem);
	}
}

function createAdvertismentDiv(){
	advertismentDiv = document.createElement('div');
  	advertismentDiv.classList.add('smafoTopDiv');
  	advertismentDiv.classList.add('advertisment_area');
  	advertismentDiv.id = 'advertisment_area';
  	
  	smafoAd = document.createElement('p');
  	smafoAd.classList.add('smafoP');
  	
  	smafoAd.innerHTML = "your ad could be here!";
  	
  	$(".smafoContainer").append(advertismentDiv);
  	$('.advertisment_area').append(smafoAd);
}


