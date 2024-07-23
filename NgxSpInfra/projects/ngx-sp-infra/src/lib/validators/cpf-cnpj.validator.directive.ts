import { Directive } from '@angular/core';
import { Validator, NG_VALIDATORS } from '@angular/forms';
import { CpfCnpjValidator } from './cpf-cnpj.validator';


@Directive({
    selector: '[appCpfCnpjValidate][ngModel]',
    providers: [{
        provide: NG_VALIDATORS,
        useExisting: CpfCnpjValidatorDirective,
        multi: true
    }]
})
export class CpfCnpjValidatorDirective extends CpfCnpjValidator implements Validator { }
