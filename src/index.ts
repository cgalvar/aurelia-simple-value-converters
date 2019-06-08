import {FrameworkConfiguration} from 'aurelia-framework';
import {PLATFORM} from 'aurelia-pal';

export function configure(config: FrameworkConfiguration) {
  config.globalResources([
    PLATFORM.moduleName('./value-converters/blobtourlvalueconverter.ts'),
    PLATFORM.moduleName('./value-converters/booleanToLetter.ts'),
    PLATFORM.moduleName('./value-converters/datarow.ts'),
    PLATFORM.moduleName('./value-converters/date.ts'),
    PLATFORM.moduleName('./value-converters/direccion.ts'),
    PLATFORM.moduleName('./value-converters/filelisttoarrayvalueconverter.ts')
  ]);
}
