import { TupleType } from "typescript";

//问题类型
enum questionType {
    Blank='1001',
    SingleChoice='1002',
    CheckBox='1003',
    TrueOrFalse='1004',
    Blank='1005',
    InlineBlank='1007'
}


//提交的数据体
interface SubmitData {
    "testPaperId": number
    "questions":AnswerType[]
}

//答案
interface AnswerType {
    "questionId": number
    "index"?: number
    "questionType": questionType
    "questionScore": number
    "selectedAnswer": string | string[]
    "answer"?: any
}