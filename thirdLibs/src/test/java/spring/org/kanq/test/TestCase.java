package spring.org.kanq.test;


import java.sql.Connection;
import java.sql.SQLException;
import java.util.Calendar;
import java.util.Date;

import javax.sql.DataSource;

import org.junit.Test;
import org.springframework.context.ApplicationContext;
import org.springframework.context.support.AbstractApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;

import spring.org.kanq.dao.ExampleBean;
import spring.org.kanq.service.impl.DemoTest;

public class TestCase {
	@Test
	public void TestInitContext(){
		String conf="applicationContext.xml";
		ApplicationContext ac=new ClassPathXmlApplicationContext(conf);
		System.out.println(ac);
		//使用构造器来实例化的方式
		Calendar c1=(Calendar) ac.getBean("calendarObj1");
		Calendar c2=ac.getBean("calendarObj1", Calendar.class);
		System.out.println(c2);
		
		//使用静态工厂实例化的方式
		//利用spring调用caledar的getinstance（）静态工厂方法创建实例
		Calendar c3=ac.getBean("calendarObj2", Calendar.class);
		System.out.println(c3);
		
		//利用spring调用calendar的getTime（）方法创建date对象实例
		Date date=ac.getBean("dataObj", Date.class);
		System.out.println(date);
	}
	@Test
	public void TestSingleton(){
		String conf="applicationContext.xml";
		ApplicationContext ac=new ClassPathXmlApplicationContext(conf);
		ExampleBean eb1=ac.getBean("testBean",ExampleBean.class);
		ExampleBean eb2=ac.getBean("testBean",ExampleBean.class);
		System.out.println(eb1==eb2);
		//关闭spring容器，注意AbstractApplicationContext定义了close()方法
		AbstractApplicationContext ctx=(AbstractApplicationContext) ac;
		ctx.close();
	}
	@Test
	public void testDataSource(){
		String conf="applicationContext.xml";
		ApplicationContext ac=new ClassPathXmlApplicationContext(conf);
		DataSource ds=ac.getBean("dataSource", DataSource.class);
		Connection conn = null;
		try {
			conn = ds.getConnection();
		} catch (SQLException e) {
			e.printStackTrace();
		}
		System.out.println(conn);
	}
	@Test
	public void testMethod(){
		String conf="applicationContext.xml";
		ApplicationContext ac=new ClassPathXmlApplicationContext(conf);
		DemoTest dt1=ac.getBean("demo1",DemoTest.class);
	}
}
