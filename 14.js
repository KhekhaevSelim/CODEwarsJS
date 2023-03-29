function noSpace(x){
    let arr = [];
  for(let i = 0; i < x.length; i++){
  if(x[i] !== " "){
    arr.push(x[i])
  }
   
  }
    return arr.join("")
  }