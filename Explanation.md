# ShopSmart / Cybernetix Platform Explanation

## 1. Architecture

The platform follows a modern decoupled **Client-Server (MERN-style)** architecture, optimized for performance, scalability, and 3D web interactions.

### Frontend
- **Framework:** React.js powered by Vite for rapid HMR and optimized production builds.
- **Styling:** Custom CSS implementing a "Cyber-HUD" minimalist, futuristic, dark-mode theme suited for high-tech drone and robotics hardware. 
- **3D Graphics:** Integrated `@react-three/fiber` and `@react-three/drei` to render an interactive `CybernetixModel` directly in the DOM, tied to scroll progression for a premium, Apple-style landing page feel.
- **Routing & State:** `react-router-dom` for navigation and a dedicated `AuthContext` component to manage user state seamlessly through the app.

### Backend
- **Framework:** Node.js with Express.js to handle API endpoints securely and efficiently.
- **Database & ORM:** PostgreSQL managed via Prisma ORM (`@prisma/client`). Prisma makes schema migrations and database interactions strongly typed and secure.
- **Security:** Standard RESTful setups using `bcrypt` for password hashing and `jsonwebtoken` (JWT) for stateless authentication. `cors` is properly enabled for frontend isolation.

---

## 2. CI/CD Workflow

We maintain strict Continuous Integration (CI) practices via **GitHub Actions** and strict checks:

*   **Idempotent Environment Setup:** The `scripts/setup.sh` uses `mkdir -p` and conditional dependency checks (`if [ ! -d "node_modules" ]`) ensuring it can be run multiple times safely without corrupting the environment.
*   **Automated Testing Pipeline (`ci.yml`):**
    *   Fires dynamically on `push` and `pull_request` to the `main` branch.
    *   *Backend Job:* Installs dependencies, sets up the Node cache, and executes Jest-based unit and integration tests (e.g., Auth & Health check verifications).
    *   *Frontend Job:* Installs dependencies, executes a Vitest suite, and strictly runs `eslint` – blocking merging if any bad coding practices are detected. Finally checks if the build succeeds (`npm run build`).
*   **Dependency Management:** `dependabot.yml` is configured to run weekly, proactively monitoring root, frontend, and backend environments for outdated packages.

---

## 3. Design Decisions

*   **Sci-Fi "Cybernetix" Aesthetic:** Since the e-commerce inventory focuses on advanced Drones, Robotics Kits, AI Systems, and STEM Learning materials, standard generic e-commerce templates were scrapped. The UI uses brackets `[ CATEGORIES ]`, glowing cyber-lines, and 3D rotating graphics to invoke a premium "tech-hub" feeling. 
*   **Mega-Menu Implementation:** The catalog is massive (Drones, Controllers, AI & Smart Systems). To avoid a cluttered UI, we nested these into a cohesive mega-menu inside the navbar. This maintains a minimalist primary screen while providing immediate depth upon hovering.
*   **Vite over CRA:** Selected Vite over Create-React-App for significantly faster startup times, native ES Module support, and more elegant out-of-the-box configurations for modern plugins like `tailwindcss`.

---

## 4. Challenges Faced

1.  **React Three Fiber (R3F) vs. ESLint:** 
    *   *The Issue:* ESLint native configurations strictly check for unknown properties in React JSX. Since R3F uses lowercase intrinsic elements mapping directly to Three.js properties (e.g., `<boxGeometry args={...} />`), ESLint threw widespread `react/no-unknown-property` errors.
    *   *The Fix:* Configured strict targeted overrides in `.eslintrc.json` while maintaining rigorous lint checks across the rest of the application.
2.  **Strict GitHub Actions Checks:** 
    *   *The Issue:* Initially, CI logic allowed the pipeline to pass even if the linter threw warnings or failed, compromising code quality.
    *   *The Fix:* Stripped out fail-safes (e.g., `|| echo "Failed"`) and cleaned up all R3F warnings, forcing the deployment pipeline to definitively fail if developers push poor or messy code.
3.  **Complex State across Components:** Creating custom mega menus and overlapping 3D models while ensuring mobile responsiveness required strict CSS `z-index` handling and absolute positioning of the underlying 3D `<Canvas>` to avoid blocking clickable elements like "CART" or "PROFILE".
