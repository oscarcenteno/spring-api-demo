package payments;

import java.util.*;

public class Payment {

    private int account;
    private int payee;
    private int amount;
    private Date date;

    public Payment() {
    }

    public void setaccount(int account) {
        this.account = account;
    }

    public void setSelectedPayee(int payee) {
        this.payee = payee;
    }

    public void setAmount(int amount) {
        this.amount = amount;
    }

    public void setDate(Date date) {
        this.date = date;
    }
    
    public int getAccount() {
        return account;
    }

    public int getPayee() {
        return payee;
    }

    public int getAmount() {
        return amount;
    }

    public Date getDate() {
        return date;
    }   
}