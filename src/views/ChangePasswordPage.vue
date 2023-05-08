<template>
    <ion-page>
        <ion-header class="ion-no-border">
            <ion-toolbar>
                <ion-title>Change Password</ion-title>
                <ion-buttons slot="start" color="light">
                    <ion-back-button></ion-back-button>
                </ion-buttons>
            </ion-toolbar>
        </ion-header>
        <ion-content :fullscreen="true">
            <div class="container">
                <ion-item fill="outline" class="ion-margin-bottom">
                    <ion-label position="stacked">Current Password</ion-label>
                    <ion-input type="name" placeholder="Enter password lamamu" v-model="user.name"></ion-input>
                </ion-item>
            </div>
            <div class="container">
                <ion-item fill="outline" class="ion-margin-bottom">
                    <ion-label position="stacked">New Password</ion-label>
                    <ion-input type="name" placeholder="Enter password barumu" v-model="user.name"></ion-input>
                </ion-item>
            </div>
        </ion-content>
    </ion-page>
</template>

<script  lang="ts">
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonListHeader, IonList, IonItem, IonLabel } from '@ionic/vue';
import { barChart } from 'ionicons/icons';
import { defineComponent, ref } from 'vue';
import VueQrcode from '@chenfengyuan/vue-qrcode';

export default defineComponent({
    name: "NamePage",
    props: ["id"],
    components: { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonListHeader, IonList, IonItem, IonLabel, VueQrcode },
    setup() {
        const user: any = ref({})
        return {
            barChart,
            user
        }
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
