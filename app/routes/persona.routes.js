module.exports = app => {
    const persona = require("../controllers/persona.controller.js");
  
    // crear una persona
    app.post("/personas", persona.create);
  
    // traer todas las personas
    app.get("/personas", persona.findAll);
  
    // traer una persona por personaId
    app.get("/personas/:personaId", persona.findOne);
  
    // Actualizar persona por personaId
    app.put("/personas/:personaId", persona.update);
  
    // Borar persona por personaId
    app.delete("/personas/:personaId", persona.delete);
  
    // borrar todas las personas creadas
    app.delete("/personas", persona.deleteAll);
  };