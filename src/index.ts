import {FrameworkConfiguration} from 'aurelia-framework';
import {PLATFORM} from 'aurelia-pal';

export function configure(config: FrameworkConfiguration) {
  config.globalResources([
    PLATFORM.moduleName('./value-converters/booleanToLetter'),
    PLATFORM.moduleName('./value-converters/datarow'),
    PLATFORM.moduleName('./value-converters/date'),
    PLATFORM.moduleName('./value-converters/filelisttoarrayvalueconverter')
  ]);
}
