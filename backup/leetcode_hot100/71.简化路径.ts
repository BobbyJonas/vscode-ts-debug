/* eslint-disable no-continue */
/*
 * @lc app=leetcode.cn id=71 lang=typescript
 *
 * [71] 简化路径
 */

// @lc code=start
function simplifyPath(path: string): string {
  let path1 = path;
  while (path1.indexOf('//') >= 0) path1 = path1.replace('//', '/');
  if (path1[0] === '/') path1 = path1.substring(1);
  if (path1[path1.length - 1] === '/') path1 = path1.substring(0, path1.length - 1);
  const pathArr: string[] = path1.split('/');
  const pathStack: string[] = [];
  for (let i = 0; i < pathArr.length; i++) {
    if (pathArr[i] === '.') continue;
    if (pathArr[i] === '..') {
      if (pathStack.length > 0) pathStack.pop();
    } else pathStack.push(pathArr[i]);
  }
  return `/${pathStack.join('/')}`;
}
// @lc code=end
console.log(simplifyPath('/a/../../b/../c//.//'));
