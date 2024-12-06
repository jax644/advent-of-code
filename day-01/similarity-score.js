// Enable node to read the input from a local txt file 
const fs = require('fs')

function getTotalDistance(input){
    // Get each list as an array from the input
    const entireFile = fs.readFileSync(input, "utf8")

    const lines = entireFile.split('\n');
    const list1 = []
    const list2 = []

    lines.forEach((line) => {
        const numsInLine =  line.split("   ");
        list1.push(Number(numsInLine[0]))
        list2.push(Number(numsInLine[1]))
    })

    // Sort lists in ascending order for easier comparison

    const sortedList1 = list1.sort()
    const sorttedList2 = list2.sort()

    // Create a hashmap containing each number in list 2 with the number of occurances

    let list2NumsAndFreqs = {}

    for (num of list2) {
        list2NumsAndFreqs[num] = (list2NumsAndFreqs[num] || 0) + 1
    }

    // Find and return the similarity score: 
        // For each number in list 1, check the list 2 hashmap
        // If the number exists in list 2,
            // Increase the similarity score by:
                // The number * The number of occurances

    let similarityScore = 0

    for (num of list1) {
        let occurances = list2NumsAndFreqs[num]
        if (occurances) {
            similarityScore += Number(num) * Number(occurances)
        } 
    }

    return similarityScore
}

console.log(getTotalDistance("input.txt"))