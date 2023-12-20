FROM php:8.1

# Install system dependencies
RUN apt-get update -y && apt-get install -y openssl zip unzip git

# Get latest Composer
RUN curl -sS https://getcomposer.org/installer | php -- --install-dir=/usr/local/bin --filename=compose

# Install PHP extensions
RUN docker-php-ext-install pdo mbstring pdo_mysql

WORKDIR /app/backend

COPY . .

# Install dependencies
RUN composer install

EXPOSE 8000

CMD php artisan serve --host=0.0.0.0