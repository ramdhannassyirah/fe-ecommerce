# E-Commerce Frontend

Welcome to the frontend repository of the E-Commerce project. This project is built with **Vue.js**, styled with **Tailwind CSS**, and enhanced with **Flowbite** components to create a modern and responsive user interface.

---

## Features

- **Responsive Design**: Optimized for various screen sizes with Tailwind CSS.
- **Reusable Components**: Built with modular and reusable components for scalability.
- **Interactive UI**: Enhanced interactivity using Flowbite's pre-designed UI elements.
- **Product Listings**: Dynamic rendering of product listings fetched from the API.
- **Cart Management**: Add, update, and remove items from the shopping cart.
- **User Authentication**: Login and registration forms.

---

## Tech Stack

### Core Technologies
- **Vue.js**: A progressive JavaScript framework for building user interfaces.
- **Tailwind CSS**: Utility-first CSS framework for rapid UI development.
- **Flowbite**: Component library built on top of Tailwind CSS for pre-designed components.

### Additional Tools
- **Axios**: For API calls and handling HTTP requests.
- **Vue Router**: For managing navigation and routes within the app.
- **Vuex (or Pinia)**: For state management (if applicable).

---

## Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/your-username/your-repo-name.git
   cd your-repo-name
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Run the development server**:
   ```bash
   npm run dev
   ```

4. **Build for production**:
   ```bash
   npm run build
   ```

---

## Project Structure

```
.
├── src
│   ├── assets          # Static assets like images and fonts
│   ├── components      # Vue components
│   ├── layouts         # Layout components
│   ├── pages           # Pages for routing
│   ├── router          # Vue Router configuration
│   ├── store           # State management files
│   ├── styles          # Global styles and Tailwind config
│   ├── utils           # Utility functions
│   └── main.js         # Entry point for Vue.js
├── public              # Public files
├── package.json        # Project dependencies and scripts
└── tailwind.config.js  # Tailwind CSS configuration
```

---

## Usage

### API Integration
Ensure that your backend API is running and update the base URL in the API service file (e.g., `src/utils/axios.js`):

```javascript
const axiosInstance = axios.create({
  baseURL: 'https://your-api-url.com/api',
});
```

### Environment Variables
Create a `.env` file in the root directory and configure the necessary environment variables:

```
VITE_API_BASE_URL=https://your-api-url.com/api
```

---

## Contributing

We welcome contributions! Please follow these steps:

1. Fork the repository.
2. Create a new branch for your feature (`git checkout -b feature-name`).
3. Commit your changes (`git commit -m 'Add feature'`).
4. Push the branch (`git push origin feature-name`).
5. Open a Pull Request.

---

## License

This project is licensed under the MIT License. See the `LICENSE` file for details.

---

## Acknowledgments

- [Vue.js Documentation](https://vuejs.org/)
- [Tailwind CSS Documentation](https://tailwindcss.com/)
- [Flowbite Documentation](https://flowbite.com/docs/)

---

## Contact

For any questions or feedback, please contact:

- **Name**: [Ramdhan Nassyirah]
- **Email**: [ramdhannassyirahh@gmail.com]
- **GitHub**: [(https://github.com/ramdhannassyirah)]

