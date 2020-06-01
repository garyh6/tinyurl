pipeline {
  agent {
    dockerfile {
      filename 'Dockerfile'
    }

  }
  stages {
    stage('Build') {
      steps {
        sh 'npm install'
      }
    }

  }
  environment {
    SERVER_PORT = '3000'
    DATABASE_URL = '0.0.0.0:27017'
  }
}