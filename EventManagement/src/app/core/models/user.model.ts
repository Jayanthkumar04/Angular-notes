export interface User{
  userId?:number;
  name:string;
  contactNumber:number;
  emailId:string;
  role:'ROLE_ADMIN'|'ROLE_USER';
}