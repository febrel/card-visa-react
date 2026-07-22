# Visa Generator (React + LocalStorage CRUD)

A dynamic, front-end React application designed to simulate, validate, and manage credit/debit card data (specifically structured around Visa card specifications). The application provides a complete CRUD (Create, Read, Update, Delete) workflow, using the browser's localStorage for persistent data management without the need for an external database.

<img width="1426" height="790" alt="image" src="https://github.com/user-attachments/assets/051fba48-fc5d-4889-bebc-241189c75eb2" />



## 🚀 Características

- **Generación inteligente de tarjetas** con algoritmo de Luhn
- **CRUD completo** (Crear, Leer, Actualizar, Eliminar)
- **Persistencia de datos** en localStorage
- **Validaciones en tiempo real** (Luhn, CVV, fechas de expiración)
- **Selector de tema** (Light / Dark / System)
- **Diseño responsive** y experiencia de usuario fluida
- **Feedback visual** con notificaciones (toasts)
- **Soporte para múltiples emisores** (Visa, Mastercard, Amex, Discover)

<img width="1887" height="845" alt="image" src="https://github.com/user-attachments/assets/698d621c-72f6-4903-b370-e303c3219bdf" />

## 🛠️ Tech Stack

- **Frontend:** React (Functional Components & Hooks)
- **State Management:** React Context API
- **Storage:** Web Storage API (localStorage)
- **Styling:** CSS Modules / Tailwind CSS
- **Build Tool:** Vite

<img width="1429" height="746" alt="image" src="https://github.com/user-attachments/assets/19c25be6-a9f2-477d-ac57-9a1245376ffb" />

## 🔧 Instalación y Uso

```bash
# Clonar repositorio
git clone https://github.com/tu-usuario/visa-generator.git

# Instalar dependencias
npm install

# Ejecutar en modo desarrollo
npm run dev

# Construir para producción
npm run build

# Vista previa de producción
npm run preview
