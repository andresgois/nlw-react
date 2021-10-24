import styles from './style.module.scss';
import { VscGithubInverted } from 'react-icons/vsc'

export function LoginBox(){
    return (
        <div className={styles.loginBoxWrapper}>
            <strong>Entre e compartilhe sua mensagem</strong>

            <a href="#" className={styles.singInWithGithub}>
                <VscGithubInverted size="24" />
                Entrar no Github
            </a>
        </div>
    )
}