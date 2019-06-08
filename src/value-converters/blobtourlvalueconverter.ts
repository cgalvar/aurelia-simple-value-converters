
export class BlobToUrlValueConverter {
  toView({file, url}) {

    if (file) {
      if(file)
        return URL.createObjectURL(file);

      else
        return `http://192.168.1.68:3333/documentos/${url}`;

    }

  }

  fromView(value) {

  }
}

