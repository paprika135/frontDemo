function swith(item) {
    item[0].addEventListener('click', (e) => {
        // item[1].classList.toggle('show');
        // console.log(item[1].classList.value);
        if(!item[1].classList.value.includes("show")){
            item[1].classList.remove("hide");
            item[1].classList.add("show");
        }else{
            item[1].classList.remove("show");
            item[1].classList.add("hide");
        }
    });
    item[1].addEventListener("animationend",(e)=>{
        // e.target.animationPlayState = "pause";
        item[1].classList.remove("hide");
        console.log("执行了动画");
    })
}

function AddEvent() {
    getEles().forEach(ele => {
        swith(ele);
    })
}


function getEles() {
    const NavItems = document.querySelectorAll('div.nav-items');
    const ItemArr = [];
    Array.prototype.forEach.call(NavItems, (item) => {
        /** 
         * childNodes获取的是节点的所有子节点，包括了whitespce和文本
         * 如果你只想获取element元素的话可以使用Element.children获取。
        */
        // console.log(item.children);
        const arr = Array.prototype.filter.call(item.childNodes, (ele) => {
            return ele.nodeType == 1;//這裏我們通過節點類型來判斷它是否是div元素
        });
        // console.log(arr);
        ItemArr.push(arr)
    });
    return ItemArr;
}

export default function setupJs() {
    console.log('加载Js文件');
    AddEvent();
}