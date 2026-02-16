import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { VisitingcardComponent } from './app/visitingcard/visitingcard.component';
import { FirstComponent } from './app/first/first.component';

bootstrapApplication(FirstComponent, appConfig)
  .catch((err) => console.error(err));
