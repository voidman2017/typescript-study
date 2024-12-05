/*
 * @lc app=leetcode.cn id=973 lang=javascript
 *
 * [973] 最接近原点的 K 个点
 */

// @lc code=start
/**
 * @param {number[][]} points
 * @param {number} K
 * @return {number[][]}
 */
var kClosest = function (points, K) {
  const arr = points
    .map((point) => {
      return {
        distance: point[0] * point[0] + point[1] * point[1],
        point
      };
    })
    .sort((a, b) => a.distance - b.distance);
  const res = [];
  for (let i = 0; i < K; i++) {
    res.push(arr[i].point);
  }
  return res;
};
// @lc code=end
