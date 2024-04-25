import { defineStore } from "pinia";
import { ref } from "vue";

const useQuestionsStore = defineStore('questionsList', ()=>{
  let questions = ref<any[]>([])
  function saveQuestion(questionList:any[]){
    questions.value = questionList;
  }
  return {questions,saveQuestion}
})

export default useQuestionsStore;
