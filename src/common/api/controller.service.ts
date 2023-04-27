import { toastController, loadingController, alertController } from "@ionic/vue";
import { alertCircle, close, checkmarkDone } from "ionicons/icons";

const toast = {
    // Toast
    async presentToast(data: any) {
        const toast = await toastController.create({
            header: data?.header,
            message: data?.message,
            position: "bottom",
            color: "success",
            duration: data?.duration || 2000,
            mode: "ios",
            buttons: [
                {
                    side: data?.side || "start",
                    icon: data?.icon || checkmarkDone,
                },
                data?.handler || {
                    side: "right",
                    icon: close,
                },
            ],
        });
        return toast.present();
    },
    // Toast
    async errorToast(data: any) {
        const toast = await toastController.create({
            header: data?.header,
            message: data?.message || "Sepertinya ada kesalahan.",
            position: "bottom",
            color: "danger",
            duration: data?.duration || 2000,
            mode: "ios",
            buttons: [
                {
                    side: data?.side || "start",
                    icon: data?.icon || alertCircle,
                },
                data?.handler || {
                    side: "right",
                    icon: close,
                },
            ],
        });
        return toast.present();
    },
};
const loading = {
    //Loading
    async open(data: any) {
        const loading = await loadingController.create({
            message: data?.message,
            spinner: "dots",
            backdropDismiss: false,
        });

        return loading.present();
    },
    async close() {
        loadingController.dismiss();
    },
};
const alert = {
    async presentAlert(data: any) {
        const alert = await alertController.create({
            cssClass: 'alert-apps',
            header: data?.header,
            message: data?.message,
            buttons: data?.buttons || [
                {
                    role: 'cancel',
                    text: data?.cancel?.text || 'Batal',
                    handler: () => data?.cancel?.handler,
                },
                {
                    role: 'oke',
                    text: data?.ok?.text || 'Iya',
                    handler: () => data?.ok?.handler,
                },
            ],
        });
        return alert.present();
    }

}

export default {
    toast,
    loading,
    alert
};
