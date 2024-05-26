# CountViews

## Simple JavaScript View Counter

CountViews is a lightweight view counting system that tracks each unique visitor to your website, video, or picture gallery without requiring any server-side languages like PHP. It leverages the power of Firebase and pure JavaScript to deliver accurate view counts.

<a href="https://smkh-pro.github.io/CountViews/">
  <img src="images/screenshot.png" alt="CountViews Demo Screenshot">
</a>

[Click here for live demo](https://smkh-pro.github.io/CountViews/)

## How It Works

CountViews uses Firebase as a backend to store visitor data. Every time a user visits your site, their IP address is fetched using an API and stored in the Firebase database. The system then checks if the IP address already exists in the database to determine whether the visitor is new or returning. Only new visitors' views are counted, ensuring accurate view statistics.

### Features

- **Unique View Counting**: Only counts views from new visitors, avoiding duplicate counts from the same user.
- **Firebase Integration**: Uses Firebase for data storage and retrieval.
- **JavaScript Powered**: Entirely implemented with JavaScript, no need for server-side code.
- **Real-time Updates**: View counts are updated in real-time as new users visit your site.

## Special Features

- **Returning User Detection**: Identifies if a user is a returning visitor and prevents double-counting.
- **Simple Setup**: Easy to integrate into any web project with minimal setup required.


## Getting Started

To implement CountViews on your website, follow these steps:

1. Clone the repository.
2. Set up a Firebase project and get the configuration details.
3. Modify the JavaScript code to include your Firebase configuration.
4. Deploy the code to your preferred hosting service.

For a detailed guide, refer to the documentation in the repository.



