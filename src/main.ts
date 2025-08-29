import { bootstrapApplication } from '@angular/platform-browser';
import { provideHttpClient } from '@angular/common/http';   // ✅ import this
import { App } from './app/app';
import { appConfig } from './app/app.config';

bootstrapApplication(App, {
  providers: [
    ...appConfig.providers,
    provideHttpClient()   // ✅ add HttpClient provider
  ]
}).catch(err => console.error(err));
