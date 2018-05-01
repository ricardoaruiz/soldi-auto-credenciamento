import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';
import { AcKeyboardComponent } from './ac-keyboard/ac-keyboard';
@NgModule({
	declarations: [AcKeyboardComponent],
	imports: [ IonicModule ],
	exports: [AcKeyboardComponent]
})
export class ComponentsModule {}
