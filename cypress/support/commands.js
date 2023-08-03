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

 Cypress.Commands.add("typeWithClear", { prevSubject: true }, (subject, text) => {
  // Clear the field using cy.clear() if it already has data
  cy.wrap(subject).then((element) => {
    if (element.val() !== "") {
      cy.wrap(element).clear();
    }
  });

  // Type the specified text into the field
  cy.wrap(subject).type(text);
});

 
 Cypress.on('uncaught:exception', (err, runnable) => {

  return false
})









