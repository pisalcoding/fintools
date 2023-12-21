

## 1. Deployment
### 1.1. Prerequisites
- Docker Compose installed on your target machine.
- Git installed on your target machine.

### 1.2. Prepare .env file

Create a .env file cloning the .env.example then update credentials to match yours.

### 1.3. Running the application

```
cd /opt
sudo git clone https://github.com/pisalcoding/financial-tools.git
cd financial-tools
sudo docker compose up -d --build
```