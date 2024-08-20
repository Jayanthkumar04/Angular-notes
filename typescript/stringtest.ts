var tech_one:string="angular"

var tech_two:string="spring boot"

var tech_three:string="oracle"

console.log("tech_One ===>",tech_one);
console.log("tech_two ===>",tech_two);
console.log("tech_three ===>",tech_three);


//other type string
//multi line stirng

var tech_stack_one =`${tech_one} <=====> ${tech_two} <=====> ${tech_three}`

console.log(tech_stack_one);


var table_name :string="product";

var column_name :string ="price";

var price : string ="1000";

var query: string =`select * from ${table_name}  where ${column_name} = ${price}`;

console.log(query);


console.log("todayss practise")

var s1:string="jayath";

var s2 ="kumar";

console.log(s1,"--",s2);

var s3 = `${s2}`;

console.log(s3);

var s4 = `hello brooo i am ${s1} ${s2} 

                              nice to meet you`;

          console.log(s4);