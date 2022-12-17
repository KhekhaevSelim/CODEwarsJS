function arrayDiff(a, b) {
    let result = [];
    for(let num of a) {
    if(!b.includes(num)){
    result.push(num);
    }
    }
    return result;
    }