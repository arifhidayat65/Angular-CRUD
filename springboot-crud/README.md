# Tutorial Spring Boot Rest Api CRUD

Tutorial Spring Boot, Mudahnya Membuat Rest API CRUD!


## Running On DOCKER
kamu juga bisa menjalankan service ini tanpa install kebutuhan jdk,
melalui docker. syaratnya sudah ter-install docker di komputer kamu.

``docker pull johnnyaustor/jap-spring-crud:tutorial-youtube``

``docker run --publish 8080:8080 johnnyaustor/jap-spring-crud:tutorial-youtube``

## Endpoint
POST `http://localhost:8080/employee`

GET `http://localhost:8080/employee`

GET `http://localhost:8080/employee/{id}`

PUT `http://localhost:8080/employee/{id}`

DELETE `http://localhost:8080/employee/{id}`

## Body Required
`` { id:number, firstName:string, lastName:string } ``