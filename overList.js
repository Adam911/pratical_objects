const assert = require('assert');

var itemList = [
    {name : 'apples', price : 10},
    {name : 'pears', price : 37},
    {name : 'bananas', price : 27},
    {name : 'apples', price : 3},
];



function findItemsOver20(objList) {
    var objOver20 = [];

  for (var i = 0; i < objList.length; i++) {
  var listObj20 = objList[i];


  if (listObj20.price > 20 ) {
    var 

    console.log(listObj20);
  }
  }
  return listObj20;
}
findItemsOver20(itemList);

assert.equal(findItemsOver20(itemList),37)
assert.equal(findItemsOver20(itemList),27)

/*
Write a function called findItemsOver20
 that takes a list of objects,
 each object having 2 attributes one called
 name and the other price. The function should
 return all the products
that have a price more than R20.
*/
