# Resume Template - Angular Application

A modern, responsive resume template built with Angular 17+ featuring:

## Features

- 🎨 **Modern Design**: Clean, professional layout with beautiful typography
- 📱 **Responsive**: Optimized for desktop, tablet, and mobile devices
- 🖨️ **Print-Ready**: Optimized styles for printing with proper page breaks
- ⚡ **Fast Loading**: Lightweight and optimized for performance
- 🎯 **Customizable**: Easy to modify content and styling
- 🔧 **Standalone Components**: Built with Angular's latest standalone architecture

## Components

- **Header**: Name, title, and contact information
- **Personal Info**: About me, languages, and certifications
- **Skills**: Technical skills organized by categories with proficiency levels
- **Education**: Academic background with achievements
- **Experience**: Professional work history with detailed accomplishments
- **Projects**: Key projects with descriptions, features, and technologies

## Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn
- Angular CLI

### Installation

1. Clone the repository
```bash
git clone <repository-url>
cd resume-template
```

2. Install dependencies
```bash
npm install
```

3. Start the development server
```bash
npm start
```

4. Open your browser and navigate to `http://localhost:4200`

### Available Scripts

- `npm start` - Start development server
- `npm run build` - Build for production
- `npm test` - Run unit tests
- `npm run watch` - Build in watch mode

## Customization

### Personal Information

Edit the component files in `src/app/components/` to update:

- **Header Component**: Name, title, contact details
- **Personal Info Component**: Summary, languages, certifications
- **Skills Component**: Technical skills and proficiency levels
- **Education Component**: Academic background
- **Experience Component**: Work history and achievements
- **Projects Component**: Portfolio projects

### Styling

- Global styles: `src/styles.scss`
- Component-specific styles: Each component has its own `.scss` file
- Print styles: Included in component stylesheets with `@media print`

### Colors and Themes

The application uses a consistent color scheme defined in the SCSS files:

- Primary: `#3498db` (Blue)
- Secondary: `#2c3e50` (Dark Blue)
- Accent: `#e67e22` (Orange)
- Success: `#27ae60` (Green)

## Printing

The resume is optimized for printing:

1. Click the "Print Resume" button
2. Or use Ctrl+P (Cmd+P on Mac)
3. Set page size to A4 or Letter
4. Enable background graphics for best results

## Browser Support

- Chrome (recommended)
- Firefox
- Safari
- Edge

## Technologies Used

- Angular 17+
- TypeScript
- SCSS/Sass
- Font Awesome Icons
- Google Fonts (Inter)

## License

This project is open source and available under the [MIT License](LICENSE).

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## Support

If you encounter any issues or have questions, please open an issue on GitHub.