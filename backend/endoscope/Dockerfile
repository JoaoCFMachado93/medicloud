FROM eclipse-temurin:21
ADD endoscope-application/target/*.jar app.jar
ENV JAVA_OPTS="-Djava.io.tmpdir=/app/app.jar"
ENTRYPOINT ["java","-jar","/app.jar"]
EXPOSE 8080
