//导入mudule-1.js里向外暴露的数据
import {a,b,add} from "./mudule-1.js";
console.log(add);
let s =add(a,b);
console.log("ADD函数执行体结果："+s);