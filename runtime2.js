let testArray = [1, 4, 22, 2, 37, -4]

let addToZero = (arr) =>{
    for(let i = 0; i < arr.length; i++){
        for(let x = i + 1; x <arr.length; x++){
            if(arr[i] + arr[x] === 0){
                return true
            }
        }
    }
    return false
}

console.log(addToZero(testArray))

// Runtime: O(n^2)

const hasUniqueChars = (stringEx) => {
    for (let i = 0; i < stringEx.length; i++)
        for (x = i + 1; x <stringEx.length; x++){
            if (stringEx[i] === stringEx[x]){
                return false
            }
        }
        return true
}

console.log(hasUniqueChars('Tanner'))

// Runtime: O(n^2)

const isPangram = string => {
    let uniqueLetters = new Set([])
    string = string.toLowerCase()
    for(let i = 0; i < string.length; i++){
        if(string[i].toLowerCase() !== string[i].toUpperCase()){
            uniqueLetters.add(string[i])
        }
    }
    if(uniqueLetters.size === 26){
        return true
    } else {
        return false
    }
}

console.log(isPangram("The quick brown fox jumps over the lazy dog!"))
console.log(isPangram("I like cats, but not mice"))

// Runtime O(n)

let longestWord = arr => {
    let currentLongest = ''
    for (let i = 0; i < arr.length; i++)
        if(arr[i].length > currentLongest.length){
            currentLongest = arr[i]
        }
        return currentLongest
}

console.log(longestWord(['hi','hello','salutations','wazzup']))

// Runtime O(n)