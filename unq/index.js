const datadb = [
     { name: "Joe", date: "2018-07-01", amt: 250 },
     { name: "Mars", date: "2018-07-01", amt: 250 },
     { name: "Joe", date: "2018-07-02", amt: 250 },
     { name: "Saturn", date: "2018-07-01", amt: 250 },
     { name: "old", date: "2018-07-02", amt: 250 },
     { name: "Jupiter", date: "2018-07-01", amt: 250 },
]
const dataapi = [
     { name: "min", date: "2018-07-01", amt: 250 },
     { name: "Mars", date: "2018-07-01", amt: 250 },
     { name: "min", date: "2018-07-02", amt: 250 },
     { name: "Saturn", date: "2018-07-01", amt: 250 },
     { name: "Joe", date: "2018-07-02", amt: 250 },
     { name: "Jupiter", date: "2018-07-01", amt: 250 },
]
const data = [...datadb, ...dataapi]

let resArr = []
data.filter(function (item) {
     let i = resArr.findIndex(
          (x) => x.name == item.name && x.date == item.date && x.amt == item.amt
     )
     if (i <= -1) {
          resArr.push(item)
     }
     return null
})
console.log(resArr)
