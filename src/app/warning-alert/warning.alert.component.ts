import { Component } from '@angular/core';

@Component({
  selector: 'app-warning-alert',
  template: ` <p>This is a warning, you're in danger!</p> `,
  styles: [
    `
      p {
        background: red;
        padding: 13px;
        border: 2px solid yellow;
      }
    `,
  ],
})
export class WarningAlertComponent {}
