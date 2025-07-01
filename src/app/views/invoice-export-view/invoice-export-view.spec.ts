import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InvoiceExportView } from './invoice-export-view';

describe('InvoiceExportView', () => {
  let component: InvoiceExportView;
  let fixture: ComponentFixture<InvoiceExportView>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InvoiceExportView]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InvoiceExportView);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
