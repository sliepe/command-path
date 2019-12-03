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

    static isGlobal(commandPath: string): boolean {
        // Not absolute, not relative and not local
        if (!this.isAbsolute(commandPath) && !this.isRelative(commandPath) && !this.isLocal(commandPath)) {
            // Can only be absolute
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

    static isLocal(commandPath: string, cwd: string = process.cwd()): boolean {
        const npmWhich = require('npm-which')(cwd);

        if (this.localPathCache[cwd]) {
            if (this.localPathCache[cwd][commandPath]) {
                return true;
            }
        }

        try {
            const localPath = npmWhich.sync(commandPath);

            if (!this.localPathCache[cwd]) {
                this.localPathCache[cwd] = [];
            }

            if (!this.localPathCache[cwd][commandPath]) {
                this.localPathCache[cwd][commandPath] = localPath;
            }

            return true;
        } catch (error) {
            return false;
        }
    }

    static getLocal(commandPath: string, cwd: string = process.cwd()): string {
        if (this.isLocal(commandPath, cwd)) {
            return this.localPathCache[cwd][commandPath];
        }
    }
}