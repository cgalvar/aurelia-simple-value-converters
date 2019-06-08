
export class MentionAreaValueConverter {
  
  toView(value:string, referencias) {
    
    // @@1 que pedo con esto, @@2 apoyalo
    if (referencias && value.includes('@@')){

      var spanReferences = [];

      if(!Array.isArray(referencias))
        referencias = [referencias];

      for (let i = 0; i < referencias.length; i++) {
        const element = referencias[i];
        
        let spanReference =
          `<a class = 'reference' href = '#/catalogos/empleados/${referencias[i] ? referencias[i].id : ""}'>@${element.nombre} ${element.apellido_paterno}</a>`
        
        spanReferences.push(spanReference);

        value = value.replace(`@@${element.id}`, spanReference)

      }

      return value;

    }

    else
      return value;

  }

  fromView(value) {

  }
}

