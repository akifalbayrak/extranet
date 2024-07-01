<template>
    <div>
        <div class="px-80 flex justify-between items-center bg-slate-700 py-2">
            <img
                src="https://extranet.vihobook.com/static/media/vihobook-4.d03fa29f.png"
                alt="Logo"
                style="max-width: 150px; height: auto"
                class="cursor-pointer"
                @click="goToHome" />
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
            <h1 class="text-4xl font-bold text-gray-800">Vihobook Extranet</h1>
            <ul>
                <li v-for="user in users" :key="user.email">
                    <p>{{ JSON.stringify(user) }}</p>
                    <hr />
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            name: "",
            password: "",
            email: "",
            users: [],
        };
    },
    mounted() {
        this.fetchUsers();
        document.title = "Main Page";
    },
    methods: {
        async fetchUsers() {
            try {
                const response = await fetch("http://localhost:3000/user");
                if (!response.ok) {
                    throw new Error("Failed to fetch users");
                }
                const data = await response.json();
                this.users = data;
            } catch (error) {
                console.error("Error fetching users:", error);
            }
        },
        async handleSubmit() {
            try {
                const response = await fetch("http://localhost:3000/user", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                        name: this.name,
                        password: this.password,
                        email: this.email,
                    }),
                });
                if (!response.ok) {
                    throw new Error("Failed to create user");
                }
                this.fetchUsers();
            } catch (error) {
                console.error("Error creating user:", error);
            }
        },
        goToHome() {
            window.location.href = "/";
        },
    },
};
</script>
