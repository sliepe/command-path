export default class CommandPath {
    static isAbsolute(commandPath: string): boolean {
        const path = require('path');

        // Normalize path, that we can await an os-dependend path separators (path.sep)
        const normalizedCommandPath = path.normalize(commandPath);

        // At least one path separator must be contained
        if (normalizedCommandPath.indexOf(path.sep) > -1) {
            // Is it an absolute path?
            return path.isAbsolute(normalizedCommandPath);
        }
    }

    static isGlobal(commandName: string): boolean {
        // Not absolute, not relative and not local
        if (!this.isAbsolute(commandName) && !this.isRelative(commandName) && !this.isLocal(commandName)) {
            // Can only be global
            return true;
        }
    }

    static isRelative(commandPath: string): boolean {
        const path = require('path');

        // Normalize path, that we can await os-dependend path separators (path.sep)
        const normalizedCommandPath = path.normalize(commandPath);

        // At least one path separator must be contained
        if (normalizedCommandPath.indexOf(path.sep) > -1) {
            // Is it an absolute path?
            return !path.isAbsolute(normalizedCommandPath);
        }
    }

    private static localPathCache: string[][] = [];

    static isLocal(commandName: string, cwd: string = process.cwd()): boolean {
        const npmWhich = require('npm-which')(cwd);

        if (this.localPathCache[cwd]) {
            if (this.localPathCache[cwd][commandName]) {
                return true;
            }
        }

        try {
            // TODO: Why it returns an absolute path (C:\Program Files\nodejs\node.EXE) to installed node, if we using "node" as command name? Should left as "node", if not locally installed as node module
            const localPath = npmWhich.sync(commandName);

            if (!this.localPathCache[cwd]) {
                this.localPathCache[cwd] = [];
            }

            if (!this.localPathCache[cwd][commandName]) {
                this.localPathCache[cwd][commandName] = localPath;
            }

            return true;
        } catch (error) {
            return false;
        }
    }

    static getLocal(commandName: string, cwd: string = process.cwd()): string {
        if (this.isLocal(commandName, cwd)) {
            return this.localPathCache[cwd][commandName];
        }
    }

    static containsWhitespace(commandPath: string): boolean {
        // If command path contains any whitespace
        if (/\s/.test(commandPath)) {
            return true;
        }
    }

    static surroundWithDoubleQuotes(commandPath:string):string {
        // Sourround and return command path with double quotes (https://nodejs.org/docs/latest-v12.x/api/child_process.html#child_process_child_process_exec_command_options_callback, https://github.com/nodejs/node/issues/6803)
        return '\"' + commandPath + '\"';
    }
}