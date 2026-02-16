import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { ExternalComponent } from './app/external/external.component';

bootstrapApplication(ExternalComponent, appConfig)
  .catch((err) => console.error(err));
