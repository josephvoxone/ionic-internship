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
        <ion-segment value="buttons" mode="ios">
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
      <ion-card mode="ios" class="ion-padding-vertical">
        <ion-item mode="ios" detail @click="$router.push('/detail')" v-for="(item, index) in [1, 2, 3, 4, 5]"
          :key="index">
          <ion-thumbnail slot="start">
            <img alt="Silhouette of mountains" src="https://ionicframework.com/docs/img/demos/thumbnail.svg" />
          </ion-thumbnail>
          <ion-label>
            <h2>
              Aria Mitra Sejati
            </h2>
            <p>ID : 03</p>
          </ion-label>
          <ion-chip slot="end" color="success">
            Open House
          </ion-chip>
        </ion-item>
      </ion-card>
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
