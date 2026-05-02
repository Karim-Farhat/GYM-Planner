# Gym Planner

A React-based workout planner that guides users through a structured **30-day Push / Pull / Legs training program**. The app helps users follow workouts in sequence, track lifted weights, unlock future sessions as they progress, and view exercise instructions inside a modal.

---

## Overview

Gym Planner is designed to make workout progression simple and practical.

Users complete workouts one day at a time, record their working weights, and unlock the next workout only after finishing the current one. Progress is stored locally in the browser so training history remains available between sessions.

---

## Features

### Structured 30-Day Program

* 30 workout days organized as **Push → Pull → Legs**
* Each workout includes warmup and main exercises
* Clear daily progression system

### Workout Locking System

* Only the first workout is available initially
* Completing a workout unlocks the next day
* Prevents skipping ahead and encourages consistency

### Weight Tracking

* Record maximum working weight for each exercise
* Saved weights automatically reappear when reopening workouts

### Local Progress Persistence

* Progress is stored using **localStorage**
* Completed workouts and saved weights remain available after refresh

### Exercise Help Modal

* Click the help icon beside any exercise
* Displays movement descriptions and guidance inside a modal overlay

### Responsive UI

* Card-based workout layout
* Designed for both desktop and mobile use

---

## Tech Stack

* **React**
* **Vite**
* **JavaScript (ES6+)**
* **CSS**
* **Font Awesome**
* **localStorage** for persistence

---

## Project Structure

```text
src/
 ├── components/
 │   ├── Grid.jsx
 │   ├── Hero.jsx
 │   ├── Layout.jsx
 │   ├── Modal.jsx
 │   └── WorkoutCard.jsx
 │
 ├── utils/
 │   └── index.js
 │
 ├── App.jsx
 └── main.jsx
```

### Component Responsibilities

* **Layout** — application header, page wrapper, and footer
* **Hero** — introductory training guidance and core rules
* **Grid** — workout navigation, locking logic, progress persistence
* **WorkoutCard** — workout details, exercise inputs, completion handling
* **Modal** — exercise descriptions displayed using React portals

---

## How It Works

### Workout Data

Workout plans and exercise descriptions are stored inside `utils/index.js`.

### Saving Progress

When the user saves or completes a workout:

* entered weights are stored
* completion state is saved
* data is written to browser `localStorage`

### Unlock Logic

A workout becomes available only when the previous workout has been completed.

### Completion Requirement

A workout can only be marked complete after all weight inputs for the workout have been filled.

---

## Environment Variables

This project **does not require any environment variables**.

All workout data is stored locally in the browser, and there are no external APIs or backend services.

---

## Possible Future Improvements

* Progress charts and analytics
* Rest timer between sets
* User accounts and cloud sync
* Custom workout creation
* Exercise search and filtering
