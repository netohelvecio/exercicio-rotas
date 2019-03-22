import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EscolaRoutingModule } from './escola-routing.module';
import { IonicModule } from '@ionic/angular';
import { AlunoComponent } from './aluno/aluno.component';
import { ProfessorComponent } from './professor/professor.component';

@NgModule({
  declarations: [AlunoComponent,ProfessorComponent],

  imports: [
    CommonModule,
    IonicModule,
    EscolaRoutingModule
  ]
})
export class EscolaModule { }
