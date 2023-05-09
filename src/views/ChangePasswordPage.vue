<template>
    <ion-page :can-dismiss="canDismiss" :presenting-element="presentingElement">
      <ion-content :fullscreen="true">
          <ion-list-header class="ion-no-padding">
            <ion-label class="ion-margin-top ion-text-center">
              <h2>Change Name</h2>
              <p>Masukkan nama yang diinginkan di bawah sini!</p>
            </ion-label>
          </ion-list-header>

            <ion-item fill="outline" class="ion-margin-bottom">
              <ion-label position="stacked">Current Password</ion-label>
              <ion-input type="password" placeholder="Enter password barumu" v-model="user.password"></ion-input>
            </ion-item>

            <ion-item fill="outline" class="ion-margin-bottom">
              <ion-label position="stacked">New Password</ion-label>
              <ion-input type="password" placeholder="Enter password lamamu" v-model="user.password"></ion-input>
            </ion-item>

            <ion-toolbar class="ion-padding">
              <ion-button mode="ios" color="dark" fill="solid" shape="round" expand="block" @click="canDismiss()">Save
              </ion-button>
            </ion-toolbar>
      </ion-content>
    </ion-page>
  </template>
  
  <script  lang="ts">
  import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonListHeader, IonList, IonItem, IonLabel, IonButton, actionSheetController, IonModal, IonInput } from '@ionic/vue';
  import { defineComponent, ref } from 'vue';
  
  export default defineComponent({
    name: "ChangePasswordPage",
    props: ["id"],
    components: { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonListHeader, IonList, IonItem, IonLabel, IonButton, actionSheetController, IonModal, IonInput },
  
    setup() {
      const user: any = ref({})
      return {
        user,
        presentingElement: undefined
      }
    },
  
    methods: {
        async canDismiss() {
          const actionSheet = await actionSheetController.create({
            header: 'Are you sure?',
            buttons: [
              {
                text: 'Yes',
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
          return role === 'confirm' ? history.back() : null;
        },
      },
      mounted() {
      },
  })
  </script>
  