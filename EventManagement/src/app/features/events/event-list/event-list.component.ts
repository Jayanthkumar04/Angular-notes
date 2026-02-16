import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { EventService } from '../../../services/event.service';
import { ActivatedRoute, Router, RouterLink, RouterModule } from '@angular/router';
import { Event } from '../../../core/models/event.model';

@Component({
  selector: 'app-event-list',
  standalone: true,
  imports: [CommonModule, RouterLink,RouterModule],
  templateUrl: './event-list.component.html',
  styleUrl: './event-list.component.css'
})
export class EventListComponent implements OnInit{

 

  eventList:Event[]=[];

  constructor(private httpClient:EventService,private router:Router){

  }

  ngOnInit(){
      this.loadEvents();
  }

  loadEvents()
  {
    console.log("in load events")
    this.httpClient.getAllEvents().subscribe(data=>{
      console.log(data);
      this.eventList = data}
    )
  }

  deleteEvent(id:number)
  {
    this.httpClient.deleteEvent(id).subscribe(()=>this.loadEvents());
  }


}
