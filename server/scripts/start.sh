#!/bin/bash

BUILD_JAR=$(ls /home/ec2-user/action/build/libs/Server-0.0.1-SNAPSHOT.jar)
JAR_FILE=$(basename $BUILD_JAR)

PROJECT_ROOT="/home/ec2-user/action/"

APP_LOG="$PROJECT_ROOT/application.log"
ERROR_LOG="$PROJECT_ROOT/error.log"
DEPLOY_LOG="$PROJECT_ROOT/deploy.log"

TIME_NOW=$(date +%c)

# build 파일 복사
echo "$TIME_NOW > $JAR_FILE 파일 복사" >> $DEPLOY_LOG
cp $BUILD_JAR $PROJECT_ROOT

DEPLOY_JAR = $PROJECT_ROOT$JAR_FILE
# jar 파일 실행
echo "$TIME_NOW > $JAR_FILE 파일 실행" >> $DEPLOY_LOG
sudo nohup java -jar $DEPLOY_JAR > $APP_LOG 2> $ERROR_LOG &

CURRENT_PID=$(pgrep -f $JAR_FILE)
echo "$TIME_NOW > 실행된 PID는 $CURRENT_PID 입니다." >> $DEPLOY_LOG