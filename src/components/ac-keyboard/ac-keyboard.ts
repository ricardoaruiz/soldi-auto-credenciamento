import { Component , Input, Output, EventEmitter, OnChanges} from '@angular/core';
import { ViewController } from 'ionic-angular';

@Component({
  selector: 'ac-keyboard',
  templateUrl: 'ac-keyboard.html'
})
export class AcKeyboardComponent implements OnChanges{

  @Input() public value : number;
  @Input() public minLength: number;
  @Input() public maxLength: number; 
  @Output() public change: EventEmitter<number> = new EventEmitter<number>();
  @Output() public confirm: EventEmitter<number> = new EventEmitter<number>();

  public validValue: boolean = true;

  constructor(private viewController: ViewController) {
    viewController.didEnter.subscribe( () => {
      this.setValid();
    });
  }

  public ngOnChanges(): void {
    this.setValid();
  }

  /**
   * Capta a digitação no teclado virtual
   * @param numero 
   */
  public digitar(numero: number): void {

    if( numero !== undefined && this.value.toString().length === this.maxLength) {
      return;
    }

    if (numero === undefined) {
      if (this.value.toString().length-1 === 0) {
        this.value = 0;
      } else {      
        this.value = parseInt(this.value.toString()
          .substr(0, this.value.toString().length-1));
      }
    } else {
      this.value = parseInt(this.value.toString() + numero.toString());
    }
    this.setValid();
    this.change.emit(this.value);
  }
  
  public confirmar(): void {
    this.confirm.emit(this.value);
  }

  private setValid(): void {
    if (this.value !== undefined) {
      this.validValue = this.minLength != undefined && this.value.toString().length < this.minLength ? false : true;
    } else {
      this.validValue = false;
    }
  }

}
