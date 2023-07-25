# HeliumTestingAutomation
This repo contains tests written in Cypress.
The tests are heavily commented to ease you into the Cypress API.
Help + Testing
The steps below will take you all the way through Cypress. It is assumed you have nothing installed except for node + git.

1. Install Cypress
Follow these instructions to install Cypress. (These specific tests have been run on cypress version @12.4.0)
Run this command to install the specific version needed for this project.
npm cypress install@12.4.0
cd into the cloned repo
cd HeliumTestingAutomation
install the node_modules

3. npm install
4. start the local webserver
run the command: npx cypress open /
cypress open The npm cypress start script will spawn a new cypress tab which hosts the test directories that can then be run on your browser.
Alternatively, you can add new scripts from the Add Project tab

5. Run the tests
The tests are located in the cypress/e2e folder. 
They are grouped into files based on the functionality they are testing and are commented to explain what they are testing and the files arranged alphabetically.
To run each test, access the cypress window that pops up when the npx cypress open command is typed and ran in the terminal.
Click on the test folder and then click on the specific test you want to run. 
Select the type of test you want to conduct from the provided options (E2E or Component) .
Select the browser on which you want to conduct your test and then select the 'Start E2E Testing in browser name' button. 
The test will then run on your browser.

NB: For each test, the site will be accessed and the user will be logged in. 
This is done to ensure that the tests are independent of each other. 
This means that the tests can be run in any order and they will still pass.
For inter-connected processes from different modules, the previous module has to be run before the dependent module is run.
## Tests
1. Patient search
Click on the searchPatient.cy.js file to run this test.
This test is used to perform patient search from the EMR module.

3. New Patient Registration
Click on the registerPatient.cy.js file to run this test. It enables a new patient registration.

