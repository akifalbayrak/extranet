<template>
    <div
        class="flex flex-col items-center justify-center min-h-screen bg-gray-100">
        <img
            class="mb-6"
            src="https://extranet.vihobook.com/static/media/vBlueLogo.703be7df.png"
            alt="Logo" />
        <h1 class="mb-6 text-3xl font-bold text-gray-700">Login</h1>
        <form class="w-full max-w-sm">
            <div class="mb-4">
                <label
                    class="block text-gray-700 text-sm font-bold mb-2"
                    for="email"
                    >Email</label
                >
                <input
                    class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    type="email"
                    id="email"
                    name="email"
                    required />
            </div>
            <div class="mb-6">
                <label
                    class="block text-gray-700 text-sm font-bold mb-2"
                    for="password"
                    >Password</label
                >
                <input
                    class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                    type="password"
                    id="password"
                    name="password"
                    required />
            </div>
            <div class="flex items-center justify-between">
                <button
                    class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                    type="submit">
                    Oturum aç
                </button>
                <button
                    class="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800"
                    type="button">
                    Parolanızı mı unuttunuz?
                </button>
            </div>
            <div class="mt-6">
                <p class="text-center text-gray-500 text-xs">
                    Vihobook Extranet'e Hoşgeldiniz! Hesabınız yok mu?
                </p>
                <button
                    class="mt-4 w-full bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                    type="button">
                    Kayıt ol
                </button>
            </div>
        </form>
    </div>
</template>
