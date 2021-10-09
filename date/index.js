import moment from "moment"

const now = moment()
const Now = moment().format()

const L = moment().format("L")
const Lh = moment(1633729483).format("L-HH:mm:ss") //set timne
const Lnow = moment().format("L-HH:mm:ss") // now time

const cNow = moment().format("X")

const time = {
     min: 60 * 60 * 60,
     min5: 60 * 60 * 60 * 5,
     min10: 60 * 60 * 60 * 10,
	 hour: 60 * 60 * 60 *60,
	 hour6: 60 * 60 * 60 *60*6,
	 hour12: 60 * 60 * 60 *60*12,
	 day: 60 * 60 * 60 *60*24,
}


// console.log(Lh)
// console.log(cNow)
// console.log(now)   					//2021-10-09T04:51:09+07:00

// ต้นหา save time to db
// chack time in db

const c = moment("2021-10-09T04:51:09+07:00")
// console.log(c);

const deff = c.diff(now)

// function find
const varTime = "2021-10-09T04:51:09+07:00"
const countdown = time.min5

const lastTime = now.diff(moment(varTime))

// มีค่า มากกว่า 10 นาที
if (lastTime > countdown) {
     // if time > min5 start function
     console.log(Now)
}
