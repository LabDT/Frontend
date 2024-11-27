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
  /** Array of columns */
  @Input()
  columns: { key: string; title: string }[] = [];

  /** Array of inputs */
  @Input()
  rows: any[] = [];

  constructor(
    private deleteModalService: DeleteModalService,
  ) { }

  onDelete(rowIndex: number) {
    this.deleteModalService.open(this.rows[rowIndex].name);
  }
}
