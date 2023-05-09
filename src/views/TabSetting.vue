<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>Setting</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true">
      <ion-list mode="ios">
        <ion-list-header>
          <ion-label>Atur Profile</ion-label>
        </ion-list-header>
        <ion-item id="open-modal" button @click="gotoName">
          <ion-icon slot="start" :icon="person"></ion-icon>
          <!-- <ion-label @click="$router.push('/change-name')">Change Name</ion-label> -->
          <ion-label>
            <h3>Ubah Nama</h3>
            <p>Atur dan ubah nama profilemu</p>
          </ion-label>
        </ion-item>
        <ion-item button @click="gotoPW">
          <ion-icon slot="start" :icon="documentLock"></ion-icon>
          <!-- <ion-label @click="$router.push('/change-password')">Change Password</ion-label> -->
          <ion-label>
            <h3>Ubah Password</h3>
            <p>Atur dan ubah kata sandimu</p>
          </ion-label>
        </ion-item>

        <ion-list-header>
          <ion-label>Setting</ion-label>
        </ion-list-header>

        <ion-item button @click="logout()">
          <ion-icon slot="start" :icon="logOut"></ion-icon>
          <ion-label>
            <h3>Log Out</h3>
            <p>Keluar dari aplikasi</p>
          </ion-label>
        </ion-item>
      </ion-list>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonLabel, IonList, IonItem, IonListHeader, IonIcon, useIonRouter, IonInput, modalController } from '@ionic/vue';
import { alertController } from '@ionic/vue';
import { documentLock, logOut, person } from 'ionicons/icons';

import ChangeNamePage from "./ChangeNamePage.vue";
import ChangePasswordPage from "./ChangePasswordPage.vue";

// Services
import KaryawanService from '@/common/services/karyawan.service';
import { ref } from 'vue';

export default {
  name: "TabSetting",
  components: { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonLabel, IonList, IonItem, IonListHeader, IonIcon, IonInput, modalController },

  setup() {
    const name = ref()
    const password = ref()
    const id = ref(1)
    const ionRouter = useIonRouter()

    const getKandang = async (name: string) => {
      console.log(name)
      // Fecth data kandang
      KaryawanService.updateName(name, id.value)
        .then((response: any) => {
          console.log(response)
        })
    }

    const getOtherKandang = async (password: string) => {
      console.log(password)
      // Fecth data kandang
      KaryawanService.updatePassword(password, id.value)
        .then((response: any) => {
          console.log(response)
        })
    }

    const popupName = async () => {
      const alert = await alertController.create({
        header: 'Change Name',
        buttons: [{
          text: 'OK',
          role: 'confirm',
          handler: (response) => { console.log(response); getKandang(response.name) }
        }],
        inputs: [
          {
            name: "name",
            placeholder: 'Input New Name',
            attributes: {
              maxlength: 15,
            },
          },
        ],
      });

      await alert.present();
    };

    const popupPW = async () => {
      const alert = await alertController.create({
        header: 'Change Password',
        buttons: [{
          text: 'OK',
          role: 'confirm',
          handler: (response) => { console.log(response); getOtherKandang(response.password) }
        }],
        inputs: [
          {
            type: "password",
            placeholder: 'Input Current Password',
            attributes: {
              maxlength: 15,
            },
          },
          {
            type: "password",
            placeholder: 'Input New Password',
            attributes: {
              maxlength: 15,
            },
          },
        ],
      });

      await alert.present();
    };

    const logout = async () => {
      const alert = await alertController.create({
        mode: 'ios',
        cssClass: 'alert-apps',
        header: 'Keluar',
        message: 'Apakah anda yakin ingin keluar?',
        buttons: [
          {
            role: 'cancel',
            text: 'Batal',
          },
          {
            role: 'oke',
            text: 'Iya',
            handler: () => {
              ionRouter.navigate({ path: '/login' }, 'back', 'replace');
              localStorage.clear();
            },
          },
        ],
      });
      return alert.present();
    }


    return {
      popupName, popupPW, logout,

      ionRouter,
      logOut, documentLock, person
    };
  },


  methods: {
    ionViewWillEnter() {
    },

    //Change Name menggunakan tab baru
    async gotoName(identity: any) {
      const modal = await modalController.create({
        component: ChangeNamePage,
        breakpoints: [0, 0.5, 0.7],
        initialBreakpoint: 0.5,
        componentProps: { id: identity }
      });
      modal.present();
    },

    //Change Password menggunakan tab baru
    async gotoPW(identity: any) {
      const modal = await modalController.create({
        component: ChangePasswordPage,
        breakpoints: [0, 0.5, 0.7],
        initialBreakpoint: 0.5,
        componentProps: { id: identity }
      });
      modal.present();
    },
  },
};
</script>