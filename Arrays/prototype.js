let fruits = ["Banana", "Apple", "Orange", "Graps"];

Array.prototype.myUpperCase = function() {
    for(let i=0; i<this.length; i++) {
        this[i] = this[i].toUpperCase();
    }
}
fruits.myUpperCase()

console.log(fruits);