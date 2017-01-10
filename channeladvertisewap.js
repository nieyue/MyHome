;(function(window){
document.querySelector('body').style.margin=0;
document.querySelector('body').style.padding=0;

var channelAdvertiseWap=(function(){
/**
**对象初始化
*/

    function channelAdvertiseWap(UI,channelAdvertiseWapConfig){
      //广告位对象配置
    	this.channelAdvertiseWapConfig=[
      {
       	channel_advertise_wap_id:'',//广告位id
       	name:'',//名称
        platform:'移动端',//平台
        type:'悬浮',//类型
        location:'顶部',
        text:"娱乐娱乐娱乐娱乐娱乐娱乐娱乐娱乐娱乐",
        img:['http://www.yayao8.com/resources/img/logo.jpg','http://www.yayao8.com/resources/img/logo.jpg','http://www.yayao8.com/resources/img/logo.jpg'],//图片路径
        link:'http://www.baidu.com',//链接地址
        status:'',//状态
        update_time:timeStampToDate(new Date()),//更新时间
        admin_id:''//渠道主id
       }
       ];
       //广告UI
       this.UI={
       	width:'100%',//默认移动端
       	height:'150px',
        backgroundColor:'#fff',
       	position:"relative",//默认固定
       	left:'0',//默认0
       	top:'0',//默认0
        margin:'auto',
        padding:'2px',
       	zindex:'10001'
       };
     
		//$.extend(this.UI,UI);
    if(UI){
		this.UI=extendObj(this.UI,UI);
    }
     if(channelAdvertiseWapConfig){
    this.channelAdvertiseWapConfig=transform(extendObj(this.channelAdvertiseWapConfig,channelAdvertiseWapConfig));
    }
    }
      
    /**
    **对象方法定义
    */
    channelAdvertiseWap.prototype={
/**
**配置整体广告
*/
        getchannelAdvertiseWapConfig:function(){
          var _this=this;
    //_this.config.location='顶部';
   // _this.config.location='底部';
    //_this.config.type="悬浮";
  // _this.config.type="内嵌";
   
     return _this.channelAdvertiseWapConfig;
        },
/**
**获取广告层结构
*thischannelAdvertiseWapConfig getchannelAdvertiseWapConfig()的返回值
*location  广告位置
*/
 getchannelAdvertiseWapDiv:function(){
    var thischannelAdvertiseWapConfig=this.getchannelAdvertiseWapConfig();
    var thischannelAdvertiseWapConfigLength=thischannelAdvertiseWapConfig.length;
console.log(thischannelAdvertiseWapConfig.length)
    for(var i=0;i<thischannelAdvertiseWapConfigLength;i++){      
           var location;
          if(thischannelAdvertiseWapConfig[i].type=='内嵌'){
            this.UI.zindex='9999';
            if(thischannelAdvertiseWapConfig[i].location=='顶部'){
              location='insertBefore';
            }
            if(thischannelAdvertiseWapConfig[i].location=='底部'){
              location='appendChild';
            }
          }

            if(thischannelAdvertiseWapConfig[i].type=='悬浮'){
            this.UI.position='fixed';
               this.UI.zindex='10002';
            if(thischannelAdvertiseWapConfig[i].location=='顶部'){
              location='insertBefore';
            }
            if(thischannelAdvertiseWapConfig[i].location=='底部'){
              location='appendChild';
              this.UI.top="100%";
              this.UI.margin="-"+this.UI.height+" 0px";
            }       
          }

            //创建div
             var thisDiv=document.createElement("div");
             thisDiv.setAttribute("style","background-color:"+this.UI.backgroundColor+";position:"+this.UI.position+";left:"+this.UI.left+";top:"+this.UI.top+";height:"+this.UI.height+";width:"+this.UI.width+";margin:"+this.UI.margin);
             thisDiv.setAttribute('id',"ui");
             //创建第一个a
             var firsta=document.createElement("a");
             firsta.setAttribute("href",thischannelAdvertiseWapConfig[i].link);
             firsta.setAttribute("target",'view_window');
             firsta.setAttribute("id",'aopen');
             firsta.setAttribute("style","padding:"+this.UI.padding+";text-decoration:none !important;box-sizing:border-box;display:block;position:absolute;left:0;top:0;border:1px solid #ccc;width:100%;height:100%;;");
             //创建第一个a里面的text
             var firsttext=document.createElement("div");
             firsttext.setAttribute("style","width:100%;height:20%;color:#000;z-index:"+this.UI.zindex);
             firsttext.innerHTML=thischannelAdvertiseWapConfig[i].text;
             firsta.appendChild(firsttext);

             // //创建第一个a里面的第一个img
             // var firstimg=document.createElement("img");
             // firstimg.setAttribute("style","padding:"+this.UI.padding+";width:32%;height:80%;z-index:"+this.UI.zindex);
             // firstimg.setAttribute("src",thischannelAdvertiseWapConfig[i].img);
             // firsta.appendChild(firstimg);
             // //创建第一个a里面的第二个img
             // var firstimg2=document.createElement("img");
             // firstimg2.setAttribute("style","padding:"+this.UI.padding+";width:32%;height:80%;z-index:"+this.UI.zindex);
             // firstimg2.setAttribute("src",thischannelAdvertiseWapConfig[i].img);
             // firsta.appendChild(firstimg2);
             // //创建第一个a里面的第三个img
             // var firstimg3=document.createElement("img");
             // firstimg3.setAttribute("style","padding:"+this.UI.padding+";width:32%;height:80%;z-index:"+this.UI.zindex);
             // firstimg3.setAttribute("src",thischannelAdvertiseWapConfig[i].img);
             // firsta.appendChild(firstimg3);
              console.log(thischannelAdvertiseWapConfig[i].img.length)
              if(thischannelAdvertiseWapConfig[i].img.length==1){
              var firstimg=document.createElement("img");
              firstimg.setAttribute("style","padding:"+this.UI.padding+";width:98%;height:60%;z-index:"+this.UI.zindex);
              firstimg.setAttribute("src",thischannelAdvertiseWapConfig[i].img[0]);
              firsta.appendChild(firstimg);
              }else if(thischannelAdvertiseWapConfig[i].img.length==2){
              //创建第一个a里面的第一个img
              var firstimg=document.createElement("img");
              firstimg.setAttribute("style","padding:"+this.UI.padding+";width:48%;height:60%;z-index:"+this.UI.zindex);
              firstimg.setAttribute("src",thischannelAdvertiseWapConfig[i].img[0]);
              firsta.appendChild(firstimg);
             // //创建第一个a里面的第二个img
              var firstimg2=document.createElement("img");
              firstimg2.setAttribute("style","padding:"+this.UI.padding+";width:48%;height:60%;z-index:"+this.UI.zindex);
              firstimg2.setAttribute("src",thischannelAdvertiseWapConfig[i].img[1]);
              firsta.appendChild(firstimg2);

              }else if(thischannelAdvertiseWapConfig[i].img.length==3){
              //创建第一个a里面的第n个img
              for(var k=0;k<thischannelAdvertiseWapConfig[i].img.length;k++){ 
             var firstimg=document.createElement("img");
             firstimg.setAttribute("style","padding:"+this.UI.padding+";width:32%;height:60%;z-index:"+this.UI.zindex);
             firstimg.setAttribute("src",thischannelAdvertiseWapConfig[i].img[k]);
             firsta.appendChild(firstimg);
              }
              }
              else{
             throw new Error("图片数目1~3！");
              }

             //把a导入div,把div导入body
             thisDiv.appendChild(firsta);
             var bodyNode=document.getElementsByTagName("body")[0];
             //bodyNode.appendChild(thisDiv);
             //动态添加
             bodyNode[location](thisDiv,bodyNode.childNodes[0]);
             //创建第二个a 
             var seconda=document.createElement("a");
             seconda.innerHTML="×";
             seconda.setAttribute("href",'javascript:;');
             seconda.setAttribute("id",'aclose');
             seconda.setAttribute("style","position:absolute;top:0;right:1px;border:1px solid #ccc; background-color:#ccc;color:white;height:20px;width:20px;line-height:20px;text-align:center;font-size:22px;text-decoration:none;");
             thisDiv.appendChild(seconda);

    }

             //监听第二个a的事件，删除整个div
            // var _this=this;
          var acloseAll = document.querySelectorAll("#ui #aclose");
            for( var j = 0 ;j<acloseAll.length;j++ ){
             acloseAll[j].addEventListener('click',function(){
                     this.parentNode.remove();
              },false);
             }

    
            //监听第一个
             var aopenAll = document.querySelectorAll("#ui #aopen");
            for( var j = 0 ;j<aopenAll.length;j++ ){
             aopenAll[j].addEventListener('click',function(){
                    // this.parentNode.remove();
              },false);
             }
            },

    };

    return channelAdvertiseWap;
}());
  //工具方法
 /**
   * 时间戳转yyyy-MM-dd hh:mm:ss
   * 
   */
  function timeStampToDate(timeStamp){
    var date = new Date(timeStamp);
    Y = date.getFullYear() + '-';
    M = (date.getMonth()+1 < 10 ? '0'+(date.getMonth()+1) : date.getMonth()+1) + '-';
    D = date.getDate() + ' ';
    h = date.getHours() + ':';
    m = date.getMinutes() + ':';
    s = date.getSeconds(); 
  return Y+M+D+h+m+s; 
  }
  /**
**复制对象
*/
function cloneObj(oldObj) { 
if (typeof(oldObj) != 'object') return oldObj;
if (oldObj == null) return oldObj;
var newObj = new Object();
for (var i in oldObj)
newObj[i] = cloneObj(oldObj[i]);
return newObj;
};
/**
**扩展对象
*/
function extendObj() { 
var args = arguments;
if (args.length < 2) return;
var temp = cloneObj(args[0]); //调用复制对象方法
for (var n = 1; n < args.length; n++) {
for (var i in args[n]) {
temp[i] = args[n][i];
}
}
return temp;
}
/**
**对象转数组
*/
function transform(obj){
    var arr = [];
    for(var item in obj){
        arr.push(obj[item]);
    }
    return arr;
}

/**
   * cookie
   * 
   */
  // 写cookie
  function setCookie (name,value,expires)
  {
  var exp = new Date();
  exp.setTime(exp.getTime() + expires*1000);
  document.cookie = name + "="+ escape (value) + ";expires=" + exp.toGMTString();
  }
  // 读取cookie
  function getCookie (name)
  {
  var arr,reg=new RegExp("(^| )"+name+"=([^;]*)(;|$)");
  if(arr=document.cookie.match(reg))
  return unescape(arr[2]);
  else
  return null;
  }
  // 删除cookie
  function delCookie(name)
  {
  var exp = new Date();
  exp.setTime(exp.getTime() - 1);
  var cval=myUtils.getCookie(name);
  if(cval!=null)
  document.cookie= name + "="+cval+";expires="+exp.toGMTString();
  }

  //滚动条在Y轴上的滚动距离
function getScrollTop(){
　　var scrollTop = 0, bodyScrollTop = 0, documentScrollTop = 0;
　　if(document.body){
　　　　bodyScrollTop = document.body.scrollTop;
　　}
　　if(document.documentElement){
　　　　documentScrollTop = document.documentElement.scrollTop;
　　}
　　scrollTop = (bodyScrollTop - documentScrollTop > 0) ? bodyScrollTop : documentScrollTop;
　　return scrollTop;
}
//文档的总高度
function getScrollHeight(){
　　var scrollHeight = 0, bodyScrollHeight = 0, documentScrollHeight = 0;
　　if(document.body){
　　　　bodyScrollHeight = document.body.scrollHeight;
　　}
　　if(document.documentElement){
　　　　documentScrollHeight = document.documentElement.scrollHeight;
　　}
　　scrollHeight = (bodyScrollHeight - documentScrollHeight > 0) ? bodyScrollHeight : documentScrollHeight;
　　return scrollHeight;
}
//浏览器视口的高度
function getWindowHeight(){
　　var windowHeight = 0;
　　if(document.compatMode == "CSS1Compat"){
　　　　windowHeight = document.documentElement.clientHeight;
　　}else{
　　　　windowHeight = document.body.clientHeight;
　　}
　　return windowHeight;
}
window.onscroll = function(){
　　if(getScrollTop() + getWindowHeight() == getScrollHeight()){
　　　　//alert("you are in the bottom!");
        //console.log(channelAdvertiseWap)
　　}
};

//对象调用
//var oldchannelAdvertiseWap=new channelAdvertiseWap();
//oldchannelAdvertiseWap.getchannelAdvertiseWapDiv();
  window.channelAdvertiseWap= channelAdvertiseWap;
})(window);
