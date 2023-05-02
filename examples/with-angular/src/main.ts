import { bootstrapApplication } from '@angular/platform-browser'
import { isDevMode } from '@angular/core';
import { provideHttpClient } from '@angular/common/http'

import { AppComponent } from './app/app.component'

if(isDevMode()) {
  import('./mocks/browser').then(m => {
    m.worker.start().then(() => {
      bootstrap();
    })
  });
} else {
  bootstrap();
}

function bootstrap() {
  bootstrapApplication(AppComponent, {
    providers: [
      provideHttpClient()
    ]
  });
}