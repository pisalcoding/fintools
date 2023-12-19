# Use a base image with Java and Gradle installed
FROM gradle:8.4.0-jdk17-alpine AS builder
# Set the working directory
WORKDIR /tools

# Copy the build.gradle and settings.gradle files
COPY build.gradle .
COPY settings.gradle .

# Copy the source code
COPY src src

# Build the application
RUN gradle build

## Use a base image with Java installed
#FROM openjdk:22-ea-21-jdk-slim
FROM gradle:8.4.0-jdk17-alpine

# Install Curl
RUN apk update && apk add curl

## Set the working directory
WORKDIR /evitation

# Copy the built JAR file from the builder stage
COPY --from=builder /rest/build/libs/*.jar tools.jar

# Run the application
CMD ["java", "-jar", "tools.jar"]

HEALTHCHECK --interval=60s --retries=5 --start-period=5s --timeout=10s CMD wget --no-verbose --tries=1 --spider localhost:8080/actuator/health || exit 1