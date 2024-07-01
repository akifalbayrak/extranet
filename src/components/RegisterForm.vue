<template>
    <div class="flex min-h-screen">
        <div
            class="flex flex-col items-center justify-center bg-gray-50 w-3/5 p-8">
            <img
                class="mb-6"
                src="https://extranet.vihobook.com/static/media/vBlueLogo.703be7df.png"
                alt="Logo"
                style="max-width: 200px; height: auto" />

            <form @submit.prevent="handleSubmit">
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
                        required
                        v-model="company" />
                </div>
                <div class="grid grid-cols-2">
                    <input
                        type="text"
                        placeholder="Adı"
                        class="w-full p-4 my-2 border border-gray-300 rounded-md"
                        v-model="firstName" />
                    <input
                        type="text"
                        placeholder="Soyadı"
                        class="w-full p-4 my-2 border border-gray-300 rounded-md"
                        v-model="lastName" />

                    <vue-tel-input
                        class="w-full my-2 border border-gray-300 rounded-md"
                        v-model="phoneNumber"
                        mode="international"
                        default-country="tr"
                        :input-options="{
                            showDialCode: true,
                        }"></vue-tel-input>

                    <input
                        list="countries"
                        v-model="selectedCountry"
                        @blur="validateCountry"
                        class="w-full p-4 my-2 border border-gray-300 rounded-md"
                        placeholder="Ülke seçiniz" />

                    <datalist id="countries">
                        <option
                            v-for="country in countries"
                            :key="country.id"
                            :value="country.name_en"></option>
                    </datalist>

                    <input
                        type="email"
                        placeholder="Email Adresi"
                        class="w-full p-4 my-2 border border-gray-300 rounded-md"
                        v-model="email" />
                    <input
                        type="password"
                        placeholder="Şifre"
                        class="w-full p-4 my-2 border border-gray-300 rounded-md"
                        v-model="password" />
                </div>
                <div
                    class="flex items-center justify-between p-4 bg-gray-100 rounded-md">
                    <input
                        type="checkbox"
                        id="terms"
                        name="terms"
                        class="text-blue-500 focus:ring-0"
                        v-model="termsChecked"
                        required />
                    <label for="terms" class="ml-2 text-sm text-gray-700">
                        Bir hesaba giriş yaparak ya da hesap oluşturarak ile
                        Şartlar ve Koşullarımız ve Gizlilik Bildirimimizi kabul
                        etmiş olursunuz
                    </label>
                </div>

                <button
                    class="w-full text-white bg-slate-600 border border-black py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                    type="submit"
                    :class="
                        termsChecked
                            ? 'bg-slate-600'
                            : 'bg-gray-400 cursor-not-allowed'
                    "
                    :disabled="!termsChecked">
                    Kayıt Ol
                </button>
            </form>
        </div>

        <!-- Login div -->
        <div
            class="flex flex-col items-center justify-center w-2/5 p-8 shadow-md text-white text-center"
            :style="`background: url('https://images.unsplash.com/photo-1603398938378-e54eab446dde?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D') center center / cover no-repeat;`">
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
import { VueTelInput } from "vue-tel-input";
import "vue-tel-input/vue-tel-input.css";

export default {
    components: {
        VueTelInput,
    },
    mounted() {
        document.title = "Kayıt Ol";
        this.fetchCountries();
    },
    data() {
        return {
            picked: null,
            countries: [],
            selectedCountry: null,
            termsChecked: false,
            phoneNumber: "",
            company: "",
            firstName: "",
            lastName: "",
            email: "",
            password: "",
        };
    },
    methods: {
        handleSubmit(event) {
            event.preventDefault();
            console.log("Country", this.selectedCountry);
            console.log("Phone", this.phoneNumber);
            console.log("Company", this.company);
            console.log("First Name", this.firstName);
            console.log("Last Name", this.lastName);
            console.log("Email", this.email);
            console.log("Password", this.password);
            this.resetForm();
        },
        resetForm() {
            // Resetting form fields to their initial state
            this.selectedCountry = null;
            this.phoneNumber = "";
            this.company = "";
            this.firstName = "";
            this.lastName = "";
            this.email = "";
            this.password = "";
            this.termsChecked = false;
        },
        handlePhoneNumberInput() {
            // Optional: Handle the phone number input as needed
            console.log("Phone number input:", this.phoneNumber);
        },
        async fetchCountries() {
            try {
                const response = await fetch(
                    "https://extranet-api.vihobook.com/countries"
                );
                const data = await response.json();
                if (data.result) {
                    this.countries = data.countries;
                } else {
                    console.error("Failed to fetch countries");
                }
            } catch (error) {
                console.error("Error fetching countries:", error);
            }
        },

        validateCountry() {
            const isValid = this.countries.some(
                (country) => country.name_en === this.selectedCountry
            );
            if (!isValid) {
                this.selectedCountry = "";
            }
        },
    },
};
</script>
