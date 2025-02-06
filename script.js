function stringChop(str, size) {
let ans = [];
	if (!str) { 
        return ans;
    }
	let newStr=[]
    
for (let i = 0; i < str.length; i += size) {
	str.slice(i, i + size);
    ans.push(newStr);
}    
return ans;
}

// Do not change the code below
const str = prompt("Enter String.");
const size = prompt("Enter Chunk Size.");
alert(stringChop(str, size));
