import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent implements OnInit {

  @Input() titulo: string;
  @Input() imagem: string;
  @Output() resultado: EventEmitter<boolean> = new EventEmitter();

  constructor() { }

  ngOnInit() {}

  onClick(){
    this.resultado.emit(true);
  }

}
