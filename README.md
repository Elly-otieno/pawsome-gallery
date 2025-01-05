# Pawsome Gallery 🐾

Welcome to **Pawsome Gallery**! 🐶🎨 This project is a fun and interactive way to explore different dog breeds and view images of them. Browse through a list of dog breeds, select one, and navigate through beautiful images of that breed. Built using **React**, this app fetches data from the **Dog CEO API**.

## Features

- **Explore Dog Breeds**: View a list of available dog breeds in the gallery.
- **Breed Image Gallery**: Select a breed to view a collection of images for that breed.
- **Image Navigation**: Navigate through images of the selected breed using 'Next' and 'Previous' buttons.
- **User-Friendly Interface**: Easy to use and visually appealing with smooth transitions between images.

## How It Works

Pawsome Gallery uses **React** for the user interface and **fetch** to make API requests. Upon loading, the page fetches a list of dog breeds from the Dog CEO API. After selecting a breed, images related to that breed are fetched and displayed. You can then switch between the images using the navigation buttons.

### API Used

We’re utilizing the **Dog CEO API** to retrieve breed data and images. Here are the key endpoints:

- **Breeds List**: `https://dog.ceo/api/breeds/list/all` - Fetches all available breeds.
- **Breed Images**: `https://dog.ceo/api/breed/{breed}/images` - Fetches images for a specific breed.

## Example JSON Response

Here is an example of a JSON response from the Dog CEO API for testing purposes:

```json
{
  "status": "success",
  "message": {
    "bulldog": [],
    "labrador": []
  }
}
```

## Project Setup

Follow these steps to run the **Pawsome Gallery** on your local machine:

### Prerequisites
- A web browser to view the project.
- A code editor (e.g., Visual Studio Code) for making changes (optional).

### Steps

1. **Clone the repository**:

   ```bash
   git clone https://github.com/Elly-otieno/pawsome-gallery.git
   cd pawsome-gallery
   ```
   
2. **Open the project in your code editor**.
3. **Open `index.html` in your browser**:
   - Simply double-click the `index.html` file to view it in your browser.

### No Installation Required

Since this is a simple frontend app, no backend setup is needed. Just open the `index.html` file in your browser and enjoy exploring dog breeds!

## Project Structure

- **index.html**: Contains the HTML structure to load the React app.
- **styles.css**: Holds all the styling to make the app look visually appealing.
- **script.js**: The React code that handles fetching breed data, displaying images, and managing user interactions.

## Development Notes

- **React** is used to build the interactive UI and manage state changes.
- **Fetch API** is used to make requests to the Dog CEO API and retrieve breed data and images.
- The app is designed with responsiveness in mind, offering an enjoyable experience on both desktop and mobile devices.
