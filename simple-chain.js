const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
const chainMaker = {
   array: [],
   getLength() {
      this.array.length;
      return this;
   },
   addLink(value) {
      if (value === undefined) {
         this.array.push(`(  )`);
      } else this.array.push(`~~( ${value} )`);
      return this;
   },
   removeLink(position) {
      if (typeof position !== 'number' || position === 0 || position < 0 || !(Number.isInteger(position)) || position > this.array.length - 1) {
         this.array = [];
         throw new Error(`You can't remove incorrect link!`)
      } else {
         this.array.splice(position - 1, 1);
         return this;
      }
   },
   reverseChain() {
      this.array.reverse();
      return this;
   },
   finishChain() {
      let chain = this.array.join('').substring(2)
      this.array = [];
      return chain;
   }
};

module.exports = {
   chainMaker
};
