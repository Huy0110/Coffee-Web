<template>
    <form @submit.prevent="handleSubmit">
        <h3>Sign up</h3>

        <div class="form-group">
            <label>First Name</label>
            <input type="text" class="form-control" v-model ='first_name' placeholder="Firt Name"/>
        </div>

        <div class="form-group">
            <label>Last Name</label>
            <input type="text" class="form-control" v-model ='last_name' placeholder="Last Name"/>
        </div>

        <div class="form-group">
            <label>Email</label>
            <input type="email" class="form-control" v-model ='email' placeholder="Email"/>
        </div>

        <div class="form-group">
            <label>Password</label>
            <input type="password" class="form-control" v-model ='password' placeholder="Password"/>
        </div>

        <div class="form-group">
            <label>Confirm Password</label>
            <input type="password" class="form-control" v-model ='password_confirm' placeholder="Confirm Password"/>
        </div>

        <button class="btn btn-primary btn-block">Sign-up</button>
    </form>
</template>

<script>
import axios from 'axios'; 
export default {
    name: 'RegisterPage',
    data() {
        return {
            first_name: '',
            last_name: '',
            email: '',
            password: '',
            password_confirm: '',
        }
    },
    methods: {
        handleSubmit(){
            const data = {
                first_name: this.first_name,
                last_name: this.last_name,
                email: this.email,
                password: this.password,
                password_confirm: this.password_confirm,
            }

            // console.log(data);

            axios.post('http://localhost:3000/register', data)
                .then(
                    res => {
                        console.log(res)
                    }
                ).catch(
                    err => {
                        console.log("Start")
                        console.log(err)
                        console.log("Stop")
                    }
                )
        }
    }
}
</script>