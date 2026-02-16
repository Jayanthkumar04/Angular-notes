import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { FirstComponent } from './app/first/first.component';
import { provideHttpClient, withFetch } from '@angular/common/http';

// bootstrapApplication(FirstComponent, appConfig)
//   .catch((err) => console.error(err));

bootstrapApplication(FirstComponent,{

  providers:[provideHttpClient(withFetch())]
})
  .catch((err) => console.error(err));
