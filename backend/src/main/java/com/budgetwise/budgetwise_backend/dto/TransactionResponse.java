
package com.budgetwise.budgetwise_backend.dto;

import java.math.BigDecimal;
import java.time.LocalDate;

// DTO utilisé pour transmettre les données
// d'une transaction au frontend React.
public record TransactionResponse(

    Long id,             // Identifiant de la transaction
    String description,  // Description
    BigDecimal amount,   // Montant financier
    String type,         // INCOME ou EXPENSE
    LocalDate date       // Date de la transaction

) {}
