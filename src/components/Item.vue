<script setup lang="ts">
import { ref, reactive, useTemplateRef} from 'vue';
import { mdiAccount, mdiDelete, mdiPencil, mdiShareVariant } from '@mdi/js'

const props = defineProps({
    account: {
        type: Object,
        required: true,
    },
});



const emit = defineEmits(['delete', 'update']);

const show = ref(false);

const localAccount = reactive({
    id: props.account.id,
    label: props.account.label,
    labelString: props.account.label.map(l => l.text).join(';'),
    type: props.account.type,
    login: props.account.login,
    password: props.account.password,
});

const isLoginValid = ref(true);
const isPasswordValid = ref(true);
const isLabelValid = ref(true);


const refLabel = useTemplateRef('my-label');
const refLogin = useTemplateRef('my-login');
const refPassword = useTemplateRef('my-password');

const validateLogin = () => {
	console.log('login');
    isLoginValid.value = localAccount.login !== '' && localAccount.login.length<=100;

	if (!isLoginValid.value) refLogin.value.focus();
	console.log(refLogin.value);
};

const validateLabel = () => {
	console.log('label');
    isLabelValid.value = localAccount.label.length<=50 || localAccount.label.length==null || localAccount.label.length=="";

	if (!isLabelValid.value) refLabel.value.focus();
	console.log(refLabel.value);
};

const validatePassword = () => {
	if (localAccount.type === 'Локальная') {
		console.log('local');
		isPasswordValid.value = localAccount.password !== '' && localAccount.password.length<=50;
	}
	else return false;

	if (!isPasswordValid.value) refPassword.value?.focus();

    // isPasswordValid.value = localAccount.password !== '' && localAccount.type === 'Локальная' ;
};

const onDelete = () => {
    emit('delete', props.account.id);
};

const onSave = () => {
    validateLogin();
    validatePassword();
	validateLabel();

    if (isLoginValid.value && (localAccount.type === 'LDAP' || isPasswordValid.value) &&  isLabelValid.value) {
        
		localAccount.label = localAccount.labelString.split(';').map(text => ({ text }));
		// emit('update', {
        //     ...localAccount,
        //     label: localAccount.labelString.split(';').map(text => ({ text })),
        // });

		emit('update', {
            ...localAccount
        });

		console.log('Validation successful');
 
    } else {
        // Show some error message
        console.log('Validation failed');
		// event.target.focus();

		// const refLabel = ref(null);
		// const refLogin = ref(null);
		// const refPassword = ref(null);

		// if (!refLabel.value) {
		// 	refLabel.value.$el.querySelector('input').focus();
		// } else if (!refLogin.value) {
		// 	refLogin.value.$el.querySelector('input').focus();
		// } else if (localAccount.type === 'Локальная' && !isPasswordValid.value) {
		// 	refPassword.value.$el.querySelector('input').focus();
		// }
    }
};


// function onSave() {
//     validateLogin();
//     validatePassword();
// 	validateLabel();

//     if (isLoginValid.value && (localAccount.type === 'LDAP' || isPasswordValid.value) &&  isLabelValid.value) {
//         emit('update', {
//             ...localAccount,
//             label: localAccount.labelString.split(';').map(text => ({ text })),
//         }); 
// 		return true;
//     } else {
//         // Show some error message
//         console.log('Validation failed');
// 		return false;
//     }
// };

const onTypeChange = () => {
    if (localAccount.type === 'LDAP') {
        localAccount.password = null;
    }
};

const updateLabel = () => {
    localAccount.label = localAccount.labelString.split(';').map(text => ({ text }));
};


</script> 

<template>
    <v-form @submit.prevent="onSave">
		<div class="d-flex  pt-5 ga-4 "  >
			<div class="d-flex w-50 ga-4">
				<v-text-field class="w-25"
					label="Метки" ref="my-label"
					v-model="localAccount.labelString"
					@blur="onSave"
					variant="outlined"
				/>
				<v-select
					label="Тип записи" class="w-25"
					:items="['LDAP', 'Локальная']"
					v-model="localAccount.type"
					@change="onTypeChange"
					@blur="onSave"
					variant="outlined"
				/>
			</div>
			<div class="d-flex w-50 ga-4">
            <v-text-field ref="my-login"
                label="Логин" class="w-50"
                v-model="localAccount.login"
                :error="!isLoginValid"
                error-message="Логин обязателен"
                @blur="onSave"
				variant="outlined"
            />
			<v-text-field class="w-66" ref="my-password"
			v-if="localAccount.type === 'Локальная'"
            v-model="localAccount.password"
            :append-icon=" show ? 'mdi-eye' : 'mdi-eye-off'"
            :type="show ? 'text' : 'password'"
            hint="At least 8 characters"
			label="Пароль"
            @click:append="show = !show"
			variant="outlined"
			:error="!isPasswordValid"
			error-message="Пароль обязателен"
			@blur="onSave"
          ></v-text-field>
		</div>
		  <v-btn size="large" density="compact" class="ml-15" icon="mdi-trash-can-outline" @click="onDelete"></v-btn>
		</div>
    </v-form>
</template>
<style lang="scss">
</style>


