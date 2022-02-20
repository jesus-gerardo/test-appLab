<template>
    <v-card dense>
        <v-card-title primary-title>
            Agregar Administrador
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
            </v-row>
        
            <v-row class="mt-3">
                <v-col cols="12" sm="12" md="6" lg="4">
                    <v-row dense>
                        <v-col cols="12" class="text-body-2">
                            <v-text-field
                                v-model="form.nombre"
                                label="Nombre(s)"
                                outlined
                                dense
                            ></v-text-field>
                        </v-col>
                    </v-row>
                </v-col>

                <v-col cols="12" sm="12" md="6" lg="4">
                    <v-row dense>
                        <v-col cols="12" class="text-body-2">
                            <v-text-field
                                v-model="form.apellidos"
                                label="Apellidos"
                                outlined
                                dense
                            ></v-text-field>
                        </v-col>
                    </v-row>
                </v-col>

                <v-col cols="12" sm="12" md="6" lg="4">
                    <v-row dense>
                        <v-col cols="12" class="text-body-2">
                            <v-text-field
                                v-model="form.correo"
                                label="Correo electrónico"
                                outlined
                                dense
                            ></v-text-field>
                        </v-col>
                    </v-row>
                </v-col>

                <v-col cols="12" sm="12" md="6" lg="4">
                    <v-row dense>
                        <v-col cols="12" class="text-body-2">
                            <v-select
                                :items="[]"
                                label="Área"
                                outlined
                                dense
                                item-value="id"
                                item-text="nombre"
                                v-model="form.area_id"
                            ></v-select>
                        </v-col>
                    </v-row>
                </v-col>

                <v-col cols="12" sm="12" md="6" lg="4">
                    <v-row dense>
                        <v-col cols="12" class="text-body-2">
                            <v-select
                                :items="[
                                    {id:0, name: 'Inactivo'},
                                    {id:1, name: 'Activos'},
                                ]"
                                label="Estatus"
                                outlined
                                dense
                                item-value="id"
                                item-text="name"
                                v-model="form.estatus"
                            ></v-select>
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
            <v-btn color="" @click="open('main')" class="text-caption">
                Cancelar
            </v-btn>
            <v-btn color="success" class="text-caption">
                Editar administrador
            </v-btn>
        </v-card-actions>
    </v-card>
</template>

<script>
    export default {
        name:"PageForm",
        data(){
            return{
                form:{
                    id:null,
                    img: null,
                    nombre: null,
                    apellidos: null,
                    correo: null,
                    area_id: null,
                    estatus: null
                }
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