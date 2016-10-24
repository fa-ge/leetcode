/**
 * @param {string} s
 * @return {string[]}
 */
var findRepeatedDnaSequences = function(s) {
    const map = new Set()
    const set = new Set()
    const wordToBit = {
        A: '00',
        C: '01',
        G: '10',
        T: '11',
    }
    const bitStr = s.replace(/A|C|G|T/g, a => wordToBit[a])
    for (let i = 0, len = bitStr.length, tmpKey; i <= len - 20; i += 2) {
        tmpKey = +('0b' + bitStr.substr(i, 20))
        if (map.has(tmpKey)) {
            set.add(s.substr(i / 2, 10))
        } else {
            map.add(tmpKey)
        }
    }
    return Array.from(set)
};

console.log(findRepeatedDnaSequences("AAAAAAAAAA"))