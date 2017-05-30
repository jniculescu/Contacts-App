
Contacts App

Client - Angular 4 Web app
Server - C# .NET Core Web API (Visual Studio 2017)
Cordova - Hybrid app (Android)

Pre-Requisites for Client

Angular CLI: Installed (npm install -g @angular/cli)
Node.js: Installed (https://nodejs.org)

npm install
Cordova

Cordova CLI: Installed (npm instal -g cordova)
Web app build (ng build --environment=local --base-href . --output-path=../cordova/www )
Execute create-android-platform.bat
Server

Visual Studio 2017: Installed
Open Solution and Run server
--> http://localhost:60829/api

Run client on Dev server.

using Web API
ng serve

Using Local Storage 
ng serve --environment=local

http://localhost:4200/ on browser.

Cordova hybrid

client creation
ng build --environment=local --output-path=../cordova/www --base-href 

cordova run android
