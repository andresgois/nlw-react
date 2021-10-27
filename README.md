

# NLW React

## Instalando aplicação via VITE
- [Vite](https://vitejs.dev/guide/#scaffolding-your-first-vite-project)

### Dependências
- yarn add sass
- yarn add react-icons
- yarn add axios
- yarn add socket.io-client

### Instruções
- yarn create vite web --template react-ts
- cd web
- yarn

### Configurações
- fonte usada
    - [Roboto](https://fonts.google.com/specimen/Roboto)
    - Regular 400
    - Bold 700
- usar na tag head do index.html

### Utilizando modules para o css
- App.module.css
```
.contentWrapper{
    color: red;
}
```
- App.tsx
```
import styles from './App.module.css'

<main className={styles.contentWrapper}>  </main>
```

### Pré processador css
- App.module.scss
```
.contentWrapper{
    h1 {
        color: red;
    }
}
```
- App.tsx
```
import styles from './App.module.scss'

<main className={styles.contentWrapper}>  </main>