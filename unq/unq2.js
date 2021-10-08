const array = [
     { id: 3, name: "Central Microscopy", fiscalYear: "2018" },
     { id: 5, name: "Crystallography Facility", fiscalYear: "2018" },
     { id: 1, name: "Central Microscopy", fiscalYear: "2017" },
     { id: 2, name: "Central Microscopy", fiscalYear: "2017" },
     { id: 3, name: "Crystallography Facility", fiscalYear: "2017" },
     { id: 4, name: "Crystallography Facility", fiscalYear: "2017" },
     { id: 5, name: "Crystallography Facility", fiscalYear: "2017" },
     { id: 5, name: "Crystallography Facility", fiscalYear: "2017" },
]

const result = Array.from(new Set(array.map((s) => s.id))).map((id) => {
     return { id: id, 
		name: array.find((s) => s.id === id).name,
		f:array[id].fiscalYear	
	 }
})

console.log(result)
