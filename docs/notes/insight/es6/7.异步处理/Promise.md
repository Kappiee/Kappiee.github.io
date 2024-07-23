---
title: Promise
author: Plume Theme
createTime: 2024/07/16 21:30:35
permalink: /article/wcjnwtw7/
---
# Promise

## 回调地狱 callback hell

示例

```js
// 向某位女生发送一则表白短信
// name: 女神的姓名
// onFulFiled: 成功后的回调
// onRejected: 失败后的回调
function sendMessage(name, onFulffiled, onRejected) {
  // 模拟 发送表白短信
  console.log(
    `邓哥 -> ${name}：最近有谣言说我喜欢你，我要澄清一下，那不是谣言😘`
  );
  console.log(`等待${name}回复......`);
  // 模拟 女神回复需要一段时间
  setTimeout(() => {
    // 模拟 有10%的几率成功
    if (Math.random() <= 0.1) {
      // 成功，调用 onFulFilled，并传递女神的回复
      onFulFiled(`${name} -> 邓哥：我是九，你是三，除了你还是你😘`);
    } else {
      // 失败，调用 onRejected，并传递女神的回复
      onRejected(`${name} -> 邓哥：你是个好人😜`);
    }
  }, 1000);
}
```

```js
// 首先向 李建国 发送消息
sendMessage(
  '李建国',
  (reply) => {
    // 如果成功了，输出回复的消息后，结束
    console.log(reply);
  },
  (reply) => {
    // 如果失败了，输出回复的消息后，向 王富贵 发送消息
    console.log(reply);
    sendMessage(
      '王富贵',
      (reply) => {
        // 如果成功了，输出回复的消息后，结束
        console.log(reply);
      },
      (reply) => {
        // 如果失败了，输出回复的消息后，向 周聚财 发送消息
        console.log(reply);
        sendMessage(
          '周聚财',
          (reply) => {
            // 如果成功了，输出回复的消息后，结束
            console.log(reply);
          },
          (reply) => {
            // 如果失败了，输出回复的消息后，向 刘人勇 发送消息
            console.log(reply);
            sendMessage(
              '刘人勇',
              (reply) => {
                // 如果成功了，输出回复的消息后，结束
                console.log(reply);
              },
              (reply) => {
                // 如果失败了，就彻底没戏了
                console.log(reply);
                console.log('邓哥命犯天煞孤星，注定孤独终老！！');
              }
            );
          }
        );
      }
    );
  }
);
```

## Promise A+规范

<https://promisesaplus.com.cn/>

## Promise链式调用

- 若没有相关的后续处理，新任务的状态和前任务一致，数据为前任务的数据

- 若有后续处理但还未执行，新任务挂起。
- 若后续处理执行了，则根据后续处理的情况确定新任务的状态
    - 后续处理执行无错，新任务的状态为完成，数据为后续处理的返回值
    - 后续处理执行有错，新任务的状态为失败，数据为异常对象
    - 后续执行后返回的是一个任务对象，新任务的状态和数据与该任务对象一致

示例

```js
// 向某位女生发送一则表白短信
// name: 女神的姓名
// onFulFiled: 成功后的回调
// onRejected: 失败后的回调
function sendMessage(name) {
  return new Promise((resolve, reject) => {
    // 模拟 发送表白短信
    console.log(
      `邓哥 -> ${name}：最近有谣言说我喜欢你，我要澄清一下，那不是谣言😘`
    );
    console.log(`等待${name}回复......`);
    // 模拟 女神回复需要一段时间
    setTimeout(() => {
      // 模拟 有10%的几率成功
      if (Math.random() <= 0.1) {
        // 成功，调用 onFulFilled，并传递女神的回复
        resolve(`${name} -> 邓哥：我是九，你是三，除了你还是你😘`);
      } else {
        // 失败，调用 onRejected，并传递女神的回复
        reject(`${name} -> 邓哥：你是个好人😜`);
      }
    }, 1000);
  });
}

sendMessage('李建国')
  .catch((reply) => {
    // 失败，继续
    console.log(reply);
    return sendMessage('王富贵');
  })
  .catch((reply) => {
    // 失败，继续
    console.log(reply);
    return sendMessage('周聚财');
  })
  .catch((reply) => {
    // 失败，继续
    console.log(reply);
    return sendMessage('刘人勇');
  })  
  .then((reply) => {
      // 成功，结束
      console.log(reply);
      console.log('邓哥终于找到了自己的伴侣');
  })
  .catch((reply) => {
      // 最后一个也失败了
      console.log(reply);
      console.log('邓哥命犯天煞孤星，无伴终老，孤独一生');
  });

```

## Promise的静态方法

| 方法名                      | 含义                           |
|--------------------------|------------------------------|
| Promise.resolve(data)    | 直接返回一个完成状态的任务                |
| Promise.reject(reason)   | 直接返回一个拒绝状态的任务                |
| Promise.all(任务数组)        | 返回一个任务 任务数组全部成功则成功 任何一个失败则失败 |
| Promise.any(任务数组)        | 返回一个任务 任务数组任一成功则成功 任务全部失败则失败 |
| Promise.allSettled(任务数组) | 返回一个任务 任务数组全部已决则成功 该任务不会失败   |
| Promise.race(任务数组)       | 返回一个任务 任务数组任一已决则已决，状态和其一致    |

示例

```js
// 做饭
function cook() {
  return new Promise((resolve, reject) => {
    console.log('邓哥打开了电饭煲');
    setTimeout(() => {
      if (Math.random() < 0.5) {
        resolve('饭已ok');
      } else {
        reject('做饭却忘了加水，米饭变成了爆米花');
      }
    }, 2000);
  });
}

// 洗衣服
function wash() {
  return new Promise((resolve, reject) => {
    console.log('邓哥打开了洗衣机');
    setTimeout(() => {
      if (Math.random() < 0.5) {
        resolve('衣服已经洗好');
      } else {
        reject('洗衣服时停水了，洗了个寂寞');
      }
    }, 2500);
  });
}

// 打扫卫生
function sweep() {
  return new Promise((resolve, reject) => {
    console.log('邓哥打开了扫地机器人');
    setTimeout(() => {
      if (Math.random() < 0.5) {
        resolve('地板扫的非常干净');
      } else {
        reject('扫地机器人被哈士奇一爪掀翻了');
      }
    }, 3000);
  });
}

// 任务数组全部已决则继续执行then
Promise.allSettled([cook(), wash(), sweep()]).then((result) => {
  // 处理汇总结果

  const report = result
    .map((r) => (r.status === 'fulfilled' ? r.value : r.reason))
    .join(';');
  console.log(report);
});

/*
邓哥打开了电饭煲
邓哥打开了洗衣机
邓哥打开了扫地机器人
饭已ok;衣服已经洗好;扫地机器人被哈士奇一爪掀翻了
*/
```

示例

```js
/**
 * 根据页码获取学生数据，返回Promise
 * @param {Number} page 页码
 */
function fetchStudents(page) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (Math.random() < 0.9) {
        reject(new Error(`网络错误！获取第${page}页数据失败！`));
        return;
      }
      // 模拟学生数据
      const students = new Array(10).fill(null).map((d, i) => ({
        id: `NO.${(page - 1) * 10 + i + 1}`,
        name: `姓名${(page - 1) * 10 + i + 1}`,
      }));
      resolve(students);
    }, Math.floor(Math.random() * 5000));
  });
}

// 利用 fetchStudents 函数，完成下面的练习

// 打印1~10页数据成功则打印，报错则停止打印
async function printStudentData() {
  for (let i = 1; i <= 10; i++) {
    try {
      const students = await fetchStudents(i);
      console.log(`第${i}页的学生数据：`, students);
    } catch (error) {
      console.error(`在获取第${i}页数据时发生错误：`, error);
      break;
    }
  }
}

printStudentData();

// 获取1-10页的学生，最终按照页码的顺序合并成一个数组，任何一页的数据获取出现错误，则任务不再继续，打印错误消息
const proms = new Array(10).fill(1).map((it, i) => fetchStudents(i + 1));

Promise.all(proms)
  .then((result) => {
    console.log(result.flat());
  })
  .catch((err) => {
    console.log(err);
  });

// 获取1-10页的学生，最终按照页码的顺序合并成一个数组，如果某些页码的数据获取失败，就不加入该数据即可

Promise.allSettled(proms).then((result) => {
  result = result
    .filter((r) => r.status === 'fulfilled')
    .map((it) => it.value)
    .flat();
  console.log(result);
})

// 获取1-10页的学生，打印最先获取到的数据，如果全部都获取失败，则打印所有的错误消息
Promise.any(proms).then(
  (result) => {
    console.log(result);
  },
  (err) => {
    console.log(err);
  }
)

// 获取1-10页的学生，输出最先得到的结果（有结果输出结果，有错误输出错误）
Promise.race(proms).then(
  (result) => {
    console.log(result);
  },
  (err) => {
    console.log(err);
  }
)
```

## 事件循环

根据目前所学，进入事件队列的函数有以下几种：

- `setTimeout`的回调，宏任务（macro task）
- `setInterval`的回调，宏任务（macro task）
- Promise的`then`函数回调，**微任务**（micro task）
- `requestAnimationFrame`的回调，宏任务（macro task）
- 事件处理函数，宏任务(macro task)

## 练习题

1. 下面代码的输出结果是什么

   ```js
   const promise = new Promise((resolve, reject) => {
       console.log(1); 
       resolve(); 
       console.log(2);
   })
   
   promise.then(() => {
       console.log(3);
   })
   
   console.log(4);
   ```

2. 下面代码的输出结果是什么

   ```js
   const promise = new Promise((resolve, reject) => {
       console.log(1); 
       setTimeout(()=>{
         console.log(2)
         resolve(); 
      console.log(3);
       })
   })
   
   promise.then(() => {
       console.log(4);
   })
   
   console.log(5);
   ```

3. 下面代码的输出结果是什么

   ```js
   const promise1 = new Promise((resolve, reject) => {
   setTimeout(() => {
       resolve()
     }, 1000)
   })
   const promise2 = promise1.catch(() => {
     return 2;
   })
   
   console.log('promise1', promise1) 
   console.log('promise2', promise2) 
   
   setTimeout(() => {
     console.log('promise1', promise1) 
     console.log('promise2', promise2) 
   }, 2000)
   ```

4. 下面代码的输出结果是什么

   ```js
   async function m(){
     const n = await 1;
     console.log(n);
   }
   
   m();
   console.log(2);
   ```

5. 下面代码的输出结果是什么

   ```js
   async function m(){
     const n = await 1;
     console.log(n);
   }
   
   (async ()=>{
     await m();
     console.log(2);
   })();
   
   console.log(3);
   ```

6. 下面代码的输出结果是什么

   ```js
   async function m1(){
     return 1;
   }
   
   async function m2(){
     const n = await m1();
     console.log(n)
     return 2;
   }
   
   async function m3(){
     const n = m2();
     console.log(n);
     return 3;
   }
   
   m3().then(n=>{
     console.log(n);
   });
   
   m3();
   
   console.log(4);
   ```

7. 下面代码的输出结果是什么

   ```js
   Promise.resolve(1)
     .then(2)
     .then(Promise.resolve(3))
     .then(console.log)

    // then(必须是函数否则无效)
    // 上式 等价于 Promise.resolve(1).then(console.log)
   ```

8. 下面代码的输出结果是什么

   ```js
   var a;
   var b = new Promise((resolve, reject) => {
     console.log('promise1');
     setTimeout(()=>{
       resolve();
     }, 1000);
   }).then(() => {
     console.log('promise2');
   }).then(() => {
     console.log('promise3');
   }).then(() => {
     console.log('promise4');
   });
   
   a = new Promise(async (resolve, reject) => {
     console.log(a);
     await b;
     console.log(a);
     console.log('after1');
     await a
     resolve(true);
     console.log('after2');
   });
   
   console.log('end');
   ```

9. 下面代码的输出结果是什么

   ```js
   async function async1() {
       console.log('async1 start');
       await async2();
       console.log('async1 end');
   }
   async function async2() {
    console.log('async2');
   }
   
   console.log('script start');
   
   setTimeout(function() {
       console.log('setTimeout');
   }, 0)
   
   async1();
   
   new Promise(function(resolve) {
       console.log('promise1');
       resolve();
   }).then(function() {
       console.log('promise2');
   });
   console.log('script end');
   ```

解题方式 列出输出和队列情况

```js
//输出
"script start"
"async1 start"
console.log('async2'); "async2"
console.log('promise1'); "promise1"
"script end"
"async1 end"
"promise2"
"setTimeout"

////队列情况 先执行全局上下文 后执行微队列，宏队列
微队列
console.log('async1 end'); console.log('promise2');

宏队列
console.log('setTimeout');
```
