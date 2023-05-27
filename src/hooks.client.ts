import { analytics, app } from '$lib/firebase';
import type { Handle } from '@sveltejs/kit';

export const handle: Handle = async ({ event, resolve }) => {

    event.locals.firebase = app;

    const response = await resolve(event);
    return response;
}