package TestMe;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import junit.framework.Assert;

public class TestMeLogin {
	WebDriver P;
	@Given("User is on Test Me App page")
	public void user_is_on_Test_Me_App_page() throws InterruptedException {
		System.setProperty("webdriver.chrome.driver", "C:\\My Drivers\\chromedriver_win32\\chromedriver.exe");
		P=new ChromeDriver();
		P.get("http://10.232.237.143:443/TestMeApp/fetchcat.htm");
		Thread.sleep(2000);
	}

	@Given("User clicks on signin")
	public void user_clicks_on_signin() {
		P.findElement(By.xpath("//*[@id=\"header\"]/div[1]/div/div/div[2]/div/ul/li[1]/a")).click();
	}

	@When("User inserts coorect {string} and {string} on login page")
	public void user_inserts_coorect_and_on_login_page(String string, String string2) {
		
		P.findElement(By.xpath("//input[@id='userName']")).sendKeys(string);
		P.findElement(By.xpath("//input[@id='password']")).sendKeys(string2);
	 }

	@When("User clicks on login button")
	public void user_clicks_on_login_button() {
		P.findElement(By.xpath("//input[@value='Login']")).click();
	}
		
	@Then("User sees home page")
	public void user_sees_home_page() {
	  Assert.assertEquals("Home",P.getTitle());
	  P.close();
	}
	
}
