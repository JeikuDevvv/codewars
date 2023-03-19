let myList = [1, "2", 3, "4", 5, "6"];

function filter_list(array) {
  let myFilteredList = [];
  for (i = 0; i < array.length; i++) {
    if (typeof array[i] == "number") {
      myFilteredList.push(array[i]);
    }
  }

  return myFilteredList;
}

console.log(` Filterd List: ${filter_list(myList)}`);
