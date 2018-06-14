function splitAndMerge(str, sp) {
	let myArray = str.split(" ");
	let newArray = myArray.map(symb => symb.split("").join(sp));
	return newArray.join(" ");
}


console.log(splitAndMerge("My name is John", " "));
console.log(splitAndMerge("Hello World!", ","));


function convert(hash) {
	return Object.entries(hash);
}

console.log(convert({name: 'Jeremy', age: 24, role: 'Software Engineer'}));


function toCamelCase(str) {
	let sp = str.indexOf("-") > 0 ? "-" : "_";
	let newArr = str.split(sp);
	const first = newArr[0];
	updatedArr = [];
	for (i = 0; i < newArr.length; i++)
		{updatedArr[i] = newArr[i].charAt(0).toUpperCase() + newArr[i].slice(1);}
	updatedArr[0] = first;
	return updatedArr.join("");
}

console.log(toCamelCase("the-stealth-warrior")); 
console.log(toCamelCase("the_stealth_Warrior")); 


function reverseWords(str) {
	let newArr = str.split(" ");
	for (i = 0; i < newArr.length; i++)
		{newArr[i] = newArr[i].split('').reverse().join('');}
	return newArr.join(" ");
}

console.log(reverseWords(" A fun little challenge! "));


function stringExpansion(str) {
	newStr = "";
	myStr = str.split("");
	for (var i = 0; i < myStr.length; i++) {
		if ( !isNaN(myStr[i]) ) {
			if ( isNaN(myStr[i+1]) ) {
				newStr += myStr[i+1].repeat(Number(myStr[i])-1);
			}
		}
		else {
			newStr += myStr[i];
		}
	}	
	return newStr;
}

console.log(stringExpansion('3D2a5d2f'));
console.log(stringExpansion('3d332f2a'));
console.log(stringExpansion('abcde')); 
