<template>
    <v-app>
        <v-navigation-drawer app v-model="drawer" :mini-variant.sync="mini" permanent expand-on-hover>
            <v-list-item class="px-2">
                <v-list-item-avatar>
                    <v-img src="https://randomuser.me/api/portraits/men/85.jpg"></v-img>
                </v-list-item-avatar>

                <v-list-item-content>
                    <v-list-item-title>Admin</v-list-item-title>
                </v-list-item-content>

                <v-btn icon @click="logout"><v-icon>mdi-exit-to-app</v-icon></v-btn>
            </v-list-item>

            <v-divider></v-divider>

            <v-list dense>
                <template v-for="item in items">
                    <template v-if="item.children.length <= 0">
                        <v-list-item :key="item.title" link @click="routerTo(item.name)">
                            <v-list-item-icon>
                                <v-icon>{{ item.icon }}</v-icon>
                            </v-list-item-icon>

                            <v-list-item-content>
                                <v-list-item-title>{{ item.title }}</v-list-item-title>
                            </v-list-item-content>
                        </v-list-item>
                    </template>

                    <template v-else>
                        <v-list-group :prepend-icon="item.icon" :key="item.title" no-action>
                            <template v-slot:activator>
                                <v-list-item-content>
                                    <v-list-item-title>{{ item.title}}</v-list-item-title>
                                </v-list-item-content>
                            </template>

                            <v-list-item v-for="(page, i) in item.children" :key="i" @click="routerTo(page.name)">
                                <v-list-item-icon>
                                    <v-icon v-text="page.icon"></v-icon>
                                </v-list-item-icon>
                                <v-list-item-title v-text="page.title"></v-list-item-title>
                            </v-list-item>
                        </v-list-group>
                    </template>
                </template>
            </v-list>
        </v-navigation-drawer>

        <!-- <v-app-bar app dense color="#33691E" ></v-app-bar> -->

        <v-main app class="pa-0">
            <v-container fluid>
                <router-view></router-view>
            </v-container>
        </v-main>
    </v-app>
</template>

<script>
    import {mapActions, mapState} from "vuex"

    export default {
        data () {
            return {
                drawer: true,
                mini: true,
                items: [
                    { title: 'Administradores', icon: 'mdi-home', name:"administradores" ,children: [] },
                ],
                
            }
        }, computed:{
            ...mapState({  
                user: state => state.user
            }),
        }, methods: {
            ...mapActions([
                'getUser'
            ]),
            routerTo(name){
                if(this.$route.name == name){
                    return
                }
                this.$router.push({name: name});
            },
            logout(){
                localStorage.clear();
                this.$router.push({name: 'login'});


            }
        }
    }
</script>

<style>

</style>