import "./firebase__firestore.mjs";
import { r as registerVersion } from "./firebase__app.mjs";
import "./firebase__auth.mjs";
import "./firebase__logger.mjs";
var name = "firebase";
var version = "12.18.0";
registerVersion(name, version, "app");
