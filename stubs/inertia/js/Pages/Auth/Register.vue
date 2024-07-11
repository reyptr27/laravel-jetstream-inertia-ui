<script setup>
import { ref } from 'vue';
import { Link, useForm } from '@inertiajs/vue3';
import AuthenticationLayout from '@/Layouts/AuthenticationLayout.vue';
import InputIconWrapper from '@/Components/InputIconWrapper.vue';
import Button from '@/Components/Button.vue';
import Input from '@/Components/Input.vue';
import Checkbox from '@/Components/Checkbox.vue';
import Label from '@/Components/Label.vue';
import ValidationErrors from '@/Components/ValidationErrors.vue';
import { UserIcon, EnvelopeIcon, LockClosedIcon, UserPlusIcon, EyeIcon, EyeSlashIcon } from '@heroicons/vue/24/outline';

const form = useForm({
    name: '',
    email: '',
    password: '',
    password_confirmation: '',
    terms: false,
})

const showPassword = ref(false);
const togglePasswordVisibility = () => {
    showPassword.value = !showPassword.value;
};

const showPasswordConfirmation = ref(false);
const togglePasswordConfirmationVisibility = () => {
    showPasswordConfirmation.value = !showPasswordConfirmation.value;
};

const submit = () => {
    form.post(route('register'), {
        onFinish: () => form.reset('password', 'password_confirmation'),
    });
};
</script>

<template>
    <AuthenticationLayout title="Register">

        <ValidationErrors class="mb-4" />

        <form @submit.prevent="submit">
            <div class="grid gap-4">
                <div class="space-y-2">
                    <Label for="name" value="Name" />
                    <InputIconWrapper>
                        <template #icon>
                            <UserIcon aria-hidden="true" class="w-6 h-6" />
                        </template>
                        <Input with-icon id="name" type="text" class="block w-full" placeholder="Name" v-model="form.name" required autofocus autocomplete="name" />
                    </InputIconWrapper>
                </div>

                <div class="space-y-2">
                    <Label for="email" value="Email" />
                    <InputIconWrapper>
                        <template #icon>
                            <EnvelopeIcon aria-hidden="true" class="w-6 h-6" />
                        </template>
                        <Input with-icon id="email" type="email" class="block w-full" placeholder="Email" v-model="form.email" required />
                    </InputIconWrapper>
                </div>

                <div class="space-y-2">
                    <Label for="password" value="Password" />
                    <div class="relative">
                        <InputIconWrapper>
                            <template #icon>
                                <LockClosedIcon aria-hidden="true" class="w-6 h-6" />
                            </template>
                            <Input
                                with-icon
                                id="password"
                                :type="showPassword ? 'text' : 'password'"
                                class="block w-full"
                                placeholder="Password"
                                v-model="form.password"
                                required
                                autocomplete="new-password"
                            />
                        </InputIconWrapper>
                        <button
                            type="button"
                            @click="togglePasswordVisibility"
                            class="absolute inset-y-0 right-0 px-3 flex items-center text-gray-500 hover:text-gray-700 focus:outline-none  dark:hover:text-gray-300 focus:text-gray-900 dark:focus:text-gray-400"
                            >
                            <template v-if="showPassword">
                                <EyeSlashIcon aria-hidden="true" class="w-6 h-6" />
                            </template>
                            <template v-else>
                                <EyeIcon aria-hidden="true" class="w-6 h-6" />
                            </template>
                        </button>
                    </div>
                </div>

                <div class="space-y-2">
                    <Label for="password_confirmation" value="Confirm Password" />
                    <div class="relative">
                        <InputIconWrapper>
                            <template #icon>
                                <LockClosedIcon aria-hidden="true" class="w-6 h-6" />
                            </template>
                            <Input
                                with-icon
                                id="password_confirmation"
                                :type="showPasswordConfirmation ? 'text' : 'password'"
                                class="block w-full"
                                placeholder="Confirm Password"
                                v-model="form.password_confirmation"
                                required
                                autocomplete="new-password"
                            />
                        </InputIconWrapper>
                        <button
                            type="button"
                            @click="togglePasswordConfirmationVisibility"
                            class="absolute inset-y-0 right-0 px-3 flex items-center text-gray-500 hover:text-gray-700 focus:outline-none  dark:hover:text-gray-300 focus:text-gray-900 dark:focus:text-gray-400"
                            >
                            <template v-if="showPasswordConfirmation">
                                <EyeSlashIcon aria-hidden="true" class="w-6 h-6" />
                            </template>
                            <template v-else>
                                <EyeIcon aria-hidden="true" class="w-6 h-6" />
                            </template>
                        </button>
                    </div>
                </div>

                <div v-if="$page.props.jetstream.hasTermsAndPrivacyPolicyFeature">
                    <Label for="terms">
                        <div class="flex items-center">
                            <Checkbox name="terms" id="terms" v-model:checked="form.terms" />

                            <div class="ml-2">
                                I agree to the <a target="_blank" :href="route('terms.show')" class="underline text-sm text-blue-600 hover:text-blue-900">Terms of Service</a> and <a target="_blank" :href="route('policy.show')" class="underline text-sm text-blue-600 hover:text-blue-900">Privacy Policy</a>
                            </div>
                        </div>
                    </Label>
                </div>

                <div>
                    <Button class="w-full justify-center gap-2" :disabled="form.processing" v-slot="{ iconSizeClasses }">
                        <UserPlusIcon aria-hidden="true" :class="iconSizeClasses" />
                        <span>Register</span>
                    </Button>
                </div>

                <p class="text-sm text-gray-600 dark:text-gray-400">
                    Already have an account?
                    <Link :href="route('login')" class="text-blue-500 hover:underline">
                        Login
                    </Link>
                </p>
            </div>
        </form>
    
    </AuthenticationLayout>
</template>