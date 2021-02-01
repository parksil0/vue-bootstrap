<template>
    <div>
        <section>
            <user-profile :info='fetchedAskItem'>
                <router-link slot='username' :to='`/user/${fetchedAskItem.user}`'>
                    {{ fetchedAskItem.user }}
                </router-link>    
                <template slot='time'>{{ 'Posted ' + fetchedAskItem.time_ago }}</template>
            </user-profile>
            <!-- 질문 상세 영역 -->
            <!-- <div class='user-container'>
                <div>
                    <i class="fas fa-user"></i>
                </div>
                <div class='user-description'>
                    <router-link :to='`/user/${fetchedAskItem.user}`'>
                        {{ fetchedAskItem.user }}
                    </router-link>
                    <div class='time'>
                        {{fetchedAskItem.time_ago}}
                    </div>
                </div>
            </div> -->
        </section>
        <section>
            <h2>{{ fetchedAskItem.title }}</h2>
        </section>
        <section>
            <div v-html='fetchedAskItem.content'></div>
        </section>
        <section>
            <!-- 질문 댓글 -->
        </section>
        <!-- {{ fetchedAskItem.title }} -->
    </div>
</template>

<script>
import UserProfile from '../components/UserProfile.vue';
import { mapGetters } from 'vuex';
export default {
    components: {
        UserProfile,
    },
    computed: {
        ...mapGetters(['fetchedAskItem']),
    },
    created() {
        const itemId = this.$route.params.id;
        this.$store.dispatch('FETCH_ASK_ITEM', itemId);
    }
}
</script>

<style scoped>
.user-container {
 display: flex;
 align-items: center;
 padding: 0.5rem;
}

.fa-user {
    font-size: 3.5rem;
}

.user-description {
    padding-left: 8px;
}

.time {
    font-size: 0.7rem;
}
</style>