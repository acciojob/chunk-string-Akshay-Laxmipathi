function stringChop(str, size) {
  // your code here
	if(!str) {
		return [];
	}
	let chunks = [];
	for(let i=0; i<str.size; i++) {
		let subStr = slice(i, i+slice);
		chunks.push(substr);
	}
	return chunks;
}

// Do not change the code below
const str = prompt("Enter String.");
const size = prompt("Enter Chunk Size.");
alert(stringChop(str, size));
