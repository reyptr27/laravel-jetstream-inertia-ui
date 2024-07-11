<script setup>
import { Head, Link } from '@inertiajs/vue3';
import ApplicationLogo from '@/Components/ApplicationLogo.vue';

defineProps(['policy']);
</script>

<template>
    <Head title="Privacy Policy" />

    <div class="font-sans antialiased text-gray-900 dark:text-gray-200 dark:bg-dark-eval-0">
        <div class="pt-4 bg-gray-100">
            <div class="flex flex-col items-center min-h-screen pt-6 sm:pt-0">
                <Link :href="'/'" class="inline-flex items-center gap-2">
                    <ApplicationLogo aria-hidden="true" class="w-16 h-16" />
                    <span aria-hidden="true" class="text-5xl text-gray-700 text-transform: uppercase; font-bold tracking-tight leading-none whitespace-nowrap dark:text-white">
                        REY-UI<small class="text-lg text-gray-700 text-transform: uppercase; font-thin tracking-tight leading-none whitespace-nowrap dark:text-white"> v1.0</small>
                    </span>
                </Link>

                <div
                    v-html="policy"
                    class="w-full p-6 mt-6 overflow-hidden prose bg-white shadow-md sm:max-w-2xl sm:rounded-lg dark:prose-invert dark:bg-dark-eval-1"
                ></div>
            </div>
        </div>
    </div>
</template>

