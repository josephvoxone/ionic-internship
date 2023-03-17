<template>
    <ion-page>
        <ion-header>
            <ion-toolbar>
                <ion-buttons slot="start">
                    <ion-back-button></ion-back-button>
                </ion-buttons>
                <ion-title class="ion-text-center">Detail</ion-title>
            </ion-toolbar>
            <ion-toolbar>
                <ion-segment value="default" mode="ios">
                    <ion-segment-button value="default">
                        <ion-label>Detail</ion-label>
                    </ion-segment-button>
                    <ion-segment-button value="segment">
                        <ion-label>Report</ion-label>
                    </ion-segment-button>
                </ion-segment>
            </ion-toolbar>
        </ion-header>
        
        <ion-content :fullscreen="true">
            <ion-list :inset="true">
                <ion-item>
                    <ion-label position="stacked">Reason</ion-label>
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
            <ion-button fill="outline" shape="round" expand="full">Submit</ion-button>
        </ion-content>
    </ion-page>
</template>

<script  lang="ts">
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonListHeader, IonList, IonItem, IonLabel, IonBackButton, IonButton, IonButtons, IonCard, IonCardContent, IonTabBar, IonThumbnail, IonTabButton, IonSegment, IonSegmentButton, IonSearchbar, IonTextarea } from '@ionic/vue';
import { defineComponent, ref } from 'vue';
export default defineComponent({
    name: "DetailPage",
    components: { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonListHeader, IonList, IonItem, IonLabel, IonBackButton, IonButton, IonButtons, IonCard, IonCardContent, IonTabBar, IonThumbnail, IonTabButton, IonSegment, IonSegmentButton, IonSearchbar, IonTextarea },
    setup() {
        const formatViewers = (viewers: number) => {
            if (viewers > 100000) {
                return `${Math.floor(viewers / 100000)}juta`;
            } else if (viewers > 1000) {
                return `${Math.floor(viewers / 1000)}rb`;
            }
            return viewers.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
        }
        return {
            formatViewers
        }
    },
    methods: {
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
