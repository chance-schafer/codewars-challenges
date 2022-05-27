//Convert number to reversed array of digits

function digitize(n) {
    let newArray = []
    let numString = n.toString()
    console.log(numString)
    for(let i = numString.length - 1; i >= 0; i--) {
        newArray.push(parseInt(numString[i]));
    }
     return newArray
  }