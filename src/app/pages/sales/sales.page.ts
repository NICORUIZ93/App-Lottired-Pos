import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sales',
  templateUrl: './sales.page.html',
  styleUrls: ['./sales.page.scss'],
})
export class SalesPage implements OnInit {
  ventaForm: FormGroup;
  loading = false;
  currentStep: string = 'paso1';
  randomNumbers: number[] = [];

  constructor(private fb: FormBuilder, private router: Router) {}

  ngOnInit() {
    this.initForm();
  }

  initForm() {
    this.ventaForm = this.fb.group({
      numeroTicket: ['', [Validators.required, Validators.pattern('[0-9]+')]],
      fechaVenta: ['', Validators.required],
      monto: [
        '',
        [Validators.required, Validators.min(0), Validators.pattern('[0-9]+')],
      ],
      nombreComprador: ['', Validators.required],
      cedulaComprador: [
        '',
        [Validators.required, Validators.pattern('[0-9]+')],
      ],
      telefonoComprador: [
        '',
        [Validators.required, Validators.pattern('[0-9]+')],
      ],
      numeroLoteria: ['', [Validators.required, Validators.pattern('[0-9]+')]],
    });
  }

  validarPaso1() {
    return this.ventaForm.get('numeroTicket').invalid ||
      this.ventaForm.get('fechaVenta').invalid ||
      this.ventaForm.get('monto').invalid
      ? true
      : false;
  }

  validarPaso2() {
    return this.ventaForm.get('numeroLoteria').invalid ? true : false;
  }

  completarCompra(): void {
    this.loading = true;
    setTimeout(() => {
      console.log(this.ventaForm.value);
      this.ventaForm.reset();
      this.router.navigate(['/home']);
      this.loading = false;
    }, 1000);
  }

  generateRandomNumbers() {
    this.randomNumbers = Array.from(
      { length: 4 },
      () => +Math.floor(Math.random() * 10)
    );
    this.ventaForm.get('numeroLoteria').setValue(this.randomNumbers.join(''));
  }

  goToStep(step: string) {
    this.currentStep = step;
  }
}
