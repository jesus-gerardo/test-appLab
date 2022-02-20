<template>
    <v-container fill-height>
        <v-layout align-center justify-center>
            <v-card elevation="5" width="400">
                <v-card-title primary-title class="justify-center">Inicio de sesión</v-card-title>

                <v-card-text>
                    <v-form ref="login">
                        <v-row>
                            <v-col cols="12">
                                <v-text-field
                                    v-model="email"
                                    label="Email"
                                    dense
                                ></v-text-field>
                            </v-col>
                        </v-row>

                        <v-row>
                            <v-col cols="12">
                                <v-text-field
                                    v-model="password"
                                    label="Password"
                                    type="password"
                                    dense
                                ></v-text-field>
                            </v-col>
                        </v-row>
                    </v-form>
                </v-card-text>

                <v-card-actions>
                    <v-btn color="primary">Register</v-btn>
                    <v-spacer></v-spacer>
                    <v-btn color="success" @click="login">Sign in</v-btn>
                </v-card-actions>
            </v-card>
        </v-layout>
    </v-container>
</template>

<script>
    export default {
        name: "Login",
        data(){
            return {
                email: null,
                password: null,
            }
        }, methods: {
            async login(){
                try{
                    let form = new FormData();
                    form.append('email', this.email);
                    form.append('password', this.password);
                    let {data} = await this.$axios.post("/auth/login", form);
                    if(!data.response){
                        return;
                    }
                    localStorage.setItem('token', `Bearer ${data.token}`);
                    this.$router.push({name:'admin'});
                }catch(exception){
                    console.error(exception);
                }
            }
        }
    }
</script>

<style>

</style>