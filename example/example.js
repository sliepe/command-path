"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var command_path_1 = require("command-path");
console.log(command_path_1.default.isAbsolute('/absolute-path'));
console.log(command_path_1.default.isRelative('relative/path'));
console.log(command_path_1.default.isGlobal('global-path'));
console.log(command_path_1.default.isLocal('local-path'));
console.log(command_path_1.default.getLocal('local-path'));
console.log(command_path_1.default.containsWhitespace('whitespace path'));
console.log(command_path_1.default.surroundWithDoubleQuotes('whitespace path'));
//# sourceMappingURL=example.js.map