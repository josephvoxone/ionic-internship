<template>
    <ion-page>
        <ion-header class="ion-no-border">
            <ion-toolbar>
                <ion-title color="light">Scan Barcode</ion-title>
                <ion-buttons slot="start" color="light">
                    <ion-back-button></ion-back-button>
                </ion-buttons>
            </ion-toolbar>
        </ion-header>
        <ion-content :fullscreen="true">
            <div class="qr-scanner">
                <div class="box">
                    <div class="line"></div>
                    <div class="angle"></div>
                </div>
            </div>
        </ion-content>
    </ion-page>
</template>
<script lang="ts">
import {
    BarcodeFormat,
    BarcodeScanner,
} from "@capacitor-mlkit/barcode-scanning";
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonList, IonCard, IonItem, IonIcon, IonLabel, IonChip, IonButtons, IonBackButton, useIonRouter } from '@ionic/vue';

export default {
    name: "ScanBarcode",
    components: { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonList, IonCard, IonItem, IonIcon, IonLabel, IonChip, IonButtons, IonBackButton, useIonRouter },
    setup() {

    },
    ionViewWillEnter() {
        this.initBarcode();
    },
    ionViewWillLeave() {
        BarcodeScanner.stopScan();
    },
    methods: {
        gotoReport(item: any) {
            this.$router.push({
                path: "/report",
                query: {
                    id: item.id,
                },
            });
        },
        async initBarcode() {
            // Hide all elements in the WebView
            document.querySelector("ion-page")?.classList.add("barcode-scanning-active");

            // Add the `barcodeScanned` listener
            const listener = await BarcodeScanner.addListener(
                "barcodeScanned",
                async (result: any) => {
                    // Print the found barcode to the console
                    console.table(result.barcode);
                    
                    this.gotoReport({ id: result.barcode.rawValue })
                    await BarcodeScanner.stopScan();
                    await listener.remove();
                    document.querySelector('ion-page')?.classList.remove('barcode-scanner-active');
                },
            );

            // Start the barcode scanner
            await BarcodeScanner.startScan();
        }
    },
}
</script>
<style scoped lang="scss">
ion-content,
ion-toolbar {
    --background: transparent
}

html,
body {
    height: 100%;
    margin: 0;
}

.qr-scanner {
    background-image:
        linear-gradient(0deg,
            transparent 24%,
            rgba(32, 255, 77, 0.1) 25%,
            rgba(32, 255, 77, 0.1) 26%,
            transparent 27%,
            transparent 74%,
            rgba(32, 255, 77, 0.1) 75%,
            rgba(32, 255, 77, 0.1) 76%,
            transparent 77%,
            transparent),
        linear-gradient(90deg,
            transparent 24%,
            rgba(32, 255, 77, 0.1) 25%,
            rgba(32, 255, 77, 0.1) 26%,
            transparent 27%,
            transparent 74%,
            rgba(32, 255, 77, 0.1) 75%,
            rgba(32, 255, 77, 0.1) 76%,
            transparent 77%,
            transparent);
    background-size: 3rem 3rem;
    background-position: -1rem -1rem;
    width: 100%;
    height: 100%;
    position: relative;
    background-color: rgb(17 17 17 / 25%);
}

.qr-scanner .box {
    width: 75vw;
    height: 75vw;
    max-height: 75vh;
    max-width: 75vh;
    position: relative;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    overflow: hidden;
    border: 0.1rem solid rgba(0, 255, 51, 0.2);
}

.qr-scanner .line {
    height: calc(100% - 2px);
    width: 100%;
    background: linear-gradient(180deg, rgba(0, 255, 51, 0) 43%, #00ff33 211%);
    border-bottom: 3px solid #00ff33;
    transform: translateY(-100%);
    animation: radar-beam 2s infinite;
    animation-timing-function: cubic-bezier(0.53, 0, 0.43, 0.99);
    animation-delay: 1.4s;
}

.qr-scanner .box:after,
.qr-scanner .box:before,
.qr-scanner .angle:after,
.qr-scanner .angle:before {
    content: '';
    display: block;
    position: absolute;
    width: 3vw;
    height: 3vw;

    border: 0.2rem solid transparent;
}

.qr-scanner .box:after,
.qr-scanner .box:before {
    top: 0;
    border-top-color: #00ff33;
}

.qr-scanner .angle:after,
.qr-scanner .angle:before {
    bottom: 0;
    border-bottom-color: #00ff33;
}

.qr-scanner .box:before,
.qr-scanner .angle:before {
    left: 0;
    border-left-color: #00ff33;
}

.qr-scanner .box:after,
.qr-scanner .angle:after {
    right: 0;
    border-right-color: #00ff33;
}

@keyframes radar-beam {
    0% {
        transform: translateY(-100%);
    }

    100% {
        transform: translateY(0);
    }
}
</style>