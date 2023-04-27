<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-back-button></ion-back-button>
        </ion-buttons>
        <ion-title>Report History</ion-title>
        <ion-buttons slot="end" @click="openModal">
          <ion-button>
            <ion-chip mode="ios">Add Report</ion-chip>
          </ion-button>
        </ion-buttons>
      </ion-toolbar>
      <ion-toolbar class="toolbar-segment-report">
        <ion-segment @ionChange="segmentChanged($event)" v-model="segment" mode="ios">
          <ion-segment-button value="stats">
            <ion-label>Status</ion-label>
          </ion-segment-button>
          <ion-segment-button value="history">
            <ion-label>History</ion-label>
          </ion-segment-button>
        </ion-segment>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true" class="ion-padding">
      <!-- Report Segment -->
      <div v-if="segment == 'stats'">
        <ion-list :inset="true">
          <ion-item class="ion-no-padding">
            <ion-label position="stacked">Tanggal Report</ion-label>
            <ion-input v-model="report.date" type="date" placeholder="Masukkan tanggal report"></ion-input>
          </ion-item>
          <ion-item class="ion-no-padding">
            <ion-label position="stacked">Description</ion-label>
            <ion-textarea v-model="report.reason" type="text" placeholder="Masukkan kondisi kandang"></ion-textarea>
          </ion-item>
          <ion-item class="ion-no-padding">
            <ion-label position="stacked">Depletion</ion-label>
            <ion-input v-model="report.depletion" type="text" placeholder="Masukkan jml. kematian"></ion-input>
          </ion-item>
          <ion-item class="ion-no-padding">
            <ion-label position="stacked">Feed Intake</ion-label>
            <ion-input v-model="report.feed_intake" type="text" placeholder="Masukkan rata-rata pakan"></ion-input>
          </ion-item>
          <ion-item class="ion-no-padding">
            <ion-label position="stacked">Avg bw</ion-label>
            <ion-input v-model="report.avg_bw" type="text" placeholder="Masukkan rata-rata body weight"></ion-input>
          </ion-item>
        </ion-list>
        <ion-button mode="ios" fill="solid" shape="round" expand="full" @click="addReport(report)">
          Create Report
        </ion-button>
      </div>

      <!-- History Segment -->
      <div v-if="segment == 'history'">
        <ion-card button @click="openDetail" mode="ios" class="ion-padding-vertical"
          v-for="(item, index) in filteredReports" :key="index">
          <!-- Tampilkan nama kandang -->
          <ion-item lines="none">
            <ion-label>
              <p>{{ item.name }}</p>
            </ion-label>
            <ion-label slot="end">
              <p>{{ item.created_at }}</p>
            </ion-label>
          </ion-item>
          <ion-item mode="ios" lines="none">
            <ion-thumbnail slot="start">
              <img alt="Silhouette of mountains" src="https://ionicframework.com/docs/img/demos/thumbnail.svg" />
            </ion-thumbnail>
            <ion-label>
              <h2>
                {{ item.name }}
              </h2>
              <p>{{ item.city }}</p>
            </ion-label>
          </ion-item>
          <ion-item lines="none">
            <ion-label>
              <p>Last updated</p>
            </ion-label>
            <ion-button slot="end" color="dark"> See Detail </ion-button>
          </ion-item>
        </ion-card>
      </div>
    </ion-content>
  </ion-page>
</template>

<script  lang="ts">
import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonListHeader,
  IonList,
  IonItem,
  IonLabel,
  IonBackButton,
  IonButton,
  IonButtons,
  IonCard,
  IonCardContent,
  IonTabBar,
  IonThumbnail,
  IonTabButton,
  IonSegment,
  IonSegmentButton,
  IonSearchbar,
  IonTextarea,
  IonDatetime,
  IonDatetimeButton,
  IonModal,
  modalController,
  useIonRouter,
  IonInput,
  IonChip
} from "@ionic/vue";
import { defineComponent, ref } from "vue";
import { useRoute } from "vue-router";
// Page
import ReportDetail from "./ReportDetail.vue";
// Services
import reportService from "@/common/services/report.service";
import kandangService from "@/common/services/kandang.service";
import dailyLogService from "@/common/services/dailyLog.service";
import ReportCreate from "./ReportCreate.vue";

export default defineComponent({
  name: "ReportPage",
  components: {
    IonPage,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonListHeader,
    IonList,
    IonItem,
    IonLabel,
    IonBackButton,
    IonButton,
    IonButtons,
    IonCard,
    IonCardContent,
    IonTabBar,
    IonThumbnail,
    IonTabButton,
    IonSegment,
    IonSegmentButton,
    IonSearchbar,
    IonTextarea,
    IonDatetime,
    IonDatetimeButton,
    IonModal,
    IonInput,
    IonChip,
    useIonRouter,
  },

  setup() {
    const segment = ref("stats");
    const ionRouter = useIonRouter();
    const params = ref({ type: "all", q: "" });
    const reports: any = ref([]);
    const kandangs: any = ref([]);
    const dailyLogs: any = ref([]);
    const report: any = ref({});
    const id = ref();
    const selectedKandang = ref();
    const route = useRoute();
    id.value = route.query.id || "";

    return {
      segment,
      message:
        "This modal example uses the modalController to present and dismiss modals.",
      // variable
      params,
      reports,
      kandangs,
      dailyLogs,
      id,
      selectedKandang,
      report,
      // router
      ionRouter,
    };
  },
  created() {
    // Ambil data kandang yang dikirimkan melalui query params
    this.id = this.$route.query.id;
  },
  methods: {
    ionViewWillEnter() {
      this.getReport();
      this.getKandang();
    },
    getKandang() {
      kandangService.getDetailbyID(this.id).then((response: any) => {
        console.log(response);
        this.kandangs = response;
        console.log(this.kandangs);
      });
    },
    segmentChanged(ev: CustomEvent) {
      this.segment = ev.detail.value;
    },

    async openDetail() {
      const detail = await modalController.create({
        component: ReportDetail,
      });
      detail.present();

      const { data, role } = await detail.onWillDismiss();

      if (role === "confirm") {
        this.message = `Hello, ${data}!`;
      }
    },

    getReport() {
      // Fecth data Report
      reportService.getReport(this.params).then((response: any) => {
        console.log(response);
        this.reports = response;
        console.log(this.reports);
      });
    },

    getDailyLog() {
      // Fecth data dailyLog
      dailyLogService.getDailyLog(this.params).then((response: any) => {
        console.log(response);
        this.dailyLogs = response;
        console.log(this.dailyLogs);
      });
    },

    //Create Report
    addReport(params: any) {
      params.id_kandang = this.id;
      reportService.addReport(params).then((response: any) => {
        console.log(response);
      });
    },
    async openModal() {
      const modal = await modalController.create({
        component: ReportCreate,
        mode: 'ios',
        breakpoints: [0, 0.7, 1],
        initialBreakpoint: 0.7,
        componentProps: { id: this.id }
      });
      modal.present();

      const { data, role } = await modal.onWillDismiss();
      if (data) { this.ionViewWillEnter() }
    },

  },
});
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