import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InvoiceProjectsView } from './invoice-projects-view';

describe('InvoiceProjectsView', () => {
  let component: InvoiceProjectsView;
  let fixture: ComponentFixture<InvoiceProjectsView>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InvoiceProjectsView]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InvoiceProjectsView);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
