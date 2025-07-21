pipeline {
    agent any
    environment {
        APP_NAME = 'node-cicd-app'
    }
    stages {
        stage('Checkout') {
            steps {
                git branch: 'main', url: 'https://github.com/parasbansal2020/node-cicd-webhook.git'
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
