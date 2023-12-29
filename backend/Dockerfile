FROM ubuntu:latest AS build
RUN apt-get update
RUN apt-get install openjdk-17-jdk -y

RUN apt-get install maven -y

FROM eclipse-temurin:17.0.8.1_1-jdk-jammy

VOLUME /temp
COPY . .
RUN mvn clean install -DskipTests
ENTRYPOINT ["java","-jar","target/spring-application-0.0.1-SNAPSHOT.jar"]