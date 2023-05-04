<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-avatar slot="start">
          <img alt="Silhouette of a person's head" src="https://ionicframework.com/docs/img/demos/avatar.svg" />
        </ion-avatar>

        <ion-searchbar @ion-change="getKandang()" v-model="params.q" animated placeholder="Cari nama kandang.."
          color="light" mode="ios"></ion-searchbar>

        <ion-buttons slot="end" @click="startScan()">
          <ion-button>
            <ion-icon :icon="scan"></ion-icon>
          </ion-button>
        </ion-buttons>
      </ion-toolbar>
      <ion-toolbar class="toolbar-segment">
        <ion-segment @ion-change="getKandang()" v-model="params.type" mode="ios">
          <ion-segment-button value="all">
            <ion-label>All</ion-label>
          </ion-segment-button>
          <ion-segment-button value="open">
            <ion-label>Open House</ion-label>
          </ion-segment-button>
          <ion-segment-button value="closed">
            <ion-label>Closed House</ion-label>
          </ion-segment-button>
        </ion-segment>
      </ion-toolbar>
    </ion-header>

    <ion-content :fullscreen="true">
      <ion-card button @click="gotoReport(item)" mode="ios" class="ion-padding-vertical" v-for="(item, index) in kandangs"
        :key="index">
        <ion-item mode="ios" lines="none">
          <ion-img class="img-icon" slot="start" :src="chicken"></ion-img>
          <ion-label>
            <h2>
              {{ item.name }}
            </h2>
            <p>{{ item.city }}</p>
          </ion-label>
          <ion-chip slot="end" :color="item.type == 'open' ? 'success' : 'warning'">
            {{ item.type == "open" ? "Open House" : "Closed House" }}
          </ion-chip>
        </ion-item>
      </ion-card>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonIcon,
  IonButton,
  IonButtons,
  IonSearchbar,
  IonLabel,
  IonSegmentButton,
  IonSegment,
  IonTabBar,
  IonTabButton,
  IonThumbnail,
  IonItem,
  IonCardContent,
  IonCard,
  useIonRouter,
  IonChip,
  IonAvatar,
  IonImg,
  alertController,
} from "@ionic/vue";
import { scan, person } from "ionicons/icons";
import { defineComponent, ref } from "vue";

// Services
import kandangService from "@/common/services/kandang.service";
import {
  BarcodeFormat,
  BarcodeScanner,
} from "@capacitor-mlkit/barcode-scanning";
import chicken from "@/assets/img/chicken.png";

export default defineComponent({
  name: "TabKandang",
  components: {
    IonPage,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonIcon,
    IonButton,
    IonButtons,
    IonSearchbar,
    IonLabel,
    IonSegmentButton,
    IonSegment,
    IonTabBar,
    IonTabButton,
    IonThumbnail,
    IonItem,
    IonCardContent,
    IonCard,
    IonChip,
    IonAvatar,
    IonImg,
  },
  setup() {
    const ionRouter = useIonRouter();
    const params = ref({ type: "all", q: "" });
    const kandangs: any = ref([]);
    const kandangID = ref();
    const isSupported = ref(false);

    return {
      // variable
      params,
      isSupported,
      // icons
      scan,
      person,
      // router
      ionRouter,
      //arraykandang
      kandangs,
      kandangID,
      chicken,
    };
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
    getKandang() {
      // Fecth data kandang
      kandangService.getKandang(this.params).then((response: any) => {
        this.kandangs = response;
      });
    },
    async startScan(): Promise<void> {
      if (!this.isSupported) {
        const alert = await alertController.create({
          header: "Device tidak didukung",
          message: "Perangkat tidak mendukung untuk melakukan scan QR.",
          buttons: ["OK"],
          mode: "ios",
        });
        await alert.present();
        return;
      }
      const granted = await this.requestPermissions();
      if (!granted) {
        const alert = await alertController.create({
          header: "Gagal mendapatkan ijin",
          message:
            "Pastikan untuk menginjikan penggunaan camera untuk scan QR.",
          buttons: ["OK"],
          mode: "ios",
        });
        await alert.present();
        return;
      }

      await BarcodeScanner.scan()
        .then((barcode: any) => {
          this.gotoReport({ id: barcode[0].rawValue });
        })
        .catch(e => this.$router.push({ path: "/scan-barcode" }));
    },

    async requestPermissions(): Promise<boolean> {
      const { camera } = await BarcodeScanner.requestPermissions();
      return camera === "granted" || camera === "limited";
    },
  },
  ionViewWillEnter() {
    BarcodeScanner.isSupported().then(
      (result) => (this.isSupported = result.supported)
    );
    this.getKandang();
  },
});
</script>

<style scoped lang="scss">
ion-searchbar {
  padding-top: 1em;
}

.img-icon {
  width: 45px;
}

.toolbar-segment {
  padding: 0 1em;
}

ion-avatar {
  height: 32px;
  width: 32px;
  margin-left: 1em;
}
</style>