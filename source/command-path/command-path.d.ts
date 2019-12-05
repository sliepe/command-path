export default class CommandPath {
    static isAbsolute(commandPath: string): boolean;
    static isGlobal(commandName: string): boolean;
    static isRelative(commandPath: string): boolean;
    private static localPathCache;
    static isLocal(commandName: string, cwd?: string): boolean;
    static getLocal(commandName: string, cwd?: string): string;
    static containsWhitespace(commandPath: string): boolean;
    static surroundWithDoubleQuotes(commandPath: string): string;
}
