<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>Setting</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">Tab 3</ion-title>
        </ion-toolbar>
      </ion-header>
      <ion-list inset="true">
        <ion-item>
          <ion-label @click="$router.push('/change-name')">Change Name</ion-label>
        </ion-item>
        <ion-item>
          <ion-label @click="$router.push('/change-password')">Change Password</ion-label>
        </ion-item>
        <ion-item>
          <ion-label>Log Out</ion-label>
        </ion-item>
      </ion-list>
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonLabel } from '@ionic/vue';
import ExploreContainer from '@/components/ExploreContainer.vue';
</script>
