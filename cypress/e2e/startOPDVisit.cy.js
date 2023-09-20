
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
   
       
       
        it.only("Test1: Search patient using patient name and start OPD visit",()=>{
          const nameToSearch = "Raj R A";
          cy.get('.fa-user').click()
               cy.get('#name').type(nameToSearch)
               cy.get(':nth-child(4) > .reg-srch-btn > button').click().wait(1000)
                           
               // Wait for the search results to appear
               cy.get('tbody > tr').should('have.length.above', 0); // Ensure that there are search results

               // Check if any row contains the expected name
               cy.get('tbody > tr').each((row) => {
                // Check the content of the row (replace index numbers accordingly based on your HTML)
               cy.wrap(row).find('td:nth-child(2)').should('contain', nameToSearch);

               cy.get('tr > :nth-child(1) > a').click()
               cy.contains('button', 'MOPD').click();  //apply this code if it is a new patient and comment on line 
               //cy.get('button.confirm').contains('Enter Visit Details').click();
               
               cy.contains('button', 'Self Sponsored').click();
               cy.get('#observation_4').clear();
              const newValue = "500";
              cy.get('#observation_4').type(newValue);

              cy.get('#observation_5').clear();
              const newconf = "Paid in Full";  
              cy.get('#observation_5').type(newconf)
              cy.get('.confirm').click()

        })
      })

      
    })
        
        
  
        
   