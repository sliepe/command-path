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
    CommandPath.isGlobal = function (commandName) {
        // Not absolute, not relative and not local
        if (!this.isAbsolute(commandName) && !this.isRelative(commandName) && !this.isLocal(commandName)) {
            // Can only be global
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
    CommandPath.isLocal = function (commandName, cwd) {
        if (cwd === void 0) { cwd = process.cwd(); }
        var npmWhich = require('npm-which')(cwd);
        if (this.localPathCache[cwd]) {
            if (this.localPathCache[cwd][commandName]) {
                return true;
            }
        }
        try {
            var localPath = npmWhich.sync(commandName);
            if (!this.localPathCache[cwd]) {
                this.localPathCache[cwd] = [];
            }
            if (!this.localPathCache[cwd][commandName]) {
                this.localPathCache[cwd][commandName] = localPath;
            }
            return true;
        }
        catch (error) {
            return false;
        }
    };
    CommandPath.getLocal = function (commandName, cwd) {
        if (cwd === void 0) { cwd = process.cwd(); }
        if (this.isLocal(commandName, cwd)) {
            return this.localPathCache[cwd][commandName];
        }
    };
    CommandPath.localPathCache = [];
    return CommandPath;
}());
exports.default = CommandPath;
//# sourceMappingURL=command-path.js.map