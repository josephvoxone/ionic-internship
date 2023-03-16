<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title class="ion-text-center">Kandang</ion-title>
        <ion-buttons slot="secondary" @click="$router.push('/scan-barcode')">
          <!-- <ion-button @click="gotoBarcode()">           -->
          <ion-button>
            <ion-icon :icon="scan"></ion-icon>
          </ion-button>
        </ion-buttons>
      </ion-toolbar>
      <ion-toolbar>
        <ion-searchbar placeholder="Search" color="light" mode="ios"></ion-searchbar>
      </ion-toolbar>
      <ion-toolbar>
        <ion-segment value="buttons">
          <ion-segment-button value="default">
            <ion-label>Name</ion-label>
          </ion-segment-button>
          <ion-segment-button value="segment">
            <ion-label>ID</ion-label>
          </ion-segment-button>
          <ion-segment-button value="buttons">
            <ion-label>Type</ion-label>
          </ion-segment-button>
        </ion-segment>
      </ion-toolbar>
    </ion-header>

    <ion-content :fullscreen="true">
      <ion-tab-bar>
        <ion-tab-button tab="tabqr" href="">
          <!-- <img src="public/assets/icon/scan.png" alt="">
          <ion-icon aria-hidden="false" /> -->
          <ion-label></ion-label>
        </ion-tab-button>
      </ion-tab-bar>



      <!-- CARD START -->
      <ion-card>
        <ion-card-content>
          <ion-item>
            <ion-thumbnail slot="start">
              <img alt="Silhouette of mountains" src="https://ionicframework.com/docs/img/demos/thumbnail.svg" />
            </ion-thumbnail>
            <ion-label>Seli Mitra Rahayu
              <p>ID : 01</p>
              <p>Type : Close House</p>
            </ion-label>
          </ion-item>
        </ion-card-content>
      </ion-card>

      <ion-card>
        <ion-card-content>
          <ion-item>
            <ion-thumbnail slot="start">
              <img alt="Silhouette of mountains" src="https://ionicframework.com/docs/img/demos/thumbnail.svg" />
            </ion-thumbnail>
            <ion-label>Gusri Mitra Yolit
              <p>ID : 02</p>
              <p>Type : Open House</p>
            </ion-label>
          </ion-item>
        </ion-card-content>
      </ion-card>

      <ion-card>
        <ion-card-content>
          <ion-item>
            <ion-thumbnail slot="start">
              <img alt="Silhouette of mountains" src="https://ionicframework.com/docs/img/demos/thumbnail.svg" />
            </ion-thumbnail>
            <ion-label>Aria Mitra Sejati
              <p>ID : 03</p>
              <p>Type : Open House</p>
            </ion-label>
            <ion-button shape="round" @click="$router.push('/detail')"> Detail </ion-button>
          </ion-item>
        </ion-card-content>
      </ion-card>

      <ion-card>
        <ion-card-content>
          <ion-item>
            <ion-thumbnail slot="start">
              <img alt="Silhouette of mountains" src="https://ionicframework.com/docs/img/demos/thumbnail.svg" />
            </ion-thumbnail>
            <ion-label>Seli Mitra Rahayu
              <p>ID : 04</p>
              <p>Type : Close House</p>
            </ion-label>
          </ion-item>
        </ion-card-content>
      </ion-card>

      <ion-card>
        <ion-card-content>
          <ion-item>
            <ion-thumbnail slot="start">
              <img alt="Silhouette of mountains" src="https://ionicframework.com/docs/img/demos/thumbnail.svg" />
            </ion-thumbnail>
            <ion-label>Gusri Mitra Yolit
              <p>ID : 05</p>
              <p>Type : Close House</p>
            </ion-label>
          </ion-item>
        </ion-card-content>
      </ion-card>

      <ion-card>
        <ion-card-content>
          <ion-item>
            <ion-thumbnail slot="start">
              <img alt="Silhouette of mountains" src="https://ionicframework.com/docs/img/demos/thumbnail.svg" />
            </ion-thumbnail>
            <ion-label>Aria Mitra Sejati
              <p>ID : 06</p>
              <p>Type : Close House</p>
            </ion-label>
          </ion-item>
        </ion-card-content>
      </ion-card>

      <ion-card>
        <ion-card-content>
          <ion-item>
            <ion-thumbnail slot="start">
              <img alt="Silhouette of mountains" src="https://ionicframework.com/docs/img/demos/thumbnail.svg" />
            </ion-thumbnail>
            <ion-label>Seli Mitra Rahayu
              <p>ID : 07</p>
              <p>Type : Close House</p>
            </ion-label>
          </ion-item>
        </ion-card-content>
      </ion-card>

      <ion-card>
        <ion-card-content>
          <ion-item>
            <ion-thumbnail slot="start">
              <img alt="Silhouette of mountains" src="https://ionicframework.com/docs/img/demos/thumbnail.svg" />
            </ion-thumbnail>
            <ion-label>Gusri Mitra Yolit
              <p>ID : 08</p>
              <p>Type : Close House</p>
            </ion-label>
          </ion-item>
        </ion-card-content>
      </ion-card>

      <ion-card>
        <ion-card-content>
          <ion-item>
            <ion-thumbnail slot="start">
              <img alt="Silhouette of mountains" src="https://ionicframework.com/docs/img/demos/thumbnail.svg" />
            </ion-thumbnail>
            <ion-label>Aria Mitra Sejati
              <p>ID : 09</p>
              <p>Type : Close House</p>
            </ion-label>
          </ion-item>
        </ion-card-content>
      </ion-card>
      <!-- CARD END -->

    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonIcon, IonButton, IonButtons, IonSearchbar, IonLabel, IonSegmentButton, IonSegment, IonTabBar, IonTabButton, IonThumbnail, IonItem, IonCardContent, IonCard, useIonRouter } from '@ionic/vue';
import { scan } from 'ionicons/icons'
import ExploreContainer from '@/components/ExploreContainer.vue';
import { defineComponent, ref } from 'vue';

export default defineComponent({
  name: "ScanBarcodePage",
  components: { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonItem, IonLabel },
  setup() {
    const ionRouter = useIonRouter()
    return {
      // icons
      scan,
      // router
      ionRouter
    }
  },
  methods: {
    gotoBarcode() {
      console.log("ScanBarcode")

      this.ionRouter.navigate({ path: '/scan-barcode' }, 'forward')
    }
  },
})
</script>
