# Contact List App

A modern, responsive React contact management app built for the Tria frontend assignment. View, search, add, edit, and delete contacts using a clean, minimal interface with Tailwind CSS and Lucide icons.

---

## Demo

Live demo: https://contact-list-tria.vercel.app

---

## Features

- Real-time search/filter by name
- Add contacts (name, email, phone) with validation
- Edit contacts in the same modal used for adding
- Delete contacts
- Mock API fetching with simulated delay
- Responsive design with Tailwind CSS
- Accessible, component-based React code using hooks

---

## Tech Stack

- React (functional components + hooks)
- Tailwind CSS
- Lucide React (icons)
- Vite or Create React App (development)

---

## Installation

1. **Clone the repository**
```bash
   git clone https://github.com/Sny458/Contact-Manager
   cd Contact-Manager
```

2. **Install dependencies**
```bash
   npm install
```

3. **Run the development server (Vite)**
```bash
   npm run dev
```

The app runs at `http://localhost:5173/` (Vite default).

---

## Project Structure
```
src/
├── components/
│   ├── addContact.jsx
│   ├── contactCard.jsx
│   └── searchContact.jsx
│
├── data/
│   └── mockContacts.js
│
├── utils/
│   └── fetchContacts.js
│
└── App.jsx
```

---

## Data & Validation

- Contacts are mocked locally; no backend by default.
- Data is not persisted — page refresh resets state.
- Form validation:
  - Required: name, email, phone
  - Email must match basic email pattern
  - Phone accepts digits and "+" only

---

## Development Notes

- Replace mock data with a real API or localStorage for persistence.
- Components are intentionally small and composable for easy testing and extension.
- Tailwind configuration is used for quick styling; extend as needed.

---

## Future Improvements

- Persist data (localStorage or backend)
- Add contact photos / avatars
- Sorting, grouping, and favorites
- Dark mode and accessibility polishing
- Integration tests and CI/CD pipeline

---

## Author

**Sunny**  
Email: sunnyscnt458@gmail.com  
GitHub: https://github.com/Sny458/

---

## License

MIT