FROM adoptopenjdk/openjdk11:ubi

MAINTAINER megasusma<hongyu.ma@hotmail.fr>

LABEL name="Pegasus Indexation Image" \
	build-date="20200518"
	
ENV WORKPATH /home/target
WORKDIR $WORKPATH

#ARG JAR_FILE
COPY target/indexation-0-SNAPSHOT.jar /home/target/app.jar

ENTRYPOINT ["java","-Djava.security.egd=file:/dev/./urandom","-jar","/home/target/app.jar"]