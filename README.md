<!-- HEALTH TRACK ANGULAR APPLICATION -->

1. Creating an Angular Application
Step 1: Install Angular CLI - npm install -g @angular/cli

Step 2: Create a New Angular Project - ng new Fyle_Task_2024
cd Fyle_Task_2024 - Changing To Fyle_Task_2024 Directory

Step 3: Run the Application - ng serve (The app will be available at http://localhost:4200).

Step 4: Run Tests - ng test

Step 5: Build the Application - ng build

2. Application Development 

Step 1: Generate a New Component - ng generate component component-name or ng g c component component-name

Step 2: In This Application 4 Standalone Components Are Created

1. App Heading Component - ng g c app-heading
2. User Workout Form Component - ng g c user-workout-form
3. Add User Workout Button Component - ng g c add-workout-button
4. User Workout Record Component - ng g c user-workout-record

Step 3: List of Components
1. app-heading
2. user-workout-form
3. add-workout-button
4. user-workout-record

Component Purposes -
   1. app-heading - Displays the main heading of the application.
   2. user-workout-form - Provides a form for users to input their workout details.
   3. add-workout-button - Handles the submission of the workout form and adds the workout to the local storage.
   4. user-workout-record - Displays a table of all user workouts stored in the local storage.

Step 3: Styling The Component With Tailwind CSS

    Step 1: Install Tailwind CSS - 
                1. npm install -D tailwindcss
                2. npx tailwindcss init

    Step 2: Configure tailwind.config.js
    Add the paths to all of your template files in the content section:

    module.exports = {
    content: [
        "./src/**/*.{html,ts}",
    ],
    theme: {
        extend: {},
    },
    plugins: [],
    }

    Step 3: Add Tailwind Directives to styles.css

    @tailwind base;
    @tailwind components;
    @tailwind utilities;

    Step 4: Build Your CSS
    Update your angular.json file to include the Tailwind CSS build step:

    json -

    "styles": [
    "src/styles.css"
    ]

3. Application Testing -

Step 1: Component-Level Test Suites -

        1. app-heading -
           Test Suites -
              1. should create component.
              2. should display the image.
              3. should display the heading text.

        2. user-workout-form -
           Test Suites -
              1. should accept input for username.
              2. should return null when form is invalid.
              3. should accept input for workout type.
              4. should clear the form.
              5. should accept input for workout minutes.
              6. should create component.
              7. should return workout data when form is valid.

        3. add-workout-button -
           Test Suites -
              1. should store workout data in local storage and clear form fields when all fields are filled.
              2. should show alert "Please Fill All Fields" if any field is incomplete.
              3. should clear form fields after adding workout.
              4. should create component.

        4. user-workout-record -
           Test Suites -
              1. should create.
              2. should display records based on search input field with workout type set to All.

Step 2: App Level Test Suites -
        
        1. AppComponent -
           Test Suites -
             1. should render title.
             2. should have the 'Health-Tracker' title.
             3. should create the app.

4. Deploying The Application To Netlify -

Step 1: Build the Application - 
                ng build --prod.
Step 2: Deploy to Netlify -

                1. Create a new site on Netlify.
                2. Link your GitHub repository.
                3. Set the build command to ng build --prod.
                4. Set the publish directory to dist/your-project-name.
                5. Deploy the site.

Step 3: Deployed Site - 
                1. https://fyle-task-2024.netlify.app/ (User can access the application with this link).