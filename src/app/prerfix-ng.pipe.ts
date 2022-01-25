import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'prerfixNg'
})
export class PrerfixNgPipe implements PipeTransform {

  transform(value:string): string {
    return "Angular : "+value;
  }

}
