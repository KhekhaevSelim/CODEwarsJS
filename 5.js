function gooseFilter (birds) {
    var geese = ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"];
  
  for(let i = 0; i<birds.length;i++) {
  if(geese.includes(birds[i])) {
  birds.splice(i,1)
  i--;
  }
  }
  return birds;
  };