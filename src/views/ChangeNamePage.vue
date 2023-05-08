<template>
    <ion-page>
        <ion-header class="ion-no-border">
            <ion-toolbar ref="modal" trigger="open-modal" :can-confirm="canConfirm" :presenting-element="presentingElement">
                <ion-title>Change Name</ion-title>
                <ion-buttons slot="start" color="light">
                    <ion-back-button></ion-back-button>
                </ion-buttons>
                <ion-buttons slot="end">
              <ion-button @click="confirm()">Close</ion-button>
            </ion-buttons>
            </ion-toolbar>
        </ion-header>
        <ion-content :fullscreen="true">
            <div class="container">
                <ion-item fill="outline" class="ion-margin-bottom">
                    <ion-label position="stacked">Name</ion-label>
                    <ion-input type="name" placeholder="Masukkan namamu" v-model="user.name"></ion-input>
                </ion-item>
            </div>
        </ion-content>
    </ion-page>
</template>

<script  lang="ts">
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonListHeader, IonList, IonItem, IonLabel, IonButtons, IonButton, IonModal, actionSheetController } from '@ionic/vue';
import { barChart } from 'ionicons/icons';
import { defineComponent, ref } from 'vue';
import VueQrcode from '@chenfengyuan/vue-qrcode';
import TabSetting from '@/views/TabSetting.vue';

export default defineComponent({
    name: "NamePage",
    props: ["id"],
    components: { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonListHeader, IonList, IonItem, IonLabel, VueQrcode, IonButtons, IonButton, IonModal },
    setup() {
        const user: any = ref({})
        return {
            barChart,
            user,
            confirm
        }
    },
    data() {
      return {
        presentingElement: undefined,
      };
    },
    methods: {
      async canConfirm() {
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
        return role === 'confirm';
      },
    },
    mounted() {
    },
})
</script>

<style scoped lang="scss">
.container {
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
}
</style>
