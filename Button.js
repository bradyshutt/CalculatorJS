'use strict'

/* 
 * Button Class to manage Calculator Buttons  
 *
 * */

Button.prototype.clicked = function() {

   if (this.isNum)
      vp.appendNum(this.val);
      //vp.textContent = vp.textContent + this.val;
   else {
      switch (this.val) {
         case 'clear':
            vp.clear(); break;

         case 'enter':
            vp.enter(); break;

         case 'divide':
            vp.setOp('/'); break;

         case 'multiply':
            vp.setOp('*'); break;

         case 'add':
            vp.setOp('+'); break;

         case 'subtract':
            vp.setOp('-'); break;


      }
      
   }
   
};

function Button(buttonNode) {

   this.node = buttonNode;
   this.text = buttonNode.textContent.trim();
   this.isOp = isNaN(this.text);
   this.isNum = !this.isOp;
   this.val = null;
   var self = this;

   if (this.isNum)
      this.val = parseInt(this.text);
   else
      switch (this.text) {
         case '*':         this.val = 'multiply';  break;
         case '/':         this.val = 'divide';    break;
         case '+':         this.val = 'add';       break;
         case '-':         this.val = 'subtract';  break;
         case '.':         this.val = 'dot';       break;
         case 'CLR':       this.val = 'clear';     break;
         case 'ENTER':     this.val = 'enter';     break;
         default :   throw new Error('Unrecognized button text: ' + this.text);
      };

   buttonNode.addEventListener('click', function() { 
      this.style.backgroundColor = '#aa0044'; 
      setTimeout(function() { self.node.style.backgroundColor = '#222'}, 100);
      self.clicked();

   });

   return this;
}

