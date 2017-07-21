function main() {
    var t = parseInt(readLine());
    function validator(string) {
        let openersClosers = {
            '{' : '}',
            '(' : ')',
            '[' : ']'
        }
        let openers = ['{', '(', '[']
        let closers = ['}', ')', ']']
        let arr = []

        for(var i = 0; i < string.length; i++) {
            let char = string[i]
            if(openers.includes(char)) {
                arr.push(char)
            } else if (closers.includes(char)) {
                if(!arr.length) { //if there is a closer with no opener in the arr must be false
                    return console.log("NO")
                } else {
                    let lastOpener = arr.pop();
                    if(openersClosers[lastOpener] !== char) { //if val of last opener as key doesn't match closer
                        return console.log("NO");
                    }
                }
            }
        }
        if(arr.length === 0) { // if all openers were removed when closers found
            return console.log('YES')
        } else {return console.log('NO')}
    }

    for(var a0 = 0; a0 < t; a0++){
        var expression = readLine();
        validator(expression)
    }
}
