/// <reference types="vite/client" />

// 复写EventTarget接口
interface EventTarget {
    value:any
}

type QuestionOptions = {
    optionsId:number
    optionContent:string
}

interface QuestionType {
    questionId:number
    questionType:string
    questionTitle:string | string[]
    questionOptions?:QuestionOptions[]
}



