const Persona = require("../models/persona.model.js");

// Crea y guarda un persona.
exports.create = (req, res) => {
    // validacion del request
    if (!req.body) {
        res.status(400).send({
          message: "El cuerpo no puede estar sin contenido!"
        });
    }

  // crear una persona
  const persona = new Persona({
    cedula: req.body.cedula,
    nombre: req.body.nombre,
    apellido: req.body.apellido
  });

  // guarda la persona en la base de datos
  Persona.create(persona, (err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Ocurrió un error al crear la persona."
      });
    else res.send(data);
  });
};

// Obtiene das las personas de la base de datos.
exports.findAll = (req, res) => {
    Persona.getAll((err, data) => {
        if (err)
          res.status(500).send({
            message:
              err.message || "Ocurrió un error al obtener las personas."
          });
        else res.send(data);
    });
};

// Busca una persona en particular por personaId.
exports.findOne = (req, res) => {
    Persona.findById(req.params.personaId, (err, data) => {
        if (err) {
          if (err.kind === "not_found") {
            res.status(404).send({
              message: `No encontro persona con id ${req.params.personaId}.`
            });
          } else {
            res.status(500).send({
              message: "Error al obtener la persona con id " + req.params.personaId
            });
          }
        } else res.send(data);
      });
};

// Actualiza una persona identificada con personaId en el request.
exports.update = (req, res) => {
    // Valida Request
    if (!req.body) {
        res.status(400).send({
            message: "El cuerpo no puede estar sin contenido!"
        });
    }

    Persona.updateById(
        req.params.personaId,
        new Persona(req.body),
        (err, data) => {
        if (err) {
            if (err.kind === "not_found") {
            res.status(404).send({
                message: `No encontro persona con id ${req.params.personaId}.`
            });
            } else {
            res.status(500).send({
                message: "Error al actualizar la persona con id " + req.params.personaId
            });
            }
        } else res.send(data);
        }
    );
};

// Borra una persona identificada con personaId en el request.
exports.delete = (req, res) => {
    Persona.remove(req.params.personaId, (err, data) => {
        if (err) {
          if (err.kind === "not_found") {
            res.status(404).send({
              message: `No encontro persona con id ${req.params.personaId}.`
            });
          } else {
            res.status(500).send({
              message: "Error al Borrar la persona con id " + req.params.personaId
            });
          }
        } else res.send({ message: `Persona borrada exitosamente!` });
    });
};

// Borra todos las personas de la base de datos.
exports.deleteAll = (req, res) => {
    Persona.removeAll((err, data) => {
        if (err)
          res.status(500).send({
            message:
              err.message || "Error al Borrar todas las personas de la base de datos."
          });
        else res.send({ message: `Todas las personas fueron borradas exitosamente!` });
    });
};