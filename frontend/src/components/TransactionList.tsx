
import type { Transaction } from "../types/transaction";

// Les données attendues par le composant.
interface TransactionListProps {
  transactions: Transaction[];
}

/*
 * Composant qui affiche une liste
 * de transactions sous forme de tableau.
 */
export default function TransactionList({
  transactions
}: TransactionListProps) {

  // Formatage des montants en dirhams marocains.
  const formatter = new Intl.NumberFormat("fr-MA", {
    style: "currency",
    currency: "MAD"
  });

  // Message affiché si aucune transaction n'existe.
  if (transactions.length === 0) {
    return <p>Aucune transaction disponible.</p>;
  }

  return (
    <section>
      <h2>Mes transactions</h2>

      <table>
        <thead>
          <tr>
            <th>Description</th>
            <th>Type</th>
            <th>Date</th>
            <th>Montant</th>
          </tr>
        </thead>

        <tbody>
          {transactions.map((transaction) => (
            <tr key={transaction.id}>

              <td>{transaction.description}</td>

              <td>
                {transaction.type === "INCOME"
                  ? "Revenu"
                  : "Dépense"}
              </td>

              <td>{transaction.date}</td>

              <td>
                {transaction.type === "INCOME" ? "+" : "-"}
                {formatter.format(transaction.amount)}
              </td>

            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
}
