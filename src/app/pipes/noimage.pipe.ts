import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'noimage'
})

//Verificacion de las imagenes vacias por pipes
export class NoimagePipe implements PipeTransform {

  transform( images: any []): string {

    if (!images){
      return 'assets/img/noimage.png';

    }

    if (images.length>0){
      return images[0].url;
    }else{
      return 'assets/img/noimage.png';
    }

  }

}
