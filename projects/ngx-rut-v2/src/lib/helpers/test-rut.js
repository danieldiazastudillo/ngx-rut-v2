"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var rut_helpers_1 = require("./rut-helpers");
var testRut = '161415529';
console.log('Clean:', (0, rut_helpers_1.rutClean)(testRut));
console.log('Validate:', (0, rut_helpers_1.rutValidate)(testRut));
console.log('Format:', (0, rut_helpers_1.rutFormat)(testRut));
