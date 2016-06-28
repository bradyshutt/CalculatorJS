'use strict'
var doc = document;
var vp;

window.addEventListener('load', function() { 

   vp = new Viewport(document.getElementById('viewport'));
   var buttonsDiv = doc.getElementById('buttons');
   var numButtons = buttonsDiv.children.length;
   var buttons = [];
   
   Array.from(buttonsDiv.children).forEach(function(btn, itr, arr) {
      buttons.push(new Button(btn)); 
   });


});




