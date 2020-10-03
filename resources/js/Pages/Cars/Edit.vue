<template>
  <div>
    <h1 class="mb-8 font-bold text-3xl">
      <inertia-link class="text-indigo-400 hover:text-indigo-600" :href="route('cars.index')">Cars</inertia-link>
      <span class="text-indigo-400 font-medium">/</span>
      {{ form.brand }} {{ form.name }}
    </h1>
    <trashed-message v-if="car.deleted_at" class="mb-6" @restore="restore">
      esse carro esta deletado
    </trashed-message>
    <div class="bg-white rounded shadow overflow-hidden max-w-3xl">
      <form @submit.prevent="submit">
        <div class="p-8 -mr-6 -mb-8 flex flex-wrap">
          <text-input v-model="form.name" :error="errors.name" class="pr-6 pb-8 w-full lg:w-1/2" label="Nome" />
          <text-input v-model="form.brand" :error="errors.brand" class="pr-6 pb-8 w-full lg:w-1/2" label="Marca" />
          <text-input v-model="form.year" :error="errors.year" class="pr-6 pb-8 w-full lg:w-1/2" label="ano" />
          <select-input v-model="form.color" :error="errors.color" class="pr-6 pb-8 w-full lg:w-1/2" label="Cor">
            <option :value="null" />
            <option v-for="(color, index) in colors" :key="index" :value="index">{{ index }}</option>
          </select-input>
        </div>
        <div class="px-8 py-4 bg-gray-100 border-t border-gray-200 flex items-center">
          <button v-if="!car.deleted_at" class="text-red-600 hover:underline" tabindex="-1" type="button" @click="destroy">Delete Car</button>
          <loading-button :loading="sending" class="btn-indigo ml-auto" type="submit">Update Car</loading-button>
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
import TrashedMessage from '@/Shared/TrashedMessage'

export default {
  metaInfo() {
    return {
      title: `${this.form.brand} ${this.form.name}`,
    }
  },
  layout: Layout,
  components: {
    LoadingButton,
    SelectInput,
    TextInput,
    TrashedMessage,
  },
  props: {
    errors: Object,
    car: Object,
    colors: Object,
  },
  remember: 'form',
  data() {
    return {
      sending: false,
      form: {
        name: this.car.name,
        brand: this.car.brand,
        color: this.car.color,
        year: this.car.year,
      },
    }
  },
  methods: {
    submit() {
      this.$inertia.put(this.route('cars.update', this.car.id), this.form, {
        onStart: () => this.sending = true,
        onFinish: () => this.sending = false,
      })
    },
    destroy() {
      if (confirm('Are you sure you want to delete this car?')) {
        this.$inertia.delete(this.route('cars.destroy', this.car.id))
      }
    },
    restore() {
      if (confirm('Are you sure you want to restore this car?')) {
        this.$inertia.put(this.route('cars.restore', this.car.id))
      }
    },
  },
}
</script>
