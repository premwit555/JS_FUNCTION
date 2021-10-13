//scheduleJob

import { scheduleJob } from "node-schedule"
const date2 = new Date(2021, 9, 9, 17, 42, 0)
const date = Date("2021-10-09T17:43:00")

scheduleJob(date, function () {
     console.log("The world is going to end today.")
})
