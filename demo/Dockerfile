FROM maven:3.8.5-openjdk-17 AS build
COPY . .
RUN maven clean package -DskipTests

FROM openjdk:17.0.1-slim
COPY --from=build /target/demo-0.0.1-SNAPSHOT.jar deploy.jar
EXPOSE 8080
ENTRYPOINT [ "java","-jar", "deploy.jar" ]