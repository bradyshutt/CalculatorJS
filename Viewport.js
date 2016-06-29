'use strict'

function Viewport(vpDiv) {

   this.varALine = vpDiv.children[0]; 
   this.opLine = vpDiv.children[1]; 
   this.varBLine = vpDiv.children[2]; 
   this.resultLine = vpDiv.children[3]; 


//this.varA = parseInt(this.varALine.textContent) || 0;

   this.varA = new NumLine(vpDiv.children[0]);
   this.op = new Line(vpDiv.children[1]);
   this.varB = new NumLine(vpDiv.children[2]);
   this.result = new Line(vpDiv.children[3]);

   return this;
}


Viewport.prototype.clear = function() {
   this.varA.clear();
   this.op.clear()
   this.varBLine.textContent = '';
   this.resultLine.textContent = '';

   this.varA.clear();
   this.varB.clear();
   this.op.clear();
   this.result.clear();

}


Viewport.prototype.setOp = function(opChar) {

   if (this.result.string) {
      this.varA.update(this.result.string);
      this.result.clear();
      this.varB.clear();
   }
   this.op.update(opChar);
}


Viewport.prototype.appendNum = function(num) {
   if (this.result.string) {
      this.varA.update(num);
      this.result.clear();
      this.varB.clear();
      this.op.clear(); }
   else if (this.op.string)
      this.varB.append(num);
   else
      this.varA.append(num);
};

Viewport.prototype.appendDec = function() {
   if (this.result.string)
      return; 
   else if (this.op.string && !this.varB.hasDec) {
      this.varB.append('.');
      this.varB.hasDec = true;
   }
   else if (!this.op.string && !this.varA.hasDec) {
      this.varA.append('.');
      this.varA.hadDec = true;
   }
}

Viewport.prototype.enter = function() {

   var res;

   switch(this.op.string) {

      case '*':
         res = this.varA.getValue() * this.varB.getValue(); break;

      case '/':
         res = this.varA.getValue() / this.varB.getValue(); break;

      case '+':
         res = this.varA.getValue() + this.varB.getValue(); break;

      case '-':
         res = this.varA.getValue() - this.varB.getValue(); break;

   };

   res = Math.round(res * 10000) / 10000;

   this.result.update(res);

}
