import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "fistLetter"
})
export class FistLetterPipe implements PipeTransform {
  transform(str: any, args?: any): any {
    return `${str.slice(0, 1).toUpperCase()}${str.slice(1).toLowerCase()}`;
  }
}
