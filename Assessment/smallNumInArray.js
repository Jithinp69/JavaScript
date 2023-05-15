function findSmallNum(array){

    for (let i = 0;i<array.length;i++){
        var tempSmall = 999999999;
        if(array[i]<tempSmall){
            tempSmall = array[i];
        }
    }
    return tempSmall;
}
console.log(findSmallNum([1, 9, 8, -1, 5, 4]));