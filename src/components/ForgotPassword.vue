<template>
    <div class="px-80 flex justify-between items-center bg-slate-700 py-2">
        <img
            src="https://extranet.vihobook.com/static/media/vihobook-4.d03fa29f.png"
            alt="Logo"
            style="max-width: 150px; height: auto"
            class="cursor-pointer"
            onclick="window.location.href='/'" />
        <div class="flex items-center space-x-8">
            <p class="text-white">Zaten bir ortak mısınız?</p>
            <router-link
                to="/login"
                tag="button"
                type="button"
                class="hover:bg-gray-500 text-white border border-white font-bold py-2 px-6 rounded focus:outline-none focus:shadow-outline transition duration-300 ease-in-out">
                Oturum aç
            </router-link>
        </div>
    </div>
    <div
        class="flex flex-col items-center justify-center min-h-screen bg-gray-100 px-4 py-2">
        <h1 class="mb-6 text-3xl font-bold text-gray-700">
            Parolanızı Sıfırlayın
        </h1>
        <p class="mb-6 text-gray-600">
            Şifrenizi sıfırlamak için Extranet'te kayıtlı e-posta adresinize
            ihtiyacımız var.
        </p>
        <form @submit.prevent="submitForm" class="w-full max-w-md">
            <label
                for="email"
                class="block mb-2 text-sm font-medium text-gray-600"
                >E-posta</label
            >
            <input
                type="email"
                id="email"
                v-model="email"
                placeholder="E-posta girin"
                required
                class="w-full px-3 py-2 placeholder-gray-500 border rounded-lg focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 mb-4" />
            <button
                type="submit"
                class="w-full px-3 py-2 text-white bg-indigo-500 rounded-lg hover:bg-indigo-600 focus:outline-none">
                Gönder
            </button>
        </form>
        <p class="mt-6">
            <router-link
                to="/login"
                class="text-indigo-500 hover:text-indigo-600"
                >Girişe</router-link
            >
            geri dön.
        </p>
    </div>
</template>

<script>
export default {
    mounted() {
        document.title = "Parola Sıfırlama";
    },
    data() {
        return {
            email: "",
        };
    },
    methods: {
        submitForm() {
            // Here you can implement the logic to handle the password reset request
            console.log(`Password reset request for: ${this.email}`);
        },
    },
};
</script>
