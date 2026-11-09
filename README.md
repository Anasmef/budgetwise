# BudgetWise

**BudgetWise** is a personal budget management web application built with Java, Spring Boot, React and TypeScript.

The project aims to provide a structured and secure solution for tracking income, expenses and monthly budgets.

## Technology Stack

**Backend**
- Java 21
- Spring Boot 4
- Maven
- REST API

**Frontend**
- React
- TypeScript
- Vite

**Planned Integrations**
- PostgreSQL
- Flyway
- Keycloak
- MinIO
- Docker
- JUnit

## Current Progress

- [x] Initialize Spring Boot backend
- [x] Configure Java and Maven
- [x] Create REST API endpoints
- [x] Create transaction DTO
- [x] Initialize React frontend
- [x] Connect frontend to backend
- [ ] Integrate PostgreSQL and Flyway
- [ ] Implement transaction CRUD
- [ ] Implement authentication
- [ ] Implement budget management
- [ ] Add automated tests and Docker configuration

## Project Structure

```text
budgetwise/
├── backend/       # Spring Boot REST API
├── frontend/      # React and TypeScript
├── .gitignore
└── README.md
```

## Running the Project Locally

### Backend

Requirements: Java 21.

```bash
cd backend
```

On Windows:

```powershell
.\mvnw.cmd spring-boot:run
```

Backend: `http://localhost:8080`

### Frontend

Requirements: a compatible Node.js version and npm.

```bash
cd frontend
npm install
npm run dev
```

Frontend: `http://localhost:5173`

## Demo API

| Method | Endpoint | Description |
|---|---|---|
| GET | `/api/health` | Check backend status |
| GET | `/api/demo/transactions` | Retrieve sample transactions |

The transactions currently use fictional data. Database persistence and user authentication will be added in later phases.

## Project Status

Under active development. Currently completing the initial frontend/backend integration.

## Author

Anas Meftah
