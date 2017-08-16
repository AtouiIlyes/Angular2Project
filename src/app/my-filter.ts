import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'myfilter',
    pure: false
})
export class MyFilterPipe implements PipeTransform {
    transform(items: Array<any>, value:boolean,archived: boolean): Array<any> {
       /* if (!items || !filter) {
            return items;
        }*/
        // filter items array, items which match and return true will be kept, false will be filtered out
        return items.filter(item => item.archived == value).slice(items.length - 6,items.length);    }
}