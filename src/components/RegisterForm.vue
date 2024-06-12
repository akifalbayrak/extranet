<template>
    <div class="flex min-h-screen">
        <!-- Register div -->
        <div
            class="flex flex-col items-center justify-center bg-gray-50 w-3/5 p-8">
            <img
                class="mb-6"
                src="https://extranet.vihobook.com/static/media/vBlueLogo.703be7df.png"
                alt="Logo"
                style="max-width: 200px; height: auto" />
            <form class="w-3/5">
                <div class="mb-4">
                    <p class="text-gray-600 my-2 text-sm text">
                        Firma Tesis Adı
                    </p>
                    <input
                        class="border-gray-500 shadow appearance-none border rounded w-full p-4 leading-tight focus:outline-none focus:shadow-outline"
                        type="text"
                        id="text"
                        name="text"
                        placeholder="Örneğin. Google"
                        required />
                </div>
                <hr class="my-3 border border-gray-300" />
                <div class="mb-4">
                    <p class="text-gray-600 my-2 text-sm text">
                        Firma Tesis tipine göre seçim yaparak ücretsiz üye olun!
                    </p>
                </div>
                <div>
                    <div
                        class="bg-white border border-black my-4 p-4 text-sm rounded-md flex">
                        <input
                            type="radio"
                            id="konaklama"
                            value="konaklama"
                            v-model="picked"
                            class="mr-3"
                            checked />
                        <div class="my-auto">
                            <h3 class="text-base font-semibold">
                                Konaklama Tesisleri
                            </h3>
                            <label
                                for="konaklama"
                                class="inline-block cursor-pointer text-xs"
                                >Otel, Tatil Köyü & Resort, Küçük Oteller, Butik
                                Oteller, Apart Otel, Bungalov</label
                            >
                        </div>
                    </div>
                    <div
                        class="bg-white border border-black my-4 p-4 text-sm rounded-md flex">
                        <input
                            type="radio"
                            id="ozel"
                            value="ozel"
                            v-model="picked"
                            class="mr-3" />
                        <div class="my-auto">
                            <h3 class="text-base font-semibold">
                                Özel ve Uzun Süreli Konaklama Tesisleri
                            </h3>
                            <label
                                for="ozel"
                                class="inline-block cursor-pointer text-xs"
                                >Villa, Delux Villa, Dağ Evleri, Residence,
                                Penthouse, Ev, Daire, Misafir Evi</label
                            >
                        </div>
                    </div>
                    <div
                        class="bg-white border border-black my-4 p-4 text-sm rounded-md flex">
                        <input
                            type="radio"
                            id="ulasim"
                            value="ulasim"
                            v-model="picked"
                            class="mr-3" />
                        <div class="my-auto">
                            <h3 class="text-base font-semibold">
                                Ulaşım Transfer Firmaları
                            </h3>
                            <label
                                for="ulasim"
                                class="inline-block cursor-pointer text-xs"
                                >Transfer, Taksi Transfer</label
                            >
                        </div>
                    </div>
                    <div
                        class="bg-white border border-black my-4 p-4 text-sm rounded-md flex">
                        <input
                            type="radio"
                            id="etkinlik"
                            value="etkinlik"
                            v-model="picked"
                            class="mr-3 form-radio radio-black" />
                        <div class="my-auto">
                            <h3 class="text-base font-semibold">
                                Etkinlik Firmaları
                            </h3>
                            <label
                                for="etkinlik"
                                class="inline-block cursor-pointer text-xs"
                                >Turlar, Eğlence ve Etkinlik Biletleri, Müzeler,
                                Sanat ve Kültür</label
                            >
                        </div>
                    </div>
                </div>

                <div class="flex items-center justify-between">
                    <button
                        class="w-full text-white bg-slate-600 border border-black py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                        type="submit">
                        Sonraki
                    </button>
                </div>
            </form>
        </div>
        <!-- Login div -->
        <div
            class="flex flex-col items-center justify-center w-2/5 p-8 shadow-md text-white text-center"
            :style="`background: url('https://plus.unsplash.com/premium_photo-1667239519929-61915439b46f?q=80&w=1968&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D') center center / cover no-repeat;`">
            <h1 class="text-3xl font-bold mb-4">
                Vihobook Extranet'e Hoşgeldiniz!
            </h1>
            <p class="text-lg mb-6">Zaten hesabınız var mı?</p>
            <router-link
                to="/login"
                tag="button"
                type="button"
                class="hover:bg-gray-700 text-white border border-white font-bold py-2 px-6 rounded focus:outline-none focus:shadow-outline transition duration-300 ease-in-out">
                Oturum aç
            </router-link>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            picked: null,
        };
    },
};
</script>
<style scoped>
.radio-black {
    color: black;
    background-color: black;
}
</style>
