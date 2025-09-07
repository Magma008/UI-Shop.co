const itemNum = document.querySelector("#itemNum")

// * Increase and Decrease of button
let incNum = 1;
const increasing = (incType) => {
    if (incType == "plus") {
        incNum += 1
    } else if (incType == "minus" && incNum > 1) {
        incNum -= 1
    } else {
        incNum = 1
    }
    itemNum.innerText = incNum
}