<template>
    <ion-page>
        <ion-header>
            <ion-toolbar>
                <ion-buttons slot="start">
                    <ion-back-button></ion-back-button>
                </ion-buttons>
                <ion-title>Report</ion-title>
            </ion-toolbar>
            <ion-toolbar class="toolbar-segment-report">
                <ion-segment @ionChange="segmentChanged($event)" v-model="segment" mode="ios">
                    <ion-segment-button value="report">
                        <ion-label>Report</ion-label>
                    </ion-segment-button>
                    <ion-segment-button value="history">
                        <ion-label>History</ion-label>
                    </ion-segment-button>
                </ion-segment>
            </ion-toolbar>
        </ion-header>
        <ion-content :fullscreen="true">
            <div v-if="segment == 'report'">
                <ion-list :inset="true">
                    <ion-datetime-button datetime="datetime"></ion-datetime-button>
                    <ion-modal :keep-contents-mounted="true">
                        <ion-datetime id="datetime"></ion-datetime>
                    </ion-modal>
                </ion-list>
                <ion-list :inset="true">
                    <ion-item>
                        <ion-label position="stacked">
                            <h1>Reason</h1>
                        </ion-label>
                        <ion-input placeholder="Enter text"></ion-input>
                    </ion-item>
                </ion-list>
                <ion-list :inset="true">
                    <ion-item>
                        <ion-label position="fixed">Depletion</ion-label>
                        <ion-input placeholder="Enter text"></ion-input>
                    </ion-item>
                    <ion-item>
                        <ion-label position="fixed">Feed Intake</ion-label>
                        <ion-input placeholder="Enter text"></ion-input>
                    </ion-item>
                    <ion-item>
                        <ion-label position="fixed">Avg bw</ion-label>
                        <ion-input placeholder="Enter text"></ion-input>
                    </ion-item>
                </ion-list>
                <ion-button fill="outline" shape="round" expand="full">Submit</ion-button>
            </div>
            <div v-if="segment == 'history'">
                <ion-card button @click="openDetail" mode="ios" class="ion-padding-vertical"
                    v-for="(item, index) in reports && kandangs" :key="index">
                    <ion-item lines="none">
                        <ion-label>
                            <p>{{item.id}}</p>
                        </ion-label>
                        <ion-label slot="end">
                            <p>{{item.created_at}}</p>
                        </ion-label>
                    </ion-item>
                    <ion-item mode="ios" lines="none">
                        <ion-thumbnail slot="start">
                            <img alt="Silhouette of mountains"
                                src="https://ionicframework.com/docs/img/demos/thumbnail.svg" />
                        </ion-thumbnail>
                        <ion-label>
                            <h2>
                                {{item.name}}
                            </h2>
                            <p>{{item.city}}</p>
                        </ion-label>
                    </ion-item>
                    <ion-item lines="none">
                        <ion-label>
                            <p>Last updated</p>
                        </ion-label>
                        <ion-button slot="end" color="dark">
                            Lihat Detail
                        </ion-button>
                    </ion-item>
                </ion-card>
            </div>
        </ion-content>
    </ion-page>
</template>

<script  lang="ts">
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonListHeader, IonList, IonItem, IonLabel, IonBackButton, IonButton, IonButtons, IonCard, IonCardContent, IonTabBar, IonThumbnail, IonTabButton, IonSegment, IonSegmentButton, IonSearchbar, IonTextarea, IonDatetime, IonDatetimeButton, IonModal, modalController, useIonRouter } from '@ionic/vue';
import { defineComponent, ref } from 'vue';
import ReportDetail from './ReportDetail.vue';
//service
import reportService from '@/common/services/report.service';
import kandangService from '@/common/services/kandang.service';

export default defineComponent({
    name: "ReportPage",
    components: { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonListHeader, IonList, IonItem, IonLabel, IonBackButton, IonButton, IonButtons, IonCard, IonCardContent, IonTabBar, IonThumbnail, IonTabButton, IonSegment, IonSegmentButton, IonSearchbar, IonTextarea, IonDatetime, IonDatetimeButton, IonModal, useIonRouter },

    setup() {
        const segment = ref('report');
        const ionRouter = useIonRouter()
        const params = ref({ type: 'all', q: '' })
        const reports: any = ref([])
        const kandangs: any = ref([])

        return {
            
            segment,
            message: 'This modal example uses the modalController to present and dismiss modals.',
            // variable
            params,
            // router
            ionRouter,
            //arrayreport
            reports,
            //arraykandang
            kandangs
        }
    },

    methods: {
        segmentChanged(ev: CustomEvent) {
            this.segment = ev.detail.value;
        },
        async openDetail() {
            const detail = await modalController.create({
                component: ReportDetail,
            });
            detail.present();

            const { data, role } = await detail.onWillDismiss();

            if (role === 'confirm') {
                this.message = `Hello, ${data}!`;
            }
        },
        
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

        ionViewWillEnter() {
            this.getReport();
            this.getKandang();
        },
    
    },
})
</script>

<style scoped lang="scss">
ion-textarea.custom-textarea {
    --background: #373737;
    --color: #fff;
    --padding-end: 10px;
    --padding-start: 10px;
    --placeholder-color: #ddd;
    --placeholder-opacity: 0.8;
}

.toolbar-segment-report {
    padding: 0 1em;
}

ion-item.line-buttom {
    --padding-end: 0px;
    --inner-padding-end: 0px;
}
</style>