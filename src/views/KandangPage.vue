<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <!-- <ion-button @click="gotoBarcode()">           -->
        <ion-avatar slot="start">
          <img alt="Silhouette of a person's head" src="https://ionicframework.com/docs/img/demos/avatar.svg" />
        </ion-avatar>

        <ion-searchbar @ion-change="getKandang()" v-model="params.q" animated placeholder="Cari nama kandang.." color="light"
          mode="ios"></ion-searchbar>

        <ion-buttons slot="end" @click="$router.push('/scan-barcode')">
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
      <ion-card button @click="$router.push('/report')" mode="ios" class="ion-padding-vertical"
        v-for="(item, index) in [1, 2, 3, 4, 5]" :key="index">
        <ion-item mode="ios" lines="none">
          <ion-img class="img-icon" slot="start" :src="require('@/assets/img/chicken.png')"></ion-img>
          <!-- <ion-thumbnail slot="start">
            <img alt="Silhouette of mountains" src="https://ionicframework.com/docs/img/demos/thumbnail.svg" />
          </ion-thumbnail> -->
          <ion-label>
            <h2>
              Aria Mitra Sejati
            </h2>
            <p>Jombang</p>
          </ion-label>
          <ion-chip slot="end" :color="item % 2 == 0 ? 'success' : 'warning'">
            {{ item % 2 == 0 ? 'Open' : 'Close' }} House
          </ion-chip>
        </ion-item>
      </ion-card>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonIcon, IonButton, IonButtons, IonSearchbar, IonLabel, IonSegmentButton, IonSegment, IonTabBar, IonTabButton, IonThumbnail, IonItem, IonCardContent, IonCard, useIonRouter, IonChip, IonAvatar, IonImg } from '@ionic/vue';
import { scan, person } from 'ionicons/icons'
import { defineComponent, ref } from 'vue';

// Services
import kandangService from '@/common/services/kandang.service';

export default defineComponent({
  name: "KandangPage",
  components: { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonIcon, IonButton, IonButtons, IonSearchbar, IonLabel, IonSegmentButton, IonSegment, IonTabBar, IonTabButton, IonThumbnail, IonItem, IonCardContent, IonCard, IonChip, IonAvatar, IonImg },
  setup() {
    const ionRouter = useIonRouter()
    const params = ref({ type: 'all', q: '' })

    return {
      // variable
      params,

      // icons
      scan,
      person,
      // router
      ionRouter
    }
  },
  methods: {
    getKandang() {
      // Fecth data kandang
      kandangService.getKandang(this.params)
        .then((response: any) => {
          //Saving object data
          // userService.saveUser({ id: response.id, mtcompany_id: response.mtcompany_id, token: response.token });
          // tokenService.saveToken(response.token);
          // this.ionRouter.navigate({ path: '/tabs/home' }, 'forward', 'replace')
        })
      // .finally(() => this.loading = false)

    },
    gotoBarcode() {
      this.ionRouter.navigate({ path: '/scan-barcode' }, 'forward')
    }
  },
  ionViewWillEnter() {
    this.getKandang();
  }
})
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