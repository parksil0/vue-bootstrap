<template>
    <div>
        <ul class='new-list'>
            <li class='post' v-for='item in listItems' :key='item.id'>
                <!-- 포인트 영역 -->
                <div class="points" v-if='item.points'>
                    {{ item.points }}
                </div>
                <div class="points" v-else>
                    0
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
    computed: {
        listItems() {
            return this.$store.state.list;
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