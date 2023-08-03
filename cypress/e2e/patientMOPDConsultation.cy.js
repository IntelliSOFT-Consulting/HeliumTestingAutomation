
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
            cy.get('.fa-stethoscope').click()

            // Search for patient in the MOPD
            const searchTerm = "MRN294039364";
            cy.get('#patientIdentifier').type(searchTerm);
            cy.wait(2000);
            cy.contains('.patient-id', searchTerm).click();
            // Search for patient in the MOPD end here//

            cy.get('.btn--left').click()//access consultation page
            cy.wait(5000);
            cy.get('#observation_4').type("Stomach Pain")
            cy.get('.small-btn').click()
            cy.get('#observation_5').type("The pain is experienced at the lower section of the stomach")
            cy.get('#observation_6').type("No previous experience such as ulcers")
            cy.get(':nth-child(2) > .grid-row-element').click()
            cy.get('.form-group > .comment-toggle').click()
            cy.get('.obs-comment-section').type("Patient requires an exray scan of the lower stomach")
            cy.get('.confirm').click()
        })
      })

      
    
        
        
  
        
   