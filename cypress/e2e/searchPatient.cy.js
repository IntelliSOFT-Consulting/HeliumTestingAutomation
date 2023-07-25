
import '../support/commands' 
describe("template spec", () => {
    beforeEach(() => {
     // cy.visit("https://heliumhealthdemo.intellisoftkenya.com/bahmni/home/index.html#/login");
      cy.baseurl()
      cy.login()
      
    
    })
  
    Cypress.on('uncaught:exception', (err, runnable) => {
      return false;
    });
   
       
        //Search patient
        it.only("test1 - Searchpatient using patient ID",()=>{

               cy.get('#registrationNumber').type("MRN294039362")
               cy.get('.search-patient-id > .reg-srch-btn > button').click()
               //cy.get('tbody > :nth-child(1) > :nth-child(1) > a').contains("MRN294039361")
               const valueToSearch = "MRN294039362";
              
                // Wait for the search results to appear
                cy.get('tbody > tr').should('have.length.above', 0); // Ensure that there are search results
              
                // Check if the desired value exists in any row of the table
                let found = false;
                cy.get('tbody > tr').each((row) => {
                  // Check the content of the row (replace index numbers accordingly based on your HTML)
                  cy.wrap(row)
                    .find('a[ng-if*="searchActions"]') // The anchor tag containing the value
                    .then((link) => {
                      const text = link.text().trim();
                      if (text === valueToSearch) {
                        found = true;
                        }
                    });
                }).then(() => {
                  // After iterating through all rows, assert that the desired value was found.
                  // If `found` is true, it means the value was found, and the test will pass.
                  expect(found).to.be.true;
                });
               })

        it.only("Test2: Search patient using patient name",()=>{
          const nameToSearch = "Brian Brian K";
               cy.get('#name').type("Brian Brian K")
               cy.get(':nth-child(4) > .reg-srch-btn > button').click().wait(1000)
                           
               // Wait for the search results to appear
               cy.get('tbody > tr').should('have.length.above', 0); // Ensure that there are search results

              // Check if any row contains the expected name
               cy.get('tbody > tr').each((row) => {
              // Check the content of the row (replace index numbers accordingly based on your HTML)
               cy.wrap(row).find('td:nth-child(2)').should('contain', nameToSearch);

        })
      })

      
        it.only("Test1: Search patient using Phone number", () => {
          const phoneNumberToSearch = "0712345611";
            // Type the phone number in the search input field and click the search button
          cy.get('#customAttribute').type(phoneNumberToSearch);
          cy.get(':nth-child(4) > .reg-srch-btn > button').click();

            // Verify if any row in the table contains the desired phone number
          cy.get('tbody > tr').should(($rows) => {
            // Use the 'each' method to iterate over each row
            let foundPhoneNumber = false;
            $rows.each((index, row) => {
              const phoneNumberCell = Cypress.$(row).find('td:nth-child(3)').text();
              if (phoneNumberCell.includes(phoneNumberToSearch)) {
                foundPhoneNumber = true;
                return false; // Found the phone number, no need to continue searching
              }
            });
        
            // Assert that the phone number was found in at least one row
            expect(foundPhoneNumber).to.be.true;
          });
        
        
        });
        
      });