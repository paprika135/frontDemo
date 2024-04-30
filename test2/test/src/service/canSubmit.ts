function IllegalValueCheck(value:any){
    //true即不合法
    if(typeof value == undefined){
        return true;
    }else if(Array.isArray(value)){
        if (value.length == 0){
            return true;
        }else if(value.includes('')){
            return true
        }
        return false;
    }else if(typeof value == 'string'){
        if (value == ''){
            return true;
        } 
        return false
    }
    return false;
}



/*
    因为我们将用户的答题信息记录到了questionList中
*/
export default function UncheckedIndex(questionList:any[],necessaryQuestions:any[]){
    const unCheckQuestion =  necessaryQuestions.filter(item=>{  
        /*
            如果用户什么都不填，就没有selectedAnswer这个属性。
        */
        let index = questionList.findIndex(ques=>{
            return ques.questionId == item.questionId;
        })
        //如果你没有selectedAnswer说明你可能没动过表单，如果你输入的是一个空字符串那么也是不允许的。
        if(!questionList[index]?.hasOwnProperty("selectedAnswer") || IllegalValueCheck(questionList[index]?.selectedAnswer)) return true;
        return false;
    })

    // questionList.every((question:any,)=>{
    //     if(!question.hasOwnProperty("selectedAnswer")){
    //         return false;
    //     }
    //     return true
    // })
    return unCheckQuestion;
}


