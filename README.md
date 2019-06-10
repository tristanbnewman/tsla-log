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
* DONE: Create a swift file in the Model folder named trade and give it the properties of a trade in the SQL table. Give it an init with those properties function
* DONE: Create a new trade in the Trades View controller in the ViewDidLoad function and print an attribute to console to test the object creation
* DONE: Go to the info.plist file. Add the 'App Transport Security Settings' attribute. To that attribute add 'Allow Arbutrary Loads' attribute and set it to 'YES'
* DONE On the ViewDidLoad function fetch the data from the server on localhost: 5050 from the server/ in the project directory.
* DONE Send a get request using Alamofire and print the result to verify the networking call is connected to the UI
* DONE Parse the JSON data and configure the Trade accordingly. Print the trade to console to verify it's configuration
* DONE Add a catch block for the error that prints error to console and alerts the user of a networking error by default
* DONE Connect the label outlets to the Trades View Controller and assign there text fields the corresponding values of the new Trade you configured from the response data from the get request.

Step 5 Create the model and attach it to the JSON data
* DONE Create a Swift file named trades in the Model folder, that holds the trades in an array
* DONE Set Trades to the response data as an array of Trade objects
* DONE Unpackage on of the trades from the Trades object and show it in the UI
* DONE Print the Trades array to console to verify the full array was stored in the trades object

Step 6 Load the trades from the database into the api
* DONE Go to the index.js file in server/
* DONE In terminal run 'npm install massive dotenv'
* DONE Create a .env file and save the CONNECTION_STRING to heroku server and SERVER_PORT (as 5050)
* DONE Import massive and dotenv using config on dotenv, process.env.SERVER_PORT, then process.env.CONNECTION_STRING passed into massive.
* DONE Open controllers folder and build controller functions to sql files as appropriate for CRUD methods. Test sql functions with controllers in Postico and Postman
* DONE Connecting massive and initializing database. massive(process.env.CONNECTION_STRING)
    .then(db =>{
        app.set('db', db)
        console.log('Database connected')
    })

Step 7 Connect the data all the way from SQL to the simulator View
* DONE Configure the view outlets in the networking call in viewdidload

Step 8 Create a trades view
* DONE Drag a table view controller on to the main storyboard
* DONE Drag the entry point to the nav view controller. segue nav view to table view controller. run the app to test for blank table view
* Create the TradesTableView extending UIViewController, UITableViewDelegate, and UITableViewDatasource
* Set self as the datasource and the delegate in the viewDidLoad method
* 