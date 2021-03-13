var obj={};
var name='小麦是天才';
obj.name=name;
var flag=true;
console.log(name)
//导出方式1
export {
    obj
}

//导出方式2
export let age=18;
export let height=1.88;


//导出类/函数
var num =0;
export function mul(num1,num2){
  return  num=num1+num2;
}


//导出默认函数，唯一
export default function address(num1,num2){
    return  '北京市';
}

