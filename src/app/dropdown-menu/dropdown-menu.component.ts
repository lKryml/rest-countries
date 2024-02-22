import { Component } from '@angular/core';

@Component({
  selector: 'app-dropdown-menu',
  templateUrl: './dropdown-menu.component.html',
  styleUrls: ['./dropdown-menu.component.scss'],
})
export class DropdownMenuComponent {
  dropdownActive: boolean = false;
  selectedOption: any = '';
  options = [
    { name: 'Option 1', value: 'value 1' },
    { name: 'Option 2', value: 'value 2' },
    { name: 'Option 3', value: 'value 3' },
  ];
}
