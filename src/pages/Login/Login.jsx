import { Link } from 'react-router-dom';
import logo from '../../assets/images/login/login.svg'
import {BsFacebook} from 'react-icons/bs'
import {GrLinkedin} from 'react-icons/gr'
import {FcGoogle} from 'react-icons/fc'
import { useContext } from 'react';
import { AuthContext } from '../../Provider/AuthProvider';
const Login = () => {
    const {signIn} = useContext(AuthContext)
    const handleLogin = e =>{
        e.preventDefault()
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email,password)
        signIn(email,password)
        .then(result =>{
            const user = result.user;
            console.log(user)
        })
         .catch(error =>console.log(error))
    }
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row">
                <div className="mr-20 w-1/2 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg">
                    <img src={logo} alt="" />
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-gradient-to-r from-cyan-500 to-blue-500 border-8 border-white">
                    <form onSubmit={handleLogin} className="card-body">
                    <h1 className="text-5xl font-bold text-center text-white">Login</h1>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
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
                            <input className='btn bg-blue-400' type="submit" value='login' />
                        </div>
                        <h2 className="text-xl text-white text-center">Or Sign Up with</h2>
                        <div className='text-center mt-5'>
                            <button><BsFacebook className='text-xl mr-5'></BsFacebook></button>
                            <button><GrLinkedin className='text-xl mr-5'></GrLinkedin></button>
                            <button><FcGoogle className='text-xl mr-5'></FcGoogle></button>
                        </div>
                    </form>
                    <p className='my-5 text-center text-xl font-bold'>New to Marketing?<Link className='text-2xl ml-5 font-bold mb-5 text-white' to="/signUp">Sign Up</Link></p>
                </div>
            </div>
        </div>
    );
};

export default Login;



echo "# assinment-11" >> README.md
git init
git add README.md
git commit -m "first commit"
git branch -M main
git remote add origin https://github.com/forhadch30/assinment-11.git
git push -u origin main