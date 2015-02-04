###React Pirate Rrrr(React, Reflux & React-Router)

### What is React Pirate
React Pirate is a boilerplate/starter kit for React/Flux Single Page Apps.  It provides a starting point that follows conventions and best practices recommended by production applications.

### Architecture

This application uses reflux for data flow which is a simplified version of the flux architecture.  The main difference being that the dispatcher being moved into the actions themselves with singleton implementations removed. This article [Deconstructing ReactjJS's Flux](http://spoike.ghost.io/deconstructing-reactjss-flux/) gives a great overview of the differences between a traditional flux implementation and reflux



### Directory Layout
```
.
├── /app/                       # The source code of the application
│   ├── /actions/               # Action creators that allow to trigger a dispatch to stores
│   ├── /assets/                # Static files which are copied to ./build on compile
│   ├── /components/            # React components
│   │   └── /feature/           # React components grouped together according to feature
│   │       ├── /__tests__/     # Tests associated with the given feature
│   │       ├── feature.scss    # Styling associated with the given feature
│   │       └── feature.jsx     # React specific code for a given feature
│   ├── /constants/             # Enumerations used in action creators and stores
│   ├── /stores/                # Stores contain the application state and logic
│   └── /app.jsx                # The application's main file (entry point)
├── /build/                     # The folder for compiled output
├── /config/                    # Configuration files for Webpack, Jest etc.
├── /gulp/                      # gulp tasks for the project serperated by task type
├── /node_modules/              # 3rd-party libraries and utilities
├── gulpfile.js                 # Entry point into gulp tasks
└── package.json                # The list of 3rd party libraries and utilities
```

### Getting Started
```
git clone https://github.com/celerityweb/react-flux-boilerplate.git
cd react-flux-boilerplate
npm install
```

### How to Build & Run
<code>gulp</code>


### How to Test
Run unit tests powered by Jest with the following npm command:
<code>npm test</code>

### Heavily Influenced By:
[react-starter-kit](https://github.com/kriasoft/react-starter-kit)
