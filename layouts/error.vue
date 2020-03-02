<template>
    <div>
        <b-container fluid >
            <b-row>
                <b-col class="error" cols="12" md="8">
                    <b-img src="../assets/img/UFO_Crash.svg" alt="ufo" class="ufo-img"></b-img>
                </b-col>
                <b-col class="error-404" cols="6" md="4">
                    <div class="auth">
                        <b-img src="../assets/img/orbital.svg"></b-img>
                          <div>
                            <a href="#">LOGIN</a>
                            <a href="#">SIGNUP</a>
                        </div>
                    </div>
                    <h1>404</h1>
                </b-col>
            </b-row>
        </b-container>
    </div>
</template>

<script>
export default {
    
}
</script>

<style scoped>
    .error{
        min-height: 100vh;
        display: flex;
        align-items: flex-end;
    }
    .ufo-img{
        width: 65%;
    }
    .error-404{
        padding-top: 5%; 
    }
    .auth{
        display: flex;
        justify-content: flex-end
    }
    .auth div{
        display: none;
    }
    .auth img:hover + div{
        width: 40%;
        display: block;
    }
    a{
        font-size: 30px;
        margin: 50px 20px;
    }
    h1{
        font-size: 250px;
    }
</style>