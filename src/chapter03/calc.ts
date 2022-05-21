import { Coupon, Message, Rank, Subscriber } from "@src/chapter03/data";

function subCouponRank(subscriber: Subscriber): Rank {
  if (subscriber.rec_count >= 10) {
    return Rank.BEST;
  } else {
    return Rank.GOOD;
  }
}

export function selectCouponsByRank(coupons: Coupon[], rank: Rank): string[] {
  const ret: string[] = [];
  coupons.forEach((coupon) => {
    if (coupon.rank === rank) {
      ret.push(coupon.code);
    }
  });
  return ret;
}

function emailForSubscriber(
  subscriber: Subscriber,
  goods: string[],
  bests: string[]
): Message {
  const rank = subCouponRank(subscriber);
  return {
    from: "newsletter@coupondog.co",
    to: subscriber.email,
    subject: "Your good weekly coupons inside",
    body: `Here are the ${rank} coupons: ${(rank === Rank.BEST
      ? bests
      : goods
    ).join(" ,")}`
  };
}

export function emailsForSubscribers(
  subscribers: Subscriber[],
  goods: string[],
  bests: string[]
): Message[] {
  const emails: Message[] = [];
  subscribers.forEach((subscriber) => {
    const email = emailForSubscriber(subscriber, goods, bests);
    emails.push(email);
  });

  return emails;
}
