export interface Item {
  name: string;
  price: number;
  quantity: number;
  tax: number;
  shipping: boolean;
  size: number;
}

export class Button {
  private item_: Item;
  public constructor(item: Item) {
    this.item_ = item;
  }

  public get item(): Item {
    return this.item_;
  }

  public showFreeShippingIcon() {
    console.log(this.showFreeShippingIcon.name);
  }
  public hideFreeShippingIcon() {
    console.log(this.hideFreeShippingIcon.name);
  }
}

export type Cart = Object & Record<string, Item>;
