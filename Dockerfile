FROM adoptopenjdk/openjdk8:ubi

MAINTAINER megasusma<hongyu.ma@hotmail.fr>

LABEL name="Pegasus Indexation Image" \
	build-date="20200522"
	
#ENV WORKPATH /home/target
#WORKDIR $WORKPATH

ARG JAR_FILE
COPY target/${JAR_FILE}.jar ${JAR_FILE}.jar

ENTRYPOINT ["java", "-Djava.security.egd=file:/dev/./urandom", "-jar", "${JAR_FILE}.jar"]