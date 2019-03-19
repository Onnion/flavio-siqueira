import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-media-header',
  templateUrl: './media-header.component.html',
  styleUrls: ['./media-header.component.scss']
})
export class MediaHeaderComponent implements OnInit {
  public form: FormGroup;

  @Input() type: any;


  constructor(private fb: FormBuilder) { }


  private initFormControls(): void {
    this.form = this.fb.group({
      search: ['', [Validators.required]]
    });
  }


  public toogleMenu(): void {
    const main = document.querySelector('.main-wraper');
    const menu = document.querySelector('.media-menu');

    main.classList.toggle('menu-closed');
    menu.classList.toggle('menu-closed');

  }


  public submit(): void {
    if (this.form.valid) {
      console.log(this.form.value);
    }
  }


  ngOnInit() {
    this.initFormControls();
  }

}
