import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InvoiceProject } from './invoice-project';

describe('InvoiceProject', () => {
  let component: InvoiceProject;
  let fixture: ComponentFixture<InvoiceProject>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InvoiceProject]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InvoiceProject);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
