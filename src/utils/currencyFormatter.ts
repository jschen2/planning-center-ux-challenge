export const currencyFormatter = (decimals?: boolean) => new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
  trailingZeroDisplay: decimals ? "auto" : "stripIfInteger"
});
