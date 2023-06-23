import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActionSheetController } from '@ionic/angular';
import { NavController } from '@ionic/angular';

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
  presentingElement = undefined;
  isToast: boolean = false;
  isModal: boolean = false;

  constructor(
    private fb: FormBuilder,
    private actionSheetCtrl: ActionSheetController,
    private navCtrl: NavController
  ) {}

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
    this.isModal = true;
    this.canDismiss().then((data) => {
      if (data) {
        setTimeout(() => {
          this.ventaForm.reset();
          this.navCtrl.pop();
          this.navCtrl.navigateForward('/home');
        }, 1000);

        this.isToast = true;
        this.loading = false;
        this.isModal = false;
        console.log(this.ventaForm.value);
      } else {
        this.loading = false;
        this.isModal = false;
        this.isToast = false;
      }
    });
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

  canDismiss = async () => {
    const actionSheet = await this.actionSheetCtrl.create({
      header: 'La información es correcta?',
      buttons: [
        {
          text: 'Si',
          role: 'confirm',
        },
        {
          text: 'No',
          role: 'cancel',
        },
      ],
    });

    actionSheet.present();

    const { role } = await actionSheet.onWillDismiss();

    return role === 'confirm';
  };
}
