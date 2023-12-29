FROM ubuntu:latest AS build

RUN apt-get update
RUN apt-get install openjdk-17-jdk -y


RUN apt-get install maven -y
RUN mvn clean install -DskipTests

FROM eclipse-temurin:17.0.8.1_1-jdk-jammy
VOLUME /temp
COPY . .

EXPOSE 8080

COPY --from=build /target/spring-project-0.0.1-SNAPSHOT.jar app.jar

ENTRYPOINT [ "java", "-jar", "app.jar" ]