# Budgetly - Personal Expense Tracker

**Budgetly** is a personal expense tracker application designed to help individuals manage their finances effectively. It provides an easy-to-use interface for adding income, tracking expenses, and analyzing spending habits with a dynamic pie chart. Built using **React**, **Ant Design**, **MUI**, **Firebase**, and **Toastify**, Budgetly enables users to stay on top of their financial goals.

## Features

- **Current Balance**: Displays the current balance after adding income and expenses.
- **Add Income**: Easily add sources of income to track earnings.
- **Add Expense**: Track all types of expenses to maintain a budget.
- **Expense Analysis**: Visualize your expenses with a pie chart for easy analysis.
- **Notifications**: Toast notifications for successful actions and error handling.

## Technologies Used

- **React**: For building the user interface.
- **Ant Design**: For responsive and aesthetically pleasing UI components.
- **MUI**: For additional UI components and styling.
- **Firebase**: For backend services such as data storage and user authentication.
- **Toastify**: For displaying toast notifications for user interactions.

## Getting Started

To get started with **Budgetly**, follow the instructions below:

### Prerequisites

Ensure you have the following installed on your machine:

- **Node.js** (v14 or above)
- **npm** or **yarn** (for package management)

### Installation

1. Clone the repository:

    ```bash
    git clone https://github.com/Bharath-b0/expense-tracker.git
    ```

2. Navigate into the project directory:

    ```bash
    cd expense-tracker
    ```

3. Install the required dependencies:

    ```bash
    npm install
    ```

4. Set up Firebase:
   - Create a Firebase project at [Firebase Console](https://console.firebase.google.com/).
   - Get your Firebase config credentials and add them to the project.

5. Run the app locally:

    ```bash
    npm start
    ```

    This will start the development server at `http://localhost:3000/`.

### Firebase Configuration

1. After creating the Firebase project, go to the Firebase Console and select **Authentication** to enable sign-in methods.
2. Set up **Firestore Database** in Firebase to store user data.
3. Replace the Firebase credentials in the `firebase.js` file (located in the `src` folder) with your project's configuration.

    ```js
    // src/firebase.js
    const firebaseConfig = {
      apiKey: "your-api-key",
      authDomain: "your-auth-domain",
      projectId: "your-project-id",
      storageBucket: "your-storage-bucket",
      messagingSenderId: "your-sender-id",
      appId: "your-app-id"
    };

    const firebaseApp = firebase.initializeApp(firebaseConfig);
    export const db = firebaseApp.firestore();
    ```

### Deployment

For deployment, you can use Firebase Hosting or any other cloud service.

1. Install Firebase CLI:

    ```bash
    npm install -g firebase-tools
    ```

2. Authenticate Firebase:

    ```bash
    firebase login
    ```

3. Initialize Firebase in your project:

    ```bash
    firebase init
    ```

4. Deploy the app:

    ```bash
    firebase deploy
    ```

## Usage

- Upon loading the app, you'll see the **current balance** at the top.
- Use the **Add Income** button to add any sources of income.
- Use the **Add Expense** button to record your expenses.
- The pie chart will update automatically to show the distribution of your expenses.

## Contributing

We welcome contributions to **Budgetly**! If you'd like to contribute, please follow these steps:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature-name`).
3. Make your changes and commit them (`git commit -m 'Add new feature'`).
4. Push your branch (`git push origin feature-name`).
5. Create a pull request.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- **React** for the framework.
- **Ant Design** and **MUI** for the UI components.
- **Firebase** for backend services.
- **Toastify** for notification handling.
