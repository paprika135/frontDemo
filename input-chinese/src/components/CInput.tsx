import {h,nextTick} from 'vue';


export default {
    setup(){
        const getVal = (event:any)=>{
            const spanStyle:Element = document.querySelector(".spanText") as Element;
            spanStyle.innerHTML = event.target.value;
            console.log(window.getComputedStyle(spanStyle).width);
            
            event.target.style.width = window.getComputedStyle(spanStyle).width + '';
        }
        const inputModule = <div class="relative"><input onInput={getVal} class="border-2 border-slate-700 inline-block absolute" type="text" /><span class="spanText text-2xl invisible absolute whitespace-nowrap left-0"></span></div>
        return ()=>h(inputModule)
    }
}