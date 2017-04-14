package spring.org.kanq.dao;

public class ExampleBean {
	public ExampleBean(){
		System.out.println("创建Example实例");
	}
	
	public void execute(){
		System.out.println("执行Example处理");
	}
	
	public void init(){
		System.out.println("初始化Example对象");
	}
	
	public void destroy(){
		System.out.println("销毁Example对象");
	}
}
