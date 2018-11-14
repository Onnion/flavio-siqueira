import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  public form: FormGroup

  constructor(private fb: FormBuilder) { }


  private initFormControls(): void {
    this.form = this.fb.group({
      email: ['', [Validators.required]],
      name: ['', [Validators.required]],
      phone: ['', [Validators.required]],
      message: ['', [Validators.required]]
    });
  }


  public submit(): void {
    alert('hey');
  }


  ngOnInit() {
    this.initFormControls();
  }

}
