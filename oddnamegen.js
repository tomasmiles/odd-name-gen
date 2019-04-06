const vowels = ["a","e","i","o","u","y"];
const consonants = ["b","c","d","f","g","h","j","k","l","m","n","p","q","r","s","t","v","w","x","y","z"];

function  getAllConcatenations(firstNames, lastNames) {
	let concatenatedNames = [];
	for(let f = 0; f < firstNames.length; f++) {
		for(let l = 0; l < lastNames.length; l++) {
			concatenatedNames.push(firstNames[f] + lastNames[l]);
		}
	}
	return concatenatedNames;
}

function getAllFullNames(firstNames, middleNames, lastNames) {
	let fullNames = [];
	for(let f = 0; f < firstNames.length; f++) {
		for(let m = 0; m < middleNames.length; m++) {
			for(let l = 0; l < lastNames.length; l++) {
				fullNames.push(firstNames[f] + " " + middleNames[m] + " " + lastNames[l]);
			}
		}
	}
}

console.log(getAllConcatenations(["Tomas","Gandalf","Athena"],["Thundercracker","DibbledibbleDop","Kaboom"]));
