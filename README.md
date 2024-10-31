# Instalando Handlebars

```sh
npm i express-handlebars
```

# Instalando bcrypt (Blowfish)

Se utiliza para ofuscar (hashar) las contraseñas de forma segura. Transforma la contraseña legible en una cadena de caracteres única e irreversible. 

Un algoritmo de una sola vía implica que no voy a poder volver atrás ese proceso de hasheo.

Salting: Se añade una cadena aleatoria (la "sal") a la contraseña antes de hashearla. Esto hace que sea mucho más difícil descifrar la contraseña mediante ataques de diccionario o tablas arcoíris, ya que cada contraseña, incluso si es la misma, tendrá un hash único.

Hashing: La contraseña con la sal añadida se procesa mediante el algoritmo Blowfish un número determinado de veces (especificado por un "factor de coste"). Este proceso es computacionalmente costoso, lo que dificulta aún más los ataques de fuerza bruta.

<https://www.npmjs.com/package/bcrypt>

```sh
npm i bcrypt
```

# Passport con la estrategia passport local
Autenticar un usuario con email y password

<https://www.passportjs.org/>
<https://www.passportjs.org/packages/passport-local/>

```sh
npm i passport passport-local
```

# Gestión de sesiones

## Connect Mongo va almacenar las sesiones en una colección MONGO

<https://www.npmjs.com/package/connect-mongo>

```sh
npm i connect-mongo
```


## Cookie Parser: Me permite entender las cookies enviadas por el front y crear cookies desde back

<https://www.npmjs.com/package/cookie-parser>

```sh
npm i cookie-parser
```

## Express Session: Me permite gestionar sesiones

<https://www.npmjs.com/package/express-session>

```sh
npm i express-session
```

## Method Override: Me permite enviar información a través de los métodos PUT y DELETE

<https://www.npmjs.com/package/method-override>

```sh
npm i method-override
```

## JWT: Generador de Tokens

<https://www.npmjs.com/package/jsonwebtoken>
<https://jwt.io/>

```sh
npm i jsonwebtoken
```

## Estrategia de JWT de Passport

<https://www.passportjs.org/packages/passport-jwt/>


```sh
npm i passport-jwt
```
