import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-test-form',
  templateUrl: './test-form.component.html',
  styleUrls: ['./test-form.component.css']
})
export class TestFormComponent implements OnInit {

  public testForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder
  ) {  }

  ngOnInit() {
    this.testForm = this.formBuilder.group({
      name: '',
      lastName: '',
      dateOfBirth: '',
      sex: 'M',
      personalId: '',
      plan: 0
    });

    this.testForm.valueChanges.subscribe(form => console.log(form));
  }

}
