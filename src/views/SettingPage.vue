<template>
  <ion-page>
    <ion-header>
      <ion-toolbar color="success">
        <ion-title class="ion-text-center">Setting</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">Setting</ion-title>
        </ion-toolbar>
      </ion-header>
      <ion-list :inset="true">
        <ion-item>
          <!-- <ion-label @click="$router.push('/change-name')">Change Name</ion-label> -->
          <ion-label @click="popupName">Change Name</ion-label>
        </ion-item>
        <ion-item>
          <!-- <ion-label @click="$router.push('/change-password')">Change Password</ion-label> -->
          <ion-label @click="popupPW">Change Password</ion-label>
        </ion-item>
        <ion-item>
          <ion-label @click="$router.push('/login')">Log Out</ion-label>
        </ion-item>
      </ion-list>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonLabel, IonList, IonItem } from '@ionic/vue';
import ExploreContainer from '@/components/ExploreContainer.vue';
import { alertController } from '@ionic/vue';

export default {
  components: { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonLabel, IonList, IonItem },
  setup() {
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

    return { popupName, popupPW };
  },
};
</script>