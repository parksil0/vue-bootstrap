<template>
    <div>
        <user-profile :info='userInfo'>
            <div slot='username'>{{ userInfo.id }}</div>
            <span slot='time'>{{ 'Joined ' + userInfo.created }}, </span>
            <span slot='karma'>{{ userInfo.karma }}</span>
        </user-profile>
        <!-- <p>Name : {{ userInfo.id }}</p>
        <p>Karma : {{ userInfo.karma }}</p>
        <p>Created : {{ userInfo.created }}</p> -->
        <!-- <p>{{ this.$store.state.user.about }}</p> -->
    </div>
</template>

<script>
import UserProfile from '../components/UserProfile.vue';

export default {
    computed: {
        userInfo() {
            return this.$store.state.user;
        }
    },
    created() {
        const userName = this.$route.params.id;
        this.$store.dispatch('FETCH_USER', userName);
    },
    components: {
        'UserProfile' : UserProfile,
    }
}
</script>

<style>

</style>