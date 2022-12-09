function invert(array) {
    for(let i = 0; i< array.length; i++) {
    if(array[i] < 0) {
    array[i] = array[i] * -1;
    } else if(array[i] > 0) {
    array[i] = array[i] * -1;
    } else if( array[i] === 0) {
    array[i]= -0;
    } else {
    array[i]=[];
    }
    }
       return array;
    }