import { VscGithubInverted } from 'react-icons/vsc'
import { useContext } from 'react';
import { AuthContext } from '../../contexts/auth';

import styles from './style.module.scss';

export function LoginBox(){
    const { signInUrl } = useContext(AuthContext);
        
    return (
        <div className={styles.loginBoxWrapper}>
            <strong>Entre e compartilhe sua mensagem</strong>

            <a href={signInUrl} className={styles.singInWithGithub}>
                <VscGithubInverted size="24" />
                Entrar no Github
            </a>
        </div>
    )
}