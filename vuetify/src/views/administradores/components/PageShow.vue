<template>
    <v-card dense>
        <v-card-title primary-title>
            Perfil del administrador
        </v-card-title>

        <v-card-text>
            <v-row dense>
                <v-col cols="12">
                    <v-avatar size="60px">
                        <img
                            src="https://cdn.vuetifyjs.com/images/john.jpg"
                            alt="avatar"
                        >
                    </v-avatar>
                </v-col>

                <v-col cols="12" class="text-h6">
                    Nombre del administrador
                </v-col>
            </v-row>
        
            <v-row class="mt-3">
                <v-col cols="4" sm="12" md="6" lg="4">
                    <v-row dense>
                        <v-col cols="12" class="text-body-2">
                            NOMBRES(s)
                        </v-col>
                        <v-col cols="12" class="text-body-1">
                            Nombre del administrador
                        </v-col>
                    </v-row>
                </v-col>

                <v-col cols="4" sm="12" md="6" lg="4">
                    <v-row dense>
                        <v-col cols="12" class="text-body-2">
                            APELLIDOS
                        </v-col>
                        <v-col cols="12" class="text-body-1">
                            Apellidos de la persona
                        </v-col>
                    </v-row>
                </v-col>

                <v-col cols="4" sm="12" md="6" lg="4">
                    <v-row dense>
                        <v-col cols="12" class="text-body-2">
                            CORREO ELECTRÓNICO
                        </v-col>
                        <v-col cols="12" class="text-body-1">
                            Nombre del administrador
                        </v-col>
                    </v-row>

                </v-col>

                <v-col cols="4" sm="12" md="6" lg="4">
                    <v-row dense>
                        <v-col cols="12" class="text-body-2">
                            ÁREA
                        </v-col>
                        <v-col cols="12" class="text-body-1">
                            Recursos humanos
                        </v-col>
                    </v-row>

                </v-col>
                
                <v-col cols="4" sm="12" md="6" lg="4">
                    <v-row dense>
                        <v-col cols="12" class="text-body-2">
                            ESTATUS
                        </v-col>
                        <v-col cols="12" class="text-body-1">
                            Activo
                        </v-col>
                    </v-row>

                </v-col>
            </v-row>

            <v-row dense>
                <v-col cols="12">
                    <v-divider></v-divider>
                </v-col>
            </v-row>
        </v-card-text>
        <v-card-actions>
            <v-btn color="success" @click="open('form')" class="text-caption">
                Editar administrador
            </v-btn>
        </v-card-actions>
    </v-card>
</template>

<script>
    export default {
        name: "PageShow",
        data(){
            return {

            }
        }, methods:{
            open(page){
                this.$emit('page', page)
            },
        }
    }
</script>

<style>

</style>