import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InvoiceInstructions } from './invoice-instructions';

describe('InvoiceInstructions', () => {
  let component: InvoiceInstructions;
  let fixture: ComponentFixture<InvoiceInstructions>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InvoiceInstructions]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InvoiceInstructions);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
