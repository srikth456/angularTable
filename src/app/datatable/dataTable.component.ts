import { Component, OnInit, Input } from '@angular/core';
import {PagingService} from '../pagination/pagination.service';

@Component({
    selector: 'data-table',
    templateUrl: './dataTable.component.html',
    styleUrls: ['./dataTable.component.scss']

})
export class DataTableComponent implements OnInit {
    @Input() gridOptions;
    gridData: Array<any> = [];
    filterQuery: String = '';
    constructor(private pagingService: PagingService) {}
    ngOnInit() {
        this.onPageChange(1);
    }

    sortHandler(fieldName: string) {
        if (this.gridOptions.config.sortBy === fieldName) {
            this.gridOptions.config.sortDirection = this.gridOptions.config.sortDirection === 1 ? -1 : 1;
          }
          this.gridOptions.config.sortBy = fieldName;
    }
    onSelectRow(e, row) {
        if (e.target.checked) {
            this.gridOptions.config.selectedRows.push(row);
        }else {
            this.gridOptions.config.selectedRows = this.gridOptions.config.selectedRows.filter((obj) => {
                return row.id !== obj.id;
            });
        }
    }

    onPageChange(page: number) {
        this.gridOptions.config.pagination = this.pagingService.paginationProperties(this.gridOptions.data.length, page);
        this.gridData = this.gridOptions.data.slice(this.gridOptions.config.pagination.firstIndex,
        this.gridOptions.config.pagination.lastIndex + 1);
        
    }
}
