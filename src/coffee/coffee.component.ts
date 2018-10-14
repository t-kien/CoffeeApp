import { TableComponent } from './../table/table.component';
import { Component, Input } from '@angular/core'; //decorator

@Component({
  selector: 'coffee-root',
  templateUrl: './coffee.component.html',
  styleUrls: ['./coffee.component.css'], // mảng nên có []
})
export class CoffeeComponent {
    tables: any[];
    tabs: any[] = [ // tạo ra 1 mảng các item menu, với 2 object: name, icon
      {name: 'menu', icon: './assets/coffee.png'},
      {name: 'cart', icon: './assets/cart.png'},
      {name: 'user', icon: './assets/user.png'}
    ];
    constructor() {
      this.tables = [
        {
          name: 'Table 01',
          orderName: 'Mr. Kien',
          totalDishes: 5,
          status: 'Ordered',
        },
        {
          name: 'Table 02',
          orderName: 'Mr. Quynh',
          totalDishes: 5,
          status: 'Prepare',
        },
        {
          name: 'Table 03',
          orderName: 'Mr. Kien',
          totalDishes: 2,
          status: 'Ordered',
        },
        {
          name: 'Table 04',
          orderName: 'Mr. Kien',
          totalDishes: 5,
          status: 'Prepare',
        },
        {
          name: 'Table 05',
          orderName: 'Mr. Quynh',
          totalDishes: 4,
          status: 'Prepare',
        },
      ];
    }

    onClickTab(tab) {
      alert('This is tab ' + tab.name);
    }
}
