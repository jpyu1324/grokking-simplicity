export interface Subscriber {
  email: string;
  rec_count: number;
}

export interface Coupon {
  code: string;
  rank: Rank;
}

export interface Message {
  from: string;
  to: string;
  subject: string;
  body: string;
}

export const Rank = {
  BEST: "best",
  GOOD: "good",
  BAD: "bad"
} as const;

export type Rank = typeof Rank[keyof typeof Rank];

export const subscribers: Subscriber[] = [
  {
    email: "sam@pmail.com",
    rec_count: 16
  }
];

export const coupons: Coupon[] = [{ code: "10PERCENT", rank: Rank.BAD }];

export const messages: Message[] = [
  {
    from: "newsletter@coupondog.co",
    to: "sam@pmail.com",
    subject: "Your weekly coupons inside",
    body: "Here are your coupons ..."
  }
];
