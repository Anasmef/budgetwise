
package com.budgetwise.budgetwise_backend.controller;

// Importation de l'annotation qui gère les requêtes HTTP GET.
import org.springframework.web.bind.annotation.GetMapping;

// Importation de l'annotation permettant de créer un contrôleur REST.
import org.springframework.web.bind.annotation.RestController;

/*
 * Cette classe est un contrôleur REST.
 *
 * Son rôle est de recevoir des requêtes HTTP
 * et de retourner des réponses au client.
 */
@RestController
public class HealthController {

    /*
     * GET /api/health
     *
     * Cette route permet de vérifier que notre
     * application BudgetWise est accessible.
     */
    @GetMapping("/api/health")
    public String checkHealth() {

        // Message retourné lorsque le serveur fonctionne.
        return "BudgetWise API is running";
    }
}
