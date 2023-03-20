<template>
  <ion-page>
    <ion-tabs>
      <ion-router-outlet></ion-router-outlet>
      <ion-tab-bar slot="bottom" color="success">
        <ion-tab-button tab="kandang" href="/tabs/kandang">
          <ion-icon aria-hidden="true" :icon="statsChart" />
          <!-- <ion-label>Category</ion-label> -->
        </ion-tab-button>

        <ion-tab-button tab="history" href="/tabs/history">
          <ion-icon aria-hidden="true" :icon="documentOutline" />
          <!-- <ion-label>History</ion-label> -->
        </ion-tab-button>

        <ion-tab-button tab="setting" href="/tabs/setting">
          <ion-icon aria-hidden="true" :icon="settingsOutline" />
          <!-- <ion-label>Setting</ion-label> -->
        </ion-tab-button>
      </ion-tab-bar>
    </ion-tabs>
  </ion-page>
</template>

<script setup lang="ts">
import { IonTabBar, IonTabButton, IonTabs, IonLabel, IonIcon, IonPage, IonRouterOutlet } from '@ionic/vue';
import { ellipse, square, triangle, statsChart, settingsOutline, documentOutline } from 'ionicons/icons';
</script>