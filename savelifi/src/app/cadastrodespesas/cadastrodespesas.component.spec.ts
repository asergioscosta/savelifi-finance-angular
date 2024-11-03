import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastrodespesasComponent } from './cadastrodespesas.component';

describe('CadastrodespesasComponent', () => {
  let component: CadastrodespesasComponent;
  let fixture: ComponentFixture<CadastrodespesasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CadastrodespesasComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(CadastrodespesasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
