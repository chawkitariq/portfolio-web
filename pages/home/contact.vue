<template>
    <Dialog :open="true" v-on:update:open="handleCloseDialog">
        <DialogContent v-on:interact-outside="handleInteractOutside">
            <DialogHeader>
                <DialogTitle>Me Contacter</DialogTitle>
                <DialogDescription>Merci de détailler votre demande afin que je puisse y répondre rapidement.
                </DialogDescription>
            </DialogHeader>

            <form ref="form-ref" @submit="handleSubmit" novalidate class="grid gap-4">
                <FormField v-slot="{ componentField }" name="email">
                    <FormItem>
                        <FormLabel>Adresse mail</FormLabel>
                        <FormControl>
                            <Input type="text" v-bind="componentField" />
                        </FormControl>
                        <FormMessage />
                    </FormItem>
                </FormField>

                <FormField v-slot="{ componentField }" name="service">
                    <FormItem>
                        <FormLabel>Service</FormLabel>
                        <Select v-bind="componentField">
                            <FormControl>
                                <SelectTrigger>
                                    <SelectValue placeholder="Sélectionner un service" />
                                </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                                <SelectGroup>
                                    <SelectItem v-for="service in services" :value="service.title">
                                        {{ service.title }}
                                    </SelectItem>
                                </SelectGroup>
                            </SelectContent>
                        </Select>
                        <FormMessage />
                    </FormItem>
                </FormField>

                <FormField v-slot="{ componentField }" name="message">
                    <FormItem>
                        <FormLabel>Message</FormLabel>
                        <FormControl>
                            <Textarea v-bind="componentField" rows="20" />
                        </FormControl>
                        <FormMessage />
                    </FormItem>
                </FormField>
            </form>

            <DialogFooter>
                <Button variant="outline" :onclick="handleCloseDialog">
                    Annuler
                </Button>
                <Button :onclick="requestSubmit" :disabled="isEmailSendLoading">
                    <Loader2 v-if="isEmailSendLoading" class="animate-spin" />
                    Envoyer
                </Button>
            </DialogFooter>
        </DialogContent>
    </Dialog>
</template>

<script setup lang="ts">
import services from '~/data/services';
import emailjs from '@emailjs/browser';
import { toTypedSchema } from '@vee-validate/zod'
import { useForm } from 'vee-validate';
import { object, string } from 'zod';
import type { TContactPayload } from '~/types';
import { useToast } from '~/components/ui/toast';
import { ref } from 'vue'
import { Loader2 } from 'lucide-vue-next';
import sanitize from 'sanitize-html'

const validationSchema = toTypedSchema(object({
    email: string({ required_error: "Obligatoire" })
        .trim()
        .email("Adresse mail invalide"),
    service: string({ required_error: "Obligatoire" })
        .trim(),
    message: string({ required_error: "Obligatoire" })
        .trim()
        .max(2500, { message: 'Le message ne peut pas dépasser 2500 caractères' })
        .min(50, { message: 'Le message doit comporter au moins 50 caractères' })
    ,
}).required().transform(v => ({
    email: sanitize(v.email),
    service: sanitize(v.service),
    message: sanitize(v.message),
})));

const form = useForm<TContactPayload>({
    validationSchema: validationSchema,
})

const formRef = useTemplateRef<HTMLFormElement>('form-ref')

const handleCloseDialog = async () => await navigateTo({ name: 'home' })
const handleInteractOutside = (e: Event) => e.preventDefault()
const requestSubmit = () => formRef?.value?.requestSubmit()

const runtimeConfig = useRuntimeConfig()

const emailjsPublicKey = runtimeConfig.public.emailjsPublicKey
const emailjsServiceId = runtimeConfig.public.emailjsServiceId
const emailjsTemplateId = runtimeConfig.public.emailjsTemplateId

emailjs.init({
    publicKey: emailjsPublicKey,
    blockHeadless: true,
    limitRate: {
        throttle: 10000,
    },
});

const { toast } = useToast()

const isEmailSendLoading = ref(false)

const handleSubmit = form.handleSubmit(async (payload) => {
    isEmailSendLoading.value = true
    try {
        await emailjs.send(emailjsServiceId, emailjsTemplateId, payload);
        await handleCloseDialog()
        toast({
            variant: 'default',
            title: 'Email envoyé avec succès',
            description: 'Votre message a été envoyé avec succès. Nous vous répondrons sous peu.',
        });
    } catch (error) {
        toast({
            variant: 'destructive',
            title: "Erreur d'envoi",
            description: "Une erreur est survenue lors de l'envoi. Veuillez réessayer.",
        });
    } finally {
        isEmailSendLoading.value = false
    }
})

definePageMeta({
    layout: 'default',
    name: "contact",
    path: '/contact'
})
</script>