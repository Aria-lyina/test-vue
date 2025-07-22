<script setup lang="ts">

// import { ref, reactive } from 'vue';
// import { mdiAccount, mdiDelete, mdiPencil, mdiShar};

import item from './Item.vue'
const acc = {id:1, label:[], labelString:"Локальная",  type:"Локальная", login:"ffsd", password:"vdfc"};


</script>

<template>
	<div class="ma-6">
		<div class="d-flex flex-row pa-2 mb-3"  >
			<h2>
				Учетные записи
			</h2>
			<v-btn size="x-large" density="compact" class="ml-15" icon="mdi-plus"></v-btn>
		</div>

		<div class="bg-cyan-lighten-5 pa-2">
			<v-icon icon="mdi-help" />
			Для указания нескольких меток для одной пары логин/пароль используйте ;
		</div>

		<v-list>
			<v-list-item >
				<div class="d-flex w-100 ga-4 pa-2 ">
					<div class="w-25">Метки</div>
					<div class="w-25">Тип записи</div>
					<div class="w-25">Логин</div>
					<div class="w-33">Пароль</div>
				</div>

			</v-list-item>

			<v-list-item>
				<item :account="acc"/>    
			</v-list-item>
			<v-list-item>
				<item :account="acc"/>    
			</v-list-item>
		</v-list>


	</div>


</template>

<style lang="scss" scoped>
</style>