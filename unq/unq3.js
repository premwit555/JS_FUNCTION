let arr = [
     { x: 10, y: 20 },
     { x: 10, y: 20 },
     { x: 11, y: 30 },
     { x: 10, y: 30 },
     { x: 12, y: 30 },
     { x: 12, y: 30 },
     { x: 13, y: 20 },
     { x: 13, y: 20 },
] 
let arr2 = [
     { x: 11, y: 20 },
     { x: 12, y: 20 },
     { x: 13, y: 30 },
     { x: 10, y: 30 },
     { x: 12, y: 30 },
     { x: 12, y: 30 },
     { x: 13, y: 20 },
     { x: 13, y: 20 },
] 

let arr3 = [...arr, ...arr2]

// each element has x and y props
const a = arr.filter(
     (e, i, arr) =>
          arr.findIndex((e2) =>
               Object.keys(e2).every((prop) => e2[prop] == e[prop])
          ) == i
)

console.log(arr3);