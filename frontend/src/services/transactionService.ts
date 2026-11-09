
// Import du type décrivant une transaction.
import type { Transaction } from "../types/transaction";

/*
 * Service responsable de la communication
 * avec l'API REST de BudgetWise.
 *
 * Pour le moment, nous utilisons l'endpoint
 * pédagogique /api/demo/transactions.
 */
export async function getTransactions(): Promise<Transaction[]> {

  // Envoie une requête HTTP GET à notre API.
  const response = await fetch("/api/demo/transactions");

  // Vérifie si le serveur a répondu avec succès.
  if (!response.ok) {
    throw new Error(
      `Erreur HTTP : ${response.status}`
    );
  }

  // Convertit la réponse JSON en objet JavaScript.
  // Le type est déclaré ici mais pas validé à l'exécution.
  const data: Transaction[] = await response.json();

  // Retourne la liste des transactions.
  return data;
}
