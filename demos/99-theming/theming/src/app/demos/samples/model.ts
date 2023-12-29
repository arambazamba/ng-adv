export class VoucherDetail {
  ID: number = 0;
  VoucherID: number = 0;
  AccountID: number = 0;
  Account: BalanceAccount | undefined;
  Text: string = '';
  Amount: number = 0;
  Comment: string = '';
}

export class BalanceAccount {
  ID: number = 0;
  Name: string = '';
  Expense: boolean = false;
  ActivatedOn: Date | undefined;
  Deprecated: boolean = false;
}

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

  static init(): Voucher {
    return {
      ID: 0,
      Text: '',
      Date: new Date().toString(),
      Amount: 0,
      Paid: false,
      Expense: false,
      Remark: false,
      Details: new Array<VoucherDetail>(),
    };
  }
}
