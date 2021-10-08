const arraydb = [
     { name: "Joe", age: 18 },
     { name: "Bob", age: 19 },
     { name: "Carl", age: 20 },
     { name: "toon", age: 35 },
     { name: "Carl", age: 35 },
     { name: "new", age: 35 },
     { name: "Carl", age: 35 },
]

const arrayApi = [
     { name: "min", age: 17 },
     { name: "Bob", age: 17 },
     { name: "Carl", age: 35 },
     { name: "Carl", age: 35 },
     { name: "pok", age: 35 },
     { name: "Carl", age: 35 },
     { name: "Carl", age: 35 },
]

const arrayCheck = [...arrayApi, ...arraydb]

const key = "age" //one key

const arrayUniqueByKey = [
     ...new Map(arrayCheck.map((item) => [item[key], item])).values(),
]
