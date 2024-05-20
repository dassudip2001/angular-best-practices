import { Component, OnInit, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgSelectModule } from '@ng-select/ng-select';

@Component({
  selector: 'app-test',
  standalone: true,
  imports: [FormsModule, NgSelectModule],
  template: `
    <label>Custom search control inside of dropdown</label>

    <ng-select
      #select
      [items]="cities"
      [searchable]="false"
      [(ngModel)]="selectedCity"
      bindLabel="name"
      bindValue="name"
    >
      <ng-template ng-header-tmp>
        <div style="position: relative; width: 100%;">
          <input
            style="width: 100%; line-height: 24px; padding-right: 30px;"
            type="text"
            (input)="onInput($event)"
          />

          <img
            src="../assets/magnifying-glass-solid.svg"
            alt=""
            srcset=""
            height="10px"
            width="10px"
            style="position: absolute; right: 10px; top: 50%; transform: translateY(-50%);"
          />
        </div>
      </ng-template>
    </ng-select>
  `,
  styles: ``,
})
export class TestComponent implements OnInit {
  @ViewChild('select', { static: true }) select: any; // ViewChild reference

  cities = [
    {
      id: 1,
      name: 'Vilnius',
      avatar:
        '//www.gravatar.com/avatar/b0d8c6e5ea589e6fc3d3e08afb1873bb?d=retro&r=g&s=30 2x',
    },
    {
      id: 2,
      name: 'Kaunas',
      avatar:
        '//www.gravatar.com/avatar/ddac2aa63ce82315b513be9dc93336e5?d=retro&r=g&s=15',
    },
    {
      id: 3,
      name: 'Pavilnys',
      avatar:
        '//www.gravatar.com/avatar/6acb7abf486516ab7fb0a6efa372042b?d=retro&r=g&s=15',
    },
    {
      id: 4,
      name: 'Siauliai',
      avatar:
        '//www.gravatar.com/avatar/b0d8c6e5ea589e6fc3d3e08afb1873bb?d=retro&r=g&s=30 2x',
    },
  ];

  selectedCity = this.cities[0].name;

  constructor() {}

  ngOnInit() {}

  onInput(event: any): void {
    if (this.select) {
      this.select.filter((event.target as HTMLInputElement).value); // Type assertion
    }
  }
}
