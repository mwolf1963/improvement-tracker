package com.github.mwolf1963.improvementtracker.configuration;

import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.Import;

@Configuration
@EnableSwagger2WebMvc
@Import(SpringDataRestConfiguratoin.class)
public class ApplicationSwaggerConfig {
}
