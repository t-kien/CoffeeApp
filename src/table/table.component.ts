import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-table',
    templateUrl: './table.component.html',
    styleUrls: ['./table.component.css']
})

export class TableComponent {
    // @Input -> cho phép truyền vào dữ liệu
    // Tạo table với kiểu dữ liệu any, mình có thể truyền mọi thông tin khác nhau
    // Khai báo cho table kiểu any
    @Input() table: any = {};
    constructor() {
    }

    // nameTable: string;
    // orderNameTable: string;
    // totalDishesTable: number;
    // statusTable: string;
    // constructor() {
    //     this.nameTable = 'Table 1';
    //     this.orderNameTable = 'Mr.Kien';
    //     this.totalDishesTable = 1;
    //     this.statusTable = 'Closed';
    // }
}
