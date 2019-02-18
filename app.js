import config from "./config/config";
// import Product from "./models/Product";
// import User from "./models/User";
import * as Model from "./models/";

console.log(config.name);

let user = new Model.User();

let product = new Model.Product();