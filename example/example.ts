import CommandPath from 'command-path';

CommandPath.isAbsolute('/absolute-path');
CommandPath.isRelative('relative/path');
CommandPath.isGlobal('global-path');
CommandPath.isLocal('local-path');
CommandPath.getLocal('local-path');