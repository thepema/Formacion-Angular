import { CommonModule } from '@angular/common';
import { Component, ContentChild, contentChild, input, InputSignal, TemplateRef } from '@angular/core';

@Component({
  selector: 'app-entrenador-detail',
  imports: [CommonModule],
  templateUrl: './entrenador-detail.component.html',
  styleUrl: './entrenador-detail.component.scss'
})
export class EntrenadorDetailComponent {

  entrenador: InputSignal<any> = input(null);

  @ContentChild('extras' ) extras!: TemplateRef<any>;
}
