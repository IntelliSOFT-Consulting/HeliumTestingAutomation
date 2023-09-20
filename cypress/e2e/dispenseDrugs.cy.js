
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
   
       
       
        it.only("Make orders for drugs under medication",()=>{
            cy.get('.fa-stethoscope').click()


            // Search for patient in the MOPD
            const searchTerm = "MRN294039275";
            cy.get('#patientIdentifier').type(searchTerm);
            cy.wait(2000);
            cy.contains('.patient-id', searchTerm).click();
            // Search for patient in the MOPD end here//

            cy.get('.btn--left').click()//access consultation page
            cy.wait(1000)
            // Use cy.get() to locate the <li> element by its class and the contained text
            cy.contains('Medications').click();

            cy.get('#drug-name').type('Paracetamol');

            // Wait for the autocomplete dropdown to appear
            cy.get('.ui-autocomplete.ui-front').should('be.visible');

            // Click on the option that contains "Paracetamol" text
            cy.contains('.ui-menu-item', 'Paracetamol').click();
            cy.get('#uniform-dose').type("20")
            // Select the "Tablet(s)" option by its value
            cy.get('#uniform-dose-unit').select('string:Tablet(s)');
            cy.get('#frequency').select('string:Twice a day');
            cy.get('#route').select('Oral');
            cy.get('#duration').type("5")
            cy.get('.add-drug-btn').click()
            cy.get('.confirm').click()

        
        })
      })

      
    
        
        
  
        
   