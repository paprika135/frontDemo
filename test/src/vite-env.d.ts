/// <reference types="vite/client" />

// 复写EventTarget接口
interface EventTarget {
    value:any
}

interface TestData {
    "testPaperId":number
    "testPaperNumber":string
    "title":string
    "examDescription":string
    "overTime":number,
    "cutScreen":number,
    "pattern": number,
    "randomSetting": number,
    "randomQuestionType":any[],
    "questionList":QuestionType[] 
}



interface QuestionOptions {
    "optionId": number
    "questionId": number
    "optionSort": number
    "optionContent": string
    "optionPicture": string
}

interface QuestionType {
    "questionId":number
    "questionType": string
    "questionStem": string
    "picture"?: string
    "questionNumber": number
    "questionScore": number
    "isNecessary": number
    "questionOptions":QuestionOptions[]
    "optionRandom"?:number
    "componentName"?:string
}



