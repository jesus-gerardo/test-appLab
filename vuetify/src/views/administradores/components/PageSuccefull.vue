<template>
    <v-card dense flat>
        <v-card-title primary-title>
            Administrador de la consola
        </v-card-title>

        <v-card-text>
            <v-row dense>
                <v-col cols="12">
                    <v-avatar size="60px" color="success">
                        <v-icon dark>
                            mdi-check
                        </v-icon>
                    </v-avatar>
                </v-col>

                <v-col cols="12" class="text-h6">
                    Cambios guardados
                </v-col>

                <v-col cols="12" class="text-body-2">
                    Tu administador se ha guardado con éxito
                </v-col>
            </v-row>
        </v-card-text>
        
        <v-card-actions>
            <v-btn color="success" @click="open('main')" class="text-caption">
                Regresar a mis administradores
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
                this.$emit('page', {page:page, row:null})
            },
        }
    }
</script>

<style>

</style>