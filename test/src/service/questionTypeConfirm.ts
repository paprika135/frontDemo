
export default function QuestionTypeConfirm(questionType: string){
    switch (questionType) {
        case '1001':
            return 'Blank';
        case '1002':
            return 'SingleChoice';
        case '1003':
            return 'CheckBox';
        case '1004':
            return 'TrueOrFalse';
        case '1005':
            return 'Blank';
        case '1007':
            return 'InlineBlank';
        default:
            return 'CheckBox';
    }
}