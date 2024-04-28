FROM eclipse-temurin:21
VOLUME /tmp
ADD endoscope-application/target/*.jar app.jar
ENTRYPOINT ["java","-jar","/app.jar"]
EXPOSE 8080