<template>
    <Layout>
        <div class="home">
            <div class="posts-container" v-if="posts && !loading">
                <SearchInput v-model:inputValue="searchValue" placeholder="text..."/>
                <div class="posts" v-if="filteredPosts.length">
                    <div class="post" v-for="post in filteredPosts" :key="post.id">
                        <div class="post__title">
                            {{post.title}}
                        </div>
                        <div class="post__text">
                            {{post.body}}
                        </div>
                        <div class="post__author">
                            {{userName(post.userId)}}
                        </div>
                    </div>
                </div>

                <h5 class="posts__not-found" v-else>Posts not found!</h5>

            </div>

            <i v-else class="pi pi-spin pi-spinner loading-spinner"/>

        </div>
    </Layout>
</template>

<script>
import Layout from "@/components/Layout.vue";
import SearchInput from "@/components/UI/SearchInput.vue";
import 'primeicons/primeicons.css';

export default {
  name: 'HomeView',
  components: {
      SearchInput,
      Layout,
  },

    data() {
        return {
            users: null,
            posts: [],
            searchValue: '',
            loading: false
        }
    },

    computed: {
        filteredPosts() {
            if (this.searchValue === '') {
                return this.posts
            }

            return this.posts.filter(item => {
                if (
                    this.userName(item.userId).toLowerCase().includes(this.searchValue.toLowerCase())
                ) {
                    return item
                }
            })


        }
    },

    methods: {
      async getUsers() {
          this.users = await this.$api('users')
      },
      async getPosts() {
          this.posts = await this.$api('posts')
      },

      userName(id) {
          let user = this.users.find(user => user.id === id)
          return user.name
      },
    },

    async created() {
      this.loading = true

      await this.getUsers()
      await this.getPosts()

      this.loading = false
    }
}
</script>

<style scoped lang="scss">

.posts {
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
    margin: 30px auto 0 auto;

    &__not-found {
        margin-top: 20px;
        font-size: 22px;

        color: #2c3e50;
    }
}

.post {
    display: flex;
    padding: 15px;
    text-align: left;
    flex-direction: column;
    gap: 20px;

    &__title {
        font-size: 20px;
        color: #0f81fa;
        font-weight: 600;
    }

    &__text {
        color: #1a1919;

        font-size: 17px;
    }

    &__author {
        margin-top: auto;
        font-size: 13px;
        color: #797676;
    }

    max-width: 400px;
    -webkit-box-shadow: 0px 5px 10px 2px rgba(34, 60, 80, 0.2);
    -moz-box-shadow: 0px 5px 10px 2px rgba(34, 60, 80, 0.2);
    box-shadow: 0px 5px 10px 2px rgba(34, 60, 80, 0.2);
}

</style>
