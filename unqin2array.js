let array1 = [{ id: 1, name: "apple", id: 2, name: "orange" }]
let array2 = [{ id: 1, name: "apple", id: 4, name: "purple" }]

let unique = array1
     .concat(array2)
     .filter((obj, key, array) => array.map((obj2) => obj.id !== obj2.id))

console.log(unique)




