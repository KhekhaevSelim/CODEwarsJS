function findMultiples(integer, limit) {
    let result = [];
    let i = 0;
    while(integer+i<=limit) {
    if((integer + i)%integer===0) {
    result.push(integer+i)
    }
    i++;
    }
    return result;
    }
    
    console.log(findMultiples(2,6))