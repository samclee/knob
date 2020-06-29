const ms = require('milliseconds');
const parseMilliseconds = require('parse-ms');

export function inputToMs(input: string): number {
    input = input.padStart(6, "0")

    const inputAry = [input.substr(0, 2), input.substr(2, 2), input.substr(4, 2)]
    const timeAry= inputAry.map((digitStr) => parseInt(digitStr))

    const maxTime = 359999000 // 99 hours, 59 minutes, 59 seconds in milliseconds
    const totalMs = ms.hours(timeAry[0]) + ms.minutes(timeAry[1]) + ms.seconds(timeAry[2])
    return Math.min(totalMs, maxTime)
}

export function msToString(ms: number): string {
    const {days, hours, minutes, seconds} = parseMilliseconds(ms)
    const times = [hours + 24 * days, minutes, seconds].map(
        (timeVal: number) => timeVal.toString().padStart(2, "0")
    )
    
    return times[0] + "h " + times[1]  + "m " + times[2]  + "s";
}