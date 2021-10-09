//scheduleJob

import { scheduleJob } from "node-schedule"
const date = new Date(2021, 9, 9, 17, 33, 0)

scheduleJob(date, function () {
     console.log("The world is going to end today.")
})
