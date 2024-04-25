import { h, ref} from 'vue';






export default {
    setup() {
        let weizhu = ref<string>("lijunqi");
        const clickEvent = (event:MouseEvent)=>{
            console.log(event.target);
            weizhu.value = "未烛";
        }
        const VDiv = <div onClick={clickEvent}>123{weizhu.value}</div>;
        return ()=>{h(VDiv),weizhu}
    }
}