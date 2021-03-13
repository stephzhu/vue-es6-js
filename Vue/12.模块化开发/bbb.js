console.log(name)     //可以访问到
// if(flag){             //flag未定义
//
//     console.log(name)
//
// }

// 导入{}定义的变量

import {obj} from  './aaa.js';
console.log(obj.name);

// 导入export定义的变量
import {age,height} from './aaa.js';
console.log(age)
console.log(height);

// 导入函数
import {mul} from  './aaa.js';
var num=mul(10,20);
console.log(num);


//导入默认,唯一性，addr可随意命名
import addr from './aaa.js';
console.log(addr)


//导入全部
import * as aaa from './aaa.js'
console.log(aaa.obj.name)