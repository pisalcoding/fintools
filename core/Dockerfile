# Use a base image with Java and Gradle installed
FROM gradle:8.5.0-jdk21-alpine AS builder
# Set the working directory
WORKDIR /core

# Copy the build.gradle and settings.gradle files
COPY build.gradle .
COPY settings.gradle .

# Copy the source code
COPY src src

# Build the application
RUN gradle build

## Use a base image with Java installed
#FROM openjdk:22-ea-21-jdk-slim
FROM gradle:8.5.0-jdk21-alpine

# Install Curl
RUN apk update && apk add curl

## Set the working directory
WORKDIR /core

# Copy the built JAR file from the builder stage
COPY --from=builder /core/build/libs/*.jar core.jar

# Run the application
CMD ["java", "-jar", "core.jar"]

HEALTHCHECK --interval=60s --retries=5 --start-period=5s --timeout=10s CMD wget --no-verbose --tries=1 --spider localhost:8101/actuator/health || exit 1