/**
 * @param {string} version1
 * @param {string} version2
 * @return {number}
 */
var compareVersion = function(version1, version2) {
    const version1Arr = version1.split('.').map(val => +val)
    const version2Arr = version2.split('.').map(val => +val)
    const maxLen = Math.max(version1Arr.length, version2Arr.length)

    for (let i = 0; i < maxLen; i++) {
        if (version1Arr[i] && !version2Arr[i]) {
            return 1
        }
        if (!version1Arr[i] && version2Arr[i]) {
            return -1
        }
        if (version1Arr[i] > version2Arr[i]) {
            return 1
        }
        if (version1Arr[i] < version2Arr[i]) {
            return -1
        }
    }
    return 0
};

console.log(compareVersion('1', '0'))