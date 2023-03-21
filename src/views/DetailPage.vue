<template>
    <ion-page>
        <ion-header>
            <ion-toolbar color="success">
                <ion-buttons slot="start">
                    <ion-back-button></ion-back-button>
                </ion-buttons>
                <ion-title class="ion-text-center">Detail</ion-title>
            </ion-toolbar>
            <ion-toolbar>
                <ion-segment @ionChange="segmentChanged($event)" v-model="segment" mode="ios">
                    <ion-segment-button value="detail">
                        <ion-label>Detail</ion-label>
                    </ion-segment-button>
                    <ion-segment-button value="report">
                        <ion-label>Report</ion-label>
                    </ion-segment-button>
                </ion-segment>
            </ion-toolbar>
        </ion-header>
        <ion-content :fullscreen="true">
            <div v-if="segment == 'detail'">
                <ion-list :inset="true">
                    <p class="ion-text-center">Last Updated</p>
                    <ion-datetime-button datetime="datetime"></ion-datetime-button>
                    <ion-modal :keep-contents-mounted="true">
                        <ion-datetime id="datetime"></ion-datetime>
                    </ion-modal>
                </ion-list>
                <ion-list :inset="true">
                    <ion-item>
                        <ion-label position="stacked"><h1>Reason</h1></ion-label>
                        <ion-input placeholder="Enter text">the chicken feed ran out, there was death in 50 chickens, the
                            cage was damaged at the door.</ion-input>
                    </ion-item>
                </ion-list>
                <ion-list :inset="true">
                    <ion-item>
                        <ion-label position="fixed">ID</ion-label>
                        <ion-input>03</ion-input>
                    </ion-item>
                    <ion-item>
                        <ion-label position="fixed">Depletion</ion-label>
                        <ion-input>50</ion-input>
                    </ion-item>
                    <ion-item>
                        <ion-label position="fixed">Feed Intake</ion-label>
                        <ion-input>20</ion-input>
                    </ion-item>
                    <ion-item>
                        <ion-label position="fixed">Avg bw</ion-label>
                        <ion-input>390 gram</ion-input>
                    </ion-item>
                </ion-list>
            </div>
            <div v-if="segment == 'report'">
                <ion-list :inset="true">
                    <ion-datetime-button datetime="datetime"></ion-datetime-button>
                    <ion-modal :keep-contents-mounted="true">
                        <ion-datetime id="datetime"></ion-datetime>
                    </ion-modal>
                </ion-list>
                <ion-list :inset="true">
                    <ion-item>
                        <ion-label position="stacked"><h1>Reason</h1></ion-label>
                        <ion-input placeholder="Enter text"></ion-input>
                    </ion-item>
                </ion-list>
                <ion-list :inset="true">
                    <ion-item>
                        <ion-label position="fixed">ID</ion-label>
                        <ion-input placeholder="Enter text"></ion-input>
                    </ion-item>
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
        </ion-content>
    </ion-page>
</template>

<script  lang="ts">
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonListHeader, IonList, IonItem, IonLabel, IonBackButton, IonButton, IonButtons, IonCard, IonCardContent, IonTabBar, IonThumbnail, IonTabButton, IonSegment, IonSegmentButton, IonSearchbar, IonTextarea, IonDatetime, IonDatetimeButton, IonModal } from '@ionic/vue';
import { defineComponent, ref } from 'vue';
export default defineComponent({
    name: "DetailPage",
    components: { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonListHeader, IonList, IonItem, IonLabel, IonBackButton, IonButton, IonButtons, IonCard, IonCardContent, IonTabBar, IonThumbnail, IonTabButton, IonSegment, IonSegmentButton, IonSearchbar, IonTextarea, IonDatetime, IonDatetimeButton, IonModal },
    setup() {
        const segment = ref('detail');
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

<style>
ion-textarea.custom-textarea {
    --background: #373737;
    --color: #fff;
    --padding-end: 10px;
    --padding-start: 10px;
    --placeholder-color: #ddd;
    --placeholder-opacity: 0.8;
}
</style>