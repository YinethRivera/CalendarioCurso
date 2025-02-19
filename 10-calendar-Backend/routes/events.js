/*events routes
/api/events'
*/
const { Router } = require("express");

const { validarJWT } = require("../middlewares/validar-jwt");
const {
  getEvento,
  crearEvento,
  actualizarEvento,
  eliminarEvento,
} = require("../controllers/events");
const { check } = require("express-validator");
const { validarCampos } = require("../middlewares/validar-campos");
const { isDate } = require("../helpers/isDate");

const router = Router();

router.use(validarJWT);

//todas tienen que pasar por la validacion del JWT
// obtener eventos
router.get("/", getEvento);

//crear evento
router.post(
  "/",
  [
    check("title", "El titulo es obligatorio").not().isEmpty(),
    check("start", "Fecha de inicio es obligatoria").custom(isDate),
    check("end", "Fecha de finalización es obligatoria").custom(isDate),
    validarCampos,
  ],
  crearEvento
);

//actualizar evento
router.put("/:id", actualizarEvento);

//eliminar evento
router.delete("/:id", eliminarEvento);

module.exports = router;
