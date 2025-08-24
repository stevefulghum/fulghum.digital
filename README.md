# fulghum.digital

Steve's website. Check out my resume, isn't it neat?

I'm particularly proud of the CSS here.

## 🚀 Features

- **Angular 20** - Latest Angular with standalone components
- **Modern CSS** - Clean, responsive design with custom styling
- **TypeScript** - Full type safety throughout the application
- **Code Quality** - Integrated linting with Stylelint for CSS

## 🛠️ Tech Stack

- **Frontend**: Angular 20, TypeScript, RxJS
- **Backend**: Node.js, Express
- **Styling**: CSS with Stylelint
- **Build Tools**: Angular CLI, Angular Build

## 📦 Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd fulghum.digital
```

2. Install dependencies:
```bash
npm install
```

## 🚦 Development

### Development Server
Start the development server:
```bash
npm start
# or
ng serve
```
Navigate to `http://localhost:4200/`. The app will automatically reload when you change any source files.

### Build for Production
Build the project:
```bash
npm run build
```
The build artifacts will be stored in the `dist/` directory.

## 🎨 Code Quality

### CSS Linting
Check CSS for style issues:
```bash
npm run lint:css
```

Auto-fix CSS issues:
```bash
npm run lint:css:fix
```

## 📁 Project Structure

```
src/
├── app/
│   ├── components/
│   │   └── page/           # Page component
│   ├── app.config.ts       # App configuration
│   ├── app.routes.ts       # Routing configuration
│   └── app.ts              # Root component
├── styles.css              # Global styles
├── functions.css           # Utility CSS functions
└── global.css             # Global CSS variables
```

## 🚀 Deployment

The project is configured for server-side rendering. After building, deploy the `dist/` directory to your hosting platform that supports Node.js.

## 📝 Scripts

- `npm start` - Start development server
- `npm run build` - Build for production
- `npm run watch` - Build in watch mode
- `npm test` - Run unit tests
- `npm run serve:ssr:fulghum.digital` - Serve SSR build
- `npm run lint:css` - Lint CSS files
- `npm run lint:css:fix` - Fix CSS linting issues

## 🤝 Contributing

This is a personal website project. If you find any issues or have suggestions, feel free to open an issue or submit a pull request.

## 📄 License

This project is private and proprietary.
