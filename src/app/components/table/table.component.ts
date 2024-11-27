import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { IconButtonComponent } from "../icon-button/icon-button.component";
import { InputComponent } from "../input/input.component";
import { DeleteModalService } from '../../services/delete-modal.service';
import { CrudService } from '../../services/crud.service';

@Component({
  selector: 'app-table',
  standalone: true,
  imports: [CommonModule, IconButtonComponent, InputComponent],
  templateUrl: './table.component.html',
  styleUrl: './table.component.sass'
})
export class TableComponent {
  /** Endpoint where the data is */
  @Input()
  endpoint: string = '';

  /** Model descriptor for the data */
  model: any[] = [];

  /** Array of columns */
  columns: { key: string; title: string }[] = [];

  /** Array of inputs */
  rows: any[] = [];

  constructor(
    private deleteModalService: DeleteModalService,
    private crudService: CrudService,
  ) { }

  ngOnInit() {
    // Retrieve model
    this.crudService.model(this.endpoint).subscribe({
      next: (data) => {
        this.model = data;
        this.model.forEach(model => {
          this.columns.push({
            key: model.name,
            title: model.name,
          });
        });
      },
      error: (error) => {
        throw Error(`Failed to fetch model for ${this.endpoint}:`, error);
      },
    });
    // Retrieve data
    this.crudService.read(this.endpoint).subscribe({
      next: (data) => {
        data.entries.forEach((data: any) => {
          this.rows.push(data);
        });
      },
      error: (error) => {
        throw Error(`Failed to fetch data for ${this.endpoint}:`, error);
      },
    })
  }

  onDelete(rowIndex: number) {
    this.deleteModalService.open(this.rows[rowIndex].name);
  }
}
