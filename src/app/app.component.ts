import { MatDialog } from '@angular/material';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'bank-training';

  constructor(public dialog: MatDialog){

  }

  openDialog(){
    const dialogRef = this.dialog.open(AppComponent, {
      height: '350px'
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog Result: ${result}`);
    });

  }
}
