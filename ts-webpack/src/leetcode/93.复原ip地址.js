/*
 * @lc app=leetcode.cn id=93 lang=javascript
 *
 * [93] 复原IP地址
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string[]}
 */
var restoreIpAddresses = function(s) {
  // 存放所有IP地址
  let ipAdd = [];

  // 递归
  let search = (cur, sub) => {
    // 过滤非法输入
    if (sub.length > 12) return;
    // 边界条件
    if (cur.length === 4 && cur.join("") === s) {
      ipAdd.push(cur.join("."));
    } else {
      // 递归思想
      for (let i = 0, tmp, len = Math.min(3, sub.length); i < len; i++) {
        tmp = sub.substring(0, i + 1);
        if (tmp - 256 < 0) {
          // +tmp:将字符串转换为数字
          search(cur.concat([+tmp]), sub.substring(i + 1, sub.length));
        }
      }
    }
  };

  search([], s);

  return ipAdd;
};
// @lc code=end
