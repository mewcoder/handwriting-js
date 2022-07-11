/**
 * @desc 手写 LazyMan ，实现 sleep 和 eat 两个方法，支持链式调用
 */
export class LazyMan {
  constructor(name) {
    this.name = name;
    this.tasks = [];
    // 调用
    setTimeout(() => {
      this._next();
    });
  }
  _next() {
    const task = this.tasks.shift();
    task && task();
  }
  eat(foot) {
    const task = () => {
      console.log(`${this.name} is eating ${foot}`);
      this._next();
    };
    this.tasks.push(task);
    return this;
  }
  sleep(time) {
    const task = () => {
      setTimeout(() => {
        console.log(`${this.name} sleep ${time}s`);
        this._next();
      }, 1000 * time);
    };
    this.tasks.push(task);
    return this;
  }
}

