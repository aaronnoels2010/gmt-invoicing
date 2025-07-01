import { Component, input, signal } from '@angular/core';
import { rateSchedule } from '@models/rate.model';
import { InvoiceService } from '@services/invoice.service';
import { ProjectLineCostService } from '@services/project-line-cost.service';
import { getBeDateFormatted } from '@utils/date.util';

@Component({
  selector: 'app-invoice-total',
  imports: [],
  templateUrl: './invoice-total.html',
  styleUrl: './invoice-total.css',
})
export class InvoiceTotal {
  payableDate = input<Date>(new Date());
  totalPrice = signal<string>('€ 0.00');

  constructor(
    private invoiceService: InvoiceService,
    private projectLineCostService: ProjectLineCostService
  ) {
    this.totalPrice.set(
      this.toCurrencyString(this.calculateTotalPriceOfInvoice())
    );
  }

  formatDate(date: Date): string {
    return getBeDateFormatted(this.payableDate());
  }

  calculateTotalPriceOfInvoice() {
    return this.invoiceService
      .invoiceSignal()
      .projects.reduce((total, project) => {
        return (
          total +
          project.projectLines.reduce((lineTotal, line) => {
            return (
              lineTotal +
              this.projectLineCostService.calculateCostBasedOnRate(
                line.startTime,
                line.endTime,
                rateSchedule(55)
              )
            );
          }, 0)
        );
      }, 0);
  }

  toCurrencyString(value: number): string {
    return new Intl.NumberFormat('nl-BE', {
      style: 'currency',
      currency: 'EUR',
      minimumFractionDigits: 2,
    }).format(value);
  }
}
