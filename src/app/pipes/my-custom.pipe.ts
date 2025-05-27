import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'Capitalize',
  standalone: true
})
export class MyCustomPipe implements PipeTransform {

  transform(value: String): String {
    return value[0].toUpperCase()+value.slice(1);
  }

}
