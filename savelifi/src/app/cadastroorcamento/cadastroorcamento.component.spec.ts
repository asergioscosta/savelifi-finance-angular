import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastroorcamentoComponent } from './cadastroorcamento.component';

describe('CadastroorcamentoComponent', () => {
  let component: CadastroorcamentoComponent;
  let fixture: ComponentFixture<CadastroorcamentoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CadastroorcamentoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CadastroorcamentoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
