import { Pipe, PipeTransform } from '@angular/core';

/**
 * Generated class for the CpfPipe pipe.
 *
 * See https://angular.io/api/core/Pipe for more info on Angular Pipes.
 */
@Pipe({
  name: 'cpf',
})
export class CpfPipe implements PipeTransform {

  transform(value: string, ...args) {
    let tmp = undefined;
    if(value){
      value = value.toString();

      if(value.length > 3 && value.length < 7){
        tmp = value.substring(0,3).concat(".")
                   .concat(value.substring(3));
      }

      if(value.length >= 7 && value.length < 10){
        tmp = value.substring(0,3).concat(".")
                   .concat(value.substring(3,6))
                   .concat(".")
                   .concat(value.substring(6));
      }      

      if(value.length >= 10){
        tmp = value.substring(0,3).concat(".")
                   .concat(value.substring(3,6))
                   .concat(".")
                   .concat(value.substring(6,9))
                   .concat("-")
                   .concat(value.substring(9))
      }      
    }
    value = !tmp ? value : tmp;
    return value;
  }
}
