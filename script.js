var list = [{
  'name': 'apple',
  'type': 'tree',
  'qty': 3
}, {
  'name': 'banana',
  'type': 'tree',
  'qty': 1
}, {
  'name': 'orange',
  'type': 'tree',
  'qty': 4
}, {
  'name': 'strawberry',
  'type': 'berry',
  'qty': 6
}, {
  'name': 'blueberry',
  'type': 'berry',
  'qty': 3
}];
function compareQty(a,b) {
  if (a.qty < b.qty)
    return -1;
  if (a.qty > b.qty)
    return 1;
  return 0;
}
var newlist = list.sort(compareQty);
for(var i = 0; i < newlist.length; i++) {
  newlist[i] = newlist[i].name
}
console.log('sorted by qty:', newlist.toString())
