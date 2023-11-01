<template>
    <nav>
        <ContentNavigation v-slot="{ navigation }">
            <div class="flex flex-col mt-4">
                <NuxtLink to="/" class="text-xl px-4 py-3">World Gourmet</NuxtLink>
                <NuxtLink to="/about" class="text-xl px-4 py-3">About</NuxtLink>
                <div v-for="link of navigation" :key="link._path">
                    <div v-if="link.children" class="collapse collapse-plus">
                        <input type="radio" name="navigation-radio"/>
                        <div class="collapse-title">
                            <NuxtLink :to="link._path" class="text-xl">{{ link.title }}</NuxtLink>
                        </div>
                        <div class="collapse-content">
                            <ul>
                                <li v-for="sublink of link.children" :key="sublink._path">
                                    <NuxtLink :to="sublink._path" class="ml-10">{{ sublink.title }}</NuxtLink>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </ContentNavigation>
    </nav>
</template>
<script setup lang="ts">

</script>
