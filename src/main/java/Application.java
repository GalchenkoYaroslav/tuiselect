/**
 * Created by Yaroslav on 09.03.2017.
 */

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Configuration;

@Configuration
@SpringBootApplication(scanBasePackages ="com.java.tuiselect")
@EnableAutoConfiguration
public class Application {

    //test comment
    public static void main(String[] args) {
        SpringApplication.run(Application.class, args);
    }

}