pipeline {
    agent any

    stages {
        stage("Checkout Code") {
            steps {
              git branch: 'main', url: 'https://github.com/devopsanto/1.git'
            }
        }

        stage("Build Docker Image") {
            steps {
                sh "docker build -t jenkins-docker-app ."
            }
        }

        stage("Run Docker Container") {
            steps {
                sh """
                docker rm -f jenkins-docker-container || true
                docker run -d --name jenkins-docker-container -p 1000:1000 jenkins-docker-app
                """
            }
        }
    }
}
