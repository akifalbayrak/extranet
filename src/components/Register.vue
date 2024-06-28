<template>
    <div class="px-80 flex justify-between items-center bg-slate-700 py-4">
        <img
            src="https://extranet.vihobook.com/static/media/vihobook-4.d03fa29f.png"
            alt="Logo"
            style="max-width: 150px; height: auto"
            class="cursor-pointer"
            onclick="window.location.href='/'" />
        <div class="flex items-center space-x-8">
            <LanguageSelector @click="logAkif" />
            <p class="text-white">{{ $t("alreadyPartner") }}</p>
            <router-link
                to="/login"
                tag="button"
                type="button"
                class="hover:bg-gray-500 text-white border border-white font-bold py-2 px-6 rounded focus:outline-none focus:shadow-outline transition duration-300 ease-in-out">
                {{ $t("login") }}
            </router-link>
        </div>
    </div>

    <div
        class="bg-slate-700 py-16 px-80 text-white flex justify-between items-center">
        <div class="my-auto">
            <div id="text-container" class="relative overflow-hidden h-20">
                <p
                    v-if="showText"
                    :key="currentTextIndex"
                    :class="[
                        'font-bold text-5xl my-2 text-teal-500',
                        animationClass,
                    ]">
                    {{ texts[currentTextIndex] }}
                </p>
            </div>

            <p class="font-bold text-5xl my-2">
                {{ $t("publishVihoTitle") }}
            </p>
            <p>
                {{ $t("publishVihoText") }}
            </p>
        </div>
        <RegisterCard />
    </div>

    <div
        class="flex flex-col items-center justify-center bg-gray-100 px-80 py-10">
        <h1 class="mb-6 text-3xl font-bold text-gray-700">
            {{ $t("profitTitle") }}
        </h1>
        <div
            class="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-2 xl:grid-cols-2 gap-4">
            <div class="bg-white rounded-md p-6 shadow-lg text-center">
                <h2 class="text-xl font-bold text-gray-700 mb-2">
                    {{ $t("fastRegistration") }}
                </h2>
                <img
                    class="w-16 h-auto mx-auto mb-2 rounded-md"
                    src="/images/registration.png"
                    alt="Registration" />
                <p class="text-gray-600">{{ $t("fastRegistrationDesc") }}</p>
            </div>
            <div class="bg-white rounded-md p-6 shadow-lg text-center">
                <h2 class="text-xl font-bold text-gray-700 mb-2">
                    {{ $t("customerSupport") }}
                </h2>
                <img
                    class="w-16 h-auto mx-auto mb-2 rounded-md"
                    src="/images/customer-service.png"
                    alt="CustomerService" />
                <p class="text-gray-600">{{ $t("customerSupportDesc") }}</p>
            </div>
            <div class="bg-white rounded-md p-6 shadow-lg text-center">
                <h2 class="text-xl font-bold text-gray-700 mb-2">
                    {{ $t("affiliateMarketing") }}
                </h2>
                <img
                    class="w-16 h-auto mx-auto mb-2 rounded-md"
                    src="/images/shopping-online.png"
                    alt="ShoppingOnline" />
                <p class="text-gray-600">{{ $t("affiliateMarketingDesc") }}</p>
            </div>
            <div class="bg-white rounded-md p-6 shadow-lg text-center">
                <h2 class="text-xl font-bold text-gray-700 mb-2">
                    {{ $t("securePayment") }}
                </h2>
                <img
                    class="w-16 h-auto mx-auto mb-2 rounded-md"
                    src="/images/financial-profit.png"
                    alt="FinancialProfit" />
                <p class="text-gray-600">
                    {{ $t("securePaymentDesc") }}
                </p>
            </div>
            <div class="bg-white rounded-md p-6 shadow-lg text-center">
                <h2 class="text-xl font-bold text-gray-700 mb-2">
                    {{ $t("transparentCommission") }}
                </h2>
                <img
                    class="w-16 h-auto mx-auto mb-2 rounded-md"
                    src="/images/komisyon.png"
                    alt="Komisyon" />
                <p class="text-gray-600">
                    {{ $t("transparentCommissionDesc") }}
                </p>
            </div>
            <div class="bg-white rounded-md p-6 shadow-lg text-center">
                <h2 class="text-xl font-bold text-gray-700 mb-2">
                    {{ $t("partnershipModel") }}
                </h2>
                <img
                    class="w-16 h-auto mx-auto mb-2 rounded-md"
                    src="/images/partner.png"
                    alt="Partner" />
                <p class="text-gray-600">
                    {{ $t("partnershipModelDesc") }}
                </p>
            </div>
        </div>
    </div>

    <div class="flex bg-white px-80 justify-evenly">
        <span>Copyright ©️ 2024.</span>
        <img
            src="https://extranet.vihobook.com/static/media/vBlueLogo.703be7df.png"
            class="w-auto h-6 mx-3"
            alt="logo" />
        <span>All rights reserved.</span>
        <div class="flex">
            <svg
                class="w-5 h-5 mr-2 my-auto"
                xmlns="http://www.w3.org/2000/svg"
                width="1em"
                height="1em"
                viewBox="0 0 48 48">
                <g
                    fill="none"
                    stroke="#000"
                    stroke-linejoin="round"
                    stroke-width="4">
                    <path
                        stroke-linecap="round"
                        d="M41.7796 20.6066C42.0324 18.9108 41.9495 17.1747 41.5309 15.5054C40.978 13.3002 39.8392 11.2118 38.1147 9.4873C36.3902 7.76281 34.3018 6.62409 32.0967 6.07115C30.4274 5.65257 28.6912 5.56967 26.9954 5.82245" />
                    <path
                        stroke-linecap="round"
                        d="M34.1897 19.8035C34.4605 17.9869 33.8967 16.0699 32.4983 14.6715C31.0998 13.2731 29.1829 12.7092 27.3663 12.98" />
                    <path
                        fill="#2f88ff"
                        d="M14.3757 8.79424C15.1022 8.79424 15.7716 9.1883 16.1243 9.8235L18.5707 14.2303C18.891 14.8073 18.9061 15.5052 18.6109 16.0955L16.2541 20.8091C16.2541 20.8091 16.9371 24.3206 19.7955 27.179C22.654 30.0374 26.1536 30.7086 26.1536 30.7086L30.8665 28.3522C31.4572 28.0568 32.1556 28.0721 32.7328 28.393L37.1521 30.85C37.7868 31.2028 38.1803 31.8719 38.1803 32.598V37.6715C38.1803 40.2552 35.7804 42.1213 33.3323 41.2952C28.3044 39.5987 20.4997 36.3685 15.5529 31.4216C10.606 26.4748 7.37579 18.6701 5.67928 13.6422C4.85325 11.1941 6.71934 8.79424 9.30299 8.79424H14.3757Z" />
                </g>
            </svg>
            <span> +90 850 888 7339 </span>
        </div>
    </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import RegisterCard from "./RegisterCard.vue";
import LanguageSelector from "./LanguageSelector.vue";
import { useI18n } from "vue-i18n";

const { t } = useI18n();

let texts = ref([
    t("sliderText1"),
    t("sliderText2"),
    t("sliderText3"),
    t("sliderText4"),
    t("sliderText5"),
    t("sliderText6"),
]);

const logAkif = () => {
    texts = ref([
        t("sliderText1"),
        t("sliderText2"),
        t("sliderText3"),
        t("sliderText4"),
        t("sliderText5"),
        t("sliderText6"),
    ]);
};

const currentTextIndex = ref(0);
const showText = ref(true);
const animationClass = ref("enter-right");

let intervalId = null;

onMounted(() => {
    document.title = "Kayıt";
    intervalId = setInterval(() => {
        if (texts.value[currentTextIndex.value] === t("sliderText6")) {
            clearInterval(intervalId);
            return;
        }

        animationClass.value = "exit-left";
        setTimeout(() => {
            currentTextIndex.value =
                (currentTextIndex.value + 1) % texts.value.length;
            animationClass.value = "enter-right";
        }, 1000);
    }, 3000);
});
</script>

<style scoped>
@keyframes enterRight {
    0% {
        transform: translateX(100%);
        opacity: 0;
    }
    100% {
        transform: translateX(0);
        opacity: 1;
    }
}

@keyframes exitLeft {
    0% {
        transform: translateX(0);
        opacity: 1;
    }
    100% {
        transform: translateX(-100%);
        opacity: 0;
    }
}

.enter-right {
    animation: enterRight 1s forwards;
}

.exit-left {
    animation: exitLeft 1s forwards;
}
</style>
