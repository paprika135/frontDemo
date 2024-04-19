import {h} from 'vue';


const questionContent:string[] = ['证券市场的主要功能包括','和','。'] 



const CreateVnode = (arr:string[],context:any)=>{
    let children:any[] = [];
    for(let i = 0;i < arr.length - 1;i++){
        children.push(arr[i]);
        children.push(h('input',{'class':'border-2 w-8 focus:outline-none ml-1',onChange:(event:InputEvent)=>{
            
        }}))
    }
    
    return h('legend',[[...children],'。'])
}



export default {
    props:['questionContent','modelValue'],
    emits:[],
    setup(props:any,context:any) {
        return ()=>CreateVnode(questionContent,context)
    }
}