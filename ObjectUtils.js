"use strict";

var _hasOwnProperty = Object.prototype.hasOwnProperty;

function isEmpty(value) {
  if (!value) {
    return true;
  }
  if (Array.isArray(value) && value.length === 0) {
    return true;
  } else {
    for (const i in value) {
      if (_hasOwnProperty.call(value, i)) {
        return false;
      }
    }
    return true;
  }
}
