import CommandPath from 'command-path';

console.log(CommandPath.isAbsolute('/absolute-path'));
console.log(CommandPath.isRelative('relative/path'));
console.log(CommandPath.isGlobal('global-path'));
console.log(CommandPath.isLocal('local-path'));
console.log(CommandPath.getLocal('local-path'));
console.log(CommandPath.containsWhitespace('whitespace path'));
console.log(CommandPath.surroundWithDoubleQuotes('whitespace path'));