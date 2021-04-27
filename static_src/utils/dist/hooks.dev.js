"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.usePrev = usePrev;

var _react = require("react");

//возврат значения предыдущего рендера
function usePrev(value) {
  // The ref object is a generic container whose current property is mutable ...
  // ... and can hold any value, similar to an instance property on a class
  var ref = (0, _react.useRef)(); // Store current value in ref

  (0, _react.useEffect)(function () {
    ref.current = value;
  }, [value]); // Only re-run if value changes
  // Return previous value (happens before update in useEffect above)

  return ref.current;
}