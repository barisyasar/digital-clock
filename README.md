# DIGITAL CLOCK

[Click for Demo](https://digital-clock-three-psi.vercel.app/)

## Table of Contents

- [Features](#features)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Project Structure](#project-structure)

## Features

- **Display Time:** Shows current time in HH:MM format.
- **Time Zone:** It displays the time according to the selected time zone.
- **12 hour or 24 hour:** Display options.
- **Light & Dark mode:** Easily toggle between themes.
- **Responsive Design:** The application displays properly on mobile devices.

## Technologies Used

**Frontend**

- React (with Vite)
- Javascript
- CSS
- Zustand (preferred for state management, including theme, time zone, and clock mode)
- @iconify/react for consistent icons

## Installation

To run the Digital Clock Application locally, follow these steps:

```sh
git clone https://github.com/barisyasar/digital-clock.git
```

```sh
cd digital-clock
```

```sh
yarn install
```

```sh
yarn dev
```

## Project Structure

```sh
src/
├── App.jsx
├── Pages
│   └── Home.jsx
├── assets
│   └── css
│       ├── base
│       │   ├── reset.css
│       │   ├── typography.css
│       │   └── variables.css
│       ├── index.css
│       ├── themes
│       │   ├── dark.css
│       │   └── light.css
│       └── utils
│           └── helpers.css
├── components
│   ├── Card
│   │   ├── index.jsx
│   │   └── style.css
│   ├── Clock
│   │   └── index.jsx
│   ├── ClockMode
│   │   └── index.jsx
│   ├── Digit
│   │   ├── index.jsx
│   │   └── style.css
│   ├── Footer
│   │   └── index.jsx
│   ├── Header
│   │   └── index.jsx
│   ├── Layout
│   │   └── index.jsx
│   ├── Seprator
│   │   ├── index.jsx
│   │   └── style.css
│   ├── ThemeButton
│   │   └── index.jsx
│   └── TimeZoneSelect
│       └── index.jsx
├── constants
│   ├── digitSegments.js
│   └── icons.js
├── hooks
│   ├── useTheme.js
│   └── useTime.js
├── main.jsx
└── store
    ├── useThemeStore.js
    └── useTimeStore.js

```
