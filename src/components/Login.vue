<template>
    <div class="flex min-h-screen">
        <!-- Registration div -->
        <div
            class="flex flex-col items-center justify-center w-2/5 p-8 shadow-md text-white text-center"
            :style="`background: url('https://images.unsplash.com/photo-1603398938378-e54eab446dde?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D') center center / cover no-repeat;`">
            <h1 class="text-3xl font-bold mb-4">
                Vihobook Extranet'e Hoşgeldiniz!
            </h1>
            <p class="text-lg mb-6">Hesabınız yok mu?</p>
            <router-link
                to="/register"
                tag="button"
                type="button"
                class="hover:bg-gray-700 text-white border border-white font-bold py-2 px-6 rounded focus:outline-none focus:shadow-outline transition duration-300 ease-in-out">
                Kayıt ol
            </router-link>
        </div>

        <!-- Login div -->
        <div
            class="flex flex-col items-center justify-center bg-gray-50 w-3/5 p-8">
            <img
                class="mb-6"
                src="https://extranet.vihobook.com/static/media/vBlueLogo.703be7df.png"
                alt="Logo"
                style="max-width: 200px; height: auto" />
            <form class="w-3/5" @submit.prevent="validateUser">
                <div class="mb-4">
                    <input
                        class="w-full p-4 border border-gray-300 rounded-md"
                        type="email"
                        id="email"
                        name="email"
                        placeholder="E-posta"
                        required
                        v-model="email" />
                </div>
                <div class="mb-4">
                    <div class="relative">
                        <input
                            :type="showPassword ? 'text' : 'password'"
                            placeholder="Şifre"
                            class="w-full p-4 border border-gray-300 rounded-md"
                            v-model="password" />
                        <button
                            @click="showPassword = !showPassword"
                            class="absolute inset-y-0 right-0 flex items-center justify-center px-3 text-gray-500"
                            type="button"
                            style="
                                justify-content: center;
                                display: flex;
                                align-items: center;
                                height: 100%;
                            ">
                            <svg
                                v-if="showPassword"
                                class="h-5 w-5 text-gray-600"
                                fill="none"
                                stroke="currentColor"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24">
                                <path
                                    fill="currentColor"
                                    d="M2.5 18.5v-1h19v1zm.535-5.973l-.762-.442l.965-1.693h-1.93v-.884h1.93l-.965-1.642l.762-.443L4 9.066l.966-1.643l.761.443l-.965 1.642h1.93v.884h-1.93l.965 1.693l-.762.442L4 10.835zm8 0l-.762-.442l.966-1.693H9.308v-.884h1.93l-.965-1.642l.762-.443L12 9.066l.966-1.643l.761.443l-.965 1.642h1.93v.884h-1.93l.965 1.693l-.762.442L12 10.835zm8 0l-.762-.442l.966-1.693h-1.931v-.884h1.93l-.965-1.642l.762-.443L20 9.066l.966-1.643l.761.443l-.965 1.642h1.93v.884h-1.93l.965 1.693l-.762.442L20 10.835z" />
                            </svg>
                            <svg
                                v-else
                                class="h-5 w-5 text-gray-600"
                                fill="none"
                                stroke="currentColor"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24">
                                <path
                                    fill="currentColor"
                                    d="M4.405 12.635q-1.001 0-1.703-.705T2 10.218t.7-1.699t1.703-.692q1 0 1.703.696t.702 1.689q0 1.01-.701 1.716q-.701.707-1.702.707m15.192-.02q-1 0-1.703-.7q-.702-.701-.702-1.702t.701-1.703t1.702-.702t1.703.7Q22 9.21 22 10.211q0 1-.7 1.703t-1.703.702m-5.462-1.293l-3.208-3.246q.228-.135.504-.202T12 7.808q1.002 0 1.703.7q.7.702.7 1.704q0 .303-.066.589t-.202.522m6.357 10.585l-3.677-3.677H3V17h12.585L2.092 3.508L2.8 2.8l18.4 18.4z" />
                            </svg>
                        </button>
                    </div>
                </div>

                <div class="mb-4 flex justify-between items-center">
                    <label class="inline-flex items-center">
                        <input
                            type="checkbox"
                            class="form-checkbox h-4 w-4 text-gray-500" />
                        <span class="ml-2 text-sm text-gray-700"
                            >Beni hatırla</span
                        >
                    </label>
                    <router-link
                        to="/forgot-password"
                        class="font-bold text-sm text-gray-500 hover:text-gray-800"
                        tag="button"
                        type="button">
                        Parolanızı mı unuttunuz?
                    </router-link>
                </div>
                <div class="flex items-center justify-between">
                    <button
                        class="w-full text-white bg-slate-600 border border-black font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                        type="submit">
                        Oturum aç
                    </button>
                </div>
                <p class="text-sm text-gray-700 leading-relaxed m-5">
                    Bir hesaba giriş yaparak ya da hesap oluşturarak
                    <button @click="openModal('terms')" type="button">
                        Şartlar ve Koşullarımız
                    </button>
                    ile
                    <button @click="openModal('privacy')" type="button">
                        Gizlilik Bildirimimizi
                    </button>
                    kabul etmiş olursunuz.
                </p>

                <div v-if="isModalVisible">
                    <!-- Modal container -->
                    <div
                        class="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50"
                        @click.self="closeModal">
                        <!-- Conditional rendering of Privacy or Conditions component based on type -->
                        <Privacy v-if="modalType === 'privacy'" ref="privacy" />
                        <Conditions v-else ref="conditions" />
                    </div>
                </div>
            </form>
        </div>
    </div>
</template>

<script>
import Privacy from "./Privacy.vue";
import Conditions from "./Conditions.vue";

export default {
    components: {
        Privacy,
        Conditions,
    },
    mounted() {
        document.title = "Oturum";
    },

    data() {
        return {
            showPassword: false,
            email: "",
            password: "",
            isModalVisible: false,
            modalType: "", // Track which modal type to open
        };
    },
    methods: {
        async validateUser() {
            try {
                const response = await fetch(
                    "http://localhost:3000/user/validate",
                    {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json",
                        },
                        body: JSON.stringify({
                            email: this.email,
                            password: this.password,
                        }),
                    }
                );
                if (!response.ok) {
                    throw new Error("Failed to fetch users");
                }
                const data = await response.json();
                if (data) {
                    this.$router.push("/main-page");
                }
            } catch (error) {
                console.error("Error fetching users:", error);
            }
        },

        openModal(type) {
            this.isModalVisible = true;
            this.modalType = type;
        },
        closeModal() {
            this.isModalVisible = false;
            this.modalType = "";
        },
    },
};
</script>
