import { writable } from "svelte/store";

export const selectedSkills = writable<string[]>([]);