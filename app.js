const app = Vue.createApp({
    data() {
        return {
            friends: [
                { id: 'manuel', name: 'Gostek', phone: '234234 234', email: 'asdfa@ok.pl', details: false},
                { id: 'fat', name: 'Facio', phone: '999 999 99', email: 'dajesz@pl.pl', details: false},
            ]
        }
    },
    methods: {
        toggleDetails(id) {
            let friend = this.friends.find(user => user.id === id)
            friend.details = !friend.details;
        }
    }
});

app.mount('#app')