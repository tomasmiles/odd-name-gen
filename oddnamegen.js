const vowels =  ["a","e"',"i","o","u","y"];
const consonants = ["b","c","d","f","g","h","j","k","l","m","n","p","q","r","s","t","v","w","x","y","z"];

function  getAllConcatenations(var firstNames, var lastNames) {
	let concatenatedNames = new Array[firstNames.length*lastNames.length];
	for(let f = 0; f < firstNames.length; f++) {
		for(let l = 0; l < lastNames.length; l++) {
			concatenatedNames[f*lastNames.length+l] = firstNames[f] + lastNames[l];
		}
	}
	return concatenatedNames;
}

function getAllFullNames(var firstNames, var middleNames, var lastNames) {
	let fullNames = new Array[firstNames.length*middleNames.length*lastNames.length];
	for(let f = 0; f < firstNames.length; f++) {
		for(let m = 0; m < middleNames.length; m++) {
			for(let l = 0; l < lastNames.length; l++) {
			}
		}
	}
}

console.log(getAllConcatenations(["Tomas","Gandalf","Athena"],["Thundercracker","DibbledibbleDop","Kaboom"]));


