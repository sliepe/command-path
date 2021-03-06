import CommandPath from "../source/command-path/command-path";
import * as assert from "assert";
import "mocha";

describe("CommandPath", function () {
    describe(".isAbsolute()", function () {
        it('should return true when command path is absolute', function () {
            const isAbsolutePath = CommandPath.isAbsolute('/absolute-path');

            assert.equal(isAbsolutePath, true);
        })
    });

    describe(".isRelative()", function () {
        it('should return true when command path is relative', function () {
            const isRelativePath = CommandPath.isRelative('relative/path');

            assert.equal(isRelativePath, true);
        })
    });

    describe(".isLocal()", function () {
        it('should return true when command path is local', function () {
            const isLocalPath = CommandPath.isLocal('tsc');

            assert.equal(isLocalPath, true);
        })
    });

    describe(".isGlobal()", function () {
        it('should return true when command path is global', function () {
            const isGlobalPath = CommandPath.isGlobal('global-command');

            assert.equal(isGlobalPath, true);
        })
    });

    describe(".getLocal()", function () {
        it('should return local command path when command path is local', function () {
            const localPath = CommandPath.getLocal('tsc');

            const isAbsolutPath = CommandPath.isAbsolute(localPath);

            assert.ok(isAbsolutPath);
        })
    });

    describe(".containsWhitespace()", function () {
        it('should return true if command path contains whitespace', function () {
            const containsWhitespace = CommandPath.containsWhitespace('C:\Program Files\nodejs\node.EXE');

            assert.equal(containsWhitespace, true);
        })
    });

    describe(".surroundWithDoubleQuotes()", function () {
        it('should return command path with double quotes surrounded', function () {
            const surroundWithDoubleQuotes = CommandPath.surroundWithDoubleQuotes('C:\Program Files\nodejs\node.EXE');

            const firstCharacter = surroundWithDoubleQuotes.charAt(0);
            const lastCharacter = surroundWithDoubleQuotes.charAt(surroundWithDoubleQuotes.length - 1);

            assert.equal(firstCharacter == '"' && lastCharacter == '"', true);
        })
    });
});