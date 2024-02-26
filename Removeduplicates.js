let arr = [1,2,2,3,4,4,5,6,6,7,8,9,10]

//Anonymous Function
let unique = arr.filter(function(item, index) {
  return arr.indexOf(item) === index;
});
console.log("Anonymous Function:",unique);

// IIFE
let uniqueIIFE = (function(arr) {
  return arr.filter(function(item, index) {
    return arr.indexOf(item) === index;
  });
})(arr);
console.log("IIFE:",uniqueIIFE);