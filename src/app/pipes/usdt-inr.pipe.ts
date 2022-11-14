import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'usdtInr'
})
export class UsdtInrPipe implements PipeTransform {

  transform(value: number, ...args: number[]): unknown {
    const[x]=args;
    return value*x;
  }

}
