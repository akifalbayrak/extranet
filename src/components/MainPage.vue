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

        <form
            @submit.prevent="handleSubmit"
            class="max-w-md mx-auto mt-10 space-y-4">
            <div>
                <label
                    for="name"
                    class="block text-sm font-medium text-gray-700"
                    >Name</label
                >
                <input
                    type="text"
                    v-model="name"
                    id="name"
                    class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm" />
            </div>
            <div>
                <label
                    for="password"
                    class="block text-sm font-medium text-gray-700"
                    >Password</label
                >
                <input
                    type="text"
                    v-model="password"
                    id="password"
                    class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm" />
            </div>
            <div>
                <label
                    for="email"
                    class="block text-sm font-medium text-gray-700"
                    >Email</label
                >
                <input
                    type="text"
                    v-model="email"
                    id="email"
                    class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm" />
            </div>
            <button
                type="submit"
                class="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                Create User
            </button>
        </form>

        <div
            class="flex flex-col items-center justify-center min-h-screen bg-gray-100 px-4 py-2">
            <h1 class="text-4xl font-bold text-gray-800">Vihobook Extranet</h1>
            <ul>
                <li v-for="user in users" :key="user.email">
                    <p>Name: {{ user.name }}</p>
                    <p>Email: {{ user.email }}</p>
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
