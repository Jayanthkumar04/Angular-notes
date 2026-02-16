import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { FirstComponent } from './app/first/first.component';
import { SecondComponent } from './app/second/second.component';
import { ThirdComponent } from './app/third/third.component';
import { FourthComponent } from './app/fourth/fourth.component';
bootstrapApplication(FirstComponent, appConfig)
  .catch((err) => console.error(err));
