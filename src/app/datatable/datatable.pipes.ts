/**/
import { Pipe, PipeTransform } from '@angular/core';
@Pipe({ name: 'search' })
export class SearchPipe implements PipeTransform {
    transform(categories: any, searchText: any): any {
        if (searchText == null || searchText == '' ) {
            return categories;
        }
        console.log('categories',categories);
        return categories.filter(function(categorie) {
           
            let str = '';
              for (const key in categorie) {
                str += categorie[key];
              }
              return str.toLowerCase().indexOf(searchText.toLowerCase()) > -1;
          });
    }
}
@Pipe({ name: 'orderBy' })
export class OrderByPipe implements PipeTransform {
    transform(records: Array<any>, args?: any): any {
        return records.sort(function (a, b) {
            if (a[args.property] < b[args.property]) {
                return -1 * args.direction;
            }else if (a[args.property] > b[args.property]) {
                return 1 * args.direction;
            }else {
                return 0;
            }
        });
    }
}


