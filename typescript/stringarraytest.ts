var str_arr:string[]=['Angular','SpringBoot','Oracle'];

str_arr.forEach(
    (element,index)=>{
        console.log('Index is ===>' , index, 'Element is ===>',element);
    }
)

/*Output


Index is ===> 0 Element is ===> Angular
Index is ===> 1 Element is ===> SpringBoot
Index is ===> 2 Element is ===> Oracle

*/