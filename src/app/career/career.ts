import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-career',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './career.html',
  styleUrl: './career.css',
})
export class Career {
showForm = false;

openForm(){
this.showForm = true;
}

closeForm(){
this.showForm = false;
}
}
