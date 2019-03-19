import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { FormBuilderValidators } from 'app/validators';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  public form: FormGroup;
  public status_form = {
    loading: false,
    done: false

  };


  constructor(private fb: FormBuilder, private custonValidator: FormBuilderValidators) { }


  private initFormControls(): void {
    this.form = this.fb.group({
      email: ['', [Validators.required, this.custonValidator.emailFormat]],
      name: ['', [Validators.required, this.custonValidator.nameFormat]],
      phone: ['', [Validators.required, this.custonValidator.phoneFormat]],
      message: ['', [Validators.required]]
    });
  }


  public getLabel(): string {
    let label = 'Enviar';

    if (this.status_form.loading) {
      label = 'Enviando';
    }

    if (this.status_form.done) {
      label = 'Enviado';
    }

    return label;

  }


  public submit(): void {
    if (this.form.valid) {
      this.status_form.loading = true;
      this.form.disable();

      setTimeout(() => {

        this.status_form.done = true;
        this.status_form.loading = false;

      }, 2000);
    }
  }


  ngOnInit() {
    this.initFormControls();
  }

}
