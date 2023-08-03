
import '../support/commands' 
describe("template spec", () => {
    beforeEach(() => {
     // cy.visit("https://heliumhealthdemo.intellisoftkenya.com/bahmni/home/index.html#/login");
      cy.baseurl()
      cy.login()
      //cy.typeWithClear()
      
    
    })
  
    Cypress.on('uncaught:exception', (err, runnable) => {
      return false;
    });
   
       
       
        it.only("Test1: Search patient using patient name and start OPD visit",()=>{
          const valueToSelect = "Hours";
          const suggestionText = "Stomatitis and mucositis";
            cy.get('.fa-stethoscope').click()

            // Search for patient in the IPD
            cy.get(':nth-child(4) > a').click()
            const searchTerm = "MRN294039367";
            cy.get('#patientIdentifier').type(searchTerm);
            cy.wait(2000);
            cy.contains('.patient-id', searchTerm).click();
            // Search for patient in IPD end here//

            cy.get('.btn--left').click()//access consultation page
            cy.wait(5000);
            
            // Type the text in the input field
            cy.get("#observation_4").typeWithClear(suggestionText);

            // Wait for the suggestion to appear
            cy.contains(".ui-menu-item a", suggestionText, { timeout: 5000 }).click();
            cy.contains("button", "Accept").click();
            cy.get('.duration-value').typeWithClear(5)

            // Find the select element by its ng-model attribute
            cy.get('select[ng-model="unitValue"]').select("number:60");

            // Verify that the selected option is 'Hours'
            cy.get('select[ng-model="unitValue"]')
            .invoke("val")
            .should("eq", "number:60");

            cy.get('#observation_5').typeWithClear("The pain is experienced at the lower section of the stomach")
            cy.get('#observation_6').typeWithClear("No previous experience such as ulcers")
            cy.get(':nth-child(2) > .grid-row-element').click()
            cy.get('.form-group > .comment-toggle').click()
            cy.get('.obs-comment-section').typeWithClear("Patient requires an exray scan of the lower stomach")
            cy.get('.confirm').click()
            cy.get('.header-tabs > :nth-child(4) > a').click( {force: true})
                 
            // Replace 'textarea-selector' with the appropriate selector for the textarea
            const textareaSelector = 'textarea[aria-hidden="true"][tabindex="-1"]';

            // Use Cypress `invoke` command to temporarily remove the 'aria-hidden' and 'tabindex' attributes
            //cy.get(textareaSelector).invoke("attr", "aria-hidden", null).invoke("attr", "tabindex", "1");
            cy.get('.confirm').click()//save form
        })
      })

      
    
        
        
  
        
   