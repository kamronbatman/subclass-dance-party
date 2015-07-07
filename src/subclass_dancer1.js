var makeSubclassDancer1 = function(top, left, timeBetweenSteps){
  makeDancer.apply(this, arguments);
}

makeSubclassDancer1.prototype = Object.create(makeDancer.prototype);
makeSubclassDancer1.prototype.constructor = makeSubclassDancer1;

makeSubclassDancer1.prototype.step = function(){
  //Call our parent's (makeDancer) step();
  //makeDancer.prototype.step.call(this)
  this.$node.css({ 'border-color': '#' + (Math.floor(Math.random() * 65536)).toString(16)})
  makeDancer.prototype.step.call(this);
}
