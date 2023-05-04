<template>
    <ion-page>
        <ion-content :fullscreen="true">
            <div class="container">
                
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
    name: "NamePage",
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
</style>
