import mockjs from "mockjs";

function getRandomIndex(arr:string[]):number{
    return Math.floor(Math.random() * arr.length);
}

const questionType = ['SingleChoice','CheckBox','Blank']
let questionList:QuestionType[] = []; 

for(let i = 1;i <= 20;i++){
    questionList.push({
        questionId:i,
        questionType:questionType[getRandomIndex(questionType)],
        questionTitle:mockjs.Random.cword(20),
        questionOptions:[
            {
                optionsId:0,
                optionContent:mockjs.Random.cword(12)
            },
            {
                optionsId:1,
                optionContent:mockjs.Random.cword(12)
            },
            {
                optionsId:2,
                optionContent:mockjs.Random.cword(12)
            },
            {
                optionsId:3,
                optionContent:mockjs.Random.cword(12)
            }
        ]
    })
}

export default questionList;