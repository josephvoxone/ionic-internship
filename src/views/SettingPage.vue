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
        <ion-item button @click="popupName">
          <ion-icon slot="start" :icon="person"></ion-icon>
          <!-- <ion-label @click="$router.push('/change-name')">Change Name</ion-label> -->
          <ion-label>
            <h3>Ubah Nama</h3>
            <p>Atur dan ubah nama profilemu</p>
          </ion-label>
        </ion-item>
        <ion-item button @click="popupPW">
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

        <ion-item button @click="$router.push('/login')">
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
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonLabel, IonList, IonItem, IonListHeader } from '@ionic/vue';
import { alertController } from '@ionic/vue';
import { documentLock, logOut, person } from 'ionicons/icons';
// import axios from 'axios';

export default {
  components: { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonLabel, IonList, IonItem, IonListHeader },
  setup() {
    // const endpoint = 'http://127.0.0.1:3333/karyawan/getData';
    // const data = {
    //   name: ''
    // };

    // axios.put(endpoint, data)
    //   .then(response => {
    //     console.log(response.data); // output hasil respons
    //   })
    //   .catch(error => {
    //     console.error(error);
    //   });

    const popupName = async () => {
      const alert = await alertController.create({
        header: 'Change Name',
        buttons: ['OK'],
        inputs: [
          {
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
        buttons: ['OK'],
        inputs: [
          {
            placeholder: 'Input Current Password',
            attributes: {
              maxlength: 15,
            },
          },
          {
            placeholder: 'Input New Password',
            attributes: {
              maxlength: 15,
            },
          },
        ],
      });

      await alert.present();
    };

    return {
      popupName, popupPW,

      logOut, documentLock, person
    };
  },
};
</script>