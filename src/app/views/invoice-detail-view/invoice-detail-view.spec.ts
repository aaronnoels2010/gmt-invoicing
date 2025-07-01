import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InvoiceDetailView } from './invoice-detail-view';

describe('InvoiceDetailView', () => {
  let component: InvoiceDetailView;
  let fixture: ComponentFixture<InvoiceDetailView>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InvoiceDetailView]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InvoiceDetailView);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
