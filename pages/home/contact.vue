<template>
    <Dialog :open="true" v-on:update:open="handleCloseDialog">
        <DialogContent v-on:interact-outside="handleInteractOutside">
            <DialogHeader>
                <DialogTitle>Me Contacter</DialogTitle>
                <DialogDescription>Merci de détailler votre demande afin que je puisse y répondre rapidement.
                </DialogDescription>
            </DialogHeader>

            <form ref="form-ref" class="grid gap-4">
                <Label for="message">Adresse mail</Label>
                <Input type="email" required />

                <Label for="message">Service</Label>
                <Select required>
                    <SelectTrigger>
                        <SelectValue placeholder="Séléctionner un service" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem v-for="service in services" :value="service.title">
                            {{ service.title }}
                        </SelectItem>
                    </SelectContent>
                </Select>

                <Label for="message">Message</Label>
                <Textarea rows="20" required />
            </form>

            <DialogFooter>
                <Button variant="outline" :onclick="handleCloseDialog">
                    Annuler
                </Button>
                <Button :onclick="handleSubmit">
                    Envoyer
                </Button>
            </DialogFooter>
        </DialogContent>
    </Dialog>
</template>

<script setup lang="ts">
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from '~/components/ui/dialog';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '~/components/ui/select';
import { Input } from '~/components/ui/input';
import { Label } from '~/components/ui/label';
import { Textarea } from '~/components/ui/textarea';
import services from '~/data/services';

definePageMeta({
    layout: 'default',
    name: "contact",
    path: '/contact'
})

const formRef = useTemplateRef('form-ref')

const handleCloseDialog = async () => await navigateTo('/')
const handleInteractOutside = (e: Event) => e.preventDefault()
const handleSubmit = () => formRef?.value?.requestSubmit()
</script>