;(function(window){
document.querySelector('body').style.margin=0;
document.querySelector('body').style.padding=0;

var channelAdvertisePc=(function(){
/**
**对象初始化
*/

    function channelAdvertisePc(UI,channelAdvertisePcConfig){
      //广告位对象配置
      this.channelAdvertisePcConfig=[
      {
        channel_advertise_wap_id:'',//广告位id
        name:'',//名称
        platform:'移动端',//平台
        type:'悬浮',//类型
        location:'顶部',
        wrap:[     
           {text:"sdfsdfsd",
            img:"http://www.yayao8.com/resources/img/logo.jpg",
            link:"http://www.baidu.com"}
            
          
        ],
        status:'',//状态
        close:true,//是否开启关闭按钮，默认开启
        update_time:timeStampToDate(new Date()),//更新时间
        admin_id:''//渠道主id
       }
       ];
       //广告UI
       this.UI={
        width:'960px',//默认移动端
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
     if(channelAdvertisePcConfig){
    this.channelAdvertisePcConfig=transform(extendObj(this.channelAdvertisePcConfig,channelAdvertisePcConfig));
    }
    }
      
    /**
    **对象方法定义
    */
    channelAdvertisePc.prototype={
/**
**配置整体广告
*/
        getchannelAdvertisePcConfig:function(){
          var _this=this;
    //_this.config.location='顶部';
   // _this.config.location='底部';
    //_this.config.type="悬浮";
  // _this.config.type="内嵌";
   
     return _this.channelAdvertisePcConfig;
        },
/**
**获取广告层结构
*thischannelAdvertisePcConfig getchannelAdvertisePcConfig()的返回值
*location  广告位置
*/
 getchannelAdvertisePcDiv:function(){
    var thischannelAdvertisePcConfig=this.getchannelAdvertisePcConfig();
    var thischannelAdvertisePcConfigLength=thischannelAdvertisePcConfig.length;
console.log(thischannelAdvertisePcConfig.length)
    for(var i=0;i<thischannelAdvertisePcConfigLength;i++){      
           var location;
          if(thischannelAdvertisePcConfig[i].type=='内嵌'){
            this.UI.zindex='9999';
            if(thischannelAdvertisePcConfig[i].location=='顶部'){
              location='insertBefore';
            }
            if(thischannelAdvertisePcConfig[i].location=='底部'){
              location='appendChild';
            }
          }

            if(thischannelAdvertisePcConfig[i].type=='悬浮'){
            this.UI.position='fixed';
               this.UI.zindex='10002';
               this.UI.left='100%';
               this.UI.width='300px';
               this.UI.height='300px';
            if(thischannelAdvertisePcConfig[i].location=='顶部'){
              location='insertBefore';
            }
            if(thischannelAdvertisePcConfig[i].location=='底部'){
              location='appendChild';
              this.UI.top="100%";
              this.UI.margin="-"+this.UI.height+" -300px";
            }       
          }

            //创建div
             var thisDiv=document.createElement("div");
             thisDiv.setAttribute("style","border:1px solid #ccc;background-color:"+this.UI.backgroundColor+";position:"+this.UI.position+";left:"+this.UI.left+";top:"+this.UI.top+";height:"+this.UI.height+";width:"+this.UI.width+";margin:"+this.UI.margin);
             thisDiv.setAttribute('id',"ui");
             
               

              for(var k=0;k<thischannelAdvertisePcConfig[i].wrap.length;k++){                 
                if(thischannelAdvertisePcConfig[i].wrap.length<=3){
                        var width="";
                        var height="";
                        if(thischannelAdvertisePcConfig[i].wrap.length==1){
                            width="98%";
                            height="95%";
                        }
                         if(thischannelAdvertisePcConfig[i].wrap.length==2){
                           width="477px";
                            height="90%";
                         }
                          if(thischannelAdvertisePcConfig[i].wrap.length==3){
                           width="318px";
                            height="90%";
                         }
                        //有图片
                      if(thischannelAdvertisePcConfig[i].wrap[k].img){
                   var  firsta=document.createElement("a");
                          firsta.setAttribute("href",thischannelAdvertisePcConfig[i].wrap[k].link);
                        firsta.setAttribute("id",'aopen');
                      firsta.setAttribute("style","padding:"+this.UI.padding+";text-decoration:none !important;box-sizing:border-box;display:inline-block;width:"+width+";height:"+height+";");
                       var firstimg=document.createElement("img");
                       firstimg.setAttribute("style","padding:"+this.UI.padding+";width:100%;height:"+height+";z-index:"+this.UI.zindex);
                       firstimg.setAttribute("src",thischannelAdvertisePcConfig[i].wrap[k].img);
                       var firsttext=document.createElement("div");
                     firsttext.setAttribute("style","text-align:center;width:100%;height:"+height+";color:#000;z-index:"+this.UI.zindex);
                     firsttext.innerHTML=thischannelAdvertisePcConfig[i].wrap[k].text;
                       firsta.appendChild(firstimg);
                     firsta.appendChild(firsttext);
                     //把a导入div,把div导入body
                  thisDiv.appendChild(firsta);
                      }else{
                        //没图片
                       var  firstspan=document.createElement("span");
                      firstspan.setAttribute("style","vertical-align:middle;line-height:30px;padding:"+this.UI.padding+";box-sizing:border-box;display:inline-block;width:"+width+";height:280px;");
                        if(thischannelAdvertisePcConfig[i].wrap[k].length>5||thischannelAdvertisePcConfig[i].wrap[k].length<1){
                          throw new Error("文字链数目1~5！");
                        }
                        for(var y=0;y<thischannelAdvertisePcConfig[i].wrap[k].length;y++){  
                       var firsta=document.createElement("a");
                     firsta.setAttribute("style","text-decoration:none;font-size:18px;display:block;text-align:center;width:100%;color:#000;z-index:"+this.UI.zindex);
                     firsta.innerHTML=thischannelAdvertisePcConfig[i].wrap[k][y].text;
                     firsta.setAttribute("href",thischannelAdvertisePcConfig[i].wrap[k][y].link);
                     firsta.setAttribute("id",'aopen');
                     firstspan.appendChild(firsta);
                   }
                     //把a导入div,把div导入body
                      thisDiv.appendChild(firstspan);
                      }

                        }
                    else{
                    throw new Error("图片数目1~3！");
                         }

                 
               }
 
             
             var bodyNode=document.getElementsByTagName("body")[0];
             //bodyNode.appendChild(thisDiv);
             //动态添加
             bodyNode[location](thisDiv,bodyNode.childNodes[0]);
             //创建第二个a 
            if(thischannelAdvertisePcConfig[i].close){
             var seconda=document.createElement("a");
             seconda.innerHTML="×";
             seconda.setAttribute("href",'javascript:;');
             seconda.setAttribute("id",'aclose');
             seconda.setAttribute("style","position:absolute;top:0;right:1px;border:1px solid #ccc; background-color:#ccc;color:white;height:20px;width:20px;line-height:20px;text-align:center;font-size:22px;text-decoration:none;");
             thisDiv.appendChild(seconda);
            }

    }

 
            // 所有a标签变色
          var aAll = document.querySelectorAll("a");
            for( var v = 0 ;v<aAll.length;v++ ){
             aAll[v].addEventListener('mouseover',function(){
                     this.style.color="red";
              },false);
             aAll[v].addEventListener('mouseout',function(){
                     this.style.color="#000";
              },false);
             }
             //监听第二个a的事件，删除整个div
            // var _this=this;
          var acloseAll = document.querySelectorAll("#ui #aclose");
            for( var z = 0 ;z<acloseAll.length;z++ ){
             acloseAll[z].addEventListener('click',function(){
                     this.parentNode.remove();
              },false);
             }

    
            //监听第一个
             var aopenAll = document.querySelectorAll("#ui #aopen");
            for( var c = 0 ;c<aopenAll.length;c++ ){
             aopenAll[c].addEventListener('click',function(){
                    // this.parentNode.remove();
              },false);
             }
            },

    };

    return channelAdvertisePc;
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
        //console.log(channelAdvertisePc)
　　}
};

//对象调用
//var oldchannelAdvertisePc=new channelAdvertisePc();
//oldchannelAdvertisePc.getchannelAdvertisePcDiv();
  window.channelAdvertisePc= channelAdvertisePc;
})(window);
