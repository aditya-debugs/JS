const myObject = {
    js: 'javascript',
    cpp: 'C++',
    ruby: 'ruby',
    swift: 'swift by apple'
}

for (const key in myObject) {
    //console.log(`${key} shortcut is for ${myObject[key]}`);
}

const programming =["js", "cpp", "java", "py"]

for (const key in programming) {
    ///console.log(programming[key]);
}

const map = new Map()
map.set('IN', "India")
map.set('USA', "United States of America")
map.set('FR', "France")
map.set('IN', "India")

for (const key in map) {
console.log(key);
}
//maps are not iteratable in for-in loops

