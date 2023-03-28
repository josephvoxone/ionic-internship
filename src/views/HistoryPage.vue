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
        <ion-card v-for="(item, index) in [1, 2, 3]" :key="index" mode="ios">
          <ion-item lines="none">
            <ion-icon slot="start" :icon="logIn"></ion-icon>
            <ion-label>
              <h2>Cannacht Open House</h2>
              <p>2 Mar 2023 13:47</p>
            </ion-label>
            <ion-chip slot="end" color="success">
              Check-in
            </ion-chip>
          </ion-item>
        </ion-card>

        <ion-card v-for="(item, index) in [1, 2, 3]" :key="index" mode="ios">
          <ion-item lines="none">
            <ion-icon slot="start" :icon="logOut"></ion-icon>
            <ion-label>
              <h2>Japfa Closed House</h2>
              <p>12 Mar 2023 13:47</p>
            </ion-label>
            <ion-chip slot="end" color="warning">
              Check-out
            </ion-chip>
          </ion-item>
        </ion-card>
      </ion-list>
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonList, IonCard, IonItem, IonIcon, IonLabel, IonChip } from '@ionic/vue';
import { logIn, logOut } from 'ionicons/icons';
</script>
