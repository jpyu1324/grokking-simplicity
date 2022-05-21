import { emailsForSubscribers, selectCouponsByRank } from "@src/chapter03/calc";
import {
  Coupon,
  coupons,
  Message,
  Rank,
  Subscriber,
  subscribers
} from "@src/chapter03/data";

function fetchCouponsFromDB(): Coupon[] {
  return coupons;
}

function fetchSubscribersFromDB(page?: number): Subscriber[] {
  if (page == undefined) {
    return subscribers;
  }
  if (page <= 10) {
    return subscribers;
  }
  return [];
}

const emailSystem = {
  send: (email: Message) => {
    console.log(email);
  }
};

export function sendIssue() {
  const coupons = fetchCouponsFromDB();
  const goodCoupons = selectCouponsByRank(coupons, Rank.GOOD);
  const bestCoupons = selectCouponsByRank(coupons, Rank.BEST);
  const subscribers = fetchSubscribersFromDB();
  const emails = emailsForSubscribers(subscribers, goodCoupons, bestCoupons);
  emails.forEach((email) => {
    emailSystem.send(email);
  });
}

export function sendIssuePage() {
  const coupons = fetchCouponsFromDB();
  const goodCoupons = selectCouponsByRank(coupons, Rank.GOOD);
  const bestCoupons = selectCouponsByRank(coupons, Rank.BEST);
  let page = 0;
  let subscribers = fetchSubscribersFromDB(page);
  while (subscribers.length > 0) {
    const emails = emailsForSubscribers(subscribers, goodCoupons, bestCoupons);
    emails.forEach((email) => {
      emailSystem.send(email);
    });
    page++;
    subscribers = fetchSubscribersFromDB(page);
  }
}
