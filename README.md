### Design:
![alulu (1)](https://github.com/Tushil-G/Alulu/assets/122863540/63a85982-b77f-437e-a339-f8274f0e8cd5)

### Description:

This documentation outlines the requirements and features for the Alulu app, a stock inventory Android app.It will have four sections Aluminium fittings, Alucobon, Aluminium Profile, and accessories. The app will provide the ability to add, edit information locally without relying on cloud services.

### Technology:

- Platform: Web | Android
- Programming Language: Ionic | React Native
- Database: localStorage | AsyncStorage

### Features:

1. Search Filter:
   - Users can search and filter data within each sections
2. Editable field:
   - Allows users to add, edit, and manage information related to it
3. Local Storage:
   - The app will save data locally on the device, without relying on cloud services.
4. Export and Import Functionality:
   - Users can export the data to a local file (either CSV or Excel format) for backup or sharing purposes.
   - The app will provide an import feature to allow users to restore or import data from a local file.
5. Inventory
   - Name
   - Description
   - Quantity
   - Image (default image provided)

### Development

Run `npm run dev` to start the Vite development server.
Run `npm run storybook` to launch Storybook offline and view UI components in `src/components`.

=======
## Development Setup

This project uses **React Native** with **TypeScript**. To install dependencies run:

```sh
npm install
```

### Running the app

- **Start Metro**: `npm start`
- **Android**: `npm run android`
- **iOS**: `npm run ios`

### Storybook

Storybook is configured for React Native components. To run Storybook offline:

```sh
npm run storybook
```

Then open the Storybook UI on your emulator or device.
