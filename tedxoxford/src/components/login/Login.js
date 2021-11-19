import { signInWithGoogle } from '../../services/firebase';

const Login = () => {
    return (
        <div>
            <button className="login-button" onClick={signInWithGoogle}>Login</button>
        </div>
    )
}

export default Login