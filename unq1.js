const array = [
     { id: 3, name: "Central Microscopy", fiscalYear: "2018" },
     { id: 5, name: "Crystallography Facility", fiscalYear: "2018" },
     { id: 1, name: "Central Microscopy", fiscalYear: "2017" },
     { id: 2, name: "Central Microscopy", fiscalYear: "2017" },
     { id: 3, name: "Crystallography Facility", fiscalYear: "2017" },
     { id: 4, name: "Crystallography Facility", fiscalYear: "2017" },
     { id: 5, name: "dfdf Facility", fiscalYear: "2017" },
     { id, name: "Crystallography Facility", fiscalYear: "2010" },
]
const result = []
const map = new Map()
for (const item of array) {
     if (!map.has(item.id)) {
          map.set(item.id, true)
          // set any value to Map
          result.push({
               id: item.id, //set value need
               name: item.name,
               fiscalYear: item.fiscalYear,
          })
     }
}
// console.log(result)
