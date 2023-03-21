<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <!-- <ion-button @click="gotoBarcode()">           -->
        <ion-avatar slot="start">
          <img alt="Silhouette of a person's head" src="https://ionicframework.com/docs/img/demos/avatar.svg" />
        </ion-avatar>

        <ion-searchbar animated placeholder="Cari nama kandang.." color="light" mode="ios"></ion-searchbar>

        <ion-buttons slot="end" @click="$router.push('/scan-barcode')">
          <!-- <ion-button @click="gotoBarcode()">           -->
          <ion-button>
            <ion-icon :icon="scan"></ion-icon>
          </ion-button>
        </ion-buttons>
      </ion-toolbar>
      <ion-toolbar class="toolbar-segment">
        <ion-segment v-model="segment" mode="ios">
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
      <ion-card button @click="$router.push('/report')" mode="ios" class="ion-padding-vertical"
        v-for="(item, index) in [1, 2, 3, 4, 5]" :key="index">
        <ion-item mode="ios" lines="none">
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
import { scan, person } from 'ionicons/icons'
import { defineComponent, ref } from 'vue';

export default defineComponent({
  name: "ScanBarcodePage",
  components: { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonIcon, IonButton, IonButtons, IonSearchbar, IonLabel, IonSegmentButton, IonSegment, IonTabBar, IonTabButton, IonThumbnail, IonItem, IonCardContent, IonCard, },
  setup() {
    const ionRouter = useIonRouter()
    const segment = ref('all')

    return {
      // variable
      segment,

      // icons
      scan,
      person,
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

<style scoped lang="scss">
ion-searchbar {
  padding-top: 1em;
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