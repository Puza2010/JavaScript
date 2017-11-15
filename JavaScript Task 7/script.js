var text = 'Velociraptor is a genus of herbivorous ceratopsid dinosaur that first appeared during the late Maastrichtian stage of the late Cretaceous period.';
var dinosaur = 'triceratops';

dinosaur = dinosaur.toUpperCase(dinosaur);

var fixedText = text.replace('Velociraptor', dinosaur);
var numberofletters = fixedText.length/2;
var halftext = fixedText.substr(0, numberofletters);

console.log(halftext);