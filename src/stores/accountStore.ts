// src/stores/accountStore.ts
import { defineStore } from 'pinia';

interface Account {
    id: number;
    label: { text: string }[];
    type: 'LDAP' | 'Локальная';
    login: string;
    password?: string | null;
}

interface State {
    accounts: Account[];
}

export const useAccountStore = defineStore('accounts', {
    state: (): State => ({
        accounts: JSON.parse(localStorage.getItem('accounts') || '[]'),
    }),
    actions: {
        addAccount(account: Account) {
            this.accounts.push(account);
            this.saveToLocalStorage();
        },
        updateAccount(account: Account) {
            const index = this.accounts.findIndex((a) => a.id === account.id);
            if (index !== -1) {
                this.accounts[index] = account;
                this.saveToLocalStorage();
            }
        },
        deleteAccount(id: number) {
            this.accounts = this.accounts.filter((a) => a.id !== id);
            this.saveToLocalStorage();
        },
        saveToLocalStorage() {
            localStorage.setItem('accounts', JSON.stringify(this.accounts));
        },
    },
});
