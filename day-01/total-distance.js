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

    // Create a hashmap of nums from list 1 paired with nums from list 2

    const numPairs = {}

    for (i=0; i<list1.length; i++) {
        numPairs[list1[i]] = list2[i]
    }

    // Find the differences by comparing each key and value from the new hashmap

    const differences = []

    for (key in numPairs) {
        differences.push(Math.abs(Number(key)-numPairs[key]))
    }

    // Find and return the total of the differences
    
    const totalOfDifferences = differences.reduce((acc,cur) => acc + cur)
    return totalOfDifferences
}

console.log(getTotalDistance("input.txt"))