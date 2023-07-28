Cypress.Commands.add("baseurl",()=>{
    cy.visit("https://heliumhealthdemo.intellisoftkenya.com/bahmni/home/index.html#/login");


})

Cypress.Commands.add('login',()=>{
    cy.get('#username').type("superman");
    cy.get("#password").type("Admin123");
    cy.get('#location').select("General Hospital Epe");
    cy.get('form.ng-dirty > .login-body > .form-footer > .confirm').click({multiple: true});
      cy.wait(1000);
      
 })
 
 Cypress.on('uncaught:exception', (err, runnable) => {

  return false
})



Cypress.Commands.add("conditionalClick", (selector, altSelector) => {
  cy.get(selector, { timeout: 4000 }).then(($element) => {
    if ($element.length > 0) {
      // The main selector is found, so click on it
      cy.wrap($element).click();
    } else {
      // The main selector is not found, click on the alternative selector
      cy.contains(altSelector).click();
    }
  });
});





