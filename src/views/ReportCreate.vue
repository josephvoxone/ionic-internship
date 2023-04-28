<template>
    <ion-page>
        <ion-header class="ion-no-border">
            <ion-toolbar color="white">
                <ion-list-header class="ion-no-padding">
                    <ion-label class="ion-margin-top ion-text-center">
                        <h2>Create Report</h2>
                        <p>Isi formulir untuk menambahkan report</p>
                    </ion-label>
                </ion-list-header>
            </ion-toolbar>
        </ion-header>
        <ion-content :fullscreen="true" class="ion-padding">
            <ion-list :inset="true">
                <ion-item class="ion-no-padding">
                    <ion-label position="stacked">Tanggal Report</ion-label>
                    <ion-input v-model="report.date" type="date" :max="new Date().toISOString().substring(0, 10)"
                        placeholder="Masukkan tanggal report"></ion-input>
                </ion-item>
                <ion-item class="ion-no-padding">
                    <ion-label position="stacked">Description</ion-label>
                    <ion-textarea v-model="report.reason" type="text" placeholder="Masukkan kondisi kandang"></ion-textarea>
                </ion-item>
                <ion-item class="ion-no-padding">
                    <ion-label position="stacked">Depletion</ion-label>
                    <ion-input v-model="report.depletion" type="number" placeholder="Masukkan jml. kematian"></ion-input>
                </ion-item>
                <ion-item class="ion-no-padding">
                    <ion-label position="stacked">Feed Intake</ion-label>
                    <ion-input v-model="report.feed_intake" type="number"
                        placeholder="Masukkan rata-rata pakan"></ion-input>
                </ion-item>
                <ion-item class="ion-no-padding">
                    <ion-label position="stacked">Avg bw</ion-label>
                    <ion-input v-model="report.avg_bw" type="number"
                        placeholder="Masukkan rata-rata body weight"></ion-input>
                </ion-item>
            </ion-list>
            <ion-button mode="ios" fill="solid" shape="round" color="dark" expand="full" @click="addReport(report)"
                :disabled="loading">
                <template v-if="!loading">
                    Create Report
                </template>
                <template v-else>
                    <ion-spinner name="crescent"></ion-spinner>
                </template>

            </ion-button>
        </ion-content>
    </ion-page>
</template>

<script  lang="ts">
import controllerService from '@/common/api/controller.service';
import reportService from '@/common/services/report.service';
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonListHeader, IonList, IonItem, IonLabel, IonButton, IonTextarea, IonInput, IonSpinner, modalController } from '@ionic/vue';
import { defineComponent, ref } from 'vue';
export default defineComponent({
    name: "ReportCreate",
    components: { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonListHeader, IonList, IonItem, IonLabel, IonButton, IonTextarea, IonInput, IonSpinner },
    props: ["id"],
    setup() {
        const report: any = ref({});
        const loading: any = ref(false)

        return {
            report, loading
        }
    },
    methods: {
        //Create Report
        addReport(params: any) {
            this.loading = true
            params.id_kandang = this.id;
            reportService.addReport(params).then((response: any) => {
                controllerService.toast.presentToast({ message: 'Berhasil Tambah Laporan' })
                modalController.dismiss(true)
            }).finally(() => this.loading = false);
        },
    },
})
</script>

<style scoped lang="scss"></style>
