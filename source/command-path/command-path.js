"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var CommandPath = /** @class */ (function () {
    function CommandPath() {
    }
    CommandPath.isAbsolute = function (commandPath) {
        var path = require('path');
        // Normalize path, that we can await an os-dependend path separators (path.sep)
        var normalizedCommandPath = path.normalize(commandPath);
        // At least one path separator must be contained
        if (normalizedCommandPath.indexOf(path.sep) > -1) {
            // Is it an absolute path?
            return path.isAbsolute(normalizedCommandPath);
        }
    };
    CommandPath.isGlobal = function (commandPath) {
        // Not absolute, not relative and not local
        if (!this.isAbsolute(commandPath) && !this.isRelative(commandPath) && !this.isLocal(commandPath)) {
            // Can only be absolute
            return true;
        }
    };
    CommandPath.isRelative = function (commandPath) {
        var path = require('path');
        // Normalize path, that we can await os-dependend path separators (path.sep)
        var normalizedCommandPath = path.normalize(commandPath);
        // At least one path separator must be contained
        if (normalizedCommandPath.indexOf(path.sep) > -1) {
            // Is it an absolute path?
            return !path.isAbsolute(normalizedCommandPath);
        }
    };
    CommandPath.isLocal = function (commandPath, cwd) {
        if (cwd === void 0) { cwd = process.cwd(); }
        var npmWhich = require('npm-which')(cwd);
        if (this.localPathCache[cwd]) {
            if (this.localPathCache[cwd][commandPath]) {
                return true;
            }
        }
        try {
            var localPath = npmWhich.sync(commandPath);
            if (!this.localPathCache[cwd]) {
                this.localPathCache[cwd] = [];
            }
            if (!this.localPathCache[cwd][commandPath]) {
                this.localPathCache[cwd][commandPath] = localPath;
            }
            return true;
        }
        catch (error) {
            return false;
        }
    };
    CommandPath.getLocal = function (commandPath, cwd) {
        if (cwd === void 0) { cwd = process.cwd(); }
        if (this.isLocal(commandPath, cwd)) {
            return this.localPathCache[cwd][commandPath];
        }
    };
    CommandPath.localPathCache = [];
    return CommandPath;
}());
exports.default = CommandPath;
//# sourceMappingURL=command-path.js.map