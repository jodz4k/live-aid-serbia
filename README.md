# Live Aid Serbia

A humanitarian campaign platform inspired by the legendary Live Aid concert, built with Angular.

## Features

- **Campaign Management**: View and support various humanitarian campaigns
- **User Authentication**: Secure login system with demo credentials
- **Donation System**: Template-driven and reactive forms for donations
- **Artists Showcase**: Display participating artists and musicians
- **Responsive Design**: Mobile-friendly interface
- **Real-time Validation**: Comprehensive form validation with user feedback
- **Loading States**: Professional UX with loading indicators
- **About Page**: Mission, history, and values of the initiative

## Demo Credentials

- **Email**: user@example.com
- **Password**: password

## Development

### Prerequisites

- Node.js (v12 or higher)
- npm or yarn
- Angular CLI

### Installation

```bash
# Clone the repository
git clone https://github.com/YOUR_USERNAME/live-aid-serbia.git
cd live-aid-serbia

# Install dependencies
npm install

# Start development server
npm start
# or
ng serve

# Build for production
npm run build
# or
ng build --prod
```

### Testing

```bash
# Run unit tests
npm test
# or
ng test

# Run e2e tests
npm run e2e
# or
ng e2e
```

## Project Structure

```
src/
├── app/
│   ├── components/          # Reusable UI components
│   │   ├── campaign-card/   # Campaign display cards
│   │   ├── donation-widget/ # Donation form container
│   │   ├── loading-spinner/ # Loading indicator
│   │   └── navbar/          # Navigation component
│   ├── forms/               # Donation form components
│   ├── pages/               # Route-based pages
│   │   ├── home/            # Landing page
│   │   ├── artists/         # Artists showcase
│   │   ├── about/           # About page
│   │   └── campaign-details/# Individual campaign view
│   ├── services/            # Business logic services
│   └── interceptors/        # HTTP interceptors
├── assets/                  # Static assets
└── environments/            # Environment configurations
```

## Technologies Used

- **Angular**: Framework for building the application
- **TypeScript**: Type-safe development
- **RxJS**: Reactive programming
- **SCSS**: Component styling
- **Angular CLI**: Build and development tools

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License.

## Acknowledgments

- Inspired by the original Live Aid concert (1985)
- Built as part of advanced web development coursework
- Dedicated to humanitarian causes worldwide
