<template>
    <div>
        <ul class='new-list'>
            <li class='post' v-for='item in listItems' :key='item.id'>
                <!-- 포인트 영역 -->
                <div class="points">
                    {{ item.points }}
                </div>
                <!-- 기타 정보 영역 -->
                <div>
                    <p class='news-title'>
                        <template v-if='item.domain'>
                            <a v-bind:href='item.url'>
                                {{ item.title}}
                            </a>
                        </template>
                        <template v-else>
                            <router-link :to='`/item/${item.id}`'>
                                {{ item.title}}
                            </router-link>
                        </template>
                    </p>
                    <small class='link-text'>
                        {{ item.time_ago }} by
                        <router-link class='link-text' :to="`/user/${item.user}`">
                            {{ item.user }}
                        </router-link>
                    </small>
                </div>

            </li>
        </ul>
    </div>
</template>

<script>
export default {
    created() {
        const name = this.$route.name;
        if(name === 'news') {
            this.$store.dispatch('FETCH_NEWS');
        } else if (name === 'ask') {
            this.$store.dispatch('FETCH_ASK');
        }
    },
    computed: {
        listItems() {
            const name = this.$route.name;
            if(name === 'news') {
                return this.$store.state.news;
            } else if (name === 'ask') {
                return this.$store.state.ask;
            }
            return null;
        }
    }
}
</script>

<style scoped>

.new-list {
    margin: 0;
    padding: 0;
}

.post {
    list-style: none;
    display: flex;
    align-items: center;
    border-bottom: 1px solid #eee;
}

.points {
    width: 80px;
    height: 60px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #41b883;
}

.news-title {
    margin: 0;

}

.link-text {
    color: #828282;
}
</style>