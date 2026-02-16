function addNumbers(...nums:number[])
{
  let i;
  let sum:number=0;

  for(i=0;i<nums.length;i++) sum=sum+nums[i];

  console.log("sum is ==>",sum);
}

addNumbers(1,2,3);

addNumbers(1,2,3,4,5,10);