# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)


# Netflix GPT 
- Create React App
- Configured TailwindCss
- Header
- Login Form
- Sign Up Form
- Formik for forms
- Form Validation
- useRef Hook
- Firebase Setup
- Deploying app using Firebase
- Created Signup user account on firebase
- Added the user to the redux store on sign in/ sign up with UserSlice
- Redirect the user to browse page after clicking on sign in/ sign up
- Implemented Sign Out
- Done validations
- Created and Upated the store
- Update profile API
- Fetch movies from TMDB api 
- Bugfix: If the user is not logged inredirecct /browse to sign in page and vice-versa
- Unsubscribe to the onAuthStateChanged callback
- Add hardcoded values to the constants file
- Register on TMDB API & create an app & get access token
- Fetching movies data from TMDB "now playing movies list" API
- Updating the store with the now playing movies list
- Building the browse page.
- custom hook for Now Playing Movies
- Create a MoviesSlice
- Update store with Movie Data
- Planning for main Container & Secondary Container
- Fetch data for trailer video
- Update store with trailer data
- Embeded the YouTube video and make it autoplay & mute
- Build Secondary Component
- Built movie list
- Built Movie card
- TMDB image CDN url
- usePopularMovies custom hook
- useTopRatedMovies custom hook
- useUpcomingMovies custom hook
- GPT search Page
- GPT search Bar
- Multi Languauge feature 
- GPT Search API call
- fetched gptMovieSuggestions from TMDB API
- created gptSlice added data
- Reused Movie List Component to make movie suggestion container
- Memoization
- Added .env file
- Adding .env file to .gitignore
- Made the site responsive for mobile



# Features 
- Login/Sign up Page
    - Sign In/Sign Up Form
    - redirect to Browse page
- Browse after authentication
    - Header
    - Main Movie
        - Trailer in the background
        - Title & Description
        - Movie suggestions
            - Movie list (horizontally)
- Netflix GPT
    - Search GPT
    - Movie Suggestions

      ```echo "moviesgpt.sourashreeart.com" > docs/CNAME```