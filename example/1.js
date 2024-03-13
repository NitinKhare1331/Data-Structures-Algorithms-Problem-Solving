function findEl(arr,x){
    for(let i=0 ; i<arr.length; i++){
        if(arr[i]==x){
            return i;
        }
        // else{
        //     return -1;
        // }
    }
}
console.log(findEl([4,1,3,0,-2,6,8,9],100));