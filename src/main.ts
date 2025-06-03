import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { HTTP_INTERCEPTORS, provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
// import { ErrorInterceptor } from './app/interceptors/error.interceptor';

bootstrapApplication(AppComponent,appConfig
).catch((err) => console.error(err));
