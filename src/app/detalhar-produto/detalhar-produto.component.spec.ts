import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalharProdutoComponent } from './detalhar-produto.component';

describe('DetalharProdutoComponent', () => {
  let component: DetalharProdutoComponent;
  let fixture: ComponentFixture<DetalharProdutoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DetalharProdutoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DetalharProdutoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
