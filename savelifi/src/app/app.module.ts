import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { CadastrousuarioComponent } from './cadastrousuario/cadastrousuario.component';
import { PaginainicialComponent } from './paginainicial/paginainicial.component';
import { CadastrodespesasComponent } from './cadastrodespesas/cadastrodespesas.component';
import { CadastroorcamentoComponent } from './cadastroorcamento/cadastroorcamento.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    CadastrousuarioComponent,
    PaginainicialComponent,
    CadastrodespesasComponent,
    CadastroorcamentoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
