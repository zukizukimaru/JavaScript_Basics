'use strict';

{
  
  document.querySelector('button').addEventListener('click', () => {

    const targetNode = document.getElementById('target');

    targetNode.textContent = 'Changed!' ;
    targetNode.title = 'This is title!' ;
    targetNode.style.color = 'red' ;
    targetNode.style.backgroundColor = 'skyblue' ;
    //JavaScriptではbackground-colorと-ではなく、C大文字で表す。
    
  });

}
