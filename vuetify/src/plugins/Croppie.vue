<template>
    <v-container>
        <template v-if="cropped === null && photo == null">
            <v-row class="pa-0">
                <v-col cols="12" >
                    <v-row >
                        <v-col cols="12">
                            <v-file-input
                                label="Seleccionar imagen" 
                                accept=".png, .jpg, .jpeg"
                                v-model="file"
                                counter
                                show-size
                                truncate-length="10"
                                prepend-icon="mdi-image-area"
                                @change="selectFile"
                            /> 
                        </v-col>
                        <v-col cols="12 text-center">
                            <v-btn class="mt-2" color="danger" small @click="photo = photoDefault" v-if="photo == null && photoDefault != null">Cancelar </v-btn>
                        </v-col>
                    </v-row>
                </v-col>
                <v-col cols="12" class="text-center" v-if="file != null">
                    <vue-croppie 
                        style="height:auto; width: 100% !important; overflow: auto; border-radius:5px;"
                        ref="croppieRef" 
                        :enableOrientation="true"
                        :boundary="{ width: 200, height: 200}">
                    </vue-croppie>
                </v-col>
                <v-col cols="12" class="text-center" v-if="file != null">
                    <v-tooltip bottom>
                        <template v-slot:activator="{ on }"> 
                            <v-btn class="mx-2" fab small @click="rotate(90)">
                                <v-icon v-on="on">
                                    mdi-rotate-left
                                </v-icon>
                            </v-btn>
                        </template>
                        <span>Girar a la izquierda</span>
                    </v-tooltip>
                    <v-tooltip bottom>
                        <template v-slot:activator="{ on }"> 
                            <v-btn class="mx-2" fab small @click="crop()">
                                <v-icon v-on="on">
                                    mdi-crop
                                </v-icon>
                            </v-btn>
                        </template>
                        <span>Cortar</span>
                    </v-tooltip>
                    <v-tooltip bottom>
                        <template v-slot:activator="{ on }"> 
                            <v-btn class="mx-2" fab small @click="rotate(-90)">
                                <v-icon v-on="on">
                                    mdi-rotate-right
                                </v-icon>
                            </v-btn>
                        </template>
                        <span>Girar a la derecha</span>
                    </v-tooltip> 
                </v-col>
            </v-row>
        </template>

        <template v-else>
            <v-card outlined tile>
                <v-row class="justify-center pa-0">
                    <v-col cols="12" class="text-center">
                        <div class="grey--text"> {{ titulo }} </div>
                    </v-col>
                    <v-col cols="12" class="text-center">
                        <v-avatar size="150">
                            <img :src="`${_src}${photo}`" alt="photo" v-if="cropped === null">
                            <img :src="cropped" alt="alt" v-else>
                        </v-avatar>
                    </v-col>
                </v-row> 
                
                <v-card-text>
                    <v-row class="justify-center">
                        <v-col cols="12" class="text-center">
                            <v-tooltip bottom>
                                <template v-slot:activator="{ on }"> 
                                    <v-file-input
                                        :hide-input="false"
                                        truncate-length="1"
                                        label="Seleccionar imagen" 
                                        accept=".png, .jpg, .jpeg"
                                        v-model="file"
                                        v-on="on"
                                        prepend-icon="mdi-camera"
                                        @change="changeFile(),selectFile" 
                                    ></v-file-input>

                                </template>
                                <span> {{ descripcion_actualizar }} </span>
                            </v-tooltip>  
                        </v-col>
                    </v-row> 
                </v-card-text>
            </v-card>
        </template> 
    </v-container>
</template>
 
<script>


import Vue from "vue";
import VueCroppie from "vue-croppie";
import "croppie/croppie.css";

Vue.use(VueCroppie);

export default {
    name:'Croppie',
    props : {
        onLoadImage : {
            type : Function,
            default : null
        },
        namePhoto : {
            type : String,
            default : null,
        },
        _src:{
            type:String,
            default: '/admin/elemento/image/'
        },
        titulo : {
            type : String,
            default : 'Foto de perfil',
        },
        descripcion_actualizar : {
            type : String,
            default : 'Actualizar foto de perfil'
        }
    },  
    data() {
        return {
            cropped: null,
            file : null,
            fileUpdated : false,
            fileName : '',
            fileCrop : null,
            photo : null,
            photoDefault : null
        }
    },
    created(){
        this.photo = this.namePhoto; 
        this.photoDefault = this.namePhoto;
    },
    methods: {  
        async crop() {
            let options_image = {
                type: "base64",
                size: this.size_img,
                format: this.format_img
            };
            await this.$refs.croppieRef.result(options_image, output => {
                this.cropped = output;
            });

            fetch(this.cropped)
                .then(res => res.blob())

                .then(val => {
                this.fileCrop = val;
                });

            let file = this.convertFile();
 
            this.onLoadImage(file);

            this.fileUpdated = true;
        },  

        rotate(rotationAngle) {
            this.$refs.croppieRef.rotate(rotationAngle);
        },

        convertFile: function() {
            if (this.cropped == null) {
                return null;
            } else {
                let b64 = this.cropped.split(",")[1];
                let imagen = this.b64toBlob(b64, "image/png");
                return new File([imagen], "fotografia.png", {
                type: `image/${this.format_img}`
                }); // convierto el blob en un archivo png
            }
        },

        b64toBlob: function(b64Data, contentType, sliceSize) {
            contentType = contentType || "";
            sliceSize = sliceSize || 512;

            var byteCharacters = atob(b64Data);
            var byteArrays = [];

            for (
                var offset = 0;
                offset < byteCharacters.length;
                offset += sliceSize
            ) {
                var slice = byteCharacters.slice(offset, offset + sliceSize);

                var byteNumbers = new Array(slice.length);
                for (var i = 0; i < slice.length; i++) {
                byteNumbers[i] = slice.charCodeAt(i);
                }

                var byteArray = new Uint8Array(byteNumbers);

                byteArrays.push(byteArray);
            }
            return new Blob(byteArrays, { type: contentType });
        },

        selectFile(e){
            try { 
                if (e === undefined) {
                    this.file = null;
                    this.fileUpdated = false;
                    return false;
                }
                const data = URL.createObjectURL(e);
                this.fileUpdated = true;
                this.fileName = e.name;
                setTimeout(() => {
                    this.$refs.croppieRef.bind({ url: data });
                }, 500);
            } catch (error) { 
                console.log(error)
            }
        },

        async upload_file(url) {
            let blob = await fetch(url).then(r => r.blob());
            let reader = new FileReader();
            reader.readAsDataURL(blob);
            reader.onloadend = () => {
                let base64data = reader.result;
                this.cropped = base64data;
            };

            let file = new File([blob], "", { type: blob.type });
            this.file = file;
            this.fileCrop = blob;
            this.fileUpdated = false;
        },
        
        changeFile() {
            this.fileUpdated = true;
            this.cropped = null;
            this.fileCrop = null;
            this.photo = null;

            if (this.file !== null) {
                const data = URL.createObjectURL(this.file);
                setTimeout(() => {
                    this.$refs.croppieRef.bind({ url: data });
                }, 500);
            }
        },

        clean(){
            this.cropped = null;
            this.file = null;
            this.fileUpdated = false;
            this.fileName = '';
            this.fileCrop = null;
        }
    }
}
</script>

<style scoped>
    .croppie-container .cr-boundary {
        width: 90% !important;
    }
</style>