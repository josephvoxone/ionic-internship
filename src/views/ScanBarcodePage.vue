<template>
    <ion-page>
        <ion-header>
            <ion-toolbar>
                <ion-buttons slot="start">
                    <ion-back-button></ion-back-button>
                </ion-buttons>
                <ion-title>Barcode</ion-title>
            </ion-toolbar>
        </ion-header>
        <ion-content :fullscreen="true" :style="!isActive ? '#00000000' : '#ffffff'">
            <ion-button mode="ios" expand="full" @click="startScanner()" v-show="!isActive">
                Scan Barcode
            </ion-button>
            <ion-row class="scan-button" v-show="isActive">
                <ion-col class="ion-no-padding">
                    <ion-button expand="full" @click="stopScanner()">Stop</ion-button>
                </ion-col>
            </ion-row>
            <div class="scan-box" v-show="isActive"></div>
        </ion-content>
    </ion-page>
</template>

<script  lang="ts">
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonListHeader, IonList, IonItem, IonLabel, IonBackButton, IonButton, IonButtons, IonCard, IonCardContent, IonTabBar, IonThumbnail, IonTabButton, IonSegment, IonSegmentButton, IonSearchbar } from '@ionic/vue';
import { barChart } from 'ionicons/icons';
import { defineComponent, ref } from 'vue';
import { BarcodeScanner } from '@capacitor-community/barcode-scanner';

export default defineComponent({
    name: "ScanBarcodePage",
    components: { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonListHeader, IonList, IonItem, IonLabel, IonBackButton, IonButton, IonButtons, IonCard, IonCardContent, IonTabBar, IonThumbnail, IonTabButton, IonSegment, IonSegmentButton, IonSearchbar },
    setup() {
        const isActive = ref(false);

        return {
            isActive,
            barChart,
        }
    },
    methods: {
        async checkPermission() {
            return new Promise((resolve, reject) => {
                BarcodeScanner.checkPermission({ force: true }).then((status) => {
                    if (status.granted) {
                        resolve(true);
                    } else if (status.denied) {
                        BarcodeScanner.openAppSettings();
                        resolve(false);
                    }
                });
            });
        },
        async startScanner() {
            const allowed = await this.checkPermission();
            if (allowed) {
                this.isActive = true;
                BarcodeScanner.hideBackground();

                const result = await BarcodeScanner.startScan();

                if (result.hasContent) {
                    this.isActive = false;
                    alert(result.content); //The QR content will come out here
                    //Handle the data as your heart desires here
                } else {
                    alert('NO DATA FOUND!');
                }
            } else {
                alert('NOT ALLOWED!');
            }
        },

        stopScanner() {
            BarcodeScanner.stopScan();
            this.isActive = false;
        },

        ionViewWillLeave() {
            BarcodeScanner.stopScan();
            this.isActive = false;
        }

    },
})
</script>

<style scoped lang="scss">
.scan-box {
    border: 2px solid #fff;
    // box-shadow: 0 0 0 rgb(0, 0, 0, 0.5);
    content: "";
    display: block;
    left: 50%;
    height: 300px;
    position: absolute;
    top: 50%;
    transform: translate(-50%, -50%);
    width: 300px;
}

.scan-button {
    margin: 0px;
    position: absolute;
    bottom: 100px;
    width: 100vw;
    height: 50px;
    z-index: 11;
}
</style>
