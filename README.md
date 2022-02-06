# Production Grade Next.js course

> by scott moss and frontendmasters

[Curriculum](https://production-grade-nextjs.vercel.app)

# Next

An opinionated framework built on top of React that provides several extra features, such as server-side rendering and generating static websites.
/next.config.js, /next-env.d.ts

# React

A JavaScript library used for building UI. Allows for quick development, because components are declaratively built around state. The correct components will render in reaction to data changes. React is used in the code whenever we’re using components, classes, elements, etc.

# React-Dom

Browser does not know what to do with a React element. React DOM acts as a middleman to render in the browser. React-Dom is used when we see methods like render() or findDOMNode().

# Webpack

Webpack is a static module bundler that goes through the packages and creates a dependency graph of the modules that the app needs. It then creates a new, singular bundle.js package that can be plugged into the html. Without it, we’d have to plug in many different bundles to the html and the directory would quickly become bulky and unmanageable.

# Babel

JavaScript compiler that transforms code and makes ES2015+ work with older browsers. Allows things like arrow functions and JSX to compile properly, which makes Babel a necessity in a React or Next.js application.

# Typescript

Offers all of JavaScript’s features, and an additional layer of Typescript types on top of this. Allows us to write more strictly typed JavaScript, which can highlight unexpected behavior in our code, thereby helping to reduce bugs.
/tsconfig.json

# NPM

NPM is the world’s largest software library, allowing us access to hundreds of thousands of packages. Inside of a project, npm is also used for package management, so that all dependencies listed in the package.json file can installed using the script npm install. For our application, there are additional npm scripts:
dev - Runs next dev which starts Next.js in development mode
build - Runs next build which builds the application for production usage
start - Runs next start which starts a Next.js production server
lint - Runs next lint which sets up Next.js' built-in ESLint configuration
/package.json, /node_modules

# ESLint

Scans the code against ESLint rules
.eslintrc, .eslintignore
