*****CONTENTS*****
* Boiler react content
* Swift instruction
* SQL instruction

*Boiler react content
This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify


*Swift and SQL instruction content

Step 1: Setup the Swift project
* DONE: Open a one page app project. Assign it the name 'TSLA-log' and the unique bundle identifier
* DONE: Init podfile, write in Alamofire, SwiftJSON, and SVProgressHud and pod install in terminal

Step 2: Setup the SQL database
* DONE: Create a trade table with a column for id plus all the attributes stored in the trades data file.
* DONE: Add the trades from the data file to the SQL database using INSERT INTO
* DONE: Create a db folder in the project's root directory and add the two sql statements for selecting all trades and creating a new trade to two net files 'get_trades.sql' and 'create_trade.sql' accordingly

Step 3 Create the a basic Swift UI for testing API connection:
* DONE: Add 3 labels to the blank Swift application named price, date, and period by dragging them onto the view from the object library and changing the value in their identifier
* DONE: Change the production device to the same model as the testing device. In the General setting for the app, in the upper left hand corner, then the middle pan, change the app platform to iPhone only.

Step 4 Connect Trades View Controller and the API
* DONE: Open the view controller file and rename it Trades View Controller
* DONE: Connect the storyboard view to the view controller file in the Attributes inspector
* Create a swift file in the Model folder named trade and give it the properties of a trade in the SQL table. Give it an init function
* Create a new trade in the Trades View controller
* On the ViewLoading fetch the data from the server on localhost: 5050 form the server in the project directory.
* Send a get request using Alamofire and print the result to verify the networking call is connected to the UI
* Parse the JSON data and configure the Trade
* Connect the label outlets to the Trades View Controller and assign there text fields the corresponding values of the new Trade you configured from the response data from the get request.
