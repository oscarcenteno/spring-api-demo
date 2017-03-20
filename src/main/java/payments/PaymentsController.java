package payments;

import java.util.ArrayList;
import java.util.List;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class PaymentsController {

    private List<Payment> paymentsList= new ArrayList<Payment>();

    @RequestMapping("/api/payments")
    public List<Payment> payments(){
        return paymentsList;
    }
    
    @RequestMapping(value = "/api/payments", method = RequestMethod.POST)
    public ResponseEntity<Payment> payments(@RequestBody Payment payment) {
    	paymentsList.add(payment);
    	
        return new ResponseEntity<Payment>(payment, HttpStatus.OK);

    }
}