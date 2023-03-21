import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'convertPokeNameToHexa'
})
export class ConvertPokeNameToHexaPipe implements PipeTransform {

  transform(value: string): unknown {
    var hex = '';
    for(var i=0;i<value.length;i++) {
        hex += ''+value.charCodeAt(i).toString(16);
    }
    return hex;
  }

}
