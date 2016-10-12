/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    const res = []
    const hash = {}
    for (let i = 0, len = strs.length, key; i < len; i++) {
        key = strs[i].split('').sort().join()
        if (hash[key] === undefined) {
            hash[key] = res.length
            res.push([strs[i]])
        } else {
            res[hash[key]].push(strs[i])
        }
    }
    return res
};

console.log(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]))