<template>
    <v-dialog v-model="dialog" fullscreen persistent>
        <v-card flat>
            <v-toolbar color="#33691E" dense dark>
                <v-card-title> Create Filesss </v-card-title>
            </v-toolbar>
            
            <v-stepper v-model="e1" flat>
                <v-stepper-header>
                    <v-stepper-step :complete="e1 > 1" step="1">
                        General
                    </v-stepper-step>

                    <v-divider></v-divider>

                    <v-stepper-step :complete="e1 > 2" step="2">
                        Domicilio
                    </v-stepper-step>

                    <v-divider></v-divider>

                    <v-stepper-step step="3">
                        Medico
                    </v-stepper-step>
                </v-stepper-header>

                <v-stepper-items>
                    <v-stepper-content step="1">
                        <v-card class="mb-12">
                            <v-card-text>
                                <v-row>
                                    <v-col cols="4">
                                        <v-text-field
                                            label="Nombre"
                                            dense
                                        ></v-text-field>
                                    </v-col>

                                    <v-col cols="4">
                                        <v-text-field
                                            label="Primer apellido"
                                            dense
                                        ></v-text-field>
                                    </v-col>

                                    <v-col cols="4">
                                        <v-text-field
                                            label="Segundo apellido"
                                            dense
                                        ></v-text-field>
                                    </v-col>
                                </v-row>

                                <v-row>
                                    <v-col cols="4">
                                        <v-text-field
                                            label="Fecha nacimiento"
                                            dense
                                        ></v-text-field>
                                    </v-col>

                                    <v-col cols="4">
                                        <v-text-field
                                            label="Correo electronico"
                                            dense
                                        ></v-text-field>
                                    </v-col>

                                    <v-col cols="4">
                                        <v-text-field
                                            label="Telefono"
                                            dense
                                        ></v-text-field>
                                    </v-col>
                                </v-row>

                                <v-row>
                                    <v-col cols="12">
                                        <v-textarea
                                            label="Observaciones"
                                            dense
                                            auto-grow
                                        ></v-textarea>
                                    </v-col>
                                </v-row>
                            </v-card-text>
                        </v-card>
                        
                        <v-btn text>Cancel</v-btn>
                        <v-btn color="primary" @click="e1 = 2">Continue</v-btn>
                    </v-stepper-content>

                    <v-stepper-content step="2">
                        <v-card class="mb-12">
                            <v-card-text>
                                <v-row>
                                    <v-col cols="3">
                                        <v-text-field
                                            label="Calle"
                                            dense
                                        ></v-text-field>
                                    </v-col>
                                    <v-col cols="3">
                                        <v-text-field
                                            label="Cruzamiento 1"
                                            dense
                                        ></v-text-field>
                                    </v-col>
                                    <v-col cols="3">
                                        <v-text-field
                                            label="Cruzamiento 2"
                                            dense
                                        ></v-text-field>
                                    </v-col>
                                    <v-col cols="3">
                                        <v-text-field
                                            label="Colonia"
                                            dense
                                        ></v-text-field>
                                    </v-col>
                                </v-row>

                                <v-row>
                                    <v-col cols="4">
                                        <v-text-field
                                            label="Codigo postal"
                                            dense
                                        ></v-text-field>
                                    </v-col>
                                    <v-col cols="4">
                                        <v-text-field
                                            label="Numero interior"
                                            dense
                                        ></v-text-field>
                                    </v-col>
                                    <v-col cols="4">
                                        <v-text-field
                                            label="Numero exterior"
                                            dense
                                        ></v-text-field>
                                    </v-col>
                                </v-row>

                                <v-row>
                                    <v-col cols="12">
                                        <v-textarea
                                            label="Observaciones"
                                            dense
                                            auto-grow
                                        ></v-textarea>
                                    </v-col>
                                </v-row>
                            </v-card-text>
                        </v-card>

                        <v-btn text>Cancel</v-btn>
                        <v-btn color="primary" @click="e1 = 3">Continue</v-btn>
                    </v-stepper-content>

                    <v-stepper-content step="3">
                        <v-card class="mb-12">
                            <v-card-text>
                                <v-row>
                                    <v-col cols="2">
                                        <v-text-field
                                            label="Altura"
                                            dense
                                        ></v-text-field>
                                    </v-col>
                                    <v-col cols="2">
                                        <v-text-field
                                            label="Peso"
                                            dense
                                        ></v-text-field>
                                    </v-col>
                                    <v-col cols="2">
                                        <v-text-field
                                            label="Sexo"
                                            dense
                                        ></v-text-field>
                                    </v-col>
                                    <v-col cols="3">
                                        <v-text-field
                                            label="Numero seguro social"
                                            dense
                                        ></v-text-field>
                                    </v-col>
                                    <v-col cols="3">
                                        <v-text-field
                                            label="Numero seguro social"
                                            dense
                                        ></v-text-field>
                                    </v-col>
                                </v-row>

                                <v-row>
                                    <v-col cols="6">
                                        <v-text-field
                                            label="Padecimientos"
                                            dense
                                        ></v-text-field>
                                    </v-col>
                                    <v-col cols="6">
                                        <v-text-field
                                            label="Alergias"
                                            dense
                                        ></v-text-field>
                                    </v-col>
                                </v-row>

                                <v-row>
                                    <v-col cols="12">
                                        <v-textarea
                                            label="Observaciones"
                                            dense
                                            auto-grow
                                        ></v-textarea>
                                    </v-col>
                                </v-row>
                            </v-card-text>
                        </v-card>

                        <v-btn text>Cancel</v-btn>
                        <v-btn color="primary" @click="e1 = 1"> Continue</v-btn>
                    </v-stepper-content>
                </v-stepper-items>
            </v-stepper>
        </v-card>
    </v-dialog>
</template>

<script>
    export default {
        name: 'DialogExpedientes',
        props:{
            dialog: {
                type:Boolean,
                default: false
            }
        },
        data(){
            return{
                e1: 1,
            }
        }, methods: {
            

        }
    }
</script>

<style>

</style>