
// Tests

var helper = new PaginationHelper(['a','b','c','d','e','f'], 4);
console.log(helper.pageCount(), 2);
console.log(helper.itemCount(), 6);
console.log(helper.pageItemCount(0), 4);
console.log(helper.pageItemCount(1),  2);
console.log(helper.pageItemCount(2), -1);

// pageIndex takes an item index and returns the page that it belongs on
console.log(helper.pageIndex(5), 1);
console.log(helper.pageIndex(2), 0);
console.log(helper.pageIndex(20), -1);
console.log(helper.pageIndex(-10), -1);