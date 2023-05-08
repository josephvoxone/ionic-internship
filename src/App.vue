<template>
  <ion-app>
    <ion-router-outlet />
  </ion-app>
</template>

<script setup lang="ts">
import { IonApp, IonRouterOutlet } from '@ionic/vue';
import { App } from '@capacitor/app';

// Hadware back button ionic
App.addListener('backButton', ({ canGoBack }) => {
  if (!canGoBack) { App.exitApp(); }
});
</script>
