package mathIsFunTest;

import org.junit.After;
import org.junit.Assert;
import org.junit.Before;
import org.junit.Test;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.support.ui.ExpectedCondition;
import org.openqa.selenium.support.ui.WebDriverWait;

public class StartButtonTest {
    public WebDriver driver;
    @Before
        public void setUp() {
            System.setProperty("webdriver.chrome.driver","C:\\Users\\ahmad\\Desktop\\chromedriver.exe");
            driver = new ChromeDriver();
            driver.manage().window().maximize();
            driver.get("C:\\Users\\ahmad\\IdeaProjects\\src\\main\\index.html");
        }
    @Test
    public void testClickStartButton(){
        WebElement element = driver.findElement(By.id("start-game"));
        System.out.println(driver.findElement(By.id("start-game")).getText());
        element.click();
        Assert.assertEquals("Reset Game", driver.findElement(By.id("start-game")).getText());
        System.out.println(driver.findElement(By.id("start-game")).getText());
    }
    /*@After
    public void tearDown(){
        driver.quit();
    }*/
}
