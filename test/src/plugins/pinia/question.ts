import { defineStore } from "pinia";



const useQuestionsStore = defineStore('questionsList',{
  state:()=>({
    questionsStore:[] as QuestionType[] 
  }),
  actions:{
    //@ts-ignore
    setAnswer(answers:AnswerType[]){
      this.questionsStore.map(item=>{
        const index = answers.findIndex(answer=>answer.questionId == item.questionId);
        return Object.assign(item,answers[index]);
      })
    },
    saveQuestion(arr:any[]){
      this.questionsStore = arr;
    }
  }
})

export default useQuestionsStore;
