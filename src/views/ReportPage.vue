<template>
    <ion-page>
        <ion-header>
            <ion-toolbar color="success">
                <ion-buttons slot="start">
                    <ion-back-button></ion-back-button>
                </ion-buttons>
                <ion-title class="ion-text-center">Report</ion-title>
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
                <ion-button fill="outline" shape="round" expand="full" color="success">Submit</ion-button>
            </div>
            <div v-if="segment == 'history'">
                <ion-content :fullscreen="true">
                    <ion-card button @click="$router.push('/detail')" mode="ios" class="ion-padding-vertical"
                        v-for="(item, index) in [1, 2, 3, 4, 5]" :key="index">
                        <ion-item mode="ios" lines="none">
                            <ion-thumbnail slot="start">
                                <img alt="Silhouette of mountains"
                                    src="https://ionicframework.com/docs/img/demos/thumbnail.svg" />
                            </ion-thumbnail>
                            <ion-label>
                                <h2>
                                    Aria Mitra Sejati
                                </h2>
                                <p>ID : 03</p>
                            </ion-label>
                            <ion-chip slot="end" color="success">
                                Detail
                            </ion-chip>
                        </ion-item>
                    </ion-card>
                </ion-content>
            </div>
        </ion-content>
    </ion-page>
</template>

<script  lang="ts">
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonListHeader, IonList, IonItem, IonLabel, IonBackButton, IonButton, IonButtons, IonCard, IonCardContent, IonTabBar, IonThumbnail, IonTabButton, IonSegment, IonSegmentButton, IonSearchbar, IonTextarea, IonDatetime, IonDatetimeButton, IonModal } from '@ionic/vue';
import { defineComponent, ref } from 'vue';
export default defineComponent({
    name: "ReportPage",
    components: { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonListHeader, IonList, IonItem, IonLabel, IonBackButton, IonButton, IonButtons, IonCard, IonCardContent, IonTabBar, IonThumbnail, IonTabButton, IonSegment, IonSegmentButton, IonSearchbar, IonTextarea, IonDatetime, IonDatetimeButton, IonModal },
    setup() {
        const segment = ref('report');
        const formatViewers = (viewers: number) => {
            if (viewers > 100000) {
                return `${Math.floor(viewers / 100000)}juta`;
            } else if (viewers > 1000) {
                return `${Math.floor(viewers / 1000)}rb`;
            }
            return viewers.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
        }
        return {
            formatViewers,
            segment
        }
    },
    methods: {
        segmentChanged(ev: CustomEvent) {
            this.segment = ev.detail.value;
        },
        scrollContent(event: any) {
            if (event.detail.deltaY > 0) {
                (this.$refs['header'] as any).$el.style.top = `-60px`;
            } else if (event.detail.deltaY < 0) {
                (this.$refs['header'] as any).$el.style.top = `0px`;
            }
        }
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
</style>