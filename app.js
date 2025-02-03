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

app.component('user-contact', {
    data() {
        return  {
            detailsAreVisible: false,
            friend: { id: 'manuel', name: 'Gostek', phone: '234234 234', email: 'asdfa@ok.pl', details: false},
        }
    },
    methods: {
        toggleDetails() {
            this.detailsAreVisible = !this.detailsAreVisible;
        }
    },
    template: `
    <li >
        <h2>{{ friend.name }}</h2>
        <button @click="toggleDetails(friend.id)">{{ detailsAreVisible ? 'Hide' : 'Show'}} Details</button>
        <ul v-if="detailsAreVisible">
            <li><strong>Phone:</strong> {{ friend.phone }}</li>
            <li><strong>Email:</strong> {{ friend.email }}</li>
        </ul>
    </li>
    `
});

app.mount('#app')