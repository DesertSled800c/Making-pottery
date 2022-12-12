const buyClay = () => {
   const clay = {}
    return clay
}

const makePottery = (clay) => {
    clay.shape = "Bowl"
    return clay
}

const bisqueFire = (clay) => {
    clay.readyForGlazing = true
    return clay
}

const glazePottery = (clay) => {
    if(clay.readyForGlazing === true) {
        clay.glazing = "Midnight Blue"
        return clay
    } else {
        console.log("Make sure you bisque fire the pottery before you glaze it.")
    }
}

const finalFiring = (clay, kilnTemp) => {
    if(kilnTemp >= 1200) {
        clay.cracked = true
        return clay
    } else {
        clay.cracked = false
        return clay
    }
}



let clay = buyClay()
console.log(makePottery(clay))
console.log(bisqueFire(clay))
console.log(glazePottery(clay))
console.log(finalFiring(clay, 1199))
console.log(finalFiring(clay, 1201))