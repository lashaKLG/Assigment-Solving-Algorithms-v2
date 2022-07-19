a = 0;
b = 1;
function fibonachi(number){
    if(number == 0){
        return 0;
    }else if (number == 1){
        return 1;
    }
    else{
        for(let i =1;i<number;i++){
            result= a+b;
            a=b;
            b=result;
        }
    }
    return result;
}
console.log(fibonachi(7))