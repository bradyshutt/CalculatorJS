


/**************************************************************************
 *          onLoad(f) 
 * 
 * Do function 'f', once the document has been loaded.
 *
 *************************************************************************/
onLoad.loaded = false;
onLoad(function() { onLoad.loaded = true; });

function onLoad(f) {
   if (this.loaded)
      window.setTimeout(f, 0);
   else if (window.addEventListener)
      window.addEventListener('load', f, false);
   else if (window.attachEvent) /* For IE < IE9 */ 
      window.attachEvent('onload', f);
}



/**************************************************************************
 *         srcJS(name)
 * 
 * Source a new JS file by adding a new script tag to head
 *************************************************************************/
function srcJS(name) {
   var s = document.createElement('script');
   s.src = name;
   document.head.appendChild(s);
};



/**************************************************************************
 *         method(name, f)
 * 
 * Add method to prototype of class. 
 * Taken from Douglas Crockford's "JavaScript: The Good Parts"
 *************************************************************************/
Function.prototype.method = function(name, func) {
   this.prototype[name] = func;
   return this;
}



/**************************************************************************
 *         inherits(Parent)
 * 
 * Return a new object that inherits from another object. 
 * Taken from Douglas Crockford's "JavaScript: The Good Parts"
 *************************************************************************/
Function.prototype.inherits = function(Parent) {
   this.prototype = new Parent();
   return this;
 }


