import { defineStore } from "pinia";

const useAnswersStore = defineStore('answers',{
  state:()=>({ 
    answers:{
      testPaperId:0,
      questions:[]
      //@ts-ignore
    } as SubmitData,
    //@ts-ignore
    answer:{} as AnswerType
  }),
  actions:{
    setterTestPaperId(val:any){
      this.answers.testPaperId = val;
    },
    setAnswer(val:any){
      this.answer = val;
    },
    addAnswer(){
      //@ts-ignore
      const index = this.answers.questions.findIndex(item=>item.questionId === this.answer.questionId)
      if(index === -1){
        this.answers.questions.push(this.answer);
      }else{
        this.answers.questions[index] = this.answer;
      }
    }
  }
})

export default useAnswersStore;