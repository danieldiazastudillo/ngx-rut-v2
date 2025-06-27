"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.rutClean = rutClean;
exports.rutValidate = rutValidate;
exports.rutFormat = rutFormat;
function rutClean(value) {
    if (typeof value === 'string') {
        return value
            .replace(/[^0-9kK]+/g, '')
            .replace(/^0+/, '')
            .toUpperCase();
    }
    return '';
}
function rutValidate(value) {
    if (typeof value !== 'string') {
        return false;
    }
    var rut = rutClean(value);
    if (rut.length < 2) {
        return false;
    }
    var body = rut.slice(0, -1);
    var dv = rut.slice(-1).toUpperCase();
    var sum = 0;
    var multiplier = 2;
    for (var i = body.length - 1; i >= 0; i--) {
        sum += parseInt(body.charAt(i), 10) * multiplier;
        multiplier = multiplier === 7 ? 2 : multiplier + 1;
    }
    var expectedDv = 11 - (sum % 11);
    var expectedDvStr = '';
    if (expectedDv === 11) {
        expectedDvStr = '0';
    }
    else if (expectedDv === 10) {
        expectedDvStr = 'K';
    }
    else {
        expectedDvStr = expectedDv.toString();
    }
    return dv === expectedDvStr;
}
function rutFormat(value) {
    var rut = rutClean(value);
    if (rut.length <= 1) {
        return rut;
    }
    var result = "".concat(rut.slice(-4, -1), "-").concat(rut.slice(-1));
    for (var i = 4; i < rut.length; i += 3) {
        result = "".concat(rut.slice(-3 - i, -i), ".").concat(result);
    }
    return result;
}
