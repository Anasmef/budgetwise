
import { useEffect, useState } from "react";

import TransactionList from "./components/TransactionList";
import { getTransactions } from "./services/transactionService";
import type { Transaction } from "./types/transaction";

import "./App.css";

export default function App() {

  // Liste des transactions récupérées depuis Spring Boot.
  const [transactions, setTransactions] =
    useState<Transaction[]>([]);

  // Indique si les données sont en cours de chargement.
  const [loading, setLoading] = useState(true);

  // Contient un éventuel message d'erreur.
  const [error, setError] = useState<string | null>(null);

  /*
   * useEffect déclenche le chargement des transactions.
   *
   * Le tableau [] indique que cet effet ne dépend
   * d'aucune prop ou valeur d'état changeante.
   */
  useEffect(() => {

    // Empêche de modifier l'état après le nettoyage.
    let active = true;

    // Fonction asynchrone de chargement.
    async function loadTransactions() {
      try {
        setLoading(true);
        setError(null);

        // Appel du service qui communique avec Spring Boot.
        const data = await getTransactions();

        // Mise à jour de l'état React.
        if (active) {
          setTransactions(data);
        }

      } catch (err) {

        // Gestion des erreurs réseau ou HTTP.
        if (active) {
          setError(
            err instanceof Error
              ? err.message
              : "Une erreur inattendue est survenue."
          );
        }

      } finally {

        // Le chargement est terminé.
        if (active) {
          setLoading(false);
        }
      }
    }

    // Lancement de la fonction asynchrone.
    void loadTransactions();

    // Nettoyage lorsque l'effet est invalidé.
    return () => {
      active = false;
    };

  }, []);

  return (
    <main className="container">

      <header>
        <h1>BudgetWise</h1>
        <p>Application de gestion de budget personnel</p>
      </header>

      {/* Message affiché pendant le chargement. */}
      {loading && <p>Chargement des transactions...</p>}

      {/* Message affiché si une erreur survient. */}
      {error && (
        <p className="error" role="alert">
          {error}
        </p>
      )}

      {/* Liste affichée lorsque le chargement réussit. */}
      {!loading && !error && (
        <TransactionList transactions={transactions} />
      )}

    </main>
  );
}
