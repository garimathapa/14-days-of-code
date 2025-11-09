#Problem Statement

You are given an array of orders, where each order contains details about a customer, the items they purchased, and quantities.
Write a function summarizeOrders(orders) that returns a summary object mapping each customer’s name to the total amount they spent.

---

JavaScript Solution

function summarizeOrders(orders) {
  return orders.reduce((acc, order) => {
    const customerName = order.customer.name;
    const total = order.items.reduce(
      (sum, item) => sum + item.price * item.quantity,
      0
    );

    acc[customerName] = (acc[customerName] || 0) + total;
    return acc;
  }, {});
}

// Example usage:
console.log(summarizeOrders(orders));

---

TypeScript Solution

type Item = {
  name: string;
  price: number;
  quantity: number;
};

type Customer = {
  name: string;
  id: string;
};

type Order = {
  id: number;
  customer: Customer;
  items: Item[];
};

function summarizeOrders(orders: Order[]): Record<string, number> {
  return orders.reduce((acc: Record<string, number>, order) => {
    const customerName = order.customer.name;
    const total = order.items.reduce(
      (sum, item) => sum + item.price * item.quantity,
      0
    );

    acc[customerName] = (acc[customerName] || 0) + total;
    return acc;
  }, {});
}

// Example usage:
const result = summarizeOrders(orders);
console.log(result);
