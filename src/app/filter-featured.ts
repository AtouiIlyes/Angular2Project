/**
 * Created by atoui on 15/08/2017.
 */
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'filterFeatured',
    pure: false
})
export class FeaturedFilterPipe implements PipeTransform {
    transform(items: Array<any>, value:boolean,featured: boolean): Array<any> {
        /* if (!items || !filter) {
         return items;
         }*/
        // filter items array, items which match and return true will be kept, false will be filtered out
        return items.filter(item => item.featured == value).slice(items.length - 3,items.length);    }
}