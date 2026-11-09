
package com.budgetwise.budgetwise_backend.controller;

// Notre DTO créé à l'étape précédente.
import com.budgetwise.budgetwise_backend.dto.TransactionResponse;

// Types Java utilisés pour représenter les données.
import java.math.BigDecimal;
import java.time.LocalDate;
import java.util.List;

// Annotations Spring MVC.
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

/*
 * Contrôleur pédagogique.
 *
 * Il retourne des données fictives pour
 * apprendre à construire une API REST.
 *
 * Il sera remplacé par une architecture
 * Controller -> Service -> Repository.
 */
@RestController
@RequestMapping("/api/demo/transactions")
public class DemoTransactionController {

    /*
     * Endpoint :
     * GET /api/demo/transactions
     *
     * @GetMapping indique que cette méthode
     * répond aux requêtes HTTP GET.
     */
    @GetMapping
    public List<TransactionResponse> getTransactions() {

        // Création d'une première transaction fictive.
        TransactionResponse salaire = new TransactionResponse(
            1L,
            "Salaire",
            new BigDecimal("8000.00"),
            "INCOME",
            LocalDate.of(2026, 11, 1)
        );

        // Création d'une deuxième transaction fictive.
        TransactionResponse courses = new TransactionResponse(
            2L,
            "Courses alimentaires",
            new BigDecimal("350.00"),
            "EXPENSE",
            LocalDate.of(2026, 11, 5)
        );

        // Retourne les deux transactions sous forme de liste.
        return List.of(salaire, courses);
    }
}
