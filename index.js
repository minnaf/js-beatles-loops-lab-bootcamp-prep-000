// add solution here

function theBeatlesPlay(musicians, instruments){
  var array = [];
  for (var i = 0; i < musicians.length; i++){
    array.push(`${musicians[i]} plays ${instruments[i]}`);
  }
  return array;
}

function johnLennonFacts(facts){
  while (0 < facts.length) {
    var i = 0;
    i++;
    facts[i]= facts[i]+'!!!';
    --facts.length;
  }
  return facts;
}