# Document Intelligence Platform - Frontend

This is the frontend application for the **Document Intelligence Platform (RAG System)**.

The frontend is built using **React + Vite + Tailwind CSS + DaisyUI** and is designed to provide a clean, responsive, and modern user experience for:

- User authentication
- Document dashboard
- Document upload
- Chat with documents
- Grounded AI interaction flow

---

# 1. Project Purpose

The purpose of this frontend is to provide a user-friendly interface where users can:

- Register and log in securely
- Access a personalized dashboard
- Upload documents
- View document-related information
- Interact with a conversational AI interface
- Ask questions based on uploaded documents

---

# 2. Tech Stack Used

## Tailwind CSS

Used for utility-first styling.

### Why Tailwind CSS?

- Fast UI styling directly in components
- Easy responsive design
- Less custom CSS needed
- Clean consistency across the project

---

## DaisyUI

Used on top of Tailwind CSS for ready-made UI components.

### Why DaisyUI?

- Provides beautiful components quickly
- Works smoothly with Tailwind
- Good themes and UI consistency
- Helps speed up dashboard and auth page design

---

## React Router DOM

Used for routing between pages.

### Why React Router DOM?

- Supports modern SPA navigation
- Helps manage public and protected routes
- Required for dashboard, upload, chat, login, and register navigation

---

## Redux Toolkit

Used for authentication state management.

### Why Redux Toolkit instead of Context API?

- Better scalability
- Cleaner central state management
- Easier handling of auth state, user info, token, and loading/error states
- More suitable for medium to large applications

---

## React Redux

Used to connect Redux store with React components.

### Why React Redux?

- Makes Redux state accessible throughout the app
- Keeps authentication logic centralized and predictable

---

## Axios

Used for API handling.

### Why Axios?

- Easy HTTP request handling
- Cleaner API structure
- Supports interceptors
- Useful for attaching authentication token automatically later

---

## Framer Motion

Used for page and component animations.

### Why Framer Motion?

- Smooth animations
- Better UX
- Makes auth and dashboard transitions feel modern

---

## React Hot Toast

Used for notifications.

### Why React Hot Toast?

- Lightweight
- Easy to use
- Good for success/error/info alerts like login, file upload, validation errors

## React Icons

Used for icons in sidebar and navigation.

### Why React Icons?

- Easy to use
- Lightweight
- Makes UI cleaner and more expressive
