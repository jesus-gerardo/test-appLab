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
                            :src="`${$axios.defaults.baseURL}/administrador/${row.image}`"
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
                            {{row.nombre}}
                        </v-col>
                    </v-row>
                </v-col>

                <v-col cols="4" sm="12" md="6" lg="4">
                    <v-row dense>
                        <v-col cols="12" class="text-body-2">
                            APELLIDOS
                        </v-col>
                        <v-col cols="12" class="text-body-1">
                            {{row.apellidos}}
                        </v-col>
                    </v-row>
                </v-col>

                <v-col cols="4" sm="12" md="6" lg="4">
                    <v-row dense>
                        <v-col cols="12" class="text-body-2">
                            CORREO ELECTRÓNICO
                        </v-col>
                        <v-col cols="12" class="text-body-1">
                            {{row.correo}}
                        </v-col>
                    </v-row>

                </v-col>

                <v-col cols="4" sm="12" md="6" lg="4">
                    <v-row dense>
                        <v-col cols="12" class="text-body-2">
                            ÁREA
                        </v-col>
                        <v-col cols="12" class="text-body-1">
                            {{row.area.nombre}}
                        </v-col>
                    </v-row>

                </v-col>
                
                <v-col cols="4" sm="12" md="6" lg="4">
                    <v-row dense>
                        <v-col cols="12" class="text-body-2">
                            ESTATUS
                        </v-col>
                        <v-col cols="12" class="text-body-1">
                            {{row.estatus == 1 ? 'Activo': 'Inactivo'}}
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
        props:['row'],
        methods:{
            open(page){
                this.$emit('page', {page:page, row:this.row})
            },
        }
    }
</script>

<style>

</style>