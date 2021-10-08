
var data = [
     { name: "00", date: "2018-07-01", amt: 250 },
     { name: "Joe", date: "2018-07-01", amt: 250 },
     { name: "Mars", date: "2018-07-01", amt: 250 },
     { name: "Joe", date: "2018-07-02", amt: 250 },
     { name: "Joe", date: "2018-07-02", amt: 250 },
     { name: "Saturn", date: "2018-07-01", amt: 250 },
     { name: "mg", date: "2018-07-01", amt: 250 },
     { name: "Joe", date: "2018-07-02", amt: 250 },
     { name: "Joe", date: "2018-07-02", amt: 250 },
     { name: "Jupiter", date: "2018-07-01", amt: 250 },
     { name: "Jupiter", date: "2018-07-01", amt: 250 },
]

var filtered = data.filter(function ({ name, date, amt }) {
     var key = `${name}${date}${amt}`
     return !this.has(key) && this.add(key)
}, new Set())

console.log(filtered)
