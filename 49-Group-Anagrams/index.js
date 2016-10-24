/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    const res = []
    const hash = {}
    let key
    for (let str of strs) {
        key = str.split('').sort().join()
        if (hash[key] === undefined) {
            hash[key] = res.length
            res.push([str])
        } else {
            res[hash[key]].push(str)
        }
    }
    return res
};

console.log(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]))