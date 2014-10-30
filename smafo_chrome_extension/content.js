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
      insertButton();
  });
  
function insertButton() {

selectionIrgendwas = document.createElement('span');
	selectionIrgendwas.setAttribute('style', 'margin:-20px 0 0 -20px; position:absolute; background: blue;width:25px;height:29px;cursor:pointer;');

  var range = window.getSelection().getRangeAt(0);
  newRange = document.createRange();
  newRange.setStart(window.getSelection().focusNode, range.endOffset);
  newRange.insertNode(selectionIrgendwas);

}