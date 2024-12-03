import React, { useContext } from 'react';
import { AuthContex } from '../provider/AuthProvider';

const Login = () => {
    const {userLogin} = useContext(AuthContex)
    const handleLogin= (e)=>{
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(email, password)

        userLogin(email, password)
        .then(result=>{
            console.log(result);
            const lastSignInTime = result?.user?.metadata?.lastSignInTime;
            const userInfo = {email, lastSignInTime}
            fetch('http://localhost:7500/users',{
                method: 'PATCH',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(userInfo)
            })
            .then(res=> res.json())
            .then(data => {
                console.log(data)
            })


        })
        .catch(err=>{
            console.log(err.message)
        })
    }
    return (
        <div className="hero bg-base-200 min-h-screen">
            <div className="hero-content flex-col ">
                <div className="text-center lg:text-left">
                    <h1 className="text-3xl font-bold">Login now!</h1>
                    
                </div>
                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                    <form onSubmit={handleLogin} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" placeholder="email" name='email' className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" placeholder="password" name='password' className="input input-bordered" required />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Login</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;