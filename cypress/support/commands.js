Cypress.Commands.add("baseurl",()=>{
    cy.visit("https://heliumhealthdemo.intellisoftkenya.com/bahmni/home/index.html#/login");


})

Cypress.Commands.add('login',()=>{
    cy.get('#username').type("superman");
    cy.get("#password").type("Admin123");
    cy.get('#location').select("General Hospital Epe");
    cy.get('form.ng-dirty > .login-body > .form-footer > .confirm').click({multiple: true});
      cy.wait(1000);
      cy.get('.fa-user').click()
 })
 
 Cypress.on('uncaught:exception', (err, runnable) => {

  return false
})
