const express = require('express');
// const multer = require("multer");
const router = express.Router();
const {
  userRegister,
  // collaboratorRegister,
  userLogin,
  // getAllCollabs,
  // verifyAccount,
} = require('../controllers/users');
// const { isAuthenticated } = require("../middleware/authorization");
// const {
//   uploadSingleHandler,
//   uploadMultipleHandler,
// } = require("../utils/upload/upload.controller");

// const upload = multer({ dest: "./temp" });

//Ruta registro Usuario
router.route('/signUp').post(userRegister);

// //Ruta verificación email
// router.route("/activate/:hash/:id").post(verifyAccount);

//Ruta login user/collaborator
router.route('/signIn').post(userLogin);

// //Ruta carga imágenes user/collaborator
// router
//   .route("/file/user")
//   .post(isAuthenticated(), upload.single("file"), uploadSingleHandler);
// router.route("file/collab").post(upload.single("image"), uploadSingleHandler);

// //Ruta carga imágenes múltiples
// router
//   .route("/files/collab")
//   .post(upload.array("image"), uploadMultipleHandler);

module.exports = router;
