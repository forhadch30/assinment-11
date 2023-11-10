import { Link } from 'react-router-dom';
import logo from '../../assets/images/login/login.svg'
import {BsFacebook} from 'react-icons/bs'
import {GrLinkedin} from 'react-icons/gr'
import {FcGoogle} from 'react-icons/fc'
import { useContext } from 'react';
import { AuthContext } from '../../Provider/AuthProvider';
const SignUp = () => {
    const {createUser} = useContext(AuthContext)
    const handleSigin = e =>{
        e.preventDefault()
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        console.log(name,email,password)
         
        createUser(email,password)
        .then(result =>{
            const user = result.user;
            console.log('careate user',user)
        })
        .catch(error =>console.log(error))
    }
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row">
                <div className="mr-20 w-1/2 bg-gradient-to-r from-violet-500 to-fuchsia-500 rounded-lg">
                    <img src={logo} alt="" />
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-gradient-to-r from-purple-500 to-pink-500 border-8 border-white">
                    <form onSubmit={handleSigin} className="card-body">
                        <h1 className="text-5xl font-bold text-center text-white">Sigin Up</h1>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-white">Name</span>
                            </label>
                            <input type="name" name='name'  placeholder="Name" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-white">Email</span>
                            </label>
                            <input type="email" name='email' placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-white">Password</span>
                            </label>
                            <input type="password" name='password' placeholder="password" className="input input-bordered" required />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <input className='btn bg-orange-600' type="submit" value='sigin up' />
                        </div>
                        <h2 className='text-xl text-center text-white'>Or Sign Up with</h2>
                        <div className='text-center mt-5'>
                            <button><BsFacebook className='text-xl mr-5'></BsFacebook></button>
                            <button><GrLinkedin className='text-xl mr-5'></GrLinkedin></button>
                            <button><FcGoogle className='text-xl mr-5'></FcGoogle></button>
                        </div>
                    </form>
                    <p className='mb-5 text-center text-xl font-bold'>New to Market<Link className='text-2xl ml-5 font-bold text-white' to="/login">Login</Link></p>
                </div>
            </div>
        </div>
    );
};

export default SignUp;