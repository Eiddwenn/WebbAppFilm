import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'join'
})
export class SpacePipePipe implements PipeTransform {

  transform(input:Array<any>, sep = ','): string {
    return input.join(sep);
  }

}
