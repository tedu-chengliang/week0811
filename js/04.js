//接收UI线程传递的数据
onmessage=function(e){
  //获取传递
  var num=e.data;
  console.log(num);
  //执行这组耗时的任务
  for(var i=0,sum=0;i<num;i++){
    sum+=i;
  }
  //执行完以后要把结果返回
  //发送消息
  postMessage(sum);
}