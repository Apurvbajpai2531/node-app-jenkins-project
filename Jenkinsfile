pipeline {
    agent any

    stages {

        stage('GitHub Code') {
            steps {
                git branch: 'main',
                    url: 'https://github.com/Apurvbajpai2531/node-app-jenkins-project.git'
            }
        }

        stage('Build & Deploy') {
            steps {
                sh '''
                docker compose down -v || true
                docker compose up -d --build
                '''
            }
        }

    }
}

