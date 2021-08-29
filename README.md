## Criar App:
```
npx create-next-app next-app
```

<br>

## Instalar typeScript:
```
npm install --save-dev @types/react typescript
```

<br>

## Adicionar arquivo tsconfig.json:


<br>

## Executar aplicação:
```
npm run dev
```

<br>

## Adicionar bibliotecas css:
importar o Head em `_app.js`:
```
import Head from "next/head";
```

Adicionar tag <Head> com as referências da biblioteca css antes de `<Component {...pageProps} />`:

```
<Head>
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.0/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-KyZXEAg3QhqLMpG8r+8fhAXLRk2vvoC2f3B09zVXn8CA5QIVfZOJ3BCsw2P0p/We" crossorigin="anonymous" />   
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.0/dist/js/bootstrap.bundle.min.js" integrity="sha384-U1DAWAznBHeqEIlVSCgzq+c9gqGAJn5c/t99JyeKa9xxaYpSvHU5awsuZVVFIhvj" crossorigin="anonymous"></script>   
</Head>
```