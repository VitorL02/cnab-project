FROM eclipse-temurin:17.0.8.1_1-jdk-jammy
VOLUME /temp
COPY . .    
RUN ./mvnw clean install -DskipTests
ENTRYPOINT ["java","-jar","target/spring-project-0.0.1-SNAPSHOT.jar"]