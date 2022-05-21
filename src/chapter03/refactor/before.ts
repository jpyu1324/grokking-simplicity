interface Affiliate {
  bank_code: string;
  sales: number;
  commission: number;
}

function sendPayout(bankCode: string, owed: number) {}

// action을 호출하니 이 함수도 action
function figurePayout(affiliate: Affiliate) {
  const owed = affiliate.sales * affiliate.commission;
  if (owed > 100) {
    sendPayout(affiliate.bank_code, owed); //action
  }
}

// action을 호출하니 이 함수도 action
function affiliatePayout(affiliates: Affiliate[]) {
  affiliates.forEach((affiliate) => {
    figurePayout(affiliate); // action
  });
}

// 결국 전체가 action
function main(affiliates: Affiliate[]) {
  affiliatePayout(affiliates);
}
