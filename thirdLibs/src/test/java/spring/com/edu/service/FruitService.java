package spring.com.edu.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import spring.com.edu.fruit.Apple;
import spring.com.edu.fruit.Fruit;
import spring.com.edu.fruit.GinSeng;

@Configuration
public class FruitService {
	@Autowired
	Apple apple;
	@Autowired
	GinSeng ginSeng;
	//定义一个产生Bean的方法
	@Bean(name="getApple")
	public Fruit<?> getApple(){
		System.out.println(apple.getClass().getName().hashCode());
		System.out.println(ginSeng.getClass().getName().hashCode());
		return new Apple();
	}
}
