"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var command_path_1 = require("command-path");
command_path_1.default.isAbsolute('/absolute-path');
command_path_1.default.isRelative('relative/path');
command_path_1.default.isGlobal('global-path');
command_path_1.default.isLocal('local-path');
command_path_1.default.getLocal('local-path');
//# sourceMappingURL=example.js.map