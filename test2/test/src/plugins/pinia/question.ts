import { defineStore } from "pinia";



const useQuestionsStore = defineStore('questionsList',{
  state:()=>({
    questionsStore:[] as QuestionType[],
    necessaryQuestions:[] as QuestionType[]
  }),
  actions:{
    //@ts-ignore
    interAnswer(answers:AnswerType[]){
      this.questionsStore.map(item=>{
        const index = answers.findIndex(answer=>answer.questionId == item.questionId);
        return Object.assign(item,answers[index]);
      })
    },
    saveQuestion(arr:any[]){
      this.questionsStore = arr;
      this.necessaryQuestions = arr.filter(item=>item.isNecessary == 1);
    }
  }
})

export default useQuestionsStore;
