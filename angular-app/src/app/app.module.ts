import { DoBootstrap, Injector, NgModule } from '@angular/core';
import { createCustomElement } from '@angular/elements';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule],
  providers: [],
  entryComponents: [AppComponent],
})
// Here it create a custom element binding to `angular-component`
// In the React outer container, we can just put a <angular-component /> element to inject the Angular application
// Potentially in theory we can inject multiple Angular components inside our React outer container.
export class AppModule implements DoBootstrap {
  constructor(private injector: Injector) {
    const webComponent = createCustomElement(AppComponent, {
      injector: this.injector,
    });
    customElements.define('angular-component', webComponent);
  }

  ngDoBootstrap() {}
}
