import { Pipe, PipeTransform } from '@angular/core';
import { CONFIG } from 'src/environments/environment';

@Pipe({
  name: 'fullImagePath'
})
export class ImagePipe implements PipeTransform {

  transform(value: any): String {
    console.log("VALUE : ", value)
    return CONFIG.api_image + value
  }

}
