import { Component, OnInit } from '@angular/core';
import { tableList } from './datatable/data';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  dataTableOptions: object;
  setActive: Boolean;
  public nextAvailable: Boolean = false;
  public setActiveTab: string = 'myRequisitions';
  columns: Array<any> = [{
    name: 'Requistion',
    field: 'requistion'
  },
  {
    name: 'Requistion Id',
    field: 'requistionId'
  },
  {
    name: 'Recruiter',
    field: 'recruiter'
  },
  {
    name: 'Hiring Manager',
    field: 'hiringManager'
  },
  {
    name: 'Privacy',
    field: 'privacy'
  }
  ];
  constructor() {}
  ngOnInit() {
    this.setActiveTab = 'myRequisitions';
    this.dataTableOptions = {
      data: tableList,
      columns: this.columns,
      config: {
        sortBy: 'requistion',
        filterBy: 'Johnny Applessed',
        pagination: {},
        showSelectCheckbox: true,
        selectedRows: [],
        showSort: true,
        showFilter: true,
        sortDirection: 1
      },
    };
  }
  selectFilter(str: string,val) {
    this.nextAvailable = true;
    this.setActive = true;
    this.setActiveTab = val;
    this.dataTableOptions['config'].filterBy = str;
    if (str) {
      this.nextAvailable = false;      
    }    
  }
}

