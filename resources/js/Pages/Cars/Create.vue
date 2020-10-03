<template>
  <div>
    <h1 class="mb-8 font-bold text-3xl">
      <inertia-link class="text-indigo-400 hover:text-indigo-600" :href="route('cars.index')">Carros</inertia-link>
      <span class="text-indigo-400 font-medium">/</span> Criar
    </h1>
    <div class="bg-white rounded shadow overflow-hidden max-w-3xl">
      <form @submit.prevent="submit">
        <div class="p-8 -mr-6 -mb-8 flex flex-wrap">
          <text-input v-model="form.name" :error="errors.name" class="pr-6 pb-8 w-full lg:w-1/2" label="Nome" />
          <text-input v-model="form.brand" :error="errors.brand" class="pr-6 pb-8 w-full lg:w-1/2" label="Marca" />
          <text-input v-model="form.year" :error="errors.year" class="pr-6 pb-8 w-full lg:w-1/2" label="Ano" />
           <select-input v-model="form.color" :error="errors.color" class="pr-6 pb-8 w-full lg:w-1/2" label="Cor">
            <option :value="null" />
            <option v-for="(color, index) in colors" :key="index" :value="index">{{ index }}</option>
          </select-input>
        </div>
        <div class="px-8 py-4 bg-gray-100 border-t border-gray-200 flex justify-end items-center">
          <loading-button :loading="sending" class="btn-indigo" type="submit">Registrar Carro</loading-button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import Layout from '@/Shared/Layout'
import LoadingButton from '@/Shared/LoadingButton'
import SelectInput from '@/Shared/SelectInput'
import TextInput from '@/Shared/TextInput'

export default {
  metaInfo: { title: 'Criar Carro' },
  layout: Layout,
  components: {
    LoadingButton,
    SelectInput,
    TextInput,
  },
  props: {
    errors: Object,
    colors: Object,
  },
  remember: 'form',
  data() {
    return {
      sending: false,
      form: {
        name: null,
        brand: null,
        year: null,
        color: null,
      },
    }
  },
  methods: {
    submit() {
      this.$inertia.post(this.route('cars.store'), this.form, {
        onStart: () => this.sending = true,
        onFinish: () => this.sending = false,
      })
    },
  },
}
</script>
