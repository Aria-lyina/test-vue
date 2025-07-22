<script setup lang="ts">
import { useAccountStore } from '@/stores/accountStore';
import { computed } from 'vue';
import item from './Item.vue';

const accountStore = useAccountStore();
const accounts = computed(() => accountStore.accounts);

const addAccount = () => {
    const newAccount = {
        id: Date.now(), // Generate a unique ID
        label: [],
        type: 'Локальная',
        login: '',
        password: '',
    };
    accountStore.addAccount(newAccount);
};

const deleteAccount = (id: number) => {
    accountStore.deleteAccount(id);
};

const updateAccount = (account: any) => {
    accountStore.updateAccount(account);
};

</script>

<template>


	<div class="ma-6">
		<div class="d-flex flex-row pa-2 mb-3"  >
			<h2>
				Учетные записи
			</h2>
			<v-btn size="x-large" density="compact" class="ml-15" icon="mdi-plus" @click="addAccount"></v-btn>
		</div>

		<div class="bg-cyan-lighten-5 pa-2">
			<v-icon icon="mdi-help-circle-outline" />
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

			<v-list-item v-for="account in accounts" >
				<item
					:key="account.id"
					:account="account"
					@delete="deleteAccount"
					@update="updateAccount"
				/>
			</v-list-item>
		</v-list>
	</div>
</template>

