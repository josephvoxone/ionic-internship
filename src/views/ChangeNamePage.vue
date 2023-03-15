<template>
    <ion-page>
        <ion-header>
            <ion-toolbar>
                <ion-buttons slot="start">
                    <ion-back-button></ion-back-button>
                </ion-buttons>
                <ion-title class="ion-text-center">Change Name</ion-title>
            </ion-toolbar>
        </ion-header>
        <ion-content :fullscreen="true">
        </ion-content>
    </ion-page>
</template>

<script  lang="ts">
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonListHeader, IonList, IonItem, IonLabel, IonBackButton, IonButton, IonButtons, IonCard, IonCardContent, IonTabBar, IonThumbnail, IonTabButton, IonSegment, IonSegmentButton,IonSearchbar } from '@ionic/vue';
import { defineComponent, ref } from 'vue';
export default defineComponent({
    name: "ChangeNamePage",
    components: { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonListHeader, IonList, IonItem, IonLabel, IonBackButton, IonButton, IonButtons, IonCard, IonCardContent, IonTabBar, IonThumbnail, IonTabButton, IonSegment, IonSegmentButton,IonSearchbar },
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

<style scoped lang="scss"></style>
