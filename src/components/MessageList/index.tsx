import styles from './style.module.scss';

import logo from '../../assets/logo.svg';

export function MessageList(){
    return (
        <div className={styles.messageListWrapper}>
            <img src={logo} alt="Do while" />

            <ul className={styles.messageList}>

                <li className={styles.message}>
                    <p className={styles.messageContent}>
                        Não vejo a hora de começa o Do While
                    </p>
                    <div className={styles.messageUser}>
                        <div className={styles.userImage}>
                            <img src="https://github.com/andresgois.png" alt="Foto" />
                        </div>
                        <span>André Gois</span>
                    </div>
                </li>

                <li className={styles.message}>
                    <p className={styles.messageContent}>
                        Não vejo a hora de começa o Do While
                    </p>
                    <div className={styles.messageUser}>
                        <div className={styles.userImage}>
                            <img src="https://github.com/andresgois.png" alt="Foto" />
                        </div>
                        <span>André Gois</span>
                    </div>
                </li>

                <li className={styles.message}>
                    <p className={styles.messageContent}>
                        Não vejo a hora de começa o Do While
                    </p>
                    <div className={styles.messageUser}>
                        <div className={styles.userImage}>
                            <img src="https://github.com/andresgois.png" alt="Foto" />
                        </div>
                        <span>André Gois</span>
                    </div>
                </li>

            </ul>
        </div>
    )
}