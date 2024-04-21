import mockjs from "mockjs";


function getRandomIndex(arr: string[]): number {
    return Math.floor(Math.random() * arr.length);
}


const questionType = ['SingleChoice', 'CheckBox', 'Blank','InlineBlank']
let questionList: QuestionType[] = [];
for (let i = 1; i <= 20; i++) {
    const question: QuestionType = {
        questionId: i,
        questionType: questionType[getRandomIndex(questionType)],
        questionTitle: mockjs.Random.cword(20)
    }
    if (question.questionType === 'Blank') {
        //因为问答题没有选项
        questionList.push(question);
        continue;
    } else if (question.questionType === 'InlineBlank') {
        const questiontitle = Array(Math.floor(Math.random() * 3 + 2)).fill('').map(item => {
            return item = mockjs.Random.cword(5);
        })
        questiontitle.push('。')
        questionList.push(Object.assign(question, {
            questionTitle: questiontitle
        }));
        continue;
    }else{
        questionList.push(Object.assign(question, {
            questionOptions: [
                {
                    optionsId: 0,
                    optionContent: mockjs.Random.cword(12)
                },
                {
                    optionsId: 1,
                    optionContent: mockjs.Random.cword(12)
                },
                {
                    optionsId: 2,
                    optionContent: mockjs.Random.cword(12)
                },
                {
                    optionsId: 3,
                    optionContent: mockjs.Random.cword(12)
                }
            ]
        }));
    }
}

export default questionList;