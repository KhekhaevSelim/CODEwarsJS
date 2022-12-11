function toCsvText(array) {
    let result = '';
    for(let i = 0; i<array.length;i++) {
    for(let j = 0; j<array[i].length;j++) {
    if(j<array[i].length-1) {
    result = result + array[i][j] + ','
    } else if (j===array[i].length-1 && i<array.length-1) {
    result = result + array[i][j] + '\n'
    } else {
    result = result + array[i][j];
    }
    }
    }
      return result}