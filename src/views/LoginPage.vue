<template>
    <ion-page>
        <ion-header :translucent="true">
            <ion-toolbar color="success">
                <ion-title class="ion-text-center">LOGIN</ion-title>
            </ion-toolbar>
        </ion-header>

        <ion-content :fullscreen="true" class="ion-padding">
            <div id="container">
                <ion-avatar class="ion-justify-content-center">
                    <img alt="Silhouette of a person's head" src="https://ionicframework.com/docs/img/demos/avatar.svg" />
                </ion-avatar>
                <ion-item>
                    <ion-icon :src="person"></ion-icon>
                    <ion-input type="text" placeholder="Username"></ion-input>
                </ion-item>
                <ion-item>
                    <ion-icon :src="lockClosed"></ion-icon>
                    <ion-input type="password" placeholder="Password"></ion-input>
                </ion-item>
                <ion-button shape="round" expand="full" @click="$router.push('/tabs/kandang')">Login</ion-button>
            </div>
            <login-panel @do-login="doLogin"></login-panel>
        </ion-content>
    </ion-page>
</template>

<script lang="ts">
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonIcon } from '@ionic/vue';
import { person, lockClosed } from 'ionicons/icons';
import { defineComponent } from 'vue';
import LoginPanel from "./components/LoginPanel.vue";
import { useStore } from "vuex";
import { useRouter } from "vue-router";
import router from '@/router';

export default defineComponent({
    name: "LoginPage",
    components: {
        IonPage,
        IonHeader,
        IonToolbar,
        IonTitle,
        IonContent,
        IonIcon,
        // LoginPanel
    },
    setup() {
        const store = useStore();
        const doLogin = async (payload: any) => {
            const { email, password } = payload;
            try {
                await store.dispatch("login", { email, password });
                router.replace("/tabs/kandang");
                return null;
            } catch (error) {
                alert(error);
            }
        };
        return {
            doLogin,
            person,
            lockClosed
        }
    }
})
</script>

<style scoped>
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
</style>