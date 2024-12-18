import { writable, derived } from "svelte/store";

export const apiData = writable({});

export const users = derived(apiData, ($apiData) => {
    if($apiData.results) {
        return $apiData.results;
    }
    return [];
})