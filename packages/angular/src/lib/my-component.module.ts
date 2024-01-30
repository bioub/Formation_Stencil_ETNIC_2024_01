import { APP_INITIALIZER, NgModule } from "@angular/core";
import { defineCustomElements } from "@my-components/core/loader";
import { DIRECTIVES } from "./components-array";

@NgModule({
  declarations: [...DIRECTIVES],
  exports: [...DIRECTIVES],
  providers: [
    {
      provide: APP_INITIALIZER,
      useFactory: () => {
        return defineCustomElements;
      },
      multi: true
    },
  ]
})
export class MyComponentsModule {}
