'use strict'

function Viewport(vpDiv) {
   this.varALine = vpDiv.children[0]; 
   this.opLine = vpDiv.children[1]; 
   this.varBLine = vpDiv.children[2]; 
   this.resultLine = vpDiv.children[3]; 

   this.varA = parseInt(this.varALine.textContent) || 0;
   this.varB = parseInt(this.varBLine.textContent) || 0;
   this.op = null;
   this.result = 0;

   return this;
}


Viewport.prototype.clear = function() {
   this.varALine.textContent = '';
   this.opLine.textContent = '';
   this.varBLine.textContent = '';
   this.resultLine.textContent = '';

   this.varA = 0;
   this.varB = 0;
   this.op = null;
   this.result = 0;

}


Viewport.prototype.setOp = function(opChar) {

   if (this.result) {
      this.varALine.textContent = this.result;
      this.varA = this.result;
      this.result = 0;
      this.resultLine.textContent = '';
      this.varB = 0;
      this.varBLine.textContent = '';
   }
   this.op = opChar;
   this.opLine.textContent = opChar;
}


Viewport.prototype.appendNum = function(num) {

   if (this.op) {
      this.varBLine.textContent = this.varBLine.textContent + num;
      this.varB = parseInt(this.varBLine.textContent);
   }
   else if (this.result) {
      this.varALine.textContent = this.result;
      this.varA = this.result;
      this.result = 0;
      this.varB = 0;
      this.varBLine.textContent = '';
      this.op = null;
      this.opLine.textContent = '';
   }
   else {
      this.varALine.textContent = this.varALine.textContent + num;
      this.varA = parseInt(this.varALine.textContent);
   }

};

Viewport.prototype.enter = function() {

   var res;

   switch(this.op) {

      case '*':
         res = this.varA * this.varB; break;

      case '/':
         res = this.varA / this.varB; break;

      case '+':
         res = this.varA + this.varB; break;

      case '-':
         res = this.varA - this.varB; break;

   };

   this.resultLine.textContent = res;
   this.result = res;

}
