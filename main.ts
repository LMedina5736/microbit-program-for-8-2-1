function flashIcon (flashFive : IconNames.Giraffe) : number {
    const times : number = 10
    let counter : number = 5
    

    while (counter < times) {
        basic.showIcon(IconNames.Giraffe)
        basic.pause(100)
        basic.clearScreen()
        basic.pause(100)

        counter = counter + 1
    }
    return times
}
let timesflashed : number = flashIcon(IconNames.Giraffe)