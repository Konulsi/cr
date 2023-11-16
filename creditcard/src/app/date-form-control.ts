import { FormControl } from '@angular/forms';

export class DateFormControl extends FormControl {
  override setValue(value: string | null, options: any) {
    // super.setValue(value + '+', options);
    // super.setValue(value + '+', { ...options, emitModelToViewChange: true });
    if (!value) {
      super.setValue('', { ...options, emitModelToViewChange: true });
      return;
    }
    if (value?.match(/[^0-9|\/]/gi)) {
      super.setValue(this.value, { ...options, emitModelToViewChange: true });
      return;
    }
    if (value.length === 2 && this.value.length === 3) {
      super.setValue(value, {
        ...options,
        emitModelToViewChange: true,
      }); //value 5 den boyuukse oldugu deyeri qaytar
      return;
    }
    if (value.length === 2) {
      super.setValue(value + '/', {
        ...options,
        emitModelToViewChange: true,
      }); //value 5 den boyuukse oldugu deyeri qaytar
      return;
    }
    if (value.length > 5) {
      super.setValue(this.value, {
        ...options,
        emitModelToViewChange: true,
      }); //value 5 den boyuukse oldugu deyeri qaytar
      return;
    }

    super.setValue(this.value, { ...options, emitModelToViewChange: true });
  }
}

//value.match - valuye eshleshiyorsa. yeni uygunlugunu yoxlayiriq.
