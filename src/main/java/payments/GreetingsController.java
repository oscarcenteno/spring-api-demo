package payments;

import java.util.ArrayList;
import java.util.List;

import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class GreetingsController {

    private static final String template = "Hello, %s!";
    private long counter = 0;
    
    private List<Greeting> greetingList= new ArrayList<Greeting>();

    @RequestMapping("/greetings")
    public List<Greeting> greetings(){
        return greetingList;
    }
    
    @RequestMapping(value = "/greetings/{id}", method = RequestMethod.POST)
    public void greetings(@PathVariable("id") String id) {
    	counter = counter + 1;
    	greetingList.add(new Greeting(counter, String.format(template, id)));
    }
}