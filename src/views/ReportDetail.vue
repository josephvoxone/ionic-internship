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
            <ion-label v-for="(item) in filteredReports">
                <h2>
                    {{ item.user_created.name }}
                </h2>
                <p>{{ item.kandang.city }}</p>
            </ion-label>
        </ion-item>
        <div style="width: 100%; border-top: 1px solid #d4d4d4; margin: 8px 0;"></div>
        <ion-item lines="none">
            <ion-label v-for="(item) in filteredReports">
                <h2>
                    Reason
                </h2>
                <p>{{ item.reason }}</p>
            </ion-label>
        </ion-item>
        <ion-item lines="none">
            <ion-label v-for="(item) in filteredReports">
                <h2>
                    Reason
                </h2>
                <ion-grid>
                    <ion-row>
                        <ion-col>
                            <p>Depletion</p>
                        </ion-col>
                        <ion-col>
                            <p style="margin-left:auto">{{ item.depletion }}</p>
                        </ion-col>
                    </ion-row>
                    <ion-row>
                        <ion-col>
                            <p>Feed Intake</p>
                        </ion-col>
                        <ion-col>
                            <p style="margin-left:auto">{{ item.feed_intake }}</p>
                        </ion-col>
                    </ion-row>
                    <ion-row>
                        <ion-col>
                            <p>Avg bw</p>
                        </ion-col>
                        <ion-col>
                            <p style="margin-left:auto">{{ item.avg_bw }}</p>
                        </ion-col>
                    </ion-row>
                </ion-grid>
            </ion-label>
        </ion-item>
        <div style="width: 100%; border-top: 1px solid #d4d4d4; margin: 8px 0;"></div>
        <ion-item lines="none" v-for="(item) in filteredReports">
            <ion-label>
                <p>{{ item.kandang.id }}</p>
            </ion-label>
            <ion-label slot="end">
                <p>{{ item.create_at }}</p>
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
import dailyLogService from '@/common/services/dailylog.service';
import karyawanService from '@/common/services/karyawan.service';
import Report from "@/common/services/report.service"

interface Report {
    id: 5,
    reason: string,
    id_kandang: number,
    depletion: number,
    feed_intake: number,
    avg_bw: number,
    created_by: number,
    updated_by: number,
    create_at: number,
    updated_at: number
    user_created: {
        id: number,
        name: string,
        role: true,
        phone: string,
        gender: true,
        status: true,
        create_at: number,
        updated_at: number
    },
    user_updated: {
        id: number,
        name: string,
        role: true,
        phone: string,
        gender: true,
        status: true,
        create_at: number,
        updated_at: number
    },
    kandang: {
        id: number,
        name: string,
        type: string,
        status: true,
        address: string,
        city: string,
    };
}

export default defineComponent({
    name: 'Detail',
    components: { useIonRouter, IonContent, IonHeader, IonTitle, IonToolbar, IonButtons, IonButton, IonItem, IonLabel, IonInput },
    setup() {
        const ionRouter = useIonRouter()
        const params = ref({ type: 'all', q: '' })
        const reports: any = ref([])
        const kandangs: any = ref([])
        const dailyLogs: any = ref([])
        const karyawans: any = ref([])

        return {
            chevronBackOutline,

            // variable
            params,
            // router
            ionRouter,
            //arrayreport
            reports: [] as Report[],
            //arraykandang
            kandangs,
            //arraydailyLog
            dailyLogs,
            karyawans,
        }
    },

    computed: {
        filteredReports() {
            const id = Number(this.$route.query.id);
            return this.reports.filter((item) => item.id_kandang === id);
        },
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

        getKaryawan() {
            // Fecth data KaryawangetKaryawan
            karyawanService.getKaryawan(this.params)
                .then((response: any) => {
                    console.log(response)
                    this.karyawans = response
                    console.log(this.karyawans)
                })
        },

        ionViewWillEnter() {
            this.getReport();
            this.getKandang();
            this.getKaryawan();
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