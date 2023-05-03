<template>
    <ion-page>
        <ion-content :fullscreen="true">
            <div class="container">
                <ion-list-header class="ion-no-padding">
                    <ion-label class="ion-margin-top ion-text-center">
                        <h2>Barcode Kandang Ayam</h2>
                        <p>Scan untuk dapat bisa melakukan check-in</p>
                    </ion-label>
                </ion-list-header>
                <div class="qrcode">
                    <vue-qrcode :value="id" tag="svg" :options="{
                            errorCorrectionLevel: 'H',
                            width: 300,
                        }"></vue-qrcode>
                    <img class="qrcode__image" src='@/assets/img/chicken.png' alt="Kandang" />
                </div>
            </div>
        </ion-content>
    </ion-page>
</template>

<script  lang="ts">
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonListHeader, IonList, IonItem, IonLabel } from '@ionic/vue';
import { barChart } from 'ionicons/icons';
import { defineComponent, ref } from 'vue';
import VueQrcode from '@chenfengyuan/vue-qrcode';

export default defineComponent({
    name: "BarcodePage",
    props: ["id"],
    components: { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonListHeader, IonList, IonItem, IonLabel, VueQrcode },
    setup() {
        return {
            barChart,
        }
    },
})
</script>

<style scoped lang="scss">
.container {
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
}

.qrcode {
    display: inline-block;
    font-size: 0;
    margin-bottom: 0;
    position: relative;
}

.qrcode__image {
    border-radius: 0.25rem;
    height: 30%;
    width: 30%;
    left: 50%;
    overflow: hidden;
    position: absolute;
    top: 50%;
    transform: translate(-50%, -50%);
}
</style>
