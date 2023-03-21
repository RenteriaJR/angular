import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'lengthPokeName'
})
export class LengthPokeNamePipe implements PipeTransform {

  transform(value: string): unknown {
    return value.length;
  }

}
