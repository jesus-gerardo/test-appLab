<template>
    <v-container fill-height>
        <v-layout align-center justify-center>
            <v-card elevation="6" width="400">
                <v-card-title primary-title class="justify-center">Inicio de sesión</v-card-title>

                <v-card-text>
                    <v-form ref="login">
                        <v-row>
                            <v-col cols="12">
                                <v-text-field
                                    v-model="email"
                                    label="Correo electrónico"
                                    dense
                                    outlined
                                    :rules="[rules.required, rules.email]"
                                ></v-text-field>
                            </v-col>
                        </v-row>

                        <v-row dense>
                            <v-col cols="12">
                                <v-text-field
                                    v-model="password"
                                    label="Contraseña"
                                    type="password"
                                    dense
                                    outlined
                                    :rules="[rules.required]"
                                ></v-text-field>
                            </v-col>
                        </v-row>
                    </v-form>
                </v-card-text>

                <v-card-actions class="d-flex justify-center">
                    <v-btn color="success" @click="login">Sign in</v-btn>
                </v-card-actions>
            </v-card>
        </v-layout>

        <v-overlay :value="overlay" :z-index="9999">
            <v-progress-circular indeterminate size="64"></v-progress-circular>
        </v-overlay>
    </v-container>
</template>

<script>
    import {RULES} from "./../../plugins/rules";
    export default {
        name: "Login",
        mixins: [RULES],
        data(){
            return {
                email: 'admin@mail.com',
                password: 'password',
                overlay: false
            }
        }, methods: {
            async login(){
                try{
                    let valid = this.$refs.login.validate();
                    if (!valid) {
                        return false;
                    }
                    this.overlay = true;
                    let form = new FormData();
                    form.append('email', this.email);
                    form.append('password', this.password);
                    let {data} = await this.$axios.post("/auth/login", form);
                    this.overlay = false;
                    if(!data.response){
                        return;
                    }
                    localStorage.setItem('token', `Bearer ${data.token}`);
                    this.$router.push({name:'admin'});
                }catch(exception){
                    this.overlay = false;
                    console.error(exception);
                }
            }
        }
    }
</script>

<style>

</style>