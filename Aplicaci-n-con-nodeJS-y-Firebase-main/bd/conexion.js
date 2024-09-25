const admin = require("firebase-admin");
const keys = require("../keys.json");


admin.initializeApp({
    credential: admin.credential.cert(keys)
});

const bd = admin.firestore();

const usuariosBD = bd.collection("miejemploBD");

const productosBD = bd.collection("productos");

module.exports = {
    usuariosBD,
    productosBD,
}
