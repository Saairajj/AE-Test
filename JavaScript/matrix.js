matrix = [
    [1,2,3],
    [4,5,6]
]

transposedMatrix = []

for(let i = 0; i < matrix[0].length; i++) {
    newRow = []
    for(let j = 0; j < matrix.length; j++) {
        newRow.push(matrix[j][i])
    }
    transposedMatrix.push(newRow)
}


console.log(transposedMatrix);
