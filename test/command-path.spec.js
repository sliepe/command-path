"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var command_path_1 = require("../source/command-path/command-path");
var assert = require("assert");
require("mocha");
describe("CommandPath", function () {
    describe(".isAbsolute()", function () {
        it('should return true when command path is absolute', function () {
            var isAbsolutePath = command_path_1.default.isAbsolute('/absolute-path');
            assert.equal(isAbsolutePath, true);
        });
    });
    describe(".isRelative()", function () {
        it('should return true when command path is relative', function () {
            var isRelativePath = command_path_1.default.isRelative('relative/path');
            assert.equal(isRelativePath, true);
        });
    });
    describe(".isLocal()", function () {
        it('should return true when command path is local', function () {
            var isLocalPath = command_path_1.default.isLocal('tsc');
            assert.equal(isLocalPath, true);
        });
    });
    describe(".isGlobal()", function () {
        it('should return true when command path is global', function () {
            var isGlobalPath = command_path_1.default.isGlobal('global-command');
            assert.equal(isGlobalPath, true);
        });
    });
    describe(".getLocal()", function () {
        it('should return local command path when command path is local', function () {
            var localPath = command_path_1.default.getLocal('tsc');
            var isAbsolutPath = command_path_1.default.isAbsolute(localPath);
            assert.ok(isAbsolutPath);
        });
    });
    describe(".containsWhitespace()", function () {
        it('should return true if command path contains whitespace', function () {
            var containsWhitespace = command_path_1.default.containsWhitespace('C:\Program Files\nodejs\node.EXE');
            assert.equal(containsWhitespace, true);
        });
    });
    describe(".surroundWithDoubleQuotes()", function () {
        it('should return command path with double quotes surrounded', function () {
            var surroundWithDoubleQuotes = command_path_1.default.surroundWithDoubleQuotes('C:\Program Files\nodejs\node.EXE');
            var firstCharacter = surroundWithDoubleQuotes.charAt(0);
            var lastCharacter = surroundWithDoubleQuotes.charAt(surroundWithDoubleQuotes.length - 1);
            assert.equal(firstCharacter == '"' && lastCharacter == '"', true);
        });
    });
});
//# sourceMappingURL=command-path.spec.js.map