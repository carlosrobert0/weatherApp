<h1>WeatherApp</h1> 

<p align="center">
  <img src="https://img.shields.io/static/v1?label=react%20native&message=framework&color=blue&style=for-the-badge&logo=REACT"/>
  <img src="https://img.shields.io/static/v1?label=typescript&message=framework&color=blue&style=for-the-badge&logo=TYPESCRIPT"/>
</p>

### Tópicos 

:small_blue_diamond: [Descrição do projeto](#descrição-do-projeto)

:small_blue_diamond: [Funcionalidades](#funcionalidades)

:small_blue_diamond: [Pré-requisitos](#pré-requisitos)

:small_blue_diamond: [Como rodar a aplicação](#como-rodar-a-aplicação-arrow_forward)

## Descrição do projeto 

<p align="justify">
  Aplicativo desenvolvido utilizando React Native, para exibir dados metereológicos
  a partir da localização do usuário. </br>
  Esse permite acesso a localização no device
  e são exibidas as informações do clima tempo em tempo real para consulta. </br> 
  E opção de atualizar a localização refletindo os novos dados na tela de consulta.
</p>

## Funcionalidades

:heavy_check_mark: Buscar dados de geolocalização (latitude, longite) a partir da permissão do usuário para consulta da localização. 

:heavy_check_mark: Exibir dados meterológicos em tempo real a partir da localização do device do usuário.

:heavy_check_mark: Atualizar dados meterológicos em tempo real a partir da localização do device do usuário.

## Pré-requisitos
É necessário ter o node instalado para a execução do aplicativo. Você pode instala-lo aqui:
[Node](https://nodejs.org/en/download/)

É necessário ter o Android Studio instalado para a execução o aplicativo em um emulador ou dispositivo físico. </br> 
Você pode instala-lo aqui: [Android Studio](https://developer.android.com/studio) </br> 
- PORÉM A INSTALAÇÃO DO ANDROID STUDIO 
DEVE SER FEITA APÓS AS INSTALAÇÕES DAS DEPENDÊNCIAS SEREM FEITAS NO WINDOWS E IOS - 

Segue a documentação exata de como montar o setup para execução do App com Android Studio. </br> 
Para iOS: https://react-native.rocketseat.dev/ios/macos </br> 
Para Android: https://react-native.rocketseat.dev/android/windows

## Integração com api de dados metereológicos OpenWeatherMap 
Para o consumo dos dados climáticos é utilizada a api [OpenWeatherMap](https://openweathermap.org/api) </br> 
Após clicar nesse link clique, em Current Weather Data  no botão subscribe, ali você irá criar uma conta e irá te retornar uma key, </br> 
essa key é necessário para fazer as consultas na api.

Essa key vai ser valor a ser passado em uma variavel ambiente chamada API_KEY no arquivo .env.example na raiz do projeto. <br/>
Após ter preenchido a variavel API_KEY com o valor de key encontrado em https://home.openweathermap.org/api_keys <br/>
Ex.: API_KEY=6281e15bb5bb2a68bc3c10042802e76a

Renomeia o arquivo .env.example para .env e rode o projeto.

## Como rodar a aplicação :arrow_forward:

No terminal, clone o projeto: 
```
git clone https://github.com/carlosrobert0/weatherApp
```

Acesse o projeto
```
cd weatherApp
```

Instale as dependencias do projeto
```
npm install
```

Rode o projeto para android
```
npm run android
```

Rode o projeto para ios
[doc](https://react-native.rocketseat.dev/ios/macos) </br> 

## Telas da aplicação :arrow_forward:

Tela inicial de quando usuario entra no aplicativo e ainda nao permitiu acesso a localização
![empty](https://user-images.githubusercontent.com/45858897/211081984-883cf2ee-acf2-4e43-ab77-c82649d09642.png)

Tela de quando o usuario permitiu localização e o clima está chuvoso
![rain1](https://user-images.githubusercontent.com/45858897/211082037-066c2dd6-57f2-4c30-a9de-f8e8ea0c84f7.png)
![rain2](https://user-images.githubusercontent.com/45858897/211082061-d1531118-81ee-4759-b88f-e1c8ffbb4e7c.png)

Tela de quando o usuario permitiu a localização e o clima está sem chuva
![clouds](https://user-images.githubusercontent.com/45858897/211082099-7439c0b5-d6dc-4de0-a59d-b226b6d3d684.png)
![cloud](https://user-images.githubusercontent.com/45858897/211082132-bbca920f-dcf3-4aa9-886b-9d8c5e8542c2.png)

## Licença 

The [MIT License]() (MIT)

Copyright :copyright: 2023 - WeatherApp
