function swith(item) {
    let isShow = true;
    item[0].addEventListener('click',(e)=>{
        if(isShow){
            item[1].classList.add('show');
            isShow = false;
        }else{
            item[1].classList.remove('show');
            isShow = true;
        }
    });
}

function AddEvent() {
    getEles().forEach(ele=>{
        swith(ele);
    })
}


function getEles() {
    const NavItems = document.querySelectorAll('div.nav-items');
    const ItemArr = [];
    Array.prototype.forEach.call(NavItems,(item)=>{
        /** 
         * childNodes获取的是节点的所有子节点，包括了whitespce和文本
         * 如果你只想获取element元素的话可以使用Element.children获取。
        */
            // console.log(item.children);
            const arr = Array.prototype.filter.call(item.childNodes,(ele)=>{
                return ele.nodeType == 1;
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