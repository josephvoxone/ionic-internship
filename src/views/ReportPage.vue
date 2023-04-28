<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-back-button></ion-back-button>
        </ion-buttons>
        <ion-title>Report History</ion-title>
        <ion-buttons slot="end" @click="openCreateReport">
          <ion-button>
            <ion-chip mode="ios">Create</ion-chip>
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
        <ion-list-header class="ion-margin-bottom">
          <ion-label>
            <h2><strong>Kandang</strong></h2>
            <ion-note>
              Informasi kandang
            </ion-note>
          </ion-label>
        </ion-list-header>
        <ion-grid class="ion-padding-start">
          <ion-row>
            <ion-col>
              <ion-label>
                <p>Name</p>
                <h2>{{ kandang.name }}</h2>
              </ion-label>
            </ion-col>
            <ion-col>
              <ion-label>
                <p>City</p>
                <h2>{{ kandang.city }}</h2>
              </ion-label>
            </ion-col>
          </ion-row>
          <ion-row>
            <ion-col>
              <ion-label>
                <p>Status</p>
                <h2>{{ kandang.status ? 'Active' : 'Inactive' }}</h2>
              </ion-label>
            </ion-col>
            <ion-col>
              <ion-label>
                <p>Type</p>
                <h2 class="ion-text-capitalize">{{ kandang.type }}</h2>
              </ion-label>
            </ion-col>
          </ion-row>
        </ion-grid>

        <ion-list-header class="ion-margin-vertical">
          <ion-label>
            <h2><strong>Statistik Kandang</strong></h2>
            <ion-note>
              30 hari terakhir
            </ion-note>
          </ion-label>
        </ion-list-header>
        <div id="chart">
          <apexchart type="area" height="350" :options="chartOptions" :series="series"></apexchart>
        </div>
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

    <IonFooter class="ion-no-border">
      <ion-toolbar class="ion-padding">
        <ion-button mode="ios" color="dark" fill="solid" shape="round" expand="block" @click="openBarcode(id)">
          Lihat Barcode &nbsp; <ion-icon :icon="qrCode"></ion-icon>
        </ion-button>
      </ion-toolbar>
    </IonFooter>
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
  IonChip,
  IonFooter, IonGrid, IonRow, IonCol, IonIcon, IonNote
} from "@ionic/vue";
import { defineComponent, ref } from "vue";
import { useRoute } from "vue-router";
// Page
import ReportDetail from "./ReportDetail.vue";
import BarcodePage from "./BarcodePage.vue";
import ReportCreate from "./ReportCreate.vue";

// Services
import reportService from "@/common/services/report.service";
import kandangService from "@/common/services/kandang.service";
import dailyLogService from "@/common/services/dailyLog.service";
import VueApexCharts from "vue3-apexcharts";
import { qrCode } from "ionicons/icons";

export default defineComponent({
  name: "ReportPage",
  components: {
    apexchart: VueApexCharts,
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
    IonFooter, IonGrid, IonRow, IonCol, IonIcon, IonNote
  },
  data() {
    const series: any = []
    const chartOptions: any = {
      chart: {
        type: 'area',
        height: 350,
        stacked: true,
        toolbar: {
          show: false,
        },
        events: {
          selection: function (chart: any, e: { xaxis: { min: string | number | Date; }; }) {
            console.log(new Date(e.xaxis.min))
          }
        },
      },
      colors: ['#008FFB', '#00E396', '#CED4DC'],
      dataLabels: {
        enabled: false
      },
      stroke: {
        curve: 'smooth'
      },
      fill: {
        type: 'gradient',
        gradient: {
          opacityFrom: 0.6,
          opacityTo: 0.8,
        }
      },
      legend: {
        position: 'top',
        horizontalAlign: 'left'
      },
      xaxis: {
        type: 'datetime'
      },
    }
    return {
      series, chartOptions
    }
  },
  setup() {
    const segment = ref("stats");
    const ionRouter = useIonRouter();
    const params = ref({ type: "all", q: "" });
    const reports: any = ref([]);
    const kandang: any = ref([]);
    const dailyLogs: any = ref([]);
    const report: any = ref({});
    const id = ref();
    const selectedKandang = ref();
    const route = useRoute();
    id.value = route.query.id || "";

    return {
      qrCode,

      segment,
      message:
        "This modal example uses the modalController to present and dismiss modals.",
      // variable
      params,
      reports,
      kandang,
      dailyLogs,
      id,
      selectedKandang,
      report,
      // router
      ionRouter,
    };
  },
  methods: {
    ionViewWillEnter() {
      this.getReport();
      this.getKandang();
      this.getStats();
    },
    getKandang() {
      kandangService.getDetailbyID(this.id).then((response: any) => {
        this.kandang = response;
      });
    },
    getStats() {
      reportService.getStatsReport(this.id).then((response: any) => {
        this.series = response;
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

    async openCreateReport() {
      const modal = await modalController.create({
        component: ReportCreate,
        breakpoints: [0, 0.7, 1],
        initialBreakpoint: 0.7,
        componentProps: { id: this.id }
      });
      modal.present();

      const { data } = await modal.onWillDismiss();
      if (data) { this.ionViewWillEnter() }
    },

    async openBarcode(identity: any) {
      const modal = await modalController.create({
        component: BarcodePage,
        breakpoints: [0, 0.5, 0.7],
        initialBreakpoint: 0.5,
        componentProps: { id: identity }
      });
      modal.present();

      const { data } = await modal.onWillDismiss();
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

ion-col {
  padding: 0;
}
</style>