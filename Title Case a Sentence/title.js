function titleCase(str){
    let newArray = [];
    let arr = str.split(" ")
    for(let i = 0; i < arr.length ; i++){
        let firstLetter = arr[i][0].toUpperCase()
        let theRest = arr[i].slice(1).toLowerCase()
        let newWord = firstLetter + theRest;
        newArray.push(newWord)
    }
    let joinNewStr = newArray.join(" ")
    console.log(joinNewStr)
}

titleCase("I'm a little tea pot")
titleCase("sHoRt AnD sToUt")


/*
    [I'm, a, little, tea, pot]
    newarray = [I'm, A, Little, Tea, Pot]
*/