FROM adoptopenjdk/openjdk11:ubi

MAINTAINER megasusma<hongyu.ma@hotmail.fr>

LABEL name="Pegasus Indexation Image" \
	build-date="20200522"
	
ENV WORKPATH /home/target
WORKDIR $WORKPATH

ARG JAR_FILE
COPY target/${JAR_FILE}.jar app.jar

ENTRYPOINT ["java", "-jar", "app.jar"]