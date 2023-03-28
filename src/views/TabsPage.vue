<template>
  <ion-page>
    <ion-tabs>
      <ion-router-outlet></ion-router-outlet>
      <ion-tab-bar slot="bottom">
        <ion-tab-button tab="kandang" href="/tabs/kandang">
          <ion-icon aria-hidden="true" :icon="home" />
          <ion-label>Kandang</ion-label>
        </ion-tab-button>
        <ion-tab-button tab="history" href="/tabs/history">
          <ion-icon aria-hidden="true" :icon="logIn" />
          <ion-label>History</ion-label>
        </ion-tab-button>
        <ion-tab-button tab="setting" href="/tabs/setting">
          <ion-icon aria-hidden="true" :icon="settings" />
          <ion-label>Setting</ion-label>
        </ion-tab-button>
      </ion-tab-bar>
    </ion-tabs>
  </ion-page>
</template>

<script setup lang="ts">
import { IonTabBar, IonTabButton, IonTabs, IonIcon, IonPage, IonRouterOutlet, IonLabel } from '@ionic/vue';
import { settings, logIn, home, } from 'ionicons/icons';
</script>
