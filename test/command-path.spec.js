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
});
//# sourceMappingURL=command-path.spec.js.map