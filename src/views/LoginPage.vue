<template>
    <ion-page>
        <ion-header :translucent="true">
            <ion-toolbar>
                <ion-title class="ion-text-center">LOGIN</ion-title>
            </ion-toolbar>
        </ion-header>

        <ion-content :fullscreen="true" class="ion-padding">
            <div id="container">
                <ion-avatar class="avatar-log-center" style="display: flex; justify-content: center; align-items: center;">
                    <img alt="Silhouette of a person's head" src="https://ionicframework.com/docs/img/demos/avatar.svg" />
                </ion-avatar>
                <ion-item>
                    <ion-icon :src="person"></ion-icon>
                    <ion-input type="email" placeholder="Email" v-model="user.email"></ion-input>
                </ion-item>
                <ion-item>
                    <ion-icon :src="lockClosed"></ion-icon>
                    <ion-input type="password" placeholder="Password" v-model="user.password"></ion-input>
                </ion-item>
                <ion-button shape="round" expand="full" @click="logIn()">Login</ion-button>
            </div>
        </ion-content>
    </ion-page>
</template>

<script lang="ts">
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonIcon, IonInput, IonButton, IonItem, useIonRouter } from '@ionic/vue';
import { person, lockClosed } from 'ionicons/icons';
import { defineComponent, ref } from 'vue';
import authService from '@/common/services/auth.service';
import tokenService from '@/common/api/token.service';
import sessionService from '@/common/api/session.service';
export default defineComponent({
    name: "LoginPage",
    components: {
        IonPage,
        IonHeader,
        IonToolbar,
        IonTitle,
        IonContent,
        IonIcon, IonInput, IonButton, IonItem
    },
    setup() {
        const user: any = ref({})
        const router = useIonRouter()
        const logIn = () => {
            authService.login(user.value)
                .then((response: any) => {
                    tokenService.saveToken(response.token)
                    router.navigate('/tabs/', 'root', 'replace')
                })
        }

        return {
            user,
            person,
            lockClosed,
            logIn
        }
    }
})
</script>

<style scoped lang="scss">
#container {
    text-align: center;
    position: absolute;
    left: 0;
    right: 0;
    top: 30%;
    transform: translateY(-50%);
}

.avatar {
    margin: auto;
    width: 100px;
    height: 100px;
}

.avatar-log-center {
    display: flex;
    justify-content: center;
    align-items: center;
}
</style>