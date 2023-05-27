// See https://kit.svelte.dev/docs/types#app

import type { FirebaseApp } from "firebase/app";

// for information about these interfaces
declare global {
	namespace App {
		// interface Error {}
		interface Locals {
			firebase: FirebaseApp
		}
		// interface PageData {}
		// interface Platform {}
	}
}

export { };

