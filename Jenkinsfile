pipeline {
    agent any
    environment {
        APP_NAME = 'node-cicd-app'
    }
    stages {
        stage('Checkout') {
            steps {
                git 'https://github.com/<your-username>/node-cicd-webhook.git'
            }
        }
        stage('Install') {
            steps {
                sh 'npm install'
            }
        }
        stage('Test') {
            steps {
                sh 'npm test'
            }
        }
        stage('Deploy') {
            steps {
                sh 'echo Deploying App...'
                sh 'nohup npm start &'
            }
        }
    }
}
