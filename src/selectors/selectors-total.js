export default (items) => (
  items.map((item) => item.amount)
          .reduce((total, amount) => total + amount, 0)
)
