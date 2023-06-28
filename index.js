function saturdayFun(activity = "roller-skate") {
    return `This Saturday, I want to ${activity}!`;
}

function mondayWork(place = "go to the office") {
    return `This Monday, I will ${place}.`;
}

function wrapAdjective(vis = "*") {
    return function(kip = "special") {
        return `You are ${vis}${kip}${vis}!`
    }
}