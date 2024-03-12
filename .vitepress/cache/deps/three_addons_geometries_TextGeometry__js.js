import {
  ExtrudeGeometry
} from "./chunk-Q7AZB2X2.js";
import "./chunk-76J2PTFD.js";

// node_modules/three/examples/jsm/geometries/TextGeometry.js
var TextGeometry = class extends ExtrudeGeometry {
  constructor(text, parameters = {}) {
    const font = parameters.font;
    if (font === void 0) {
      super();
    } else {
      const shapes = font.generateShapes(text, parameters.size);
      parameters.depth = parameters.height !== void 0 ? parameters.height : 50;
      if (parameters.bevelThickness === void 0)
        parameters.bevelThickness = 10;
      if (parameters.bevelSize === void 0)
        parameters.bevelSize = 8;
      if (parameters.bevelEnabled === void 0)
        parameters.bevelEnabled = false;
      super(shapes, parameters);
    }
    this.type = "TextGeometry";
  }
};
export {
  TextGeometry
};
//# sourceMappingURL=three_addons_geometries_TextGeometry__js.js.map
