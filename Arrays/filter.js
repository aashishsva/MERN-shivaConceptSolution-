let age = [12,15,18,30,55,58];
let result = age.filter((age)=>{
    if(age >=18){
        return age;
    }
})

console.log(result);