function findMatching(drivers, string) {
    return drivers.filter(driver => {
        return driver.toUpperCase() === string.toUpperCase()
    })
}

function fuzzyMatch(drivers, string){
    return drivers.filter(driver =>{
        return driver[0] === string.split("")[0]
    })
}

function matchName(drivers, string){
    return drivers.filter (driver => {
        return driver.name === string
    })
}