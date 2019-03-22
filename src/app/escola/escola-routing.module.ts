import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AlunoComponent } from './aluno/aluno.component';
import { ProfessorComponent } from './professor/professor.component';

const routes: Routes = [
  {path:'aluno', component: AlunoComponent},
  {path:'professor', component: ProfessorComponent},

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EscolaRoutingModule { }
