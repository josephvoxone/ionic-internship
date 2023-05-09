<template>
  <ion-page :can-dismiss="canDismiss" :presenting-element="presentingElement">
    <ion-content :fullscreen="true">
      <div class="block">
        <ion-list-header class="ion-no-padding">
          <ion-label class="ion-margin-top ion-text-center">
            <h2>Change Name</h2>
            <p>Masukkan nama yang diinginkan di bawah sini!</p>
          </ion-label>
        </ion-list-header>
        <div>
          <ion-item fill="outline" class="ion-margin-bottom">
            <ion-label position="stacked">New Name</ion-label>
            <ion-input type="name" placeholder="Enter nama barumu" v-model="user.name"></ion-input>
          </ion-item>
        </div>
        <div>
          <ion-toolbar class="ion-padding">
            <ion-button mode="ios" color="dark" fill="solid" shape="round" expand="block" @click="canDismiss()">Save
            </ion-button>
          </ion-toolbar>
        </div>
      </div>
    </ion-content>
  </ion-page>
</template>

<script  lang="ts">
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonListHeader, IonList, IonItem, IonLabel, IonButton, actionSheetController, IonModal } from '@ionic/vue';
import { defineComponent, ref } from 'vue';

export default defineComponent({
  name: "ChangeNamePage",
  props: ["id"],
  components: { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonListHeader, IonList, IonItem, IonLabel, IonButton, actionSheetController, IonModal },

  setup() {
    const user: any = ref({})
    return {
      user,
      presentingElement: undefined
    }
  },

  methods: {
      async canDismiss() {
        const actionSheet = await actionSheetController.create({
          header: 'Are you sure?',
          buttons: [
            {
              text: 'Yes',
              role: 'confirm',
            },
            {
              text: 'No',
              role: 'cancel',
            },
          ],
        });
        actionSheet.present();
        const { role } = await actionSheet.onWillDismiss();
        return role === 'confirm' ? history.back() : null;
      },
    },
    mounted() {
    },
})
</script>

<style scoped lang="scss">
.block {
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
}

.block {
  display: inline-block;
  font-size: 0;
  margin-bottom: 0;
  position: relative;
}

.block {
    width: 100%;
    height: 300px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  ion-page {
    --height: auto;
}
</style>
