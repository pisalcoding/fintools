

## 1. Deployment
### 1.1. Prerequisites
- PostgreSQL installed on your target machine.
- Docker Compose installed on your target machine.
- Git installed on your target machine.

### 1.2. Create database
```
 CREATE  DATABASE  fintools;
```
### 1.3. Create role and grant  permissions

```
CREATE  ROLE fintools NOSUPERUSER NOCREATEDB NOCREATEROLE NOINHERIT LOGIN NOREPLICATION NOBYPASSRLS PASSWORD  'YOUR_PASSWORD';
GRANT ALL ON  SCHEMA public TO fintools;
```
### 1.4. Prepare .env file

Create a .env file cloning the .env.example then update credentials to match yours.

### 1.5. Running the application

```
cd /opt
sudo git clone https://github.com/pisalcoding/financial-tools.git
cd financial-tools
sudo docker compose up -d --build
```