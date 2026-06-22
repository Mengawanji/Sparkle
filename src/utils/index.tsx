export interface Product {
  id: string | number;
  title: string;
  price: number;
  qty?: number;
  sale?: boolean;
  category?: string;
  colors?: string[];
  size?: string[];
}

export interface CartItem {
  id: string | number;
  title: string;
  price: number;
  qty: number;
}

/* ---------------- Flash Products ---------------- */

export function getFlashProducts(products: Product[]): Product[] {
  return products.filter((item) => item.sale).slice(0, 8);
}

/* ---------------- Featured Products ---------------- */

export function getFeaturedProducts(products: Product[]): Product[] {
  return products.filter((item) => item.sale).slice(0, 12);
}

/* ---------------- Total Price ---------------- */

export function totalPrice(items: CartItem[]): number {
  return items.reduce(
    (acc, item) => acc + item.price * item.qty,
    0
  );
}

/* ---------------- Wishlist ---------------- */

export function isWishListed(
  productId: string | number,
  wishList: Product[]
): boolean {
  return wishList.some(
    (product) => product.id === productId
  );
}

/* ---------------- Compare List ---------------- */

export function getCompareList(
  items: Product[]
): Product[] {
  return items.slice(0, 4);
}

/* ---------------- Search Filter ---------------- */

export function searchFilter(
  row: Product,
  search: string
): boolean {
  return (
    row.title
      .toLowerCase()
      .includes(search.toLowerCase()) || !search
  );
}

/* ---------------- Helper Functions ---------------- */

export function checkLengNull(
  data: { length: number } | null | undefined
): boolean {
  return !!data && data.length > 0;
}

export function isEquals(
  a: string | null,
  b: string | null
): boolean {
  if (a && b) {
    return a.toLowerCase() === b.toLowerCase();
  }

  return a === b;
}

export function minValueOne(
  qty: number
): number {
  return qty < 1 ? 1 : qty;
}

/* ---------------- Filters ---------------- */

export function filterProductByCategory(
  product: Product,
  selectedCategory: string
): boolean {
  if (checkLengNull(selectedCategory)) {
    return (
      product.category?.toLowerCase() ===
      selectedCategory.toLowerCase()
    );
  }

  return true;
}

export function filterProductByPrice(
  product: Product,
  price: number[]
): boolean {
  if (checkLengNull(price)) {
    return (
      product.price >= price[0] &&
      product.price <= price[1]
    );
  }

  return true;
}

export function filterProductByColor(
  product: Product,
  color: string
): boolean {
  if (checkLengNull(color) && product.colors) {
    return product.colors.some(
      (item) =>
        item.toLowerCase() === color.toLowerCase()
    );
  }

  return true;
}

export function filterProductBySize(
  product: Product,
  size: string
): boolean {
  if (checkLengNull(size) && product.size) {
    return product.size.some(
      (item) =>
        item.toLowerCase() === size.toLowerCase()
    );
  }

  return true;
}