# Gmail Clone Frontend

This is a frontend clone of Gmail, built using React. The application allows users to send, view, and manage emails just like the Gmail platform. It includes features like composing emails, viewing email content, and managing email categories such as Inbox, Sent, Drafts, and Trash.

## Features

- **Compose Email**: Allows users to create and send new emails with the option to attach files.
- **Email View**: Displays email subject, message, and sender details.
- **Inbox Management**: Displays a list of emails with the ability to view detailed content.
- **Sidebar Navigation**: Quick navigation between different sections such as Inbox, Starred, Important, Sent, Drafts, Trash, and Spam.
- **Responsive Design**: Fully responsive layout optimized for both desktop and mobile views.
- **Authentication Pages**: Includes login, forgot email, and password recovery pages.

## Technologies Used

- React
- React Router
- CSS (for styling)
- Google Fonts (Roboto)
- Axios for API calls
- Material Icons

## Project Setup

Follow these steps to set up the project locally.

### 1. Clone the repository

```bash
git clone https://github.com/your-username/gmail-clone-frontend.git

### 2. Navigate to the project folder

cd gmail-clone-frontend

### 3. Install dependencies

npm install

### 4. Run the development server

npm start

## Development Process

- **Initial Setup**: Set up React project using create-react-app.
- **Component Design**: Designed reusable components for Email, Sidebar, and Compose functionality.
- **Routing**: Implemented React Router to handle navigation between pages like Inbox, Sent, and Login.
- **State Management**: Used React hooks like useState and useEffect to manage state for email data, login credentials, etc.
- **API Integration**: Implemented api.js to send POST requests with FormData for email submissions.
