<template>
    <div class="bg-white rounded-md p-6 text-sm shadow-lg">
        <h2 class="text-2xl font-bold text-gray-700 my-4">
            Şimdi ücretsiz üye olun ve daha fazla kazanın!
        </h2>
        <p class="text-gray-600 my-4 font-semibold flex">
            Affiliate marketing ile daha fazla etkileşim elde edin!
        </p>
        <p class="text-gray-600 my-4 font-semibold">
            Tüm Turizm Sektörüne hitap eden Turizm Dijital Pazarlama
        </p>

        <p class="text-gray-600 my-4 font-semibold">
            Vihobook'tan ödemeleri alma kolaylığı
        </p>
        <p class="text-gray-600 my-4 font-semibold">
            Kayıt işlemi ücretsizdir ve 15 dakikanızı alır
        </p>
        <hr class="my-4" />
        <router-link
            to="/register-form"
            tag="button"
            type="button"
            class="inline-block w-full text-center p-3 bg-indigo-500 hover:bg-indigo-600 text-white font-bold rounded focus:outline-none focus:shadow-outline transition duration-300 ease-in-out">
            Hemen Başla
        </router-link>

        <hr class="my-4" />
        <p class="text-gray-600">
            Zaten hesabınız var mı?
            <router-link
                to="/login"
                tag="button"
                type="button"
                class="text-indigo-500 hover:text-indigo-600">
                Oturum aç
            </router-link>
        </p>
    </div>
</template>
