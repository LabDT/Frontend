import { Component } from '@angular/core';
import { ButtonComponent } from "../../components/button/button.component";
import { TableComponent } from "../../components/table/table.component";
import { CommonModule } from '@angular/common';
import { DeleteModalService } from '../../services/delete-modal.service';
import { DeleteModalComponent } from "../../modals/delete-modal/delete-modal.component";
import { CrudService } from '../../services/crud.service';

@Component({
  selector: 'app-dashboard-page',
  standalone: true,
  imports: [CommonModule, ButtonComponent, TableComponent, DeleteModalComponent],
  templateUrl: './dashboard-page.component.html',
  styleUrl: './dashboard-page.component.sass'
})
export class DashboardPageComponent {

  constructor(
    private crudService: CrudService,
    private deleteModalService: DeleteModalService,
  ) { }

  current:
    'categories'
    | 'locations'
    | 'materials'
    | 'techniques'
    = 'categories';

  columns = [
    { key: 'name', title: 'Name' },
  ];

  rows: any[] = [];

  ngOnInit(): void {
    this.crudService.read('technique-category').subscribe({
      next: (data) => {
        console.log(data);
        this.rows = data.categories;
      },
      error: (e) => {
        console.error(e);
      },
    });
    this.crudService.model('technique-category').subscribe({
      next: (data) => {
        console.log(data);
      },
      error: (e) => {
        console.error(e);
      },
    });
  }
}
