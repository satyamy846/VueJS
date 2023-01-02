<script>
import router from '../../router/index.js'
import axios from 'axios'
    export default {    
        name: "Login",    
        methods: {    
            login: (e) => {
                e.preventDefault()    
                let email = "user@email.com"   
                let password = "password"    
                let login = () => {    
                    let data = {    
                        email: email,    
                        password: password    
                    }    
                    axios.post("/api/login", data).then((response) => {    
                            console.log("Logged in")
                            router.push("/dashboard")    
                        }).catch((errors) => {    
                            console.log("Cannot log in")    
                        })    
                }    
                login()    
            }    
        }    
    }
</script>
<template>
    <div>    
        <h2>Login</h2>  
        <div class="container">
            <form v-on:submit="login">    
            <input type="text" name="email" placeholder="Enter Your email" /><br>    
            <input type="password" name="password" placeholder="Enter Your password"/><br>    
            <button type="submit">Submit</button>    
            </form>
        </div>  
            
    </div>
</template>

<style>
input{
    margin: 2px;
}
</style>


