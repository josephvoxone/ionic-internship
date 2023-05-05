<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>History</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">History</ion-title>
        </ion-toolbar>
      </ion-header>

      <ion-list>
        <ion-card button @click="gotoDetail(item)" mode="ios" class="ion-padding-vertical" v-for="(item, index) in dailyLog"
        :key="index">
          <ion-item lines="none">
            <ion-icon slot="start" :icon="item.type == 'login' ? logIn : logOut"></ion-icon>
            <ion-label>
              <h3>
                {{ item.user.name }}
              </h3>
              <p>
                {{ item.login }}
              </p>
              <p>
                Kandang ID: {{ item.id_kandang }}
              </p>
              <p>
                Kandang Address: {{ item.kandang.address }}
              </p>
            </ion-label>
            <ion-chip slot="end" :color="item.type == 'login' ? 'success' : 'warning'">
              {{ item.type == 'login' ? 'Check In' : 'Check Out' }}
            </ion-chip>
          </ion-item>
        </ion-card>
      </ion-list>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonList, IonCard, IonItem, IonIcon, IonLabel, IonChip, useIonRouter } from '@ionic/vue';
import { logIn, logOut } from 'ionicons/icons';
import { defineComponent, ref } from 'vue';

// Services
import historyService from '@/common/services/history.service';
import dailyLogService from '@/common/services/dailylog.service';

export default defineComponent({
  name: "TabHistory",
  components: { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonList, IonCard, IonItem, IonIcon, IonLabel, IonChip, useIonRouter },
  setup() {
    const ionRouter = useIonRouter()
    const params = ref({ type: '', q: '' })
    const dailyLog: any = ref([])
    const kandangs: any = ref([])
    const karyawan: any = ref([])

    return {
      // variable
      params,
      // icons
      logIn,
      logOut,
      // router
      ionRouter,
      //arrayhistory
      dailyLog,
      kandangs,
      karyawan
    }
  },
  methods: {
    gotoDetail(item: any) {
      this.$router.push({
        path: '/history-detail',
        query: {
          id: item.id
        }
      });
    },
    getDailyLog() {
      // Fecth data history
      dailyLogService.getDailyLog(this.params)
        .then((response: any) => {
          console.log(response)
          this.dailyLog = response
          console.log(this.dailyLog)
          //Saving object data
          // userService.saveUser({ id: response.id, mtcompany_id: response.mtcompany_id, token: response.token });
          // tokenService.saveToken(response.token);
          // this.ionRouter.navigate({ path: '/tabs/home' }, 'forward', 'replace')

          //Segments Filter
          if (this.params.type === 'login') {
            this.dailyLog = response.filter((dailyLog: any) => dailyLog.type === 'login')
          } else if (this.params.type === 'logout') {
            this.dailyLog = response.filter((dailyLog: any) => dailyLog.type === 'logout')
          } else {
            this.dailyLog = response
          }
        })
    },
  },
  ionViewWillEnter() {
    this.getDailyLog();
  },
});
</script>
