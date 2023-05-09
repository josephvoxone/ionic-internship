<template>
    <ion-page>
        <ion-header>
            <ion-toolbar>
                <ion-title class="ion-text-center">History Detail</ion-title>
                <ion-buttons slot="start">
                    <ion-back-button href="/tabs/history"></ion-back-button>
                </ion-buttons>
            </ion-toolbar>
        </ion-header>
        <ion-content class="ion-padding" v-for="(item, index) in dailyLogs" :key="index">
            <ion-item lines="none">
                <ion-avatar class="img-profile">
                    <img alt="Silhouette of a person's head" src="https://ionicframework.com/docs/img/demos/avatar.svg" />
                </ion-avatar>
            </ion-item>
            <ion-label class="ion-text-center">
                <b>
                    <p>
                        {{ item.name }}
                    </p>
                </b>
                <p>
                    PPL {{ item.id_user }}
                </p>
            </ion-label>
            <div style="width: 100%; border-top: 1px solid #d4d4d4; margin: 8px 0;"></div>
            <ion-item lines="none">
                <ion-icon slot="start" :icon="calendarOutline"></ion-icon>
                <ion-grid>
                    <ion-label>
                        <b>
                            <p>Check In</p>
                        </b>
                        <p>8 May 2023 - 09.00</p>
                    </ion-label>
                </ion-grid>
            </ion-item>
            <ion-label>
                <ion-grid>
                    <ion-row>
                        <ion-col>
                            <b>
                                <p>Kandang</p>
                            </b>
                        </ion-col>
                        <ion-col>
                            <p style="margin-left:auto">Make a new report</p>
                        </ion-col>
                    </ion-row>
                    <ion-row>
                        <ion-col>
                            <b>
                                <p>ID Kandang</p>
                            </b>
                        </ion-col>
                        <ion-col>
                            <p style="margin-left:auto">Make a new report</p>
                        </ion-col>
                    </ion-row>
                    <ion-row>
                        <ion-col>
                            <b>
                                <p>Address Kandang</p>
                            </b>
                        </ion-col>
                        <ion-col>
                            <p style="margin-left:auto">Make a new report</p>
                        </ion-col>
                    </ion-row>
                </ion-grid>
            </ion-label>
        </ion-content>
    </ion-page>
</template>
  
<script lang="ts">
import { IonContent, IonHeader, IonTitle, IonToolbar, IonButtons, IonButton, IonItem, IonLabel, IonInput, modalController, useIonRouter, IonBackButton, IonIcon, IonAvatar, IonGrid, IonRow, IonCol, IonPage } from '@ionic/vue';
import { defineComponent, ref } from "vue";
import { useRoute } from "vue-router";
import { chevronBackOutline, calendarOutline } from 'ionicons/icons';

// Page
import TabHistory from "./TabHistory.vue";

//Service
import dailyLogService from '@/common/services/dailylog.service';

export default defineComponent({
    name: 'HistoryDetail',
    components: { useIonRouter, IonContent, IonHeader, IonTitle, IonToolbar, IonButtons, IonButton, IonItem, IonLabel, IonInput, IonBackButton, IonIcon, IonAvatar, IonGrid, IonRow, IonCol, IonPage },
    setup() {
        const ionRouter = useIonRouter()
        const params = ref({ type: 'all', q: '' })
        const reports: any = ref([])
        const kandangs: any = ref([])
        const dailyLogs: any = ref([])
        const id = ref();
        const route = useRoute();
        id.value = route.query.id || "";

        return {
            chevronBackOutline,

            // variable
            params,
            // router
            ionRouter,
            //arrayreport
            reports,
            //arraykandang
            kandangs,
            //arraydailyLog
            dailyLogs,
            calendarOutline,
            id,
            route
        }
    },

    methods: {
        getDailyLog() {
            console.log(this.id)
            dailyLogService.getDetailbyID(this.id).then((response: any) => {
                this.dailyLogs = response;
            });
        },

        ionViewWillEnter() {
            this.getDailyLog();
        },

        cancel() {
            return modalController.dismiss(null, 'cancel');
        },
        confirm() {
            return modalController.dismiss(null, 'confirm');
            // return detailController.dismiss(this.name, 'confirm');
        },
    },
});
</script>

<style scoped lang="scss">
.img-profile {
    width: 20%;
    height: 90%;
    margin: auto;
}

.ion-padding {
    border-radius: 50%;
}
</style>