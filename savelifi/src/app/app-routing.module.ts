import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastrousuarioComponent } from './cadastrousuario/cadastrousuario.component';
import { PaginainicialComponent } from './paginainicial/paginainicial.component';
import { CadastrodespesasComponent } from './cadastrodespesas/cadastrodespesas.component';

const routes: Routes = [
  { path: "", redirectTo: 'pagina-inicial', pathMatch: 'full' },
  { path: "paginainicial", component: PaginainicialComponent },
  { path: "cadastrousuario", component: CadastrousuarioComponent },
  { path: "cadastrodespesas", component: CadastrodespesasComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
