var ms = require('milliseconds');

export function inputToMs(input: string) {
    if (input.length === 0) {
        return 0
    } else if (input.length < 6) {
        const diff = 6 - input.length;
        const filler = "0".repeat(diff);
        input = filler + input
    }

    const inputAry = [input.substr(0, 2), input.substr(2, 2), input.substr(4, 2)]
    let timeAry= [0, 0, 0] // [hrs, min, sec]
    for (let i = 0; i < 3; i++) {
        timeAry[i] = parseInt(inputAry[i])
    }

    return ms.hours(timeAry[0]) + ms.minutes(timeAry[1]) + ms.seconds(timeAry[2])

}