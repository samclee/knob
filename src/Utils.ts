const ms = require('milliseconds'); // different units to ms
const parseMilliseconds = require('parse-ms'); // ms to different units

interface Convertor {
    fromHours: (hours: number) => number
    fromMinutes: (minutes: number) => number
}

const convertor: Convertor = {
    fromHours: (hours: number) => hours * 3600,
    fromMinutes: (minutes: number) => minutes * 60
}

function inputToSeconds(input: string): number {

}

function formatInput(input: string): string {

}

function formatSeconds(seconds: number): string {
    const {hours, minutes, seconds} = parseSeconds(seconds)
    const times = [hours, minutes, seconds].map(
        (timeVal: number) => timeVal.toString().padStart(2, "0")
    )
    
    return times[0] + "h " + times[1]  + "m " + times[2]  + "s";
}

export function inputToMs(input: string): number {
    input = input.padStart(6, "0")

    const inputAry = [input.substr(0, 2), input.substr(2, 2), input.substr(4, 2)]
    const timeAry= inputAry.map((digitStr) => parseInt(digitStr))

    const maxTime = 359999000 // 99 hours, 59 minutes, 59 seconds in seconds
    const totalMs = convertor.fromHours(timeAry[0]) + convertor.fromMinutes(timeAry[1]) + timeAry[2]
    return Math.min(totalMs, maxTime)
}

export function msToString(ms: number): string {
    const {days, hours, minutes, seconds} = parseMilliseconds(ms)
    const times = [hours + 24 * days, minutes, seconds].map(
        (timeVal: number) => timeVal.toString().padStart(2, "0")
    )
    
    return times[0] + "h " + times[1]  + "m " + times[2]  + "s";
}

export function inputToString(input: string) {
    return msToString(inputToMs(input))
}