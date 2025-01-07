const currencyFormatter = (cost, currency = "USD", discount) => {

  const price = cost - (cost * discount) / 100;

  const moneyWithDiscount = price.toLocaleString("en-EN", {
    style: "currency",
    currency,
  })
  const moneyWithOutDiscount = cost.toLocaleString("en-EN", {
    style: "currency",
    currency,
  })
  return {
    moneyWithOutDiscount,
    moneyWithDiscount
  }
}

export default currencyFormatter