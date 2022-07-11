let wang = {
  name: "wanglaoshi",
  age: 29,
  height: 165,
};
let wangMama = new Proxy(wang, {
  get(target, key) {
    if (key == "age") {
      return wang.age - 1;
    } else if (key == "height") {
      return wang.height - 5;
    }
    return target[key];
  },
  set(target, key, val) {
    if (key == "boyfriend") {
      let boyfriend = val;
      if (boyfriend.age > 40) {
        throw new Error("太老");
      } else if (boyfriend.salary < 20000) {
        throw new Error("太穷");
      } else {
        target[key] = val;
        return true;
      }
    }
  },
});
console.log(wangMama.age);
console.log(wangMama.height);
wangMama.boyfriend = {
  age: 41,
  salary: 3000,
};
