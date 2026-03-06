import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  imports: [],
  templateUrl: './footer.html',
  styleUrl: './footer.css',
})
export class Footer {
  openColumn: number | null = null;

  toggleColumn(colIndex: number) {
    if (this.openColumn === colIndex) {
      this.openColumn = null;
    } else {
      this.openColumn = colIndex;
    }
  }
}
