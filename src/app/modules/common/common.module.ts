import {NgModule} from '@angular/core';

import {DROPDOWN_DIRECTIVES, DROPDOWN_SERVICES} from './directives/dropdown/index';

@NgModule({
  declarations: [
    ...DROPDOWN_DIRECTIVES
  ],
  exports: [
    ...DROPDOWN_DIRECTIVES
  ],
  providers: [
    ...DROPDOWN_SERVICES
  ]
})

export class CommonModule {}
