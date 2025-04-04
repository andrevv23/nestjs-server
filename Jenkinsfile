pipeline {
    agent any
    environment {
        PATH = "C:/Program Files/nodejs/;C:/Program Files/nodejs/node_modules/npm/bin;$PATH"
    }
    stages {
        stage('checkout') {
            steps {
                checkout scm
            }
        }
        stage('install') {
            steps {
                bat 'npm install'
            }
        }
        stage('build') {
            steps {
                bat 'npm run build'
            }
        }
        stage('test') {
            steps {
                bat 'npm run test'
            }
        }
        stage('build image') {
            steps {
                bat 'docker build -t nestjs-server:1.0 .'
            }
        }
        stage('docker push') {
            steps {
                withCredentials([usernamePassword(credentialsId: 'docker_cred', passwordVariable: 'DOCKERHUB_PASSWORD', usernameVariable: 'DOCKERHUB_USERNAME')]) {
                    bat 'docker login -u %DOCKERHUB_USERNAME% -p %DOCKERHUB_PASSWORD%'
                    bat 'docker tag nestjs-server:1.0 andrevaleriounc/nestjs-server'
                    bat 'docker push andrevaleriounc/nestjs-server'
                    bat 'docker logout'
                }
            }
        }
    }
}
