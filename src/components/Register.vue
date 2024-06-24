<template>
    <div class="px-80 flex justify-between items-center bg-slate-700">
        <img
            src="https://extranet.vihobook.com/static/media/vihobook-4.d03fa29f.png"
            alt="Logo"
            style="max-width: 150px; height: auto" />
        <div class="flex items-center space-x-8">
            <p class="text-white">Zaten bir ortak mısınız?</p>
            <router-link
                to="/login"
                tag="button"
                type="button"
                class="hover:bg-gray-700 text-white border border-white font-bold py-2 px-6 rounded focus:outline-none focus:shadow-outline transition duration-300 ease-in-out">
                Oturum aç
            </router-link>
        </div>
    </div>

    <div
        class="bg-slate-700 py-16 px-80 text-white flex justify-between items-center">
        <div class="my-auto">
            <p class="font-bold text-lg mb-2">
                Her şeyi Vihobook.com'da yayınlayın
            </p>
            <p>
                Dünyanın dört bir yanındaki gezginlere, seyahat eden kişilere ve
                <br />turistlere ulaşmak için kayıt olun
            </p>
        </div>
        <RegisterCard />
    </div>
    <div
        class="flex flex-col items-center justify-center bg-gray-100 px-80 pt-10">
        <h1 class="mb-6 text-3xl font-bold text-gray-700">
            Vihobook Dijital Marketing ile işbirliğiniz sayesinde daha kazançlı
            çıkın
        </h1>
        <div
            class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-2 xl:grid-cols-3 gap-4">
            <div class="bg-white rounded-md p-6 shadow-lg text-center">
                <h2 class="text-xl font-bold text-gray-700 mb-2">
                    Hızlı Kayıt
                </h2>
                <img
                    class="w-16 h-auto mx-auto mb-2 rounded-md"
                    src="/images/registration.png"
                    alt="Registration" />
                <p class="text-gray-600">Tesis sayfanızı 15 dakikada kurun</p>
            </div>
            <div class="bg-white rounded-md p-6 shadow-lg text-center">
                <h2 class="text-xl font-bold text-gray-700 mb-2">
                    Müşteri Hizmetleri Desteği
                </h2>
                <img
                    class="w-16 h-auto mx-auto mb-2 rounded-md"
                    src="/images/customer-service.png"
                    alt="CustomerService" />
                <p class="text-gray-600">7/24 müşteri desteği sunuyoruz</p>
            </div>
            <div class="bg-white rounded-md p-6 shadow-lg text-center">
                <h2 class="text-xl font-bold text-gray-700 mb-2">
                    Satış Ortaklığı (Affiliate Marketing)
                </h2>
                <img
                    class="w-16 h-auto mx-auto mb-2 rounded-md"
                    src="/images/shopping-online.png"
                    alt="ShoppingOnline" />
                <p class="text-gray-600">Daha fazla misafire ulaşma şansı</p>
            </div>
            <div class="bg-white rounded-md p-6 shadow-lg text-center">
                <h2 class="text-xl font-bold text-gray-700 mb-2">
                    Güvenli Ödeme
                </h2>
                <img
                    class="w-16 h-auto mx-auto mb-2 rounded-md"
                    src="/images/financial-profit.png"
                    alt="FinancialProfit" />
                <p class="text-gray-600">
                    Vihobook.com ile garantili ödemeler alın ve dolandırıcılığa
                    karşı korunun
                </p>
            </div>
            <div class="bg-white rounded-md p-6 shadow-lg text-center">
                <h2 class="text-xl font-bold text-gray-700 mb-2">
                    Şeffaf Komisyon
                </h2>
                <img
                    class="w-16 h-auto mx-auto mb-2 rounded-md"
                    src="/images/komisyon.png"
                    alt="Komisyon" />
                <p class="text-gray-600">
                    Saydam komisyon ile neye ne kadar ödeme yaptığınız bilin
                </p>
            </div>
            <div class="bg-white rounded-md p-6 shadow-lg text-center">
                <h2 class="text-xl font-bold text-gray-700 mb-2">
                    İşbirliği Modeli
                </h2>
                <img
                    class="w-16 h-auto mx-auto mb-2 rounded-md"
                    src="/images/partner.png"
                    alt="Partner" />
                <p class="text-gray-600">
                    Vihobook.com ile işbirliğiniz sayesinde işletmeniz için
                    yüksek doluluk oranı sağlamanıza yardımcı oluyoruz
                </p>
            </div>
        </div>
    </div>
</template>

<script setup>
import RegisterCard from "./RegisterCard.vue";
import { onMounted } from "vue";

onMounted(() => {
    document.title = "Kayıt";
});
</script>
