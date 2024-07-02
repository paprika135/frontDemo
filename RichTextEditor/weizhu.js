let optionsButtons = document.querySelectorAll(".option-button");
let advancedOptionButton = document.querySelectorAll(".adv-option-button");
let fontName = document.getElementById("fontName");
let fontSizeRef = document.getElementById("fontSize");
let writingArea = document.getElementById("text-input");
let linkButton = document.getElementById("createLink");
let alignButtons = document.querySelectorAll(".align");
let spacingButtons = document.querySelectorAll(".spacing");
let formatButtons = document.querySelectorAll(".format");
let scriptButtons = document.querySelectorAll(".script");
//List of fontlist
let fontList = [    
  "Arial",
  "Verdana",
  "Times New Roman",
  "Garamond",
  "Georgia",
  "Courier New",
  "cursive",
];


function initializer(){
  highlighter(alignButtons,true);
  highlighter(spacingButtons,true);
  highlighter(formatButtons,false);
  highlighter(scriptButtons,true);

  //动态添加字体
  fontList.map(font=>{
    let option = document.createElement('option');
    option.value = font;
    option.innerHTML = font;
    fontName.appendChild(option);
  });

  //动态添加字号
  for(let i = 1;i <= 7; i++){
    let option = document.createElement("option");
    option.value = i;
    option.innerHTML = i;
    fontSizeRef.appendChild(option);
  }

  //设置默认字号
  fontSizeRef.value = 3;
}


//按钮的高亮分两种情况
/*
  1.互斥的按钮组，也就是其中一个高亮，则其它的按钮就不能高亮，
    因为它们的功能是冲突的。
  2.非互斥的按钮，它们之间的高亮状态互补影响，因为它们的功能可以叠加
  我们示例中的按钮组基本上都是互斥的，只有一组是非互斥的。
*/ 
function highlighter(ElementList,needsRemovals){
  ElementList.forEach((button)=>{
    button.addEventListener("click",()=>{
      if(needsRemovals){
        let alreadyActive = false;
        if(button.classList.contains("active")){
          alreadyActive = true;
        }
        //先移除移除高亮显示
        highlighterRemover(ElementList);
        //如果没有高亮我们就添加高亮
        if(!alreadyActive){
          button.classList.add("active");
        }else {
          button.classList.remove("active");
        }
      }else {
        button.classList.toggle("active");
      }
    })
  })
}

function highlighterRemover(ElementList){
  ElementList.forEach(button=>{
    button.classList.remove("active");
  });
};


//主要的业务逻辑

//借助execCommand执行命令
function modifyText(command,defaultUi,value){
  document.execCommand(command,defaultUi,value);
}
optionsButtons.forEach(button=>{
  button.addEventListener("click",()=>{
    modifyText(button.id,false,null);
  });
});

//设置字体
advancedOptionButton.forEach(button=>{
  button.addEventListener('change',()=>{
    modifyText(button.id,false,button.value)
  });
})

//文本超链接
linkButton.addEventListener('click',()=>{
  let link = prompt("Please enter a URL.");
  if(/http/i.test(link)){
    modifyText(linkButton.id,false,link);
  }else{
    link = "http://" + link;
    modifyText(linkButton.id,false,link);
  }
})



//初始化
window.onload = initializer();