//modulo modelo tabla personas
const sql = require("./db.js");

// constructor
const Persona = function(pesona) {
  this.cedula = pesona.cedula;
  this.nombre = pesona.nombre;
  this.apellido = pesona.apellido;
};

Persona.create = (newPersona, result) => {
  sql.query("INSERT INTO personas SET ?", newPersona, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }

    console.log("Persona creada: ", { id: res.insertId, ...newPersona });
    result(null, { id: res.insertId, ...newPersona });
  });
};

Persona.findById = (personaId, result) => {
  sql.query(`SELECT * FROM personas WHERE id = ${personaId}`, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }

    if (res.length) {
      console.log("encontro persona: ", res[0]);
      result(null, res[0]);
      return;
    }

    result({ kind: "not_found" }, null);
  });
};

Persona.getAll = result => {
  sql.query("SELECT * FROM personas", (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    console.log("personas: ", res);
    result(null, res);
  });
};

Persona.updateById = (id, persona, result) => {
  sql.query(
    "UPDATE personas SET nombre = ?, apellido = ? WHERE id = ?",
    [persona.nombre, persona.apellido, id],
    (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(null, err);
        return;
      }

      if (res.affectedRows == 0) {
        result({ kind: "not_found" }, null);
        return;
      }

      console.log("Actualizo persona: ", { id: id, ...persona });
      result(null, { id: id, ...persona });
    }
  );
};

Persona.remove = (id, result) => {
  sql.query("DELETE FROM personas WHERE id = ?", id, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    if (res.affectedRows == 0) {
      result({ kind: "not_found" }, null);
      return;
    }

    console.log("borro Persona con id: ", id);
    result(null, res);
  });
};

Persona.removeAll = result => {
  sql.query("DELETE FROM personas", (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    console.log(`borro ${res.affectedRows} personas`);
    result(null, res);
  });
};

module.exports = Persona;