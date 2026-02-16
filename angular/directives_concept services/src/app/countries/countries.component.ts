import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CountriesService } from '../countries.service';
import { HighlightDirective } from '../highlight.directive';
import { RendererDirective } from '../renderer.directive';
import { HostListenDirective } from '../host-listen.directive';
import { HostBindDirective } from '../host-bind.directive';

@Component({
  selector: 'app-countries',
  standalone: true,
  imports: [CommonModule,FormsModule,HighlightDirective,RendererDirective,HostListenDirective,HostBindDirective],
  templateUrl: './countries.component.html',
  styleUrl: './countries.component.css'
})

export class CountriesComponent implements OnInit {
public result:any;
constructor(private service:CountriesService){}
ngOnInit(): void {


    this.service.getCountriesData().subscribe({
     
      next:(posRes:any)=>{
        console.log("rest api invoked and response is ==> ",posRes);
        this.result = posRes;
      },
      error:(e)=>{
         console.log("error in communicating with backend");
      },
      complete:()=>{
      console.log("completed rest call")
      }

    })
}

}
