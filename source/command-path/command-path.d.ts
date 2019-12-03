export default class CommandPath {
    static isAbsolute(commandPath: string): boolean;
    static isGlobal(commandPath: string): boolean;
    static isRelative(commandPath: string): boolean;
    private static localPathCache;
    static isLocal(commandPath: string, cwd?: string): boolean;
    static getLocal(commandPath: string, cwd?: string): string;
}
