import '../support/commands' 
describe("template spec", () => {
    beforeEach(() => {
      cy.baseurl()
      cy.login()
      cy.get('.fa-user').click()
    
    });
  
    Cypress.on('uncaught:exception', (err, runnable) => {
      return false;
    });
   
    
    it.only("test1 - Searchpatient using patient ID",()=>{
        //register new patient
        //remember to update this information in the search patient script
        cy.wait(500)
        cy.get('.fa-plus').click();
        cy.get('#givenName').type("Sarah")
        cy.get('#middleName').type("B")
        cy.get('#familyName').type("Lance")
        cy.get('#gender').select("Female")
        cy.get('#ageYears').type(24)
        cy.get('#cityVillage').type("Sigire")
        cy.get('.ui-autocomplete').find('li').first().click()
        cy.get('#education').select('Graduate and Above')
        cy.get('#occupation').select('Government')
        cy.get('#paymentStatus').select('Paid')
        cy.get('#registrationFee').type(150)
        
        //Appointment information
        cy.get(':nth-child(2) > [ng-if="section.canShow"] > .box-container > .additional-attribute > span > strong > a').click();
        cy.get('#email').type("example@gmail.com")
        cy.get('#patientPhoneNumber').type("0712345611")

        //Next of kin information
        cy.get(':nth-child(3) > [ng-if="section.canShow"] > .box-container > .additional-attribute > span > strong > a').click();
        cy.get('#nextOfKinNames').type("Brian")
        cy.get('#nextOfKinPhoneNumber').type("O")
        cy.get('#nextOfKinEmail').type("example@gmail.com")
        cy.get('#nextOfKinRelationship').select('Sibling')
        cy.get('#nextOfKinLocationDetails').type("None")
        cy.get('.submit-btn').click()

       

    });
  })
