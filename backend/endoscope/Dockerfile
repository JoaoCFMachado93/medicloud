

# Use eclipse-temurin:21-jdk as build environment
FROM eclipse-temurin:21-jdk as build
COPY . /app
WORKDIR /app
RUN ./mvnw package -DskipTests
RUN mv -f endoscope-application/target/*.jar app.jar

FROM eclipse-temurin:21-jre
ARG PORT
ENV PORT=${PORT}
COPY --from=build /app/app.jar .
RUN useradd runtime
USER runtime
ENTRYPOINT [ "java", "-Djava.io.tmpdir=/app", "-Dserver.port=${PORT}", "-jar", "app.jar" ]

# Use eclipse-temurin:21-jdk as build environment
FROM eclipse-temurin:21-jdk as build
COPY . /app
WORKDIR /app
RUN ./mvnw package -DskipTests
RUN mkdir -p /tmp/target && mv -f endoscope-application/target/*.jar /tmp/target/

FROM eclipse-temurin:21-jre
ARG PORT
ENV PORT=${PORT}
COPY --from=build /tmp/target/*.jar app.jar
RUN useradd runtime
USER runtime
ENTRYPOINT [ "java", "-Djava.io.tmpdir=/app", "-Dserver.port=${PORT}", "-jar", "app.jar" ]