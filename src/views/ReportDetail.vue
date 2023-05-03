<template>
    <ion-header>
        <ion-toolbar>
            <ion-buttons slot="start">
                <ion-button color="medium" @click="cancel">Cancel</ion-button>
            </ion-buttons>
            <ion-title class="ion-text-center">Detail</ion-title>
            <ion-buttons slot="end">
                <ion-button @click="confirm">Confirm</ion-button>
            </ion-buttons>
        </ion-toolbar>
    </ion-header>
    <ion-content class="ion-padding">
        <ion-item lines="none">
            <ion-avatar slot="start">
                <img alt="Silhouette of a person's head" src="https://ionicframework.com/docs/img/demos/avatar.svg" />
            </ion-avatar>
            <ion-label v-for="(item, index) in kandangs" :key="index">
                <h2>
                    {{item.name}}
                </h2>
                <p>{{item.city}}</p>
            </ion-label>
        </ion-item>
        <div style="width: 100%; border-top: 1px solid #d4d4d4; margin: 8px 0;"></div>
        <ion-item lines="none">
            <ion-label v-for="(item, index) in reports" :key="index">
                <h2>
                    Reason
                </h2>
                <p>{{ item.reason }}</p>
            </ion-label>
        </ion-item>
        <ion-item lines="none">
            <ion-label>
                <h2>
                    Reason
                </h2>
                <ion-grid>
                    <ion-row>
                        <ion-col>
                            <p>Depletion</p>
                        </ion-col>
                        <ion-col>
                            <p style="margin-left:auto">30</p>
                        </ion-col>
                    </ion-row>
                    <ion-row>
                        <ion-col>
                            <p>Feed Intake</p>
                        </ion-col>
                        <ion-col>
                            <p style="margin-left:auto">30</p>
                        </ion-col>
                    </ion-row>
                    <ion-row>
                        <ion-col>
                            <p>Avg bw</p>
                        </ion-col>
                        <ion-col>
                            <p style="margin-left:auto">30</p>
                        </ion-col>
                    </ion-row>
                </ion-grid>
            </ion-label>
        </ion-item>
        <div style="width: 100%; border-top: 1px solid #d4d4d4; margin: 8px 0;"></div>
        <ion-item lines="none">
            <ion-label>
                <p>100012103</p>
            </ion-label>
            <ion-label slot="end">
                <p>21 Maret 2023</p>
            </ion-label>
        </ion-item>
    </ion-content>
</template>
  
<script lang="ts">
import { IonContent, IonHeader, IonTitle, IonToolbar, IonButtons, IonButton, IonItem, IonLabel, IonInput, modalController, useIonRouter } from '@ionic/vue';
import { defineComponent, ref } from 'vue';
import { chevronBackOutline } from 'ionicons/icons';
import reportService from '@/common/services/report.service';
import kandangService from '@/common/services/kandang.service';
import dailyLogService from '@/common/services/dailylog';

export default defineComponent({
    name: 'Detail',
    components: { useIonRouter, IonContent, IonHeader, IonTitle, IonToolbar, IonButtons, IonButton, IonItem, IonLabel, IonInput },
    setup() {
        const ionRouter = useIonRouter()
        const params = ref({ type: 'all', q: '' })
        const reports: any = ref([])
        const kandangs: any = ref([])
        const dailyLogs: any = ref([])

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
            dailyLogs

        }
    },

    methods: {
        getReport() {
            // Fecth data Report
            reportService.getReport(this.params)
                .then((response: any) => {
                    console.log(response)
                    this.reports = response
                    console.log(this.reports)
                })
        },

        getKandang() {
            // Fecth data kandang
            kandangService.getKandang(this.params)
                .then((response: any) => {
                    console.log(response)
                    this.kandangs = response
                    console.log(this.kandangs)
                })
        },

        getDailyLog() {
            // Fecth data dailyLog
            dailyLogService.getDailyLog(this.params)
                .then((response: any) => {
                    console.log(response)
                    this.dailyLogs = response
                    console.log(this.dailyLogs)
                })
        },

        ionViewWillEnter() {
            this.getReport();
            this.getKandang();
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