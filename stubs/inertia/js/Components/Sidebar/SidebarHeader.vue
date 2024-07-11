<script setup>
import { Link } from '@inertiajs/vue3';
import { sidebarState } from '@/Composables';
import ApplicationLogo from '@/Components/ApplicationLogo.vue';
import Button from '@/Components/Button.vue';
import { MenuFoldLineLeftIcon, MenuFoldLineRightIcon } from '@/Components/Icons/Outline';
import { XMarkIcon } from '@heroicons/vue/24/outline';
</script>

<template>
    <div class="flex items-center justify-between flex-shrink-0 px-3">
        <Link :href="route('dashboard')" class="inline-flex items-center gap-2">
            <ApplicationLogo aria-hidden="true" class="w-10 h-auto" />
            <span v-show="sidebarState.isOpen || sidebarState.isHovered" class="text-3xl text-gray-700 text-transform: uppercase; font-bold tracking-tight leading-none whitespace-nowrap dark:text-white">
                REYPTR27 UI <small class="text-sm text-gray-700 text-transform: uppercase; font-thin tracking-tight leading-none whitespace-nowrap dark:text-white"> v2.0</small>
            </span>
        </Link>

        <Button 
            iconOnly 
            variant="secondary" 
            type="button" 
            v-slot="{ iconSizeClasses }"
            v-show="sidebarState.isOpen || sidebarState.isHovered"
            @click="sidebarState.isOpen = !sidebarState.isOpen"
            :srText="sidebarState.isOpen ? 'Close sidebar' : 'Open sidebar'"
        >
            <MenuFoldLineLeftIcon 
                aria-hidden="true" 
                v-show="sidebarState.isOpen" 
                :class="['hidden lg:block', iconSizeClasses]" />

            <MenuFoldLineRightIcon 
                aria-hidden="true"
                v-show="!sidebarState.isOpen"  
                :class="['hidden lg:block', iconSizeClasses]" />

            <XMarkIcon 
                aria-hidden="true" 
                :class="['lg:hidden', iconSizeClasses]" />
        </Button>
    </div>
</template>