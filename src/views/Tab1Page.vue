<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title class="ion-text-center">Kandang</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">Tab 1</ion-title>
        </ion-toolbar>
      </ion-header>
      <ion-searchbar placeholder="Search" color="light"></ion-searchbar>

      <!-- CATEGORY SEGMENT START -->
      <ion-segment value="buttons">
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
      <!-- CATEGORY SEGMENT END -->

      <!-- CARD START -->
      <ion-card>
        <ion-card-content>
          <ion-item>
            <ion-thumbnail slot="start">
              <img alt="Silhouette of mountains" src="https://ionicframework.com/docs/img/demos/thumbnail.svg" />
            </ion-thumbnail>
            <ion-label>Seli Mitra Rahayu
              <p>ID : 01</p>
              <p>Type : Close House</p>
            </ion-label>
          </ion-item>
        </ion-card-content>
      </ion-card>

      <ion-card>
        <ion-card-content>
          <ion-item>
            <ion-thumbnail slot="start">
              <img alt="Silhouette of mountains" src="https://ionicframework.com/docs/img/demos/thumbnail.svg" />
            </ion-thumbnail>
            <ion-label>Gusri Mitra Yolit
              <p>ID : 02</p>
              <p>Type : Open House</p>
            </ion-label>
          </ion-item>
        </ion-card-content>
      </ion-card>

      <ion-card>
        <ion-card-content>
          <ion-item>
            <ion-thumbnail slot="start">
              <img alt="Silhouette of mountains" src="https://ionicframework.com/docs/img/demos/thumbnail.svg" />
            </ion-thumbnail>
            <ion-label>Aria Mitra Sejati
              <p>ID : 03</p>
              <p>Type : Open House</p>
            </ion-label>
            <ion-button shape="round"> Detail </ion-button>
          </ion-item>
        </ion-card-content>
      </ion-card>

      <ion-card>
        <ion-card-content>
          <ion-item>
            <ion-thumbnail slot="start">
              <img alt="Silhouette of mountains" src="https://ionicframework.com/docs/img/demos/thumbnail.svg" />
            </ion-thumbnail>
            <ion-label>Seli Mitra Rahayu
              <p>ID : 04</p>
              <p>Type : Close House</p>
            </ion-label>
          </ion-item>
        </ion-card-content>
      </ion-card>

      <ion-card>
        <ion-card-content>
          <ion-item>
            <ion-thumbnail slot="start">
              <img alt="Silhouette of mountains" src="https://ionicframework.com/docs/img/demos/thumbnail.svg" />
            </ion-thumbnail>
            <ion-label>Gusri Mitra Yolit
              <p>ID : 05</p>
              <p>Type : Close House</p>
            </ion-label>
          </ion-item>
        </ion-card-content>
      </ion-card>

      <ion-card>
        <ion-card-content>
          <ion-item>
            <ion-thumbnail slot="start">
              <img alt="Silhouette of mountains" src="https://ionicframework.com/docs/img/demos/thumbnail.svg" />
            </ion-thumbnail>
            <ion-label>Aria Mitra Sejati
              <p>ID : 06</p>
              <p>Type : Close House</p>
            </ion-label>
          </ion-item>
        </ion-card-content>
      </ion-card>

      <ion-card>
        <ion-card-content>
          <ion-item>
            <ion-thumbnail slot="start">
              <img alt="Silhouette of mountains" src="https://ionicframework.com/docs/img/demos/thumbnail.svg" />
            </ion-thumbnail>
            <ion-label>Seli Mitra Rahayu
              <p>ID : 07</p>
              <p>Type : Close House</p>
            </ion-label>
          </ion-item>
        </ion-card-content>
      </ion-card>

      <ion-card>
        <ion-card-content>
          <ion-item>
            <ion-thumbnail slot="start">
              <img alt="Silhouette of mountains" src="https://ionicframework.com/docs/img/demos/thumbnail.svg" />
            </ion-thumbnail>
            <ion-label>Gusri Mitra Yolit
              <p>ID : 08</p>
              <p>Type : Close House</p>
            </ion-label>
          </ion-item>
        </ion-card-content>
      </ion-card>

      <ion-card>
        <ion-card-content>
          <ion-item>
            <ion-thumbnail slot="start">
              <img alt="Silhouette of mountains" src="https://ionicframework.com/docs/img/demos/thumbnail.svg" />
            </ion-thumbnail>
            <ion-label>Aria Mitra Sejati
              <p>ID : 09</p>
              <p>Type : Close House</p>
            </ion-label>
          </ion-item>
        </ion-card-content>
      </ion-card>
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/vue';
import ExploreContainer from '@/components/ExploreContainer.vue';
</script>
