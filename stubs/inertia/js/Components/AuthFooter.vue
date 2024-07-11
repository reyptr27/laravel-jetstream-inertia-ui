<script setup>
import { HeartIcon } from '@heroicons/vue/24/solid';
const currentYear = new Date().getFullYear();
</script>

<template>
    <footer class="flex-shrink-0 px-6 py-4">
        <p
            class="flex items-center justify-center gap-1 text-sm text-gray-600  dark:text-gray-400"
        >
            <span>&#169; {{ currentYear }} - Made with</span>
            <span>
                <HeartIcon class="w-6 h-6 text-red-500" />
            </span>
            <span>by</span>
            <a
                href="https://reynaldo.netlify.app"
                target="_blank"
                class="text-blue-500 hover:underline"
            >
                Reyptr27.
            </a>
        </p>
    </footer>
</template>

