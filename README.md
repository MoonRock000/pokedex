# Pokédex App

## 🌟 Features

### Core Functionality
- **Add New Pokémon**: Capture Pokémon with name, photo, types, and descriptions
- **View Pokémon Collection**: Browse all saved Pokémon in a beautiful grid layout
- **Pokémon Details**: View detailed information about each Pokémon
- **Type Filtering**: Filter Pokémon by type (Normal, Fire, Water, Electric, Grass, Ice, Fighting, Poison, Ground, Flying, Psychic, Bug, Rock, Ghost, Dragon, Dark, Steel, Fairy)
- **Search Functionality**: Find Pokémon quickly with real-time search

### UI/UX Features
- **Dark Theme**: Eye-catching powder bluish and blackish color scheme
- **Smooth Animations**: Beautiful animations on the detail screen
- **Custom Alerts**: Fancy, animated alert dialogs
- **Responsive Design**: Optimized for both iOS and Android
- **Keyboard Handling**: Smart keyboard management with auto-scroll
- **Grid Layout**: Pokémon displayed in an attractive card-based grid

### Technical Features
- **TypeScript**: Full type safety throughout the application
- **Local Storage**: Persistent data using AsyncStorage
- **Image Picker**: Camera and gallery integration
- **Component Architecture**: Modular, reusable components
- **Style Separation**: Organized styles in dedicated files
- **Comprehensive Testing**: Unit tests for all components and screens


The app features three main screens:

1. **Pokémon List**: Grid view of all captured Pokémon with search and filtering
2. **Add Pokémon**: Form to capture new Pokémon with photo, types, and description
3. **Pokémon Detail**: Detailed view with animations and delete functionality

## 🚀 Getting Started

### Prerequisites

- Node.js (v16 or higher)
- React Native CLI
- Xcode (for iOS development)
- Android Studio (for Android development)
- iOS Simulator or Android Emulator

### Installation

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **iOS Setup** (macOS only)
   ```bash
   cd ios
   pod install
   cd ..
   ```

4. **Run the application**

   **For iOS:**
   ```bash
   npx react-native run-ios
   ```

## 📁 Project Structure

```
Pokedex/
├── src/
│   ├── components/           # Reusable UI components
│   │   ├── CustomAlert.tsx   # Custom animated alert component
│   │   ├── PokemonCard.tsx   # Pokémon card component
│   │   └── TypeBadge.tsx     # Type badge component
│   ├── screens/              # Main app screens
│   │   ├── PokemonListScreen.tsx
│   │   ├── AddPokemonScreen.tsx
│   │   ├── PokemonDetailScreen.tsx
│   │   └── styles/           # Screen-specific styles
│   └── utils/                # Utility functions and data
│       ├── pokemonTypes.ts   # Pokémon types and colors
│       └── storage.ts        # AsyncStorage operations
├── __tests__/                # Test files
├── ios/                      # iOS native code
├── android/                  # Android native code
└── App.tsx                   # Main app component
```

## 🎨 Design System

### Color Palette
- **Primary Background**: `#0b1220` (Dark blue-black)
- **Secondary Background**: `#0e1628` (Lighter dark blue)
- **Accent Color**: `#4aa6ff` (Bright blue)
- **Text Color**: `#cfe8ff` (Light blue-white)
- **Border Color**: `#1c2944` (Medium blue-gray)

### Typography
- **Headers**: Bold, 18px
- **Body Text**: Regular, 16px
- **Button Text**: Bold, 16px
- **Small Text**: Regular, 14px

## 🔧 Technical Implementation

### Navigation
- **React Navigation**: Stack navigator for screen transitions
- **TypeScript**: Type-safe navigation with `RootStackParamList`

### State Management
- **React Hooks**: useState for local component state
- **AsyncStorage**: Persistent data storage for Pokémon collection

### Image Handling
- **react-native-image-picker**: Camera and gallery access
- **Base64 Support**: Image storage and retrieval

### Animations
- **React Native Animated API**: Smooth transitions and effects
- **Custom Animations**: Scale, opacity, and rotation effects

## 🧪 Testing

Run the test suite:
```bash
npm test
```

### Test Coverage
- **Components**: TypeBadge, PokemonCard, CustomAlert
- **Screens**: PokemonList, AddPokemon, PokemonDetail
- **Utilities**: Storage functions

### Testing Framework
- **Jest**: Test runner and assertion library
- **React Test Renderer**: Component testing
- **Mocking**: Native modules and navigation

## 📱 Platform Support

### iOS
- **Minimum Version**: iOS 12.0+
- **Permissions**: Camera and Photo Library access
- **Features**: Full feature parity

### Android
- **Minimum Version**: Android 6.0+ (API 23)
- **Permissions**: Camera and Storage access
- **Features**: Full feature parity

## 🔒 Permissions

The app requires the following permissions:

### iOS (Info.plist)
```xml
<key>NSCameraUsageDescription</key>
<string>This app needs camera access to take photos of Pokémon</string>
<key>NSPhotoLibraryUsageDescription</key>
<string>This app needs photo library access to select Pokémon images</string>
<key>NSPhotoLibraryAddUsageDescription</key>
<string>This app needs permission to save photos to your library</string>
```

## 🚀 Deployment

### iOS
1. Configure signing in Xcode
2. Build for release: `npx react-native run-ios --configuration Release`
3. Archive and upload to App Store Connect

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature-name`
3. Commit changes: `git commit -am 'Add feature'`
4. Push to branch: `git push origin feature-name`
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🙏 Acknowledgments

- Pokémon Company for the Pokémon concept
- React Native community for excellent documentation
- Contributors and testers

## 📞 Support

For support and questions:
- Create an issue in the repository
- Check the documentation
- Review the test files for implementation examples

---

**Happy Pokémon hunting! 🎮✨**
