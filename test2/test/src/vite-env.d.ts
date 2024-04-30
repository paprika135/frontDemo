/// <reference types="vite/client" />

// 复写EventTarget接口
interface EventTarget {
    value: any
}

interface TestData {
    "testPaperId": number
    "testPaperNumber": string
    "title": string
    "examDescription": string
    "overTime": number,
    "cutScreen": number,
    "pattern": number,
    "randomSetting": number,
    "randomQuestionType": any[],
    "questionList": QuestionType[]
}

interface ResInfo {
    "questionId":number,
    "questionCommitResult":string,
    "questionResult"?: number,
    "answer":string,
    "answerAnalysis"?: string
}


interface ResData {
    "totalScore": number,
    "totalQuestion": number,
    "score": number,
    "rightQuestion": number,
    "examResultInfo":ResInfo[]
}


interface TestRes {
    "msg": string
    "code": number,
    "data": ResData
}

interface QuestionOptions {
    "optionId": number
    "questionId": number
    "optionSort": number
    "optionContent": string
    "optionPicture": string
}

interface QuestionType {
    "questionId": number
    "questionType": string
    "questionStem": string
    "picture"?: string
    "questionNumber": number
    "questionScore": number
    "isNecessary": number
    "questionOptions": QuestionOptions[]
    "optionRandom"?: number
    "componentName"?: string
    "answer"?:any
    "answerAnalysis"?:string
    "isNecessary"?:number
    "picture"?:any,
    "selectedAnswer"?:any
    "questionResult"?:number
}

