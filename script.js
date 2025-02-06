function stringChop(str, size) {
let ans = [];
	if (!str) { 
        return ans;
    }
    
for (let i = 0; i < str.length; i += size) {
	let newStr=str.slice(i, i + size)
    result.push(newStr);
}    
console.log(result);
}

// Do not change the code below
const str = prompt("Enter String.");
const size = prompt("Enter Chunk Size.");
alert(stringChop(str, size));
