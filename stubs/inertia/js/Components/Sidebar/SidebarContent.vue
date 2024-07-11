<script setup>
import { ref } from 'vue';
import PerfectScrollbar from '@/Components/PerfectScrollbar';
import SidebarLink from '@/Components/Sidebar/SidebarLink.vue';
import { DashboardIcon } from '@/Components/Icons/Outline';
import { UserGroupIcon, BuildingOffice2Icon } from '@heroicons/vue/24/outline';
import SidebarCollapsible from '@/Components/Sidebar/SidebarCollapsible.vue';
import SidebarCollapsibleItem from '@/Components/Sidebar/SidebarCollapsibleItem.vue';

const openCollapsibleId = ref(null);

const toggleCollapsible = (id) => {
    openCollapsibleId.value = openCollapsibleId.value === id ? null : id;
};
</script>

<template>
    <PerfectScrollbar
        tagname="nav"
        aria-label="main"
        class="relative flex flex-col flex-1 max-h-full gap-4 px-3"
    >
        <SidebarLink
            title="Dashboard"
            :href="route('dashboard')"
            :active="route().current('dashboard')"
        >
            <template #icon>
                <DashboardIcon
                    class="flex-shrink-0 w-6 h-6"
                    aria-hidden="true"
                />
            </template>
        </SidebarLink>

        <!-- example of using the sidebarcollapsible component -->
         
        <!-- <SidebarCollapsible
            id="management"
            title="Management"
            :active="route().current('users.*') || route().current('teams.*') || route().current('divisions.*') || route().current('departments.*')"
            :is-open="openCollapsibleId === 'management'"
            @toggle="toggleCollapsible"
        >
            <template #icon>
                <UserGroupIcon
                class="flex-shrink-0 w-6 h-6"
                aria-hidden="true"
                />
            </template>

            <SidebarCollapsibleItem
                title="Users"
                :href="route('users.index')"
                :active="route().current('users.*')"
            />

            <SidebarCollapsibleItem
                title="Roles"
                :href="route('teams.index')"
                :active="route().current('#')"
            />

            <SidebarCollapsibleItem
                title="Teams"
                :href="route('teams.index')"
                :active="route().current('teams.*')"
            />

            <SidebarCollapsibleItem
                title="Departments"
                :href="route('departments.index')"
                :active="route().current('departments.*')"
            />

            <SidebarCollapsibleItem
                title="Divisions"
                :href="route('divisions.index')"
                :active="route().current('divisions.*')"
            />
        </SidebarCollapsible> -->

    </PerfectScrollbar>
</template>
