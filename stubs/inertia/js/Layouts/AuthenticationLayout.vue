<script setup>
import { Link, Head } from '@inertiajs/vue3';
import { MoonIcon, SunIcon } from '@heroicons/vue/24/outline';
import { toggleDarkMode, isDark } from '@/Composables';
import ApplicationLogo from '@/Components/ApplicationLogo.vue';
import AuthFooter from '@/Components/AuthFooter.vue';
import Button from '@/Components/Button.vue';
import { infoToast } from '@/Toast';

defineProps({
    title: {
        type: String,
        default: 'Auth'
    }
});

const themeChangeToast = () => {
    infoToast({
        text: isDark.value ? "Changed to dark mode." : "Changed to light mode.",
    });
};
</script>

<template>
    <Head :title="title" />

    <div class="min-h-screen flex flex-col gap-8 p-4 sm:p-6 bg-gray-100 text-gray-900 dark:bg-dark-eval-0 dark:text-gray-100">
        <div class="flex-1 flex flex-col items-center justify-center gap-6">
            <div>
                <Link :href="'/'" class="inline-flex items-center gap-2">
                    <ApplicationLogo aria-hidden="true" class="w-16 h-16" />
                    <span aria-hidden="true" class="text-5xl text-gray-700 text-transform: uppercase; font-bold tracking-tight leading-none whitespace-nowrap dark:text-white">
                        REY-UI<small class="text-lg text-gray-700 text-transform: uppercase; font-thin tracking-tight leading-none whitespace-nowrap dark:text-white"> v1.0</small>
                    </span>
                </Link>
            </div>

            <div class="w-full sm:max-w-md p-4 sm:p-6 bg-white rounded-md shadow-md overflow-hidden dark:bg-dark-eval-1">
                <slot />
            </div>
        </div>
        <auth-footer />

        <div class="fixed right-10 top-10">
            <Button
                iconOnly
                variant="secondary"
                type="button"
                @click="toggleDarkMode(); themeChangeToast()"
                v-slot="{ iconSizeClasses }"
                class="hidden md:inline-flex"
                srText="Toggle dark mode"
            >
                <MoonIcon
                    v-show="!isDark"
                    aria-hidden="true"
                    :class="iconSizeClasses"
                />
                <SunIcon
                    v-show="isDark"
                    aria-hidden="true"
                    :class="iconSizeClasses"
                />
            </Button>
        </div>
    </div>
</template>

