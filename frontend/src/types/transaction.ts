
/*
 * Représente une transaction financière
 * reçue depuis notre backend Spring Boot.
 *
 * Cette structure correspond au DTO Java
 * TransactionResponse.
 */
export interface Transaction {

  // Identifiant unique de la transaction.
  id: number;

  // Description de la transaction.
  description: string;

  // Montant de la transaction en MAD.
  amount: number;

  // Type : revenu ou dépense.
  type: "INCOME" | "EXPENSE";

  // Date au format ISO : AAAA-MM-JJ.
  date: string;
}
