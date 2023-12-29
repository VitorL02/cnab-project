
# Challenge Back-end e FrontEnd Pagnet

Realizei a criação desse repositorio, para guardar os conhecimentos adquiridos ao realizar a criação dessa API para solução do problema proposto pela Pagnet.
Eu não participei do processo seletivo, esse repositorio tem somente o proposito de aprender mais sobre Java e o ecossistema Springboot.


## Referência

 - [Documentação do projeto original ](https://github.com/Pagnet/desafio-back-end)
 - [Linkedin Pessoal](https://www.linkedin.com/in/vitorlucascrispim/)



## Documentação da API

#### O projeto está no ar ate o presente momento para acessar sua Documentação acesse a url abaixo: 

```http
https://backend-pagnet-zk1g.onrender.com/swagger-ui/index.html#/
```
#### O servico na sua verão 1.0 conta com duas requisições

```http
 POST:/cnab/upload
 que espera uma aquivo .txt com uma requisição do tipo "multipart/form-data"

 GET:/report
 um GET que traz as transações ordenadas por nome de loja
```


## Instalação

Necessario todo ambiente spring
  - [Documentação Spring - Intellij](https://www.jetbrains.com/help/idea/spring-support.html)   
- [Documentação Spring - Eclipse](https://www.eclipse.org/community/eclipse_newsletter/2018/february/springboot.php)   

## Rodando localmente

Realize a instação de dependencias do pom.xml e utilize a IDE de preferencia para rodar o spring 

Para o front end e necessario o Node:

```http
Utilizar os comandos:
    cd frontend
    npm install
    npm run dev
```




## Acessando a API 

A api encontra-se completamente disponivel pelos seguinte link 

 Utilize o arquivo disponivel no layout informado pela documentação do desafio para que o funcionamento seja o correto.

```http
  https://frontend-pagnet-w22x.onrender.com
```
## Aprendizados

Foi utilizado o Spring Batch para realização dos Jobs e  processamentos das transações visando o layout descrito do CNAB no desafio. O back end conta com testes de unidade utilizando o Mockito realizando testes sobre o relatorio que seria uma das partes mais criticas do sistema

Já no front end foi utilizado o React + Vite e o Tailwind para facilitar a estilização.


## utilizado

- [Spring Batch](https://spring.io/projects/spring-batch/)   
- [Vite](https://vitejs.dev/guide/)   
- [Tailwind](https://tailwindcss.com/docs/guides/vite)   
- [Mockito](https://www.baeldung.com/mockito-series)   



## Stack utilizada

**Front-end:** React + Vite

**Back-end:** Spring boot

