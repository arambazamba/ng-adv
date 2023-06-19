# Build Image
FROM mcr.microsoft.com/dotnet/sdk:6.0-alpine AS build
WORKDIR /build

COPY . .
RUN dotnet restore "SkillsApi.csproj"
RUN dotnet publish -c Release -o /app

# Runtime Image
FROM mcr.microsoft.com/dotnet/aspnet:6.0 AS final
WORKDIR /app
COPY --from=build /app .
ENTRYPOINT ["dotnet", "SkillsApi.dll"]

# Build Image
# docker build --rm -f "Dockerfile" -t skills-api .

# Run Image
# docker run -it --rm -p 5051:80 skills-api

# Browse using: 
# http://localhost:5051/api/skills

# Publish Image to dockerhub
# docker tag skills-api arambazamba/skills-api
# docker push arambazamba/skills-api