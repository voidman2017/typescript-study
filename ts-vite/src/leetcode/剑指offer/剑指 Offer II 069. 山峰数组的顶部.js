/**
 * @param {number[]} arr
 * @return {number}
 */
 var peakIndexInMountainArray = function (arr) {
    const max = [...arr].sort((a, b) => a - b)[arr.length - 1]
    return arr.indexOf(max)
};



/**
 * @param {number[]} arr
 * @return {number}
 */
 var peakIndexInMountainArray = function (arr) {
    return arr.indexOf(Math.max(...arr))
};