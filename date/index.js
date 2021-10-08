import moment from "moment"

const now = moment()
const Now = moment().format()


const L = moment().format('L')
const Lh = moment(1633729483).format('L-HH:mm:ss')   //set timne
const Lnow = moment().format('L-HH:mm:ss') 				// now time


const cNow = moment().format("X")



// console.log(Lh)
// console.log(cNow)
// console.log(now)   					//2021-10-09T04:51:09+07:00

// ต้นหา save time to db
// chack time in db

const c = moment("2021-10-09T04:51:09+07:00")
// console.log(c);


const deff =c.diff(now,)

const deffomrmat = moment("2021-10-09T04:51:09+07:00")

// 
console.log(60*60*60*5);
// 216000 = 1 min
// 1080000 = 5min


const time =now.diff(deffomrmat)

// มีค่า มากกว่า 10 นาที
if(time<(60*60*60*10)){
	console.log(time);
}

