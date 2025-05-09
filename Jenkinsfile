pipeline {
    agent any

    environment {
        IMAGE_NAME = "vite-garden-app"
        CONTAINER_NAME = "vite-garden-container"
        APP_PORT = "8080"
    }

    stages {
        stage('Build') {
            steps {
                sh 'docker build -t $IMAGE_NAME .'
            }
        }

        stage('Deploy') {
            steps {
                sh '''
                if docker ps -q -f name=$CONTAINER_NAME; then
                  docker stop $CONTAINER_NAME
                  docker rm $CONTAINER_NAME
                fi

                docker run -d --name $CONTAINER_NAME -p 8080:8080 $IMAGE_NAME npm run dev -- --host
                '''
            }
        }
    }
}
