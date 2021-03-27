let name='shadiya';
console.log(name);
let value = lucky_seven([1,4,1]);
console.log(value);
value = clock_angle(15);
console.log(value);
value = problem_of_arrays_without_reduce([[3, 2], [1], [4, 12]]);
console.log(value);
test_divisors(3,5);
console.log(oddball_sum_without_reduct([1,3,5,2]));
console.log(oddball_sum_without_reduct([1,3,5,2]));

let person = {
    name: 'Iffath',
    age: 23
}


function lucky_seven(arr){
    if(arr.length < 3 ){
        return "Length is less than 3"
    }

    for(let i = 0; i < 3; i++){
        if((i+2) < arr.length){
           if ((arr[i]+ arr[i+1]+ arr[i+2]) == 7){
               return true;
           }
        }
    }
    return false;
}

function clock_angle(N){
    return N*6;
}

function problem_of_arrays_without_reduce(arr){
    var sum = 0;

    for(let i = 0; i < arr.length; i++){
        for(let j= 0; j <arr[i].length; j++){
            sum = sum + arr[i][j];
        }
    }
    return sum;
}

function problem_of_arrays_with_reduce(arr){
    return arr.reduce((t,e)=> t.concat(e)).reduce((t,e)=> t+e);
}

function test_divisors(low,high){

    for(let start = low; start <=high; start++){
        let value = start;
        if(start % 3 == 0){
            value = start + 'div3';
        }
        console.log(value);
    }

}

function oddball_sum_without_reduct(num){
    let sum =  0;
    for(let i =0; i < num.length; i++){
        if(num[i] % 2 != 0){
            sum += num[i];
        }
    }
    return sum;
}

function oddball_sum_with_reduce(num){
    return num.reduce(function(total, item){
        if(item % 2 != 0){
            totatl += item;
        }
        return total;
    });
}