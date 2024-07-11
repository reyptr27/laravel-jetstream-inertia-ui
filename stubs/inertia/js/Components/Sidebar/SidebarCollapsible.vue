<script setup>
import { ref, watch } from 'vue';
import { sidebarState } from '@/Composables';
import SidebarLink from '@/Components/Sidebar/SidebarLink.vue';
import { EmptyCircleIcon } from '@/Components/Icons/Outline';

const props = defineProps({
    id: {
        type: String,
        required: true
    },
    title: {
        type: String,
    },
    icon: {
        required: false,
    },
    active: {
        type: Boolean,
        default: false,
    },
    isOpen: {
        type: Boolean,
        default: false,
    },
});

const emit = defineEmits(['toggle']);

const isOpen = ref(props.isOpen || props.active);

watch(() => props.isOpen, (openMenu) => {
    if (!props.active) {
        isOpen.value = openMenu;
    }
});

watch(() => props.active, (activeMenu) => {
    if (activeMenu) {
        isOpen.value = true;
    }
});

watch(() => sidebarState.isHovered, (sideHover) => {
    if (!sideHover && !sidebarState.isOpen) {
        if (!props.active) {
            emit('toggle', null);
        } else {
            isOpen.value = true;
        }
    }
});


const beforeEnter = (el) => {
    el.style.maxHeight = `0px`;
};
const enter = (el) => {
    el.style.maxHeight = `${el.scrollHeight}px`;
};
const beforeLeave = (el) => {
    el.style.maxHeight = `${el.scrollHeight}px`;
};
const leave = (el) => {
    el.style.maxHeight = `0px`;
};

const toggle = () => {
    isOpen.value = !isOpen.value;

    if (!props.active) {
        emit('toggle', props.id);
    }
};
</script>

<template>
    <div class="relative">
        <SidebarLink @click="toggle" :title="title" :active="props.active">
            <template #icon>
                <slot name="icon">
                    <EmptyCircleIcon aria-hidden="true" class="flex-shrink-0 w-6 h-6" />
                </slot>
            </template>

            <template #arrow>
                <span v-show="sidebarState.isOpen || sidebarState.isHovered" aria-hidden="true" class="relative block w-6 h-6 ml-auto">
                    <span :class="['absolute right-[9px] bg-gray-400 mt-[-5px] h-2 w-[2px] top-1/2 transition-all duration-200', {'-rotate-45': isOpen, 'rotate-45': !isOpen}]"></span>
                    <span :class="['absolute left-[9px] bg-gray-400 mt-[-5px] h-2 w-[2px] top-1/2 transition-all duration-200', {'rotate-45': isOpen, '-rotate-45': !isOpen}]"></span>
                </span>
            </template>
        </SidebarLink>

        <transition 
            @before-enter="beforeEnter"
            @enter="enter"
            @before-leave="beforeLeave"
            @leave="leave"
            appear>

            <div v-show="isOpen && (sidebarState.isOpen || sidebarState.isHovered)" class="overflow-hidden transition-all duration-200">
                <ul class="relative px-0 pt-2 pb-0 ml-5 before:w-0 before:block before:absolute before:inset-y-0 before:left-0 before:border-l-2 before:border-l-gray-200 dark:before:border-l-gray-600">
                    <slot />
                </ul>
            </div>
        </transition>
    </div>
</template>
