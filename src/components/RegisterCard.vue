<template>
    <div class="bg-white rounded-md py-4 px-6 text-sm shadow-lg">
        <h2 class="text-2xl font-bold text-gray-700 mt-2 mb-4">
            {{ $t("freeMembershipTitle") }}
        </h2>
        <p class="text-gray-600 my-4 font-semibold flex">
            <svg
                class="h-4 w-4 text-black mr-2"
                xmlns="http://www.w3.org/2000/svg"
                width="1em"
                height="1em"
                viewBox="0 0 48 48">
                <path
                    fill="currentColor"
                    fill-rule="evenodd"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="4"
                    d="m4 24l5-5l10 10L39 9l5 5l-25 25z"
                    clip-rule="evenodd" />
            </svg>
            {{ $t("affiliateMarketingInfo") }}
        </p>
        <p class="text-gray-600 my-4 font-semibold flex">
            <svg
                class="h-4 w-4 text-black mr-2"
                xmlns="http://www.w3.org/2000/svg"
                width="1em"
                height="1em"
                viewBox="0 0 48 48">
                <path
                    fill="currentColor"
                    fill-rule="evenodd"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="4"
                    d="m4 24l5-5l10 10L39 9l5 5l-25 25z"
                    clip-rule="evenodd" />
            </svg>
            {{ $t("tourismDigitalMarketing") }}
        </p>

        <p class="text-gray-600 my-4 font-semibold flex">
            <svg
                class="h-4 w-4 text-black mr-2"
                xmlns="http://www.w3.org/2000/svg"
                width="1em"
                height="1em"
                viewBox="0 0 48 48">
                <path
                    fill="currentColor"
                    fill-rule="evenodd"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="4"
                    d="m4 24l5-5l10 10L39 9l5 5l-25 25z"
                    clip-rule="evenodd" />
            </svg>
            {{ $t("receivePaymentsFromVihobook") }}
        </p>
        <p class="text-gray-600 my-4 font-semibold flex">
            <svg
                class="h-4 w-4 text-black mr-2"
                xmlns="http://www.w3.org/2000/svg"
                width="1em"
                height="1em"
                viewBox="0 0 48 48">
                <path
                    fill="currentColor"
                    fill-rule="evenodd"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="4"
                    d="m4 24l5-5l10 10L39 9l5 5l-25 25z"
                    clip-rule="evenodd" />
            </svg>
            {{ $t("registrationIsFree") }}
        </p>
        <hr class="my-4" />
        <router-link
            to="/register-form"
            tag="button"
            type="button"
            class="inline-block w-full text-center p-3 bg-indigo-500 hover:bg-indigo-600 text-white font-bold rounded focus:outline-none focus:shadow-outline transition duration-300 ease-in-out">
            {{ $t("startNow") }}
        </router-link>

        <hr class="my-4" />
        <div class="text-center">
            <p class="text-gray-600 font-semibold">
                {{ $t("alreadyHaveAccount") }}
                <router-link
                    to="/login"
                    tag="button"
                    type="button"
                    class="text-indigo-500 hover:text-indigo-600">
                    {{ $t("signIn") }}
                </router-link>
            </p>
        </div>
    </div>
</template>
