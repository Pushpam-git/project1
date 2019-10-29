package J;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)

@CucumberOptions(features="C:\\Users\\Training_h2a.06.17\\Desktop\\demosel\\CaseStudy2\\Feature\\TestMe.feature",
glue= {"TestMe"},
plugin= {"pretty","html:target/Report"})
//tags= {"@Search"})
public class JunitTESt {

}
