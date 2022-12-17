ие
Y
1
function solution(string) {
2
let newStr = '';
3
let Upper = 'ABCDEFGIHKLMNOPQRSTYUWXVZ';
4
for(let i = 0; i<string.length;i++) {
5
if(Upper.includes(string[i])) {
6
newStr = `${newStr} ${string[i]}`
7
} else {
8
newStr = `${newStr}${string[i]}`
9
}
10
}
11
return newStr;
12
}
