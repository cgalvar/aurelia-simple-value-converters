import { FileModel } from "../../services/models";

export class BlobToUrlValueConverter {
  toView(file:FileModel) {

    if (file) {
      if(file.file)
        return URL.createObjectURL(file.file);

      else
        return `http://192.168.1.68:3333/documentos/${file.url}`;

    }

  }

  fromView(value) {

  }
}

