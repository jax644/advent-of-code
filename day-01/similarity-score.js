const fs = require('fs')

function getTotalDistance(input){
    const entireFile = fs.readFileSync(input, "utf8")

    const lines = entireFile.split('\n');
    const list1 = []
    const list2 = []
    
    lines.forEach((line) => {
        const numsInLine =  line.split("   ");
        list1.push(Number(numsInLine[0]))
        list2.push(Number(numsInLine[1]))
    })

    const sortedList1 = list1.sort()
    const sorttedList2 = list2.sort()

    let similarityScore = 0

    let numsAndFreqs = {}

    for (num of list2) {
        numsAndFreqs[num] = (numsAndFreqs[num] || 0) + 1
    }

    for (num of list1) {
        let numOfOccurances = numsAndFreqs[num]
        if (numOfOccurances) {
            similarityScore += Number(num) * Number(numOfOccurances)
        } 
    }

    console.log(similarityScore)
    return similarityScore
}

getTotalDistance("input.txt")