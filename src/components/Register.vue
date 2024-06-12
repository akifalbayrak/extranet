<template>
    <div class="bg-slate-700 p-4 text-white flex justify-evenly">
        <div class="my-auto">
            <p class="font-bold text-lg mb-2">
                Her şeyi Vihobook.com'da yayınlayın
            </p>
            <p>
                Dünyanın dört bir yanındaki gezginlere, seyahat eden kişilere ve
                turistlere ulaşmak için kayıt olun
            </p>
        </div>
        <RegisterCard />
    </div>
    <div
        class="flex flex-col items-center justify-center bg-gray-100 px-4 pt-10">
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
