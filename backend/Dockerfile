FROM ubuntu:latest AS build
RUN apt-get update
RUN apt-get install openjdk-17-jdk -y

RUN apt-get install maven -y
RUN mvn clean install -DskipTests

FROM eclipse-temurin:17.0.8.1_1-jdk-jammy

VOLUME /tmp
COPY . .
RUN ./mvnw clean install -DskipTests
ENTRYPOINT ["java","-jar","target/desafio-backend-pagnet-0.0.1-SNAPSHOT.jar"]