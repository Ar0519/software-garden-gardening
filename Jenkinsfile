pipeline {
    agent any

    environment {
        DOCKER_IMAGE = 'vite-garden-app'
        CONTAINER_NAME = 'vite-garden-container'
        PORT = '3000'
    }

    stages {
        stage('Checkout') {
            steps {
                git credentialsId: 'credentials', url: 'https://github.com/Ar0519/software-garden-gardening.git', branch: 'main'
            }
        }

        stage('Build') {
            steps {
                sh 'docker build -t $DOCKER_IMAGE .'
            }
        }

        stage('Deploy') {
            steps {
                sh '''
                    if [ $(docker ps -aq -f name=$CONTAINER_NAME) ]; then
                        echo "Stopping and removing existing container..."
                        docker stop $CONTAINER_NAME
                        docker rm $CONTAINER_NAME
                    fi

                    echo "Running new container..."
                    docker run -d --name $CONTAINER_NAME -p $PORT:3000 $DOCKER_IMAGE
                '''
            }
        }
    }
}
