<template>
    <div class="relative">
        <div class="flex items-center space-x-2">
            <img
                :src="flagUrl"
                class="w-10 my-auto h-auto border rounded-full shadow" />
            <button
                @click="isDropdownOpen = !isDropdownOpen"
                class="px-4 py-2 text-white rounded">
                {{ currentLanguageLabel }}
            </button>
        </div>
        <ul
            v-if="isDropdownOpen"
            class="absolute right-0 mt-2 w-32 bg-white rounded-md shadow-lg py-1 z-10">
            <li>
                <button
                    @click="setLanguage('en')"
                    class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-left">
                    English
                </button>
            </li>
            <li>
                <button
                    @click="setLanguage('tr')"
                    class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-left">
                    Turkish
                </button>
            </li>
        </ul>
    </div>
</template>

<script setup>
import { useI18n } from "vue-i18n";
import { ref, computed } from "vue";

const { locale } = useI18n();
const isDropdownOpen = ref(false);

function setLanguage(lang) {
    locale.value = lang;
    isDropdownOpen.value = false;
}

const flagUrl = computed(() => {
    const safeLocale = locale.value ? locale.value.toUpperCase() : "EN";
    if (safeLocale === "EN") {
        return "https://upload.wikimedia.org/wikipedia/en/b/be/Flag_of_England.svg";
    } else if (safeLocale === "TR") {
        return "https://upload.wikimedia.org/wikipedia/commons/b/b4/Flag_of_Turkey.svg";
    }
});

function toggleDropdown() {
    isDropdownOpen.value = !isDropdownOpen.value;
}

const currentLanguageLabel = computed(() => {
    return locale.value === "en" ? "English" : "Turkish";
});
</script>
