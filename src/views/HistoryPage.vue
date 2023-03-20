<template>
  <ion-page>
    <ion-header>
      <ion-toolbar color="success">
        <ion-title class="ion-text-center">History</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">History</ion-title>
        </ion-toolbar>
      </ion-header>
          <ion-item v-for="(item, index) in [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]"
            :key="index">
              <ion-label>
                <h2>Cannacht Open House</h2>
              </ion-label>
              <ion-label slot="end">
                <h3>Visited at 09/03/23 13:47</h3>
              </ion-label>
          </ion-item>

      <!-- list history
      <ion-card>
        <ion-card-content>
          <ion-toolbar>
            <ion-label>
              <h2>Cannacht Open House</h2>
            </ion-label>
            <ion-label slot="end">
              <h3>Visited at 09/03/23 13:47</h3>
            </ion-label>
          </ion-toolbar>
        </ion-card-content>
      </ion-card>

      <ion-card>
        <ion-card-content>
          <ion-toolbar>
            <ion-label>
              <h2>Lettucepry Closed House</h2>
            </ion-label>
            <ion-label slot="end">
              <h3>Visited at 05/03/23 12:00</h3>
            </ion-label>
          </ion-toolbar>
        </ion-card-content>
      </ion-card>

      <ion-card>
        <ion-card-content>
          <ion-toolbar>
            <ion-label>
              <h2>Rachtine Closed House</h2>
            </ion-label>
            <ion-label slot="end">
              <h3>Visited at 23/02/23 09:09</h3>
            </ion-label>
          </ion-toolbar>
        </ion-card-content>
      </ion-card>

      <ion-card>
        <ion-card-content>
          <ion-toolbar>
            <ion-label>
              <h2>Silverclocks Open House</h2>
            </ion-label>
            <ion-label slot="end">
              <h3>Visited at 15/02/23 08:54</h3>
            </ion-label>
          </ion-toolbar>
        </ion-card-content>
      </ion-card>

      <ion-card>
        <ion-card-content>
          <ion-toolbar>
            <ion-label>
              <h2>Seraphine Closed House</h2>
            </ion-label>
            <ion-label slot="end">
              <h3>Visited at 02/02/23 02:02</h3>
            </ion-label>
          </ion-toolbar>
        </ion-card-content>
      </ion-card>

      <ion-card>
        <ion-card-content>
          <ion-toolbar>
            <ion-label>
              <h2>Slyking Closed House</h2>
            </ion-label>
            <ion-label slot="end">
              <h3>Visited at 27/01/23 14:03</h3>
            </ion-label>
          </ion-toolbar>
        </ion-card-content>
      </ion-card>

      <ion-card>
        <ion-card-content>
          <ion-toolbar>
            <ion-label>
              <h2>Laceton Open House</h2>
            </ion-label>
            <ion-label slot="end">
              <h3>Visited at 23/01/23 07:52</h3>
            </ion-label>
          </ion-toolbar>
        </ion-card-content>
      </ion-card>

      <ion-card>
        <ion-card-content>
          <ion-toolbar>
            <ion-label>
              <h2>Lessangry Closed House</h2>
            </ion-label>
            <ion-label slot="end">
              <h3>Visited at 17/01/23 09:44</h3>
            </ion-label>
          </ion-toolbar>
        </ion-card-content>
      </ion-card> -->

    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/vue';
import ExploreContainer from '@/components/ExploreContainer.vue';
</script>
