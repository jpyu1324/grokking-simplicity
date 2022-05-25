import { filter, map, reduce } from "@src/chapter13/util";

export default {};

interface Product {
  type: string;
  numberInInventory: number;
}
// before
function shoesAndSocksInventory(products: Product[]) {
  let inventory = 0;
  for (let p = 0; p < products.length; ++p) {
    const product = products[p];
    if (product.type === "shoes" || product.type === "socks") {
      inventory += product.numberInInventory;
    }
  }
  return inventory;
}

// after
function shoesAndSocksInventory_after(products: Product[]) {
  const shoesAndSocks = filter(products, (product) => {
    return product.type === "shoes" || product.type === "socks";
  });

  const inventories = map(shoesAndSocks, function (product) {
    return product.numberInInventory;
  });

  return reduce(inventories, 0, function (total, inventory) {
    return total + inventory;
  });
}
