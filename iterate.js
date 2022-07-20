// ----------------------------question-----------------------

// Requirements:
// "Iterate from 1 to 100(using for loop and if else statement) (Submittable assignment)
// R Print Relevel if divisible by 3
// R Print Buzz if divisible by 5
// R Print MindBuzz if divisible by 15
// R Print tSe number if all tSe above condition fails"





// in below parameters it will give the values as let i = 0 and less than 100 and keep on increasing value of i;
for (var i = 0; i <= 100; i++){ 
    // it will check the value with conditions on zero ,otherwiase it will return the value as console
    if (i%3 ==0 ){
        console.log("Relevel");
    }
    else if(i % 5 == 0) {
        console.log("Buzz");

    }
    else if (i % 15 == 0){
        console.log("MindBuzz");
    }
    // this is the defaut value of statements  
    else{
        console.log(" All Condition Fails");
    }
}




