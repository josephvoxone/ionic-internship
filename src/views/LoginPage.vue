<template>
    <ion-page>
        <ion-content :fullscreen="true" class="ion-padding">
            <ion-img class="img-logo" :src="logo"></ion-img>
            <ion-img class="img-icon" :src="graph"></ion-img>
        </ion-content>
        <ion-footer class="ion-no-border">
            <ion-toolbar class="ion-padding">
                <h2 class="quote">
                    Semua dalam <strong>satu genggaman</strong>, untuk PPL.
                </h2>
                <ion-item fill="outline" class="ion-margin-bottom">
                    <ion-label position="stacked">Email</ion-label>
                    <ion-input type="email" placeholder="Masukkan emailmu" v-model="user.email"></ion-input>
                </ion-item>
                <ion-item fill="outline" class="ion-margin-bottom">
                    <ion-label position="stacked">Password</ion-label>
                    <ion-input type="password" placeholder="Masukkan passwordmu" v-model="user.password"></ion-input>
                </ion-item>
                <ion-button color="dark" shape="round" expand="block" mode="ios" @click="logIn()" :disabled="loading">
                    <template v-if="!loading">
                        Masuk sebagai
                        &nbsp;<ion-badge color="primary"><strong>Petugas</strong></ion-badge>
                    </template>
                    <template v-else>
                        <ion-spinner name="crescent"></ion-spinner>
                    </template>
                </ion-button>
            </ion-toolbar>
            <ion-toolbar class="ion-text-center" color="light">
                <p>Belum punya akun? <strong><u>Daftar Sekarang!</u></strong></p>
            </ion-toolbar>
        </ion-footer>
    </ion-page>
</template>

<script lang="ts">
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonIcon, IonInput, IonButton, IonItem, IonLabel, IonFooter, IonBadge, IonSpinner, IonImg, useIonRouter } from '@ionic/vue';
import { person, lockClosed } from 'ionicons/icons';
import { defineComponent, ref } from 'vue';
// Image
import logo from '@/assets/img/japfa.png';
import graph from '@/assets/img/graph.png';

// Service
import authService from '@/common/services/auth.service';
import tokenService from '@/common/api/token.service';
export default defineComponent({
    name: "LoginPage",
    components: {
        IonPage,
        IonHeader,
        IonToolbar,
        IonTitle,
        IonContent,
        IonIcon, IonInput, IonButton, IonItem, IonLabel, IonFooter, IonBadge, IonSpinner, IonImg,
    },
    setup() {
        const user: any = ref({})
        const router = useIonRouter()
        const loading = ref(false)

        const logIn = () => {
            loading.value = true
            authService.login(user.value)
                .then((response: any) => {
                    tokenService.saveToken(response.token)
                    router.navigate('/tabs/', 'root', 'replace')
                }).finally(() => loading.value = false)
        }

        return {
            user,
            person,
            lockClosed,
            loading,
            // Images URL
            logo,
            graph,

            logIn
        }
    }
})
</script>

<style scoped lang="scss">
.img-logo {
    width: 60px;
    margin: auto;
}

.img-icon {
    width: 80vw;
    margin: 1rem auto 0;
}

.quote {
    font-weight: 300;
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