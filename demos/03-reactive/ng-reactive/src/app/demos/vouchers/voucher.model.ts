import { VoucherDetail } from './voucher-details.model';

export class Voucher {
  ID: number = 0;
  Text: string = '';
  Date: string = '';
  Amount: number = 0;
  Paid: boolean = false;
  Expense: boolean = false;
  Remark?: boolean;
  Readonly?: boolean;
  Details?: VoucherDetail[];
}
