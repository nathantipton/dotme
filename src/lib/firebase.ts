// Import the functions you need from the SDKs you need
import { browser } from "$app/environment";
import { getAnalytics, type Analytics } from "firebase/analytics";
import { initializeApp, type FirebaseApp, type FirebaseOptions } from "firebase/app";

export let app: FirebaseApp;
export let analytics: Analytics;

export function initializeFirebase(options: FirebaseOptions) {
    if (!browser) {
        throw new Error("Can't use the Firebase client on the server.");
    }
    if (!app) {
        app = initializeApp(options);
        analytics = getAnalytics(app);
    }
}