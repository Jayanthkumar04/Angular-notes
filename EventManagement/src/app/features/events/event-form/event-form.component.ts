import { Component } from '@angular/core';
import { EventService } from '../../../services/event.service';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Event } from '../../../core/models/event.model';
import { CommonModule } from '@angular/common';
import { User } from '../../../core/models/user.model';
import { UserService } from '../../../services/user.service';

@Component({
  selector: 'app-event-form',
  standalone: true,
  imports: [FormsModule,ReactiveFormsModule,CommonModule],
  templateUrl: './event-form.component.html',
  styleUrl: './event-form.component.css'
})
export class EventFormComponent {

   eventForm!:FormGroup;

  eventId?:number;

  isEditMode = false;

  userId?:number;

  users:User[]=[]
  constructor(private http:EventService,private fb:FormBuilder,private route:ActivatedRoute,private router:Router,private userService:UserService){
  }

  ngOnInit(): void {
      this.createForm();

      this.checkEdiMode();

      this.loadUsers();
  }
  createForm()
  {
    this.eventForm = this.fb.group({
  eventName: ['', Validators.required],
  price: ['', Validators.required],
  eventDate: ['', Validators.required],
  location: [''],
  moreInfo: [''],
  user:['',Validators.required]

    })
  }

  checkEdiMode()
  {
    const id = this.route.snapshot.paramMap.get('id');

    if(id){
      this.isEditMode=true;
      this.eventId=+id;
      this.loadEvent(this.eventId);
    }
  }

  loadEvent(id:number){
    this.http.getEventById(id).subscribe(
      event=>{
        this.eventForm?.patchValue(event);
      }
    );
  }

  loadUsers()
  {
    this.userService.getAllUsers().subscribe(

      data=>{
        this.users=data;
      }
    )
  }

  submit()
  {

    if(this.eventForm.invalid) return;

    const event:Event = this.eventForm.value;

    console.log(event.user?.userId);

      if (!event.user || !event.user.userId) {
    return; // or show error
  }
    if(this.isEditMode && this.eventId){
      this.http.updateEvent(this.eventId,event).subscribe(()=>{
        this.router.navigate(['/events']);
      });
    }else{
      this.http.addEvent(event,event.user.userId).subscribe(()=>{
        console.log(event.user?.userId);
        this.router.navigate(['/events']);
      })
    }

  }



}
