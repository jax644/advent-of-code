const fs = require('fs')

    // Break the input into two arrays, one for each list
    // Sort both arrays in ascending order using the sort() method
    // Create a hash map with each array item as a key value pair
        // Use a for loop to populate the hash map
    // Create an empty array to story the differences
        // Write a for loop that pushes the differences between each key value pair to the new array
    // Find the sum of the differences array using the reduce() method
    // Return the sum

function getTotalDistance(input){
    const entireFile = fs.readFileSync(input, "utf8")

    const lines = entireFile.split('\n');
    const list1 = []
    const list2 = []
    lines.forEach((line) => {
        const splittedLine =  line.split("   ");
        list1.push(Number(splittedLine[0]))
        list2.push(Number(splittedLine[1]))
    })

    const sortedList1 = list1.sort()
    const sorttedList2 = list2.sort()

    const numPairs = {}

    for (i=0; i<list1.length; i++) {
        numPairs[list1[i]] = list2[i]
    }

    const differences = []

    for (key in numPairs) {
        differences.push(Math.abs(Number(key)-numPairs[key]))
    }
    
    const result = differences.reduce((acc,cur) => acc + cur)

    console.log(result)
}


getTotalDistance("input.txt")