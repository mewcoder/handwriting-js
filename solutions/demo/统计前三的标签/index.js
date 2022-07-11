function TopTag() {
  // 获取页面中所有的标签
  let tags = document.querySelectorAll("*");
  let arr = Array.from(tags).map((e) => e.tagName.toLowerCase());
  let map = {};
  arr.forEach((item) => {
    if (!map[item]) {
      map[item] = 1;
    } else {
      map[item] += 1;
    }
  });

  const res = Object.keys(map)
    .sort((a, b) => {
      return map[b] - map[a]; // 降序排列
    })
    .splice(0, 3); // 取前三个
  return res;
}
console.log(TopTag());
