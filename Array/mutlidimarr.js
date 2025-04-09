let ticTacToe = [
    ['X', 'O', 'X'],
    ['O', 'X', 'O'],
    ['O', 'X', 'X']
  ];
  
  console.log(ticTacToe);
  
  
  console.log(`Middle cell: ${ticTacToe[1][1]}`);
  console.log(`Bottom-right cell: ${ticTacToe[2][2]}`);
  



  const matrix = [
    [1, 2, 3],   
    [4, 5, 6],   
    [7, 8, 9]   
];

for (let i = 0; i < matrix.length; i++) {       
    for (let j = 0; j < matrix[i].length; j++) {
        console.log(`Element at [${i}][${j}] = ${matrix[i][j]}`);
    }
}




let threeDArray = [
    [
      [1, 2, 3], [4, 5, 6]
    ],
    [
      [7, 8, 9], [10, 11, 12]
    ],
    [
      [13, 14, 15], [16, 17, 18]
    ]
  ];
  
  console.log("Full 3D Array:", threeDArray);
  console.log("First element of first sub-array:", threeDArray[0][0][0]); 
  console.log("Last element of last sub-array:", threeDArray[2][1][2]); 
  console.log("Middle element:", threeDArray[1][0][1]); 
  
  for (let i = 0; i < threeDArray.length; i++) {
    for (let j = 0; j < threeDArray[i].length; j++) {
      for (let k = 0; k < threeDArray[i][j].length; k++) {
        console.log(`Element at [${i}][${j}][${k}] is: ${threeDArray[i][j][k]}`);
      }
    }
  }
  